import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getAllPostsApi,
  likePostApi,
  getCommentsApi,
  createCommentApi,
} from "../api"; // existing API helpers
import { useAuth } from "../context/authContext";

const HomePage = () => {
  const { authToken } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // map postId -> comments array
  const [commentsMap, setCommentsMap] = useState({});
  // map postId -> whether comment pane is open
  const [openComments, setOpenComments] = useState({});
  // map postId -> input text
  const [commentInputs, setCommentInputs] = useState({});

  const mountedRef = useRef(true);

  // Fetch posts
  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await getAllPostsApi();
      // normalize response shapes
      let items = [];
      if (!resp) items = [];
      else if (Array.isArray(resp)) items = resp;
      else if (resp.success && resp.posts) items = resp.posts;
      else if (resp.success && resp.data) items = resp.data;
      else if (resp.posts) items = resp.posts;
      else if (resp.data) items = resp.data;
      else if (resp.result) items = resp.result;
      else items = resp;

      // ensure each post has minimal fields to render safely
      items = items.map((p) => ({
        _id: p._id || p.id || "",
        user: p.user || p.userId || p.author || {},
        content: p.content || p.text || "",
        media: p.media || p.image || p.mediaUrl || "",
        likeCount: typeof p.likeCount === "number" ? p.likeCount : (p.likes ? p.likes.length : 0),
        commentsCount: typeof p.commentsCount === "number" ? p.commentsCount : (p.comments ? p.comments.length : 0),
        viewerHasLiked: typeof p.viewerHasLiked === "boolean" ? p.viewerHasLiked : !!(p.viewerHasLiked),
        // keep original for later (in case API returned other fields)
        __raw: p,
      }));

      if (!mountedRef.current) return;
      setPosts(items);
    } catch (err) {
      console.error("loadPosts error:", err);
      setError("Failed to load posts");
    } finally {
      if (mountedRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    loadPosts();
    return () => {
      mountedRef.current = false;
    };
  }, [loadPosts]);

  // Optimistic like toggle
  const toggleLike = async (postId) => {
    // find index
    const idx = posts.findIndex((p) => p._id === postId);
    if (idx === -1) return;

    // if not logged in, prompt
    if (!authToken) {
      window.alert("Please login to like posts.");
      return;
    }

    const original = posts[idx];
    const optimistic = { ...original, viewerHasLiked: !original.viewerHasLiked };
    optimistic.likeCount = original.viewerHasLiked ? Math.max(0, original.likeCount - 1) : original.likeCount + 1;

    // update state optimistically
    setPosts((prev) => {
      const copy = [...prev];
      copy[idx] = optimistic;
      return copy;
    });

    try {
      const resp = await likePostApi(postId);
      // if API returns updated post shape, reconcile, otherwise keep optimistic
      if (resp && resp.success && resp.post) {
        setPosts((prev) => prev.map((p) => (p._id === postId ? {
          _id: resp.post._id || postId,
          user: resp.post.user || p.user,
          content: resp.post.content || p.content,
          media: resp.post.media || p.media,
          likeCount: typeof resp.post.likeCount === "number" ? resp.post.likeCount : p.likeCount,
          commentsCount: typeof resp.post.commentsCount === "number" ? resp.post.commentsCount : p.commentsCount,
          viewerHasLiked: typeof resp.post.viewerHasLiked === "boolean" ? resp.post.viewerHasLiked : optimistic.viewerHasLiked,
        } : p)));
      } else if (resp && resp.success && typeof resp.liked !== "undefined") {
        // if response contains liked flag and likeCount
        setPosts((prev) => prev.map((p) => (p._id === postId ? {
          ...p,
          viewerHasLiked: !!resp.liked,
          likeCount: typeof resp.likeCount === "number" ? resp.likeCount : p.likeCount,
        } : p)));
      }
    } catch (err) {
      console.error("toggleLike error:", err);
      // revert optimistic update
      setPosts((prev) => prev.map((p) => (p._id === postId ? original : p)));
    }
  };

  // Open comments pane and load comments if needed
  const openCommentsFor = async (postId) => {
    setOpenComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
    // if comments already loaded, don't re-fetch
    if (commentsMap[postId]) return;

    try {
      const resp = await getCommentsApi(postId);
      let items = [];
      if (!resp) items = [];
      else if (Array.isArray(resp)) items = resp;
      else if (resp.success && resp.comments) items = resp.comments;
      else if (resp.success && resp.data) items = resp.data;
      else if (resp.comments) items = resp.comments;
      else if (resp.data) items = resp.data;
      else items = resp;

      setCommentsMap((prev) => ({ ...prev, [postId]: items }));
    } catch (err) {
      console.error("openCommentsFor error:", err);
      setCommentsMap((prev) => ({ ...prev, [postId]: [] }));
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const submitComment = async (postId) => {
    const text = (commentInputs[postId] || "").trim();
    if (!text) return;
    if (!authToken) {
      window.alert("Please login to comment.");
      return;
    }

    // optimistic: append a temporary comment to UI
    const tempComment = {
      _id: `tmp-${Date.now()}`,
      text,
      user: { username: "You", avatar: "" },
      createdAt: new Date().toISOString(),
      isTemp: true,
    };
    setCommentsMap((prev) => {
      const prevList = prev[postId] || [];
      return { ...prev, [postId]: [tempComment, ...prevList] };
    });
    setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    // increment commentsCount on post
    setPosts((prev) => prev.map((p) => (p._id === postId ? { ...p, commentsCount: (p.commentsCount || 0) + 1 } : p)));

    try {
      const resp = await createCommentApi(postId, text);
      // if API returns comment object, replace temp with real one
      if (resp && resp.success && resp.comment) {
        setCommentsMap((prev) => {
          const list = prev[postId] || [];
          // replace first temp comment if present
          const replaced = list.map((c) => (c._id.startsWith("tmp-") ? resp.comment : c));
          return { ...prev, [postId]: replaced };
        });
      } else if (resp && resp.success && resp.data) {
        setCommentsMap((prev) => ({ ...prev, [postId]: [resp.data, ...(prev[postId] || [])] }));
      } else {
        // if response not helpful, leave optimistic comment as-is
      }
    } catch (err) {
      console.error("submitComment error:", err);
      // on error, remove the temp comment and decrement count
      setCommentsMap((prev) => {
        const list = prev[postId] || [];
        const filtered = list.filter((c) => !c._id.startsWith("tmp-"));
        return { ...prev, [postId]: filtered };
      });
      setPosts((prev) => prev.map((p) => (p._id === postId ? { ...p, commentsCount: Math.max(0, (p.commentsCount || 1) - 1) } : p)));
      window.alert("Failed to post comment");
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        color: "#0F172A",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* TopNavBar */}
     

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-screen-xl gap-8 px-4 py-8 md:px-8">
        {/* Feed Column */}
        <div className="w-full flex-1 max-w-[760px] space-y-6">
          {/* Composer (kept as-is visually) */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem", // rounded-xl
              borderColor: "#e5e7eb",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuxfaV_6kPG-s429fZyw9f2FLLpgbx13ObE3-FUAjCz6dt42tzl3fDj7UUfbvPaJa7rsqen7Ds23DEnuwxlDymxNc5G6dE021mE2cUdXCplbzs4pC8LTPL9eap4htTY22gLXW06fb0WXctwraFtf-u6brPrNA23gzIuFR2_E2Z6YZlS2a3Hhk0qgj5P7-3XFzbywe-Tob7iapuOsd4O0eptjOk9WF3Mm3HcUGIuSlJSjQ3aRPtxNJ4R7d1W9S7aoin3N36-3ucc26y")',
                }}
              ></div>
              <div className="flex-1">
                <textarea
                  rows={3}
                  placeholder="What's on your mind?"
                  className="form-textarea w-full resize-none border-0 bg-transparent p-0 text-lg placeholder:text-[#64748B] focus:ring-0"
                  style={{ color: "#101418", outline: "none" }}
                ></textarea>
                <div className="mt-2 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-1">
                    {["image", "smart_display", "location_on"].map((icon) => (
                      <button
                        key={icon}
                        className="flex h-9 w-9 items-center justify-center rounded-full"
                        style={{ color: "#64748B" }}
                      >
                        <span className="material-symbols-outlined">
                          {icon}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    className="h-9 cursor-pointer px-5 text-sm font-bold text-white"
                    style={{
                      backgroundColor: "#0066ff",
                      borderRadius: "9999px",
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Loading / Error */}
          {loading && (
            <div
              className="animate-pulse border bg-white p-4 shadow-sm"
              style={{
                borderRadius: "0.75rem",
                borderColor: "#e5e7eb",
              }}
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-3 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-3 rounded bg-gray-200"></div>
                  <div className="h-3 rounded bg-gray-200"></div>
                </div>
              </div>
              <div className="mt-4 h-64 w-full rounded-lg bg-gray-200"></div>
            </div>
          )}

          {error && (
            <div
              className="border bg-white p-4 text-sm text-red-600"
              style={{ borderRadius: "0.75rem", borderColor: "#e5e7eb" }}
            >
              {error}
            </div>
          )}

          {/* Posts */}
          {!loading &&
            posts.map((post) => (
              <div
                key={post._id}
                className="overflow-hidden border bg-white shadow-sm"
                style={{
                  borderRadius: "0.75rem",
                  borderColor: "#e5e7eb",
                }}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${post.user?.avatar || post.user?.profilePicture || "https://via.placeholder.com/150"}")`,
                      }}
                    ></div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-baseline gap-2">
                        <p
                          className="font-bold"
                          style={{ color: "#101418" }}
                        >
                          {post.user?.name || post.user?.username || (post.user && post.user.username) || "Unknown"}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "#64748B" }}
                        >
                          @{post.user?.username || "user"} •{" "}
                          {new Date(post.__raw?.createdAt || Date.now()).toLocaleString()}
                        </p>
                      </div>
                      <p
                        className="mt-1 text-base"
                        style={{ color: "#101418" }}
                      >
                        {post.content}
                      </p>
                    </div>
                  </div>
                </div>

                {post.media ? (
                  <div
                    className="w-full aspect-video bg-cover bg-center"
                    style={{
                      backgroundImage: `url("${post.media}")`,
                    }}
                  ></div>
                ) : null}

                <div
                  className="flex items-center justify-around px-4 py-1 text-sm"
                  style={{ color: "#64748B" }}
                >
                  <button
                    onClick={() => toggleLike(post._id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                    style={{
                      color: post.viewerHasLiked ? "#ef4444" : "#64748B",
                    }}
                    aria-pressed={!!post.viewerHasLiked}
                  >
                    <span className="material-symbols-outlined text-xl">
                      favorite
                    </span>
                    <span className="text-xs font-bold">{post.likeCount || 0}</span>
                  </button>

                  <button
                    onClick={() => openCommentsFor(post._id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                  >
                    <span className="material-symbols-outlined text-xl">
                      mode_comment
                    </span>
                    <span className="text-xs font-bold">{post.commentsCount || 0}</span>
                  </button>

                  <button
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                  >
                    <span className="material-symbols-outlined text-xl">
                      repeat
                    </span>
                    <span className="text-xs font-bold">Share</span>
                  </button>

                  <button
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                  >
                    <span className="material-symbols-outlined text-xl">
                      ios_share
                    </span>
                  </button>
                </div>

                {/* Comments area (toggle) */}
                {openComments[post._id] && (
                  <div className="px-4 pb-4">
                    <div className="mt-3">
                      <textarea
                        rows={2}
                        placeholder="Write a comment..."
                        value={commentInputs[post._id] || ""}
                        onChange={(e) => handleCommentChange(post._id, e.target.value)}
                        className="form-textarea w-full resize-none border-0 bg-gray-50 p-2 text-sm placeholder:text-[#64748B] focus:ring-0"
                        style={{ color: "#101418", outline: "none", borderRadius: "0.5rem" }}
                      ></textarea>
                      <div className="flex items-center justify-end mt-2 gap-2">
                        <button
                          onClick={() => setCommentInputs((prev) => ({ ...prev, [post._id]: "" }))}
                          className="px-3 py-1 text-sm"
                          style={{ color: "#64748B" }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => submitComment(post._id)}
                          className="px-3 py-1 text-sm font-bold text-white"
                          style={{ backgroundColor: "#0066ff", borderRadius: "9999px" }}
                        >
                          Comment
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {(commentsMap[post._id] || []).length === 0 && (
                        <div className="text-sm text-[#64748B]">No comments yet</div>
                      )}

                      {(commentsMap[post._id] || []).map((c) => (
                        <div key={c._id} className="flex items-start gap-3">
                          <div
                            className="h-9 w-9 rounded-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url("${c.user?.avatar || c.user?.profilePicture || "https://via.placeholder.com/80"}")`,
                            }}
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2">
                              <p className="font-bold" style={{ color: "#101418" }}>
                                {c.user?.name || c.user?.username || "User"}
                              </p>
                              <p className="text-sm" style={{ color: "#64748B" }}>
                                @{c.user?.username || "user"} •{" "}
                                {new Date(c.createdAt || Date.now()).toLocaleString()}
                              </p>
                            </div>
                            <p className="text-sm" style={{ color: "#101418" }}>
                              {c.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          {/* Infinite Scroll Sentinel */}
          <div className="h-1 w-full" id="infinite-scroll-sentinel"></div>
        </div>

        {/* Right Sidebar */}
        <aside className="hidden w-[360px] shrink-0 space-y-6 lg:block">
          {/* Suggested Users */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ color: "#101418" }}
            >
              Who to follow
            </h2>
            <div className="mt-4 space-y-4">
              {[
                [
                  "CreativeMind",
                  "@creativemind",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZBNkA8ymjRJHJpZZPpLz8vMgmAmPj-1k--HM0TV-no1UR0qXtBv9-HbETFKYxbMN0xJzng65sMNe3w_-nHpBLHIMu7ANBwU9Mey8EuSyFDJT1yj21Qs1nkL2-hyD3lKqlKibXA8NZ0gI7W1Kxk_KDl1uU8821p28CHUdZIu53l8MTNQuAtDZhPDWWitcdPoxOEQztbevYtQedDzSpZFM1PKe3ZZ_hoCPvmtc_J0VZgfVcURrOowMmR1OSovEqkTDDbX83eefAtbX",
                ],
                [
                  "TechGuru",
                  "@techguru",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2BxAv1vr0TD5qb-J-Zpf_HWdTN5g4w5YrDkbOcB2BjkTfNPT4FRAV6Wd_dl9zuXo6SU_coTlnaQbx0_-MUOQFsZSA4Wf1qrbwwHowht4sy9QYkKpOyEbEJXId-CtmwD01kKrkfpnR6Cu3ZNqvdWQC8vN5jw0Sen0_sNnSCHtQP4iu9XzGkirDyJ9OzZYCG3ZkZ1gavGgrfXJgOIsNsVDMYUgsfS9v6F9kHm0LRutKUKpUKXe_7UfrjDbzncpXCF9YNJOGQxVwqA3a",
                ],
                [
                  "TravelBug",
                  "@travelbug",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBL8T1wD1MRrT_piY7lZffbqJxTtnEsys-OZ1-x6ZfBifIVE_8_NT6F2tiSReHP0nvgkj5qDoF3L4DRScD_G_yzBiw35Fdhxuhz_v1vyQO73SnDPu21ccvQthiaYZ_84XNhRCm0PziFIF_zwFsGKAC7Ow_HhmFbzPDO1uCt-LsfHfeivJZzR2AzRSP-szLStqT9wLVBNzK_ybt-kkdM3IwN6e1fngps96xhbRGjzoOxjK3TSlDmeHeM0qxdRpm0GVDmvzd7zedy47CV",
                ],
              ].map(([name, handle, img]) => (
                <div key={name} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${img}")` }}
                  ></div>
                  <div className="flex-1">
                    <p
                      className="font-bold"
                      style={{ color: "#101418" }}
                    >
                      {name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#64748B" }}
                    >
                      {handle}
                    </p>
                  </div>
                  <button
                    className="h-8 px-4 text-sm font-bold"
                    style={{
                      borderRadius: "9999px",
                      backgroundColor: "#000000",
                      color: "#ffffff",
                    }}
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 block text-sm font-medium hover:underline"
              style={{ color: "#0066ff" }}
            >
              Show more
            </a>
          </div>

          {/* Trending Topics */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ color: "#101418" }}
            >
              Trending Topics
            </h2>
            <div className="mt-4 space-y-3">
              {[
                ["1 · Trending", "#WebDesign", "21.5k posts"],
                ["2 · Trending", "#FutureOfAI", "18.2k posts"],
                ["3 · Trending", "#MondayMotivation", "15k posts"],
              ].map(([label, topic, posts]) => (
                <div key={topic}>
                  <p
                    className="text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-bold"
                    style={{ color: "#101418" }}
                  >
                    {topic}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {posts}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 block text-sm font-medium hover:underline"
              style={{ color: "#0066ff" }}
            >
              Show more
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;