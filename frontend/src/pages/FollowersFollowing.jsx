import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { getFollowersApi, getFollowingApi, followUserApi, unfollowUserApi } from "../api";

const FollowersFollowingPage = () => {
  const { username: routeUsername } = useParams();
  const navigate = useNavigate();
  const { authToken } = useAuth();

  // UI state
  const [activeTab, setActiveTab] = useState("followers"); // 'followers' or 'following'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  // track following action pending for user ids
  const [pending, setPending] = useState({});

  // viewer's username if available (to disable follow self)
  const viewerUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  })();
  const viewerUsername = viewerUser && viewerUser.username;

  const loadList = async (tab) => {
    setLoading(true);
    setError(null);
    try {
      if (tab === "followers") {
        const resp = await getFollowersApi(routeUsername);
        if (resp && resp.success) setFollowers(resp.followers || []);
        else setError(resp.message || "Failed to load followers");
      } else {
        const resp = await getFollowingApi(routeUsername);
        if (resp && resp.success) setFollowing(resp.following || []);
        else setError(resp.message || "Failed to load following");
      }
    } catch (err) {
      console.error("loadList error:", err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // load initial tab when routeUsername changes
    setFollowers([]);
    setFollowing([]);
    setError(null);
    setLoading(true);
    loadList(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeUsername]);

  useEffect(() => {
    // when tab changes, load
    loadList(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const handleFollowToggle = async (targetUsername, isFollowing, setListCallback) => {
    if (!authToken) {
      navigate("/login");
      return;
    }
    // optimistic UI update
    setPending((p) => ({ ...p, [targetUsername]: true }));

    try {
      if (isFollowing) {
        const resp = await unfollowUserApi(targetUsername);
        if (resp && resp.success) {
          setListCallback((prev) => prev.filter((u) => u.username !== targetUsername));
        } else {
          window.alert(resp.message || "Failed to unfollow");
        }
      } else {
        const resp = await followUserApi(targetUsername);
        if (resp && resp.success) {
          // For a followers list, if we followed someone from following list it's not typical;
          // easiest approach: mark as following by removing (if we want to reflect status) or leave as-is.
          // Here we attempt to update the data to reflect new following state by removing the user when in 'following' view,
          // and leaving in 'followers' view but button will be disabled as we've changed server state.
          // To keep UI consistent, we'll simply remove the user from the current list if activeTab === 'following' (since you followed someone)
          setListCallback((prev) => prev.map(u => {
            if (u.username === targetUsername) return u; // keep object; we don't have per-item following state
            return u;
          }));
          // Optionally you can refresh the list from server
        } else {
          window.alert(resp.message || "Failed to follow");
        }
      }
    } catch (err) {
      console.error("handleFollowToggle error:", err);
      window.alert("Action failed");
    } finally {
      setPending((p) => {
        const copy = { ...p };
        delete copy[targetUsername];
        return copy;
      });
      // refresh lists to reflect current server state
      loadList(activeTab);
    }
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Top Navbar */}
     

      {/* Main */}
      <main className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div
              className="rounded-xl border shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e7eb",
                borderRadius: "0.75rem", // rounded-xl
              }}
            >
              {/* Heading */}
              <div
                className="flex flex-wrap justify-between gap-3 p-6 border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <h1
                  className="text-3xl font-black tracking-[-0.033em]"
                  style={{ color: "#020617" }}
                >
                  {routeUsername ? `${routeUsername}'s Network` : "Network"}
                </h1>
              </div>

              {/* Tabs */}
              <div
                className="border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex px-6 gap-8">
                  <button
                    onClick={() => setActiveTab("followers")}
                    className="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 bg-transparent"
                    style={{
                      borderBottomColor: activeTab === "followers" ? "#0066ff" : "transparent",
                      color: activeTab === "followers" ? "#0066ff" : "#6b7280",
                      border: "none"
                    }}
                  >
                    <p className="text-sm font-bold tracking-[0.015em]">
                      Followers ({followers.length})
                    </p>
                  </button>
                  <button
                    onClick={() => setActiveTab("following")}
                    className="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 bg-transparent"
                    style={{
                      borderBottomColor: activeTab === "following" ? "#0066ff" : "transparent",
                      color: activeTab === "following" ? "#0066ff" : "#6b7280",
                      border: "none"
                    }}
                  >
                    <p className="text-sm font-bold tracking-[0.015em]">
                      Following ({following.length})
                    </p>
                  </button>
                </div>
              </div>

              {/* Search */}
              <div
                className="p-4 border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div
                      className="flex items-center justify-center pl-4 rounded-l-lg"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#6b7280",
                      }}
                    >
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg h-full px-4 pl-2 text-base font-normal"
                      placeholder={`Search ${activeTab}...`}
                      style={{
                        backgroundColor: "#e5e7eb",
                        border: "none",
                        outline: "none",
                        color: "#020617",
                      }}
                      onChange={(e) => {
                        const q = (e.target.value || "").toLowerCase().trim();
                        if (activeTab === "followers") {
                          // simple client-side filter
                          if (!q) loadList("followers");
                          else setFollowers((prev) => prev.filter(u => (u.username || "").toLowerCase().includes(q) || (u.id || "").includes(q)));
                        } else {
                          if (!q) loadList("following");
                          else setFollowing((prev) => prev.filter(u => (u.username || "").toLowerCase().includes(q) || (u.id || "").includes(q)));
                        }
                      }}
                    />
                  </div>
                </label>
              </div>

              {/* List area */}
              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {loading && (
                  <div className="p-6">
                    <div className="animate-pulse space-y-3">
                      <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                      <div className="h-12 w-full bg-gray-100 rounded"></div>
                      <div className="h-12 w-full bg-gray-100 rounded"></div>
                    </div>
                  </div>
                )}

                {!loading && error && (
                  <div className="p-6 text-sm text-red-600">{error}</div>
                )}

                {!loading && !error && (activeTab === "followers" ? followers : following).length === 0 && (
                  <div className="p-6 text-sm text-[#6b7280]">No users found.</div>
                )}

                {!loading && !error && (activeTab === "followers" ? followers : following).map((user) => (
                  <div
                    key={user.username || user.id}
                    className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage: `url("${user.avatar || 'https://via.placeholder.com/80'}")`,
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium line-clamp-1"
                          style={{ color: "#020617" }}
                        >
                          {user.username}
                        </p>
                        <p
                          className="text-sm font-normal line-clamp-2"
                          style={{ color: "#6b7280" }}
                        >
                          @{user.username}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {/* Button logic:
                          - hide if showing own entry
                          - if viewer is already following this user, show "Following" (and allow unfollow)
                          - otherwise show Follow
                      */}
                      {viewerUsername && viewerUsername.toLowerCase() === (user.username || "").toLowerCase() ? (
                        <button
                          className="flex min-w-[110px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4"
                          style={{
                            backgroundColor: "#e5e7eb",
                            color: "#020617",
                          }}
                        >
                          <span className="truncate">You</span>
                        </button>
                      ) : (
                        <FollowButton
                          targetUsername={user.username}
                          pending={!!pending[user.username]}
                          onToggle={(isFollowing) => {
                            // decide which list state updater to pass
                            const setList = activeTab === "followers" ? setFollowers : setFollowing;
                            handleFollowToggle(user.username, isFollowing, setList);
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load more */}
              <div
                className="p-4 text-center border-t"
                style={{ borderColor: "#e5e7eb" }}
              >
                <button
                  className="w-full sm:w-auto flex-none font-medium py-2 px-4 border rounded-lg"
                  style={{
                    backgroundColor: "#f9fafb",
                    color: "#334155",
                    borderColor: "#e5e7eb",
                  }}
                  onClick={() => {
                    // simple behavior: fetch current tab again
                    loadList(activeTab);
                  }}
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl border shadow-sm sticky top-24"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e7eb",
                borderRadius: "0.75rem",
              }}
            >
              <div className="p-6">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "#020617" }}
                >
                  Who to follow
                </h3>
              </div>
              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {[
                  {
                    name: "Sarah Lee",
                    handle: "@sarah",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WiYRl4LNEskihxuvGPXS9aeY7Rwo11vcrwHYUjrxuqUHpidHD0YbsB4eqGbGmIRjose-hiZXgnkHl33Ni_T6xio0MBEQ8EndLiN9URNIMomVuq7OyB8CvkUeYnkYP8UB82OZ450A9Bn66--kYrqGSSCtuJ1aYxmScawH9o1cxIqBrrSdRefplYk6ec4Gk0HLzbG-tMzWgNB0ueKE_P4pcCMl1a48acZtFWTnah5hl-Edf_lqIJ6pInFGBPdu_-FTSIJDwNxXaxO6",
                  },
                  {
                    name: "David Kim",
                    handle: "@davidk",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC19gqAFWlShpzS3RdeATyTC907F56wrZI1DuIx2MYbfgth8Stv_VjKMw3P6cOOr_beSC9koMkq96q0xhf0er7s7XHV-XoOvWJKyb48uhBEeZ4wubAZQ1bLPA4NXmZzFDlAxAb8fC_4zvTZ6g4Qfnd0qsy-Nj7mAM_hP7QpbrO2NSVAN2jKcXWqXvf9OF7wKquTWePVDXfNwnoFOJoFjdf6w4EMG-iCpZR3tYQWTRVK-PiJePYOv9o6aH1RoxUkgUIfUwIUIMzE6--T",
                  },
                  {
                    name: "Laura Chen",
                    handle: "@laurac",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtJ_saY4_AnTolepRgwx_cmqIcW0HB-zBZr1xlyNAJRpvoCx-xeVYckO1Th7Spcaon423wpmUy5YLXJ5vwuiChwVLH1DAekJliC0maKfYGBMrFB1NrdzObjpJbQBQ6XIWAKbHpAlqZ4i-xVGcbj5V_9rv8_Xvh7UfqrUulL9bt-db1BrJ-xecYgRPdWlITB5ZTD9EbrE5qAvNcWzjFehj8NcwnVYRxOV1Gv3KyLKJx_EkYr_Pue0vEzRBrfDmggFoto6Q4Jc3QFt2",
                  },
                ].map((user) => (
                  <div
                    key={user.handle}
                    className="flex items-center gap-4 px-6 py-4 justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage: `url("${user.img}")`,
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium line-clamp-1"
                          style={{ color: "#020617" }}
                        >
                          {user.name}
                        </p>
                        <p
                          className="text-sm font-normal line-clamp-2"
                          style={{ color: "#6b7280" }}
                        >
                          {user.handle}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <button
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 text-sm font-medium"
                        style={{
                          backgroundColor: "#020617",
                          color: "#ffffff",
                        }}
                      >
                        <span className="truncate">Follow</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="text-sm font-medium"
                  style={{ color: "#0066ff" }}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function FollowButton({ targetUsername, pending, onToggle }) {
  // determine current following state: try to infer from viewer localStorage 'user.following' if available
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem("user") || "null");
  } catch {}
  const isFollowing = stored && Array.isArray(stored.following) && stored.following.some(u => (u.username || u) === targetUsername || (u && (u.username === targetUsername || u === targetUsername)));
  return (
    <button
      onClick={() => onToggle(!!isFollowing)}
      disabled={pending}
      className="flex min-w-[110px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-medium"
      style={{
        backgroundColor: isFollowing ? "#e5e7eb" : "#0066ff",
        color: isFollowing ? "#020617" : "#ffffff",
      }}
    >
      <span className="truncate">{pending ? "..." : (isFollowing ? "Following" : "Follow")}</span>
    </button>
  );
}

export default FollowersFollowingPage;