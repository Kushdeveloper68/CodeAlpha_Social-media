import React from "react";

const SettingsPage = () => {
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
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDy2aqS_HjJqHm5WZzoOnHOsBbL4YElu1IgBzyZEKEhEBOA7B6MptS3-zqgjI1qHueKE-Z6NeJL094lAs27Bhi_6SobEgsyNCyh_lF67patomdDtNB20R9g4nmClcedkt6xCP5r8xL5mR6WY1EF1Pj_IFdhLS5bmlUKl31AhChIYdJRS1leg_gSC_eguEP4RjldfIy6GwjimSsWg8GAEmwA4u37WLEgYaQQmGKtKnkAVZLv54MvDjwMlJjcj7gDdZlavdU3KEZ42agI")',
                }}
              ></div>
              <div className="flex flex-col">
                <h2
                  className="text-base font-medium leading-normal"
                  style={{ color: "#101418" }}
                >
                  Alex Morgan
                </h2>
                <p
                  className="text-sm font-normal leading-normal"
                  style={{ color: "#5e718d" }}
                >
                  alex.morgan@example.com
                </p>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2">
              <a
                href="#"
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
              {[
                ["shield", "Security"],
                ["lock", "Privacy"],
                ["contrast", "Appearance"],
              ].map(([icon, label]) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                  style={{ color: "#101418" }}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {icon}
                  </span>
                  <p className="text-sm font-medium leading-normal">{label}</p>
                </a>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="flex flex-col gap-1">
            <a
              href="#"
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
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw7GlpEbXk8s4yRsQvtQZaXQBBVZl1ms1OnlYsKE8zCKt6mZE3oPyBjkQzEc1F4sHLxlMXaYoTrN_D59QMbAtTCxogZSD2rj1QWcP3Fgal5x7ASAvIwSeFLHwWHb0gVvYQsz8BJZpKhu_UI42MBBaLoZNN3wu9v1ys0jM36XkaqMuVcq3N_66DK_NOUp3fAhyOx9U-6hwhZZ-BxDNPCIbI9gvUOZ6watkT51sWexlO1fbNJ7vL-V6z0Gri4YzzpoO_KW3CUycLiPhJ")',
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
                  <label className="flex flex-col">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Display Name
                    </p>
                    <input
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-3 text-sm font-normal leading-normal rounded-lg"
                      defaultValue="Alex Morgan"
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>

                  <label className="flex flex-col">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Username
                    </p>
                    <input
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-3 text-sm font-normal leading-normal rounded-lg"
                      defaultValue="alex.morgan"
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>

                  <label className="flex flex-col md:col-span-2">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Bio
                    </p>
                    <textarea
                      className="flex w-full min-w-0 flex-1 resize-y overflow-hidden min-h-28 p-3 text-sm font-normal leading-normal rounded-lg"
                      defaultValue="Creative director, photographer, and travel enthusiast. Capturing moments from around the world."
                      style={{
                        color: "#101418",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d1d5db",
                        outline: "none",
                      }}
                    />
                  </label>

                  <label className="flex flex-col md:col-span-2">
                    <p
                      className="text-sm font-medium leading-normal pb-2"
                      style={{ color: "#101418" }}
                    >
                      Website
                    </p>
                    <input
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-3 text-sm font-normal leading-normal rounded-lg"
                      defaultValue="https://www.alexmorgan.design"
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
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-medium leading-normal rounded-lg"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.05)",
                      color: "#101418",
                    }}
                  >
                    <span className="truncate">Cancel</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-medium leading-normal rounded-lg"
                    style={{
                      backgroundColor: "#0066ff",
                      color: "#ffffff",
                    }}
                  >
                    <span className="truncate">Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
