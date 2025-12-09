import React,{useState, useEffect, useCallback} from "react";

const LoginPage = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left illustration / text */}
              <div className="hidden lg:flex flex-col items-start justify-center text-left p-4">
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: "#0F172A" }}
                >
                  Discover what&apos;s new on SocialX
                </h2>
                <p
                  className="text-lg"
                  style={{ color: "#64748B" }}
                >
                  Connect with friends, share your moments, and explore a world
                  of possibilities.
                </p>
                <img
                  className="w-full h-auto mt-8 object-cover"
                  style={{ borderRadius: "1rem" }} // rounded-xl
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBasIcR8bFslLyIYq-52z1otm26urJZXSCrqLjAtRjMFOIpQcg1tgQRSpNZY1NfVZ8b3po8FJzaCyMy1TN4b031DjxobdoqCM7MXc0lCirZ5g3_yVuLvQZr9rQiOa4wyjwpsZBwi2n33OIbpkYxfK9DzVHi-Aq73W0Gb4I1143z2sQew21dCTOytj4KRLpAaZxP9G0Ea8JRZkX3k-zArPigWo-_ieFyWJVwtmHFjRIM5thTm_ypJkZHmFnSjo1KHEv0mNQMVHz0l-Fc"
                  alt="Abstract network of interconnected lines and nodes representing social connections"
                />
              </div>

              {/* Right form card */}
              <div className="flex flex-col justify-center w-full max-w-md mx-auto">
                <div
                  className="p-8 shadow-sm border border-gray-200"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1rem", // rounded-xl
                    borderColor: "#e5e7eb",
                  }}
                >
                  <div className="text-center mb-8">
                    <h1
                      className="tracking-tight text-3xl font-bold leading-tight"
                      style={{ color: "#0F172A" }}
                    >
                      Log in to SocialX
                    </h1>
                    <p
                      className="text-base font-normal leading-normal pt-2"
                      style={{ color: "#64748B" }}
                    >
                      Welcome back! Please enter your details.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    {/* Username / Email */}
                    <label className="flex flex-col w-full">
                      <p
                        className="text-sm font-medium leading-normal pb-2"
                        style={{ color: "#0F172A" }}
                      >
                        Username or Email
                      </p>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 p-3 text-base font-normal leading-normal border"
                          placeholder="Enter your username or email"
                          style={{
                            borderRadius: "0.5rem",
                            color: "#0F172A",
                            borderColor: "#dadfe7",
                            backgroundColor: "#ffffff",
                          }}
                        />
                      </div>
                    </label>

                    {/* Password */}
                    <label className="flex flex-col w-full">
                      <p
                        className="text-sm font-medium leading-normal pb-2"
                        style={{ color: "#0F172A" }}
                      >
                        Password
                      </p>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          type="password"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 p-3 text-base font-normal leading-normal border"
                          placeholder="Enter your password"
                          style={{
                            borderRadius: "0.5rem",
                            color: "#0F172A",
                            borderColor: "#dadfe7",
                            backgroundColor: "#ffffff",
                          }}
                        />
                      </div>
                    </label>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between mt-2">
                      <label className="flex gap-x-2 items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border border-gray-300 bg-transparent"
                          style={{
                            borderColor: "#d1d5db",
                            accentColor: "#0066ff", // primary
                          }}
                        />
                        <p
                          className="text-sm font-normal leading-normal"
                          style={{ color: "#0F172A" }}
                        >
                          Remember Me
                        </p>
                      </label>
                      <a
                        href="#"
                        className="text-sm font-medium hover:underline"
                        style={{ color: "#0066ff" }}
                      >
                        Forgot Password?
                      </a>
                    </div>

                    {/* Login button */}
                    <button
                      className="flex items-center justify-center text-base font-medium px-6 py-3 h-12 mt-4 w-full focus:outline-none"
                      style={{
                        backgroundColor: "#0066ff",
                        color: "#ffffff",
                        borderRadius: "0.5rem",
                      }}
                    >
                      Login
                    </button>
                  </div>

                  {/* Sign up link */}
                  <div className="text-center mt-6">
                    <p
                      className="text-sm"
                      style={{ color: "#64748B" }}
                    >
                      Don&apos;t have an account?{" "}
                      <a
                        href="#"
                        className="font-medium hover:underline"
                        style={{ color: "#0066ff" }}
                      >
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* end right card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
