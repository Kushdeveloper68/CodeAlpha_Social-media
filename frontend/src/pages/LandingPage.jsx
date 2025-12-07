import React from "react";

const LandingPage = () => {
  return (
   <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        color: "#101418",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-7xl flex-1">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-3">
              <div className="flex items-center gap-4">
                <div className="h-6 w-6 text-[#0066ff]">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2
                  className="text-xl font-bold leading-tight tracking-[-0.015em]"
                  style={{ color: "#101418", fontFamily: "Inter, sans-serif" }}
                >
                  SocialX
                </h2>
              </div>

              <div className="flex flex-1 justify-end items-center gap-8">
                <nav className="hidden md:flex items-center gap-9">
                  <a
                    href="#"
                    className="text-sm font-medium leading-normal transition-colors"
                    style={{ color: "#101418" }}
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium leading-normal transition-colors"
                    style={{ color: "#101418" }}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium leading-normal transition-colors"
                    style={{ color: "#101418" }}
                  >
                    Contact
                  </a>
                </nav>

                <div className="flex gap-2">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "#0066ff", // primary
                      color: "#ffffff",
                      borderRadius: "0.5rem",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <span className="truncate">Register Now</span>
                  </button>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 border text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
                    style={{
                      backgroundColor: "#f5f7f8", // background-light
                      color: "#101418",
                      borderColor: "#d1d5db",
                      borderRadius: "0.5rem",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <span className="truncate">Login</span>
                  </button>
                </div>
              </div>
            </header>

            {/* HeroSection */}
            <main className="flex-grow">
              <div className="@container">
                <div className="flex flex-col-reverse lg:flex-row gap-12 px-4 py-16 sm:py-24 items-center">
                  <div className="flex flex-col gap-8 flex-1 text-center lg:text-left">
                    <div className="flex flex-col gap-4">
                      <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]"
                        style={{
                          color: "#101418",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Connect, Share, and Discover
                      </h1>
                      <h2
                        className="text-base sm:text-lg font-normal leading-normal max-w-xl mx-auto lg:mx-0"
                        style={{ color: "#4b5563", fontFamily: "Inter, sans-serif" }}
                      >
                        Join the next generation of social networking built
                        around your interests. Explore communities, share your
                        moments, and connect with people who matter.
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                        style={{
                          backgroundColor: "#0066ff",
                          color: "#ffffff",
                          borderRadius: "0.5rem",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        <span className="truncate">Register Now</span>
                      </button>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-12 px-5 border text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
                        style={{
                          backgroundColor: "#f5f7f8",
                          color: "#101418",
                          borderColor: "#d1d5db",
                          borderRadius: "0.5rem",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        <span className="truncate">Login</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center lg:justify-end">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-contain"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq0bR7Q6ffQZXW0w6j-l2oCzFfH2PONqq10jWO56lU4ynBsieW1UHrqrUbYqFV_eU3FMAtqoxjtgQUs6BjRMz-Jcb0rC_RMXMHac7HpBVrrevvX7No1fjr05gzA6ETsjX4zD8IbWotPN4ZBqfTmyGDDOXbZ9W4TfkcAAziyLKMLdhzV1M3iBr7VW4jh4NxlXUIuNFJgmA7--vnNEBWEMcl_RsXrg05JVdAYbqhlh5WoIM57XY-02yg4GvZLDCNS4Gd7x3Nr_K_VTFX")',
                        borderRadius: "1rem", // rounded-xl from config
                      }}
                      aria-label="An abstract illustration of people connecting through digital devices and social networks, with vibrant geometric shapes."
                    ></div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer
              className="flex flex-col gap-8 px-5 py-10 text-center mt-16 border-t"
              style={{ borderColor: "#e5e7eb", fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Contact
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">
                    photo_camera
                  </span>
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">group</span>
                </a>
              </div>

              <p
                className="text-sm font-normal leading-normal"
                style={{ color: "#6b7280" }}
              >
                © 2024 SocialX. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
