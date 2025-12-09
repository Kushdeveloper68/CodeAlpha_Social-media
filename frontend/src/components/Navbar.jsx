import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Navbar() {
  const { authToken, setToken } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Get user from localStorage
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null');
    } catch {
      return null;
    }
  })();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (setToken) setToken(null);
    navigate('/login');
  };

  const handleNavToHome = () => {
    navigate('/home');
  };

  const handleNavToSettings = () => {
    navigate('/settings');
  };

  const handleNavToProfile = () => {
    if (user && user.username) {
      navigate(`/profile/${user.username}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      setSearchQuery(''); // clear input
      navigate(`/profile/${query}`); // redirect to profile
    }
  };

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap backdrop-blur-sm"
      style={{
        borderBottom: "1px solid #e2e8f0",
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={handleNavToHome}
            className="flex items-center gap-3 bg-transparent border-0 cursor-pointer"
            style={{ padding: 0 }}
          >
            <div
              className="w-8 h-8"
              style={{ color: "#0066ff" }}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
              </svg>
            </div>
            <h2
              className="text-xl font-bold"
              style={{ color: "#0F172A" }}
            >
              SocialX
            </h2>
          </button>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 justify-center max-w-md">
          <form onSubmit={handleSearch} className="flex flex-col w-full">
            <div className="flex w-full flex-1 items-stretch h-10">
              <div
                className="flex items-center justify-center pl-3 rounded-l-lg"
                style={{
                  color: "#64748B",
                  backgroundColor: "#F7FAFC",
                }}
              >
                <span className="material-symbols-outlined text-2xl">
                  search
                </span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-full px-4 text-base rounded-l-none"
                placeholder="Search by username..."
                style={{
                  borderRadius: "0.5rem",
                  color: "#0F172A",
                  backgroundColor: "#F7FAFC",
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
          </form>
        </div>

        {/* Right: Nav items + Auth */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/home"
              className="text-sm font-medium transition-colors"
              style={{ color: "#0F172A", textDecoration: "none" }}
            >
              Home
            </Link>
            {authToken && (
              <>
                <Link
                  to="/create-post"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#0F172A" }}
                >
                  create Post
                </Link>
                <Link
                  to={`/profile/${user && user.username ? user.username : ''}`}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#0F172A", textDecoration: "none" }}
                >
                  Profile
                </Link>
              </>
            )}
          </div>

          {/* Conditional Auth Section */}
          {authToken && user ? (
            <>
              {/* Logged in user section */}
              <button
                onClick={handleNavToSettings}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 w-10 transition-colors rounded-full hover:bg-gray-200"
                style={{
                  borderRadius: "9999px",
                  backgroundColor: "#F7FAFC",
                  color: "#0F172A",
                }}
                title="Settings"
              >
                <span className="material-symbols-outlined text-2xl">
                  settings
                </span>
              </button>

              <div
                className="bg-center bg-no-repeat aspect-square bg-cover size-10 cursor-pointer hover:opacity-80"
                style={{
                  borderRadius: "9999px",
                  backgroundImage: `url('${
                    user.avatar ||
                    'https://via.placeholder.com/150'
                  }')`,
                }}
                onClick={handleNavToProfile}
                title={`View ${user.username}'s profile`}
              ></div>

              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 rounded transition-colors"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#EF4444",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Not logged in section */}
              <Link
                to="/login"
                className="text-sm font-medium px-4 py-2 rounded transition-colors"
                style={{
                  color: "#0066ff",
                  backgroundColor: "transparent",
                  border: "1px solid #0066ff",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="text-sm font-medium px-4 py-2 rounded transition-colors"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#0066ff",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;