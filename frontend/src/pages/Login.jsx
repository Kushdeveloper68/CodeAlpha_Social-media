// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api";
import { useAuth } from "../context/authContext";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [info, setInfo] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setServerError("");
    setInfo("");

    if (!identifier.trim() || !password) {
      setServerError("Please enter username/email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await loginApi(identifier.trim(), password);
      if (res && res.success) {
        if (res.token) {
          setToken(res.token);
          localStorage.setItem("token", res.token);
        }
        if (res.user) localStorage.setItem("user", JSON.stringify(res.user));
        setInfo("Login successful. Redirecting...");
        setTimeout(() => navigate("/"), 700);
      } else {
        setServerError(res && res.message ? res.message : "Login failed.");
      }
    } catch (err) {
      const msg =
        (err && err.response && err.response.data && err.response.data.message) ||
        (err && err.message) ||
        "An error occurred. Try again.";
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{
        backgroundColor: "#f5f7f8",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left illustration / text */}
              <div className="hidden lg:flex flex-col items-start justify-center text-left p-4">
                <h2 className="text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
                  Discover what's new on SocialX
                </h2>
                <p className="text-lg" style={{ color: "#64748B" }}>
                  Connect with friends, share your moments, and explore a world of possibilities.
                </p>
                <img
                  className="w-full h-auto mt-8 object-cover"
                  style={{ borderRadius: "1rem" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBasIcR8bFslLyIYq-52z1otm26urJZXSCrqLjAtRjMFOIpQcg1tgQRSpNZY1NfVZ8b3po8FJzaCyMy1TN4b031DjxobdoqCM7MXc0lCirZ5g3_yVuLvQZr9rQiOa4wyjwpsZBwi2n33OIbpkYxfK9DzVHi-Aq73W0Gb4I1143z2sQew21dCTOytj4KRLpAaZxP9G0Ea8JRZkX3k-zArPigWo-_ieFyWJVwtmHFjRIM5thTm_ypJkZHmFnSjo1KHEv0mNQMVHz0l-Fc"
                  alt="Abstract network illustration"
                />
              </div>

              {/* Right form card */}
              <div className="flex flex-col justify-center w-full max-w-md mx-auto">
                <div className="p-8 shadow-sm border border-gray-200" style={{ backgroundColor: "#ffffff", borderRadius: "1rem", borderColor: "#e5e7eb" }}>
                  <div className="text-center mb-6">
                    <h1 className="tracking-tight text-3xl font-bold leading-tight" style={{ color: "#0F172A" }}>
                      Log in to SocialX
                    </h1>
                    <p className="text-base font-normal leading-normal pt-2" style={{ color: "#64748B" }}>
                      Welcome back! Please enter your details.
                    </p>
                  </div>

                  {serverError && <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{serverError}</div>}
                  {info && <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded">{info}</div>}

                  <form onSubmit={submit} className="flex flex-col gap-y-4">
                    <label className="flex flex-col w-full">
                      <p className="text-sm font-medium leading-normal pb-2" style={{ color: "#0F172A" }}>Username or Email</p>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 p-3 text-base font-normal leading-normal border"
                          placeholder="Enter your username or email"
                          style={{ borderRadius: "0.5rem", color: "#0F172A", borderColor: "#dadfe7", backgroundColor: "#ffffff" }}
                        />
                      </div>
                    </label>

                    <label className="flex flex-col w-full">
                      <p className="text-sm font-medium leading-normal pb-2" style={{ color: "#0F172A" }}>Password</p>
                      <div className="flex w-full flex-1 items-stretch">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 p-3 text-base font-normal leading-normal border"
                          placeholder="Enter your password"
                          style={{ borderRadius: "0.5rem", color: "#0F172A", borderColor: "#dadfe7", backgroundColor: "#ffffff" }}
                        />
                      </div>
                    </label>

                    <div className="flex items-center justify-between mt-2">
                      <label className="flex gap-x-2 items-center">
                        <input type="checkbox" className="h-4 w-4 rounded border border-gray-300 bg-transparent" style={{ borderColor: "#d1d5db", accentColor: "#0066ff" }} />
                        <p className="text-sm font-normal leading-normal" style={{ color: "#0F172A" }}>Remember Me</p>
                      </label>
                      <a href="#" className="text-sm font-medium hover:underline" style={{ color: "#0066ff" }}>Forgot Password?</a>
                    </div>

                    <button type="submit" className="flex items-center justify-center text-base font-medium px-6 py-3 h-12 mt-4 w-full focus:outline-none" style={{ backgroundColor: "#0066ff", color: "#ffffff", borderRadius: "0.5rem" }} disabled={loading}>
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </form>

                  <div className="text-center mt-6">
                    <p className="text-sm" style={{ color: "#64748B" }}>
                      Don't have an account? <button onClick={() => navigate('/signup')} className="font-medium text-blue-600">Sign Up</button>
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
}