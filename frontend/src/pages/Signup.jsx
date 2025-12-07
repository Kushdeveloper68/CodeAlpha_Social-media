import React from "react";

const SignupPage = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-3xl font-bold"
            style={{ color: "#0F172A" }} // dark-text
          >
            SocialX
          </h1>
        </div>

        <div
          className="mt-8 bg-white dark:bg-gray-900 p-8 shadow-sm border border-gray-200 dark:border-gray-800"
          style={{
            borderRadius: "2rem", // rounded-2xl
            backgroundColor: "#ffffff",
            borderColor: "#e5e7eb",
          }}
        >
          <div className="flex flex-col gap-2 mb-8">
            <p
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{ color: "#0F172A" }} // dark-text
            >
              Create an Account
            </p>
            <p
              className="text-base font-normal leading-normal"
              style={{ color: "#64748B" }} // muted-text
            >
              Join SocialX to connect with your friends.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p
                  className="text-sm font-medium leading-normal pb-2"
                  style={{ color: "#0F172A" }}
                >
                  Username
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-4 text-base font-normal leading-normal border"
                  placeholder="Enter your username"
                  style={{
                    borderRadius: "0.5rem",
                    color: "#0F172A",
                    borderColor: "#d1d5db",
                    backgroundColor: "#ffffff",
                  }}
                />
              </label>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p
                  className="text-sm font-medium leading-normal pb-2"
                  style={{ color: "#0F172A" }}
                >
                  Email
                </p>
                <input
                  type="email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-4 text-base font-normal leading-normal border"
                  placeholder="you@example.com"
                  style={{
                    borderRadius: "0.5rem",
                    color: "#0F172A",
                    borderColor: "#d1d5db",
                    backgroundColor: "#ffffff",
                  }}
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p
                  className="text-sm font-medium leading-normal pb-2"
                  style={{ color: "#0F172A" }}
                >
                  Password
                </p>
                <div className="relative flex w-full flex-1 items-stretch">
                  <input
                    type="password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-4 pr-12 text-base font-normal leading-normal border"
                    placeholder="Enter your password"
                    style={{
                      borderRadius: "0.5rem",
                      color: "#0F172A",
                      borderColor: "#d1d5db",
                      backgroundColor: "#ffffff",
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center pr-4"
                    style={{ color: "#64748B" }} // muted-text
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                </div>
              </label>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="flex flex-col w-full">
                <p
                  className="text-sm font-medium leading-normal pb-2"
                  style={{ color: "#0F172A" }}
                >
                  Confirm Password
                </p>
                <div className="relative flex w-full flex-1 items-stretch">
                  <input
                    type="password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 px-4 pr-12 text-base font-normal leading-normal border"
                    placeholder="Confirm your password"
                    style={{
                      borderRadius: "0.5rem",
                      color: "#0F172A",
                      borderColor: "#d1d5db",
                      backgroundColor: "#ffffff",
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center pr-4"
                    style={{ color: "#64748B" }}
                  >
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  </div>
                </div>
              </label>
            </div>

            {/* Register button */}
            <div className="flex flex-col mt-2">
              <button
                type="submit"
                className="flex h-12 items-center justify-center px-6 text-base font-semibold transition-colors focus:outline-none"
                style={{
                  backgroundColor: "#0066ff", // primary
                  color: "#ffffff",
                  borderRadius: "0.5rem",
                }}
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p
              className="text-sm"
              style={{ color: "#64748B" }} // muted-text
            >
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold hover:underline"
                style={{ color: "#0066ff" }} // primary
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
