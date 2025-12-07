import React from "react";

const NotFoundPage = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap px-10 py-3">
              <div className="flex items-center gap-4" style={{ color: "#101418" }}>
                <div className="size-6" style={{ color: "#0066ff" }}>
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                  SocialX
                </h2>
              </div>
            </header>

            {/* Main */}
            <main className="flex-grow">
              <div className="flex flex-col px-4 py-16 sm:py-24">
                <div className="flex flex-col items-center gap-8">
                  {/* Illustration */}
                  <div
                    className="bg-center bg-no-repeat aspect-video bg-contain w-full max-w-[360px]"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxfIja0i7NYcstvx6nQAbZIZcDOSBuyNADnp0RDJnCk761h4xb9wsDWM4ZIa1GeZ4zkji76sDcSv3VcYnFB7UfjMACGYaMxUahoo8HQ3xPdN0nUj65wWAzeFGVQ8Sp7ZXP0NWoNFJfcRfbLWShdX9bZCAB7ljuuaMWB9yb8EFaBu1KxV5IEh-afU5_Eb6DJ9d4Td1-9_WYqcr_GRCGYtcJFqF1u5w4EZKC3JdcRwDKgUsDvXRVTrLBzoR88xzQv54q2BWUfm1qP4Mn")',
                    }}
                  ></div>

                  {/* Text block */}
                  <div className="flex max-w-[480px] flex-col items-center gap-4 text-center">
                    <p
                      className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]"
                      style={{ color: "#101418" }}
                    >
                      Oops! Page Not Found
                    </p>
                    <p
                      className="text-base font-normal leading-normal"
                      style={{ color: "#5e718d" }}
                    >
                      We can&apos;t seem to find the page you&apos;re looking for. It
                      might have been moved, deleted, or you may have mistyped
                      the address.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex w-full max-w-sm flex-col items-center gap-4">
                    <button
                      className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden h-12 px-4 text-base font-bold leading-normal tracking-[0.015em] rounded-lg"
                      style={{
                        backgroundColor: "#0066ff",
                        color: "#ffffff",
                      }}
                    >
                      <span className="truncate">Back to Home</span>
                    </button>

                    {/* Search input */}
                    <div className="w-full">
                      <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                          <div
                            className="flex items-center justify-center pl-4 rounded-l-lg border border-solid border-r-0"
                            style={{
                              color: "#5e718d",
                              backgroundColor: "#ffffff",
                              borderColor: "#cbd5f5",
                            }}
                          >
                            <span className="material-symbols-outlined text-2xl">
                              search
                            </span>
                          </div>
                          <input
                            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg h-full px-4 pl-2 text-base font-normal leading-normal"
                            placeholder="Or search for what you're looking for"
                            style={{
                              color: "#101418",
                              backgroundColor: "#ffffff",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              borderColor: "#cbd5f5",
                              outline: "none",
                            }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                {["Help Center", "Status", "Contact Us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-normal leading-normal min-w-40"
                    style={{ color: "#5e718d" }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <p
                className="text-sm font-normal leading-normal"
                style={{ color: "#5e718d" }}
              >
                © 2024 SocialX, Inc. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
