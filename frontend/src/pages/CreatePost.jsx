// frontend/src/pages/CreatePost.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPostApi, useApi } from "../api";
import { useAuth } from "../context/authContext";

const CreatePostPage = () => {
  const api = useApi();
  const navigate = useNavigate();
  const { authToken } = useAuth();
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const fileInputRef = useRef();

  // require login: redirect if no token
  useEffect(() => {
    const token = authToken || localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [authToken, navigate]);

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setPreviewUrl(e.target.result);
    reader.readAsDataURL(imageFile);
    return () => {
      // cleanup
    };
  }, [imageFile]);

  const handleImageChange = (e) => {
    setError("");
    const file = e.target.files[0];
    if (!file) {
      setImageFile(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed.");
      setImageFile(null);
      fileInputRef.current.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be smaller than 5MB.");
      setImageFile(null);
      fileInputRef.current.value = "";
      return;
    }
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    setError("");
    setInfo("");

    if (!content.trim() && !imageFile) {
      setError("Please add text or an image to post.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("content", content || "");
      if (imageFile) formData.append("image", imageFile);

      const res = await createPostApi(formData);
      if (res && res.success) {
        setInfo("Post created successfully.");
        // navigate to the logged-in user's profile (use stored user)
        const user = JSON.parse(localStorage.getItem("user") || "null");
        const username = user && user.username ? user.username : null;
        setTimeout(() => {
          if (username) navigate(`/profile/${username}`);
          else navigate("/home");
        }, 700);
      } else {
        setError((res && res.message) || "Failed to create post.");
      }
    } catch (err) {
      setError((err && err.message) || "Error creating post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col"
      style={{
        backgroundColor: "#f7fafc", // background-light
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center p-4 py-10 sm:p-10">
          <div className="flex flex-col w-full max-w-2xl flex-1">
            <div
              className="flex flex-col gap-4 p-4 shadow-sm sm:p-6"
              style={{
                backgroundColor: "#ffffff", // card
                borderRadius: "1.5rem", // rounded-2xl
                boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              }}
            >
              {/* Page Heading */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p
                  className="tracking-light text-[24px] font-bold leading-tight min-w-72 sm:text-[32px]"
                  style={{ color: "#0f172a" }} // dark
                >
                  Create Post
                </p>
                <button
                  onClick={() => navigate(-1)}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 w-10 px-0"
                  style={{
                    borderRadius: "1rem", // rounded-xl
                    backgroundColor: "#f0f2f5",
                    color: "#0f172a",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* SERVER ERROR / INFO */}
              {error && <div className="text-sm text-red-700 bg-red-50 p-3 rounded">{error}</div>}
              {info && <div className="text-sm text-green-700 bg-green-50 p-3 rounded">{info}</div>}

              {/* Composer */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover size-10 shrink-0"
                    style={{
                      borderRadius: "9999px",
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdQHvpRR2KSI0oHwsiHV_IZoGZuxBvANuxOEKGeyDif-h-0t2QVKf80Emci6QzF4mDpdB2GhcdmYEc_q-S-T9AkQfhhabYE3HLRmkP9FhrcMsHvZ0TsL0jqGLQLEAJ6m1vNcxpoiutfk9Y5LQJhwFaZJtZUlvxIFbtFR7AgFaYumaSfDwoJn_qINZN4PsKzJmuebLlhIKb2NExZoWQRXls8xXOlusONIP4nZzolYox9BkTlU0z31gJk08YyG6cVpwu5lrTQIQ-H0or")',
                    }}
                  ></div>
                  <div className="flex flex-1 flex-col">
                    <textarea
                      rows={4}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-auto text-lg font-normal leading-normal p-0"
                      placeholder="What's on your mind?"
                      style={{
                        borderRadius: "1rem", // rounded-xl
                        color: "#0f172a",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        caretColor: "#0062ff",
                      }}
                    />
                  </div>
                </div>

                {/* Images Preview */}
                <div className="flex w-full grow flex-col gap-2">
                  {previewUrl ? (
                    <div className="w-full rounded overflow-hidden">
                      <img src={previewUrl} alt="preview" className="w-full object-cover rounded" />
                      <div className="mt-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setImageFile(null);
                            setPreviewUrl("");
                            fileInputRef.current.value = "";
                          }}
                          className="px-3 py-2 rounded bg-red-600 text-white"
                        >
                          Remove Image
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-full gap-2 overflow-hidden flex aspect-[16/9] border border-dashed border-gray-300 items-center justify-center"
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "1rem", // rounded-xl
                      }}
                    >
                      <div className="text-sm text-gray-500">No image selected</div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded cursor-pointer">
                      <span className="material-symbols-outlined">image</span>
                      <span className="text-sm">Add Image</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <div className="text-sm text-gray-500">Max 1 image · Max 5MB</div>
                  </div>
                </div>

                {/* Action Icons & Post Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div
                    className="flex items-center gap-1"
                    style={{ color: "#64748b" }} // muted
                  >
                    <button type="button" onClick={() => fileInputRef.current.click()} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <span className="material-symbols-outlined" style={{ color: "#0062ff" }}>image</span>
                    </button>
                  </div>

                  {/* Primary Post Button */}
                  <div className="flex w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-12 px-6 flex-1 text-base font-bold leading-normal tracking-[0.015em]"
                      style={{
                        borderRadius: "1rem", // rounded-xl
                        backgroundColor: "#0062ff",
                        color: "#ffffff",
                        opacity: loading ? 0.7 : 1
                      }}
                    >
                      {loading ? "Posting..." : "Post"}
                    </button>
                  </div>
                </div>
              </form>

              {/* Disabled Button Example */}
              <div
                className="mt-4 border-t pt-4"
                style={{ borderTop: "1px solid #e2e8f0" }}
              >
                <p
                  className="text-sm mb-2"
                  style={{ color: "#64748b" }}
                >
                  Example of a disabled button state:
                </p>
                <button
                  disabled
                  className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-not-allowed items-center justify-center overflow-hidden h-12 px-6 flex-1 text-base font-bold leading-normal tracking-[0.015em]"
                  style={{
                    borderRadius: "1rem", // rounded-xl
                    backgroundColor: "rgba(100,116,139,0.4)", // muted/40
                    color: "#64748b",
                  }}
                >
                  <span className="truncate">Post</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;