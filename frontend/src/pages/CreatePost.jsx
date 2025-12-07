import React from "react";

const CreatePostPage = () => {
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

              {/* Composer */}
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
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-auto text-lg font-normal leading-normal p-0"
                    placeholder="What's on your mind, Alex?"
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
              <div className="flex w-full grow">
                <div
                  className="w-full gap-2 overflow-hidden flex aspect-[16/9] border border-dashed border-gray-300"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1rem", // rounded-xl
                  }}
                >
                  <div
                    className="flex-1 flex items-center justify-center w-full bg-center bg-no-repeat bg-cover aspect-auto"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoVNAb0ARqnyLDGYrcHtWJwIVRLZPGa-TpPzbv0v0dmSBouOuahg4SLD0FJgXu32vv1NhbWZd3T7svlI7OBPgvEZ5Cj7wjvlmXFjOhKfcH6HB3Mx9LN0Hswp-Nfg9K4JbjeRjptaf5SOpG2Y37nIJDLdnrSaCNch4n2O0CxUuFcoLQH0V_oFNiIiUG1ZivKeDSfst7IvH9u1HmqxGMb87ZkgTZK3J85x6L6iP2Fmt1ZcA8F0cr-hmtmPyJyHJbAmrxqegbgvburt5S")',
                    }}
                  ></div>
                </div>
              </div>

              {/* Action Icons & Post Button */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div
                  className="flex items-center gap-1"
                  style={{ color: "#64748b" }} // muted
                >
                  <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <span
                      className="material-symbols-outlined"
                      style={{ color: "#0062ff" }} // primary
                    >
                      image
                    </span>
                  </button>
                  <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <span className="material-symbols-outlined">sell</span>
                  </button>
                  <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </button>
                </div>

                {/* Primary Post Button */}
                <div className="flex w-full sm:w-auto">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-12 px-6 flex-1 text-base font-bold leading-normal tracking-[0.015em]"
                    style={{
                      borderRadius: "1rem", // rounded-xl
                      backgroundColor: "#0062ff",
                      color: "#ffffff",
                    }}
                  >
                    <span className="truncate">Post</span>
                  </button>
                </div>
              </div>

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
