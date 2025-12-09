// frontend/src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtpApi, verifySignupApi } from "../api";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState("request"); // 'request' or 'verify'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // success/info
  const [error, setError] = useState("");

  const requestOtp = async (e) => {
    e && e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const res = await sendOtpApi(email);
    setLoading(false);

    if (res && res.success) {
      setMessage("OTP sent to your email. It will expire shortly.");
      setStep("verify");
    } else {
      setError(res && res.message ? res.message : "Failed to send OTP. Try again.");
    }
  };

  const submitSignup = async (e) => {
    e && e.preventDefault();
    setError("");
    setMessage("");

    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }
    if (!otp || otp.trim().length < 4) {
      setError("Please enter the OTP sent to your email.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const res = await verifySignupApi({ username, email, password, otp });
    setLoading(false);

    if (res && res.success) {
      // If backend returns token, store and redirect to home or login
      if (res.token) {
        localStorage.setItem("token", res.token);
      }
      if (res.user) {
        localStorage.setItem("user", JSON.stringify(res.user));
      }
      setMessage("Signup successful. Redirecting...");
      setTimeout(() => navigate("/"), 900);
    } else {
      setError(res && res.message ? res.message : "Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#f5f7f8", fontFamily: "Inter, sans-serif" }}>
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-sm border" style={{ borderColor: "#e5e7eb" }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#0f172a" }}>Create an account</h2>
          <p className="text-sm mb-4" style={{ color: "#64748b" }}>Sign up to join SocialX.</p>

          {error && <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{error}</div>}
          {message && <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded">{message}</div>}

          {step === "request" && (
            <form onSubmit={requestOtp} className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-2" style={{ color: "#0f172a" }}>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 px-4 rounded-md border"
                  style={{ borderColor: "#d1d5db" }}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-md text-white"
                style={{ background: "#0066ff" }}
              >
                {loading ? "Sending OTP..." : "Get OTP"}
              </button>

              <div className="text-sm text-gray-500 mt-2">
                Already have an account? <button onClick={() => navigate('/login')} className="text-blue-600 font-medium">Log in</button>
              </div>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={submitSignup} className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-2" style={{ color: "#0f172a" }}>Username</span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose a username"
                  className="h-12 px-4 rounded-md border"
                  style={{ borderColor: "#d1d5db" }}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-2" style={{ color: "#0f172a" }}>OTP</span>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  className="h-12 px-4 rounded-md border"
                  style={{ borderColor: "#d1d5db" }}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-2" style={{ color: "#0f172a" }}>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="h-12 px-4 rounded-md border"
                  style={{ borderColor: "#d1d5db" }}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-2" style={{ color: "#0f172a" }}>Confirm password</span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="h-12 px-4 rounded-md border"
                  style={{ borderColor: "#d1d5db" }}
                />
              </label>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep("request")}
                  className="h-12 rounded-md px-4 border"
                  style={{ borderColor: "#d1d5db" }}
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 rounded-md px-4 text-white"
                  style={{ background: "#0066ff" }}
                >
                  {loading ? "Creating account..." : "Verify & Sign up"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}