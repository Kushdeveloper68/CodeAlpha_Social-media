import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { getCurrentUserApi, updateProfileApi } from "../api";

const SettingsPage = () => {
  const { authToken, setToken } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  // profile fields
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar, setAvatar] = useState(""); // used for display only
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState(null);

  const [saving, setSaving] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // require login
    if (!authToken) {
      navigate("/login");
      return;
    }

    let cancelled = false;
    async function load() {
      setLoading(true);
      setServerError(null);
      try {
        const resp = await getCurrentUserApi();
        if (resp && resp.success && resp.user) {
          if (cancelled) return;
          const u = resp.user;
          setUsername(u.username || "");
          setBio(u.bio || "");
          setWebsite((u.links && u.links.website) || "");
          setAvatar(u.avatar || "");
          setEmail(u.email || "");
          setCreatedAt(u.createdAt ? new Date(u.createdAt) : null);
        } else {
          const msg = (resp && resp.message) || "Failed to load profile";
          setServerError(msg);
        }
      } catch (err) {
        console.error("load profile error", err);
        setServerError("Failed to load profile");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();

    return () => {
      cancelled = true;
    };
  }, [authToken, navigate]);

  const handleSave = async () => {
    if (!username || !String(username).trim()) {
      window.alert("Username cannot be empty");
      return;
    }
    setSaving(true);
    try {
      const resp = await updateProfileApi({ username: username.trim(), bio: bio || "" });
      if (resp && resp.success && resp.user) {
        // update localStorage stored user (if app stores one)
        try {
          const storedUser = JSON.parse(localStorage.getItem("user") || "null");
          if (storedUser) {
            storedUser.username = resp.user.username;
            localStorage.setItem("user", JSON.stringify(storedUser));
          }
        } catch (e) {
          // ignore
        }
        window.alert("Profile updated successfully");
      } else {
        const msg = (resp && resp.message) || "Failed to update profile";
        window.alert(msg);
      }
    } catch (err) {
      console.error("save profile error", err);
      window.alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (setToken) setToken(null);
    navigate("/login");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleUploadPhoto = () => {
    // disabled for now — keep UI but show message
    window.alert("Profile photo updates are disabled for now.");
  };

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex min-h-screen">
        {/* Side Navigation */}
        <aside
          className="w-64 flex-shrink-0 p-4 flex flex-col justify-between border-r"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 p-2 mb-6">
              <div
                className="flex items-center justify-center size-8 rounded-full text-white font-bold text-lg"
                style={{ backgroundColor: "#0066ff" }}
              >
                S
              </div>
              <h1
                className="text-xl font-bold"
                style={{ color: "#101418" }}
              >
                SocialX
              </h1>
            </div>

            {/* User summary */}
            <div className="flex items-center gap-3 mb-6 p-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: `url("${avatar || "https://via.placeholder.com/150"}")`,
                }}
              ></div>
              <div className="flex flex-col">
                <h2
                  className="text-base font-medium leading-normal"
                  style={{ color: "#101418" }}
                >
                  {username || "Your name"}
                </h2>
                <p
                  className="text-sm font-normal leading-normal"
                  style={{ color: "#5e718d" }}
                >
                  {email || "email@example.com"}
                </p>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); /* keep Edit Profile selected visually but no route */ }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: "rgba(0,102,255,0.1)",
                  color: "#0066ff",
                }}
              >
                <span className="material-symbols-outlined text-2xl">
                  person
                </span>
                <p className="text-sm font-medium leading-normal">
                  Edit Profile
                </p>
              </a>

              {/* Details (was Security) */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowDetails(prev => !prev); }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg"
                style={{ color: "#101418" }}
              >
                <span className="material-symbols-outlined text-2xl">
                  info
                </span>
                <p className="text-sm font-medium leading-normal">Details</p>
              </a>

              {/* Logout (was Privacy) */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleLogout(); }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg"
                style={{ color: "#101418" }}
              >
                <span className="material-symbols-outlined text-2xl">
                  logout
                </span>
                <p className="text-sm font-medium leading-normal">Log Out</p>
              </a>

              {/* Back (was Appearance) */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleBack(); }}
                className="flex items-center gap-3 px-3 py-2 rounded-lg"
                style={{ color: "#101418" }}
              >
                <span className="material-symbols-outlined text-2xl">
                  arrow_back
                </span>
                <p className="text-sm font-medium leading-normal">Back</p>
              </a>
            </nav>

            {/* Details panel (show email, createdAt) */}
            {showDetails && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg" style={{ borderRadius: "0.5rem" }}>
                <p className="text-sm font-medium" style={{ color: "#101418" }}>Account details</p>
                <div className="mt-2 text-sm" style={{ color: "#5e718d" }}>
                  <div><strong style={{ color: "#101418" }}>Email:</strong> {email || '-'}</div>
                  <div className="mt-1"><strong style={{ color: "#101418" }}>Created:</strong> {createdAt ? createdAt.toLocaleString() : '-'}</div>
                </div>
              </div>
            )}
          </div>

          {/* Logout (duplicate bottom area) */}
          <div className="flex flex-col gap-1">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleLogout(); }}
              className="flex items-center gap-3 px-3 py-2 rounded-lg"
              style={{ color: "#101418" }}
            >
              <span className="material-symbols-outlined text-2xl">
                logout
              </span>
              <p className="text-sm font-medium leading-normal">Log Out</p>
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          <div className="flex flex-col max-w-4xl mx-auto">
            {/* Page heading */}
            <div className="flex flex-wrap justify-between gap-3 mb-8">
              <div className="flex min-w-72 flex-col gap-2">
                <p
                  className="text-4xl font-black leading-tight tracking-[-0.033em]"
                  style={{ color: "#101418" }}
                >
                  Edit Profile
                </p>
                <p
                  className="text-base font-normal leading-normal"
                  style={{ color: "#5e718d" }}
                >
                  Manage your public profile and account details.
                </p>
              </div>
            </div>

            {/* Profile header card */}
            <div
              className="mb-8 p-6 border rounded-xl shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "transparent",
                borderRadius: "0.75rem", // rounded-xl
              }}
            >
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-4 items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover w-24 h-24 rounded-full"
                    style={{
                      backgroundImage:
                        `url("${avatar || "https://via.placeholder.com/150"}")`,
                    }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p
                      className="text-xl font-bold leading-tight tracking-[-0.015em]"
                      style={{ color: "#101418" }}
                    >
                      Profile Picture
                    </p>
                    <p
                      className="text-sm font-normal leading-normal"
                      style={{ color: "#5e718d" }}
                    >
                      Upload a new photo. We recommend a 200x200px image.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleUploadPhoto}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto rounded-lg"
                  style={{
                    backgroundColor: "rgba(0,102,255,0.1)",
                    color: "#0066ff",
                  }}
                >
                  <span className="truncate">Upload Photo</span>
                </button>
              </div>
            </div>

            {/* Profile information card */}
            <div
              className="p-6 border rounded-xl shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "transparent",
                borderRadius: "0.75rem",
              }}
            >
              <div className="flex flex-col items-stretch">
                <div
                  className="flex w-full grow flex-col gap-1 pb-6 border-b"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <p
                    className="text-lg font-bold leading-tight tracking-[-0.015em]"
                    style={{ color: "#101418" }}
                  >
                    Profile Information
                  </p>
                  <p
                    className="text-sm font-normal leading-normal"
                    style={{ color: "#5e718d" }}
                  >
                    Update your personal details here.
                  </p>
                </div>

                {/* Form grid */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <label className="flex flex-col">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Username
                    </p>
                    <input
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-3 text-sm font-normal leading-normal rounded-lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>

                  {/* Bio */}
                  <label className="flex flex-col">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Bio
                    </p>
                    <textarea
                      className="flex w-full min-w-0 flex-1 resize-y overflow-hidden min-h-28 p-3 text-sm font-normal leading-normal rounded-lg"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>

                  {/* Website (disabled for future update) */}
                  <label className="flex flex-col md:col-span-2">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Website
                    </p>
                    <input
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-3 text-sm font-normal leading-normal rounded-lg"
                      value={website}
                      disabled
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>
                </div>

                {/* Actions */}
                <div
                  className="flex items-center justify-end gap-3 pt-6 border-t"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <button
                    onClick={() => {
                      // revert changes by reloading from server
                      if (!loading) {
                        setLoading(true);
                        getCurrentUserApi().then(resp => {
                          if (resp && resp.success && resp.user) {
                            setUsername(resp.user.username || "");
                            setBio(resp.user.bio || "");
                            setWebsite((resp.user.links && resp.user.links.website) || "");
                          }
                        }).finally(() => setLoading(false));
                      }
                    }}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-medium leading-normal rounded-lg"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.05)",
                      color: "#101418",
                    }}
                  >
                    <span className="truncate">Cancel</span>
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-medium leading-normal rounded-lg"
                    style={{
                      backgroundColor: "#0066ff",
                      color: "#ffffff",
                    }}
                  >
                    <span className="truncate">{saving ? 'Saving...' : 'Save Changes'}</span>
                  </button>
                </div>
              </div>
            </div>
            {serverError && (
              <div className="mt-4 text-sm text-red-600">{serverError}</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;