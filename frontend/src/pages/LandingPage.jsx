import React from "react";
import {Link} from "react-router-dom";
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
                      <Link
                      to="/signup"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                        style={{
                          backgroundColor: "#0066ff",
                          color: "#ffffff",
                          borderRadius: "0.5rem",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        <span className="truncate">Register Now</span>
                      </Link>
                      <Link
                      to="/login"
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
                      </Link>
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
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
