// frontend/src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate , Link} from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { useApi, followUserApi, unfollowUserApi } from "../api";
let PostGridComponent;

const ProfilePage = () => {
  const api = useApi();
  const { username } = useParams();
  const navigate = useNavigate();
const { authToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [viewerIsFollowing, setViewerIsFollowing] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setError("");
      try {
        // use api instance returned by useApi()
        const res = await api.get(`/api/get/profile/${encodeURIComponent(username)}`);
        const data = res && res.data ? res.data : res; // depending if axios returns response or data
        const body = data.success !== undefined ? data : (res && res.data) || res;

        if (body && body.success) {
          setProfile(body.user || null);
          setPosts(body.posts || []);
          setFollowersCount(body.followersCount || 0);
          setFollowingCount(body.followingCount || 0);
          setViewerIsFollowing(Boolean(body.viewerIsFollowing));
          setIsOwnProfile(Boolean(body.isOwnProfile));
        } else {
          setError(body && body.message ? body.message : "Profile not found");
        }
      } catch (err) {
        const msg = (err && err.response && err.response.data && err.response.data.message) || err.message || "Error fetching profile";
        setError(msg);
      } finally {
        setLoading(false);
      }
    }

    if (username) fetchProfile();
  }, [username]);

  const handleFollowToggle = async () => {
  
  
  // require login
  if (!authToken) {
    window.alert("Please login to follow users");
    navigate('/login');
    return;
  }

  // optimistic UI update
  const wasFollowing = viewerIsFollowing;
  setViewerIsFollowing(!wasFollowing);
  setFollowersCount((c) => wasFollowing ? Math.max(0, c - 1) : c + 1);

  try {
    if (wasFollowing) {
      // unfollow
      const resp = await unfollowUserApi(username);
      if (!resp || !resp.success) {
        // revert on error
        setViewerIsFollowing(wasFollowing);
        setFollowersCount((c) => wasFollowing ? c + 1 : Math.max(0, c - 1));
        window.alert(resp?.message || "Failed to unfollow");
      }
    } else {
      // follow
      const resp = await followUserApi(username);
      if (!resp || !resp.success) {
        // revert on error
        setViewerIsFollowing(wasFollowing);
        setFollowersCount((c) => wasFollowing ? c + 1 : Math.max(0, c - 1));
        window.alert(resp?.message || "Failed to follow");
      }
    }
  } catch (err) {
    console.error('Follow toggle error:', err);
    // revert on error
    setViewerIsFollowing(wasFollowing);
    setFollowersCount((c) => wasFollowing ? c + 1 : Math.max(0, c - 1));
    window.alert("Action failed");
  }
};

  const handleEditProfile = () => {
    navigate('/settings');
  };

  if (loading) {
    return (
      <div
        className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
        style={{
          backgroundColor: "#F7FAFC",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="flex items-center justify-center h-64">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    // keep same layout & style but show error area
    return (
      <div
        className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
        style={{
          backgroundColor: "#F7FAFC",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="flex items-center justify-center h-64">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-red-600 mb-3">{error}</p>
            <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={() => navigate('/')}>Go Home</button>
          </div>
        </div>
      </div>
    );
  }

  // Use profile data to render page. Keep your markup & style unchanged; just replace hardcoded bits with data.
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#F7FAFC", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* TopNavBar */}
    

      {/* Main */}
      <main className="flex h-full grow flex-col items-center">
        <div className="flex flex-col w-full max-w-5xl flex-1">
          {/* Header image */}
          <div className="w-full h-48 md:h-64 mt-4 px-4">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBFiC5sTU8ZF6XbUNiWs6TLTng08aNWvbK201MMyG89-uwLXu615dKm66wTBHGIKKvuHNF8WZy5fEK5XpS52fKwRIg6e-lkenRYN_GdK0jl1O8iui9idJWasK0kLT2GMnTgg1oY2849LXTvkWV_a7PuLj2z9Jri-mc01T9-Y1Xknoch3JPBCLdNWliSXD8s-eEvL48nZ2pssyCUjgR4tv80RziNtlFq-u6478iljuRRcL0z7FQVOiJ4rScpcf7nNkWpa2h1BcBhEMN")',
              }}
            ></div>
          </div>

          {/* Profile container */}
          <div
            className="p-4 shadow-sm -mt-24 mx-4 pt-28 relative"
            style={{
              backgroundColor: "#FFFFFF", // card
              borderRadius: "1.5rem", // rounded-b-2xl + top from shadow section
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
          >
            {/* Profile header */}
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex gap-4 items-center">
                <div
                  className="absolute -top-16 left-8 bg-center bg-no-repeat aspect-square bg-cover h-32 w-32 md:h-40 md:w-40 border-4"
                  style={{
                    borderRadius: "9999px",
                    borderColor: "#FFFFFF",
                    backgroundImage:
                      `url("${(profile && profile.avatar) || 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZNjXVqvPpGrRPrMVcLuJ8KTVUrjuoVVc3w0LZizCWB-wFDa4yqDLeTnrjODqkq8l6nNM7dAwxEN738IG-T0rur3F93dxzQFDkAY-0GS51OGiVNZ27jnXQLIUkjKJrPNAacSP7nkWoEoRpmuYVbAwim4UWZ4mO5fPpLV-xSCnLIfon9e_gVO7NdfI_6F4P1OfeNgHdBUpr2ygVuMv-tkLDLylwZ4tOIYXbhLHqWZWHKdnHd1DYx3MBehWWPDJKhYA9U83YMjHXiha'}")`
                  }}
                ></div>
                <div className="flex flex-col justify-center flex-grow pt-16 md:pt-0 md:pl-48">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#0F172A" }}
                  >
                    {profile && profile.username ? profile.username : "Unnamed"}
                  </p>
                  <p
                    className="text-base font-normal"
                    style={{ color: "#64748B" }}
                  >
                    @{profile && profile.username ? profile.username : "username"}
                  </p>
                  <p
                    className="text-base font-normal mt-2 max-w-md"
                    style={{ color: "#64748B" }}
                  >
                    {profile && profile.bio ? profile.bio : "This user hasn't added a bio yet."}
                  </p>
                </div>
              </div>

              {/* Follow / Message buttons */}
              <div className="flex w-full max-w-[480px] gap-3 mt-4 md:mt-0">
                {isOwnProfile ? (
                  <>
                    <button
                      onClick={handleEditProfile}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                      style={{
                        borderRadius: "0.5rem",
                        backgroundColor: "#0066ff",
                        color: "#ffffff",
                      }}
                    >
                      <span className="truncate">Edit</span>
                    </button>
                    <Link
                      to="/create-post"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                      style={{
                        borderRadius: "0.5rem",
                        backgroundColor: "#00C2A8", // accent
                        color: "#ffffff",
                      }}
                    >
                      <span className="truncate">Create post</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleFollowToggle}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                      style={{
                        borderRadius: "0.5rem",
                        backgroundColor: viewerIsFollowing ? "#E5E7EB" : "#0066ff",
                        color: viewerIsFollowing ? "#0F172A" : "#ffffff",
                      }}
                    >
                      <span className="truncate">{viewerIsFollowing ? "Following" : "Follow"}</span>
                    </button>
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                      style={{
                        borderRadius: "0.5rem",
                        backgroundColor: "#00C2A8", // accent
                        color: "#ffffff",
                      }}
                    >
                      <span className="truncate">Message</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 py-3 mt-4">
              {[
                [String(posts.length || 0), "Posts"],
                [String(followersCount || 0), "Followers"],
                [String(followingCount || 0), "Following"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-1 p-3 items-start"
                  style={{
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#0F172A" }}
                  >
                    {value}
                  </p>
                  <div className="flex items-center gap-2">
                    <p
                      className="text-sm font-normal"
                      style={{ color: "#64748B" }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 px-4">
            <div
              className="flex gap-8"
              style={{ borderBottom: "1px solid #e2e8f0" }}
            >
              <a
                href="#"
                className="flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2"
                style={{ borderBottomColor: "#0066ff" }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: "#0066ff" }}
                >
                  Posts
                </p>
              </a>
              {["Media", "About"].map((tab) => (
                <a
                  key={tab}
                  href="#"
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-3 pt-2"
                >
                  <p
                    className="text-sm font-bold transition-colors"
                    style={{ color: "#64748B" }}
                  >
                    {tab}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <PostGridComponent posts={posts} />
        </div>
      </main>
    </div>
  );
};

PostGridComponent = ({ posts = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.length === 0 ? (
        <div className="col-span-full text-center p-6 text-gray-600 bg-white rounded-lg">No posts yet</div>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="flex flex-col shadow-sm overflow-hidden"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1.5rem",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
          >
            <div
              className="bg-center bg-no-repeat aspect-[4/3] bg-cover"
              style={{
                backgroundImage: `url("${post.media || 'https://via.placeholder.com/600x450'}")`,
              }}
            ></div>
            <div className="p-4 flex flex-col gap-2">
              <p
                className="text-base font-medium"
                style={{ color: "#0F172A" }}
              >
                {post.content || ''}
              </p>
              <div
                className="flex items-center gap-4 pt-2"
                style={{ color: "#64748B" }}
              >
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                  <span className="text-sm font-medium">
                    {post.likeCount || 0}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl">
                    chat_bubble
                  </span>
                  <span className="text-sm font-medium">
                    {post.commentsCount || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProfilePage;