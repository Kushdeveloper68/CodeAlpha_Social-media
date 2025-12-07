import React from "react";

const FollowersFollowingPage = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Top Navbar */}
      <header
        className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3 sticky top-0 z-10 border-b border-solid"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#e5e7eb",
          color: "#020617",
        }}
      >
        <div className="flex items-center gap-4">
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
          <h2
            className="text-lg font-bold tracking-[-0.015em]"
            style={{ color: "#020617" }}
          >
            SocialX
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-9 text-sm font-medium leading-normal">
            <a href="#" style={{ color: "#334155" }}>
              Home
            </a>
            <a href="#" style={{ color: "#334155" }}>
              Explore
            </a>
            <a href="#" style={{ color: "#334155" }}>
              Messages
            </a>
            <a href="#" style={{ color: "#020617" }}>
              Profile
            </a>
          </div>
          <div className="flex gap-2">
            <button
              className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10"
              style={{
                backgroundColor: "#e5e7eb",
                color: "#4b5563",
              }}
            >
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
            </button>
            <button
              className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10"
              style={{
                backgroundColor: "#e5e7eb",
                color: "#4b5563",
              }}
            >
              <span className="material-symbols-outlined text-xl">
                settings
              </span>
            </button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwibcQDqCdxqFTWr_zJcQSKtx2CAiy6pIiaoCCIo4XW1o4wZM-ANVjY_oYYuR66ni650kyeNWgTa4v4rSAVtNOYlRMzyMsG0u6nw6pHHHNOzYTBZyk7Kkk0Uf5SnNIeLtiWm7QSsoiW4JsqSWvi3neWy84F05FJ_chbo51ZT1Qlatvg0OuKARZeh-xuXSa91-ufJtDbYQsr2fDwFQHjYLc3acQwtGlfGm2BA5RjjhSQiDqRbFuKD0ikDUbA3H_3nBunA7twRvvSgI5")',
            }}
          ></div>
        </div>
      </header>

      {/* Main */}
      <main className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div
              className="rounded-xl border shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e7eb",
                borderRadius: "0.75rem", // rounded-xl
              }}
            >
              {/* Heading */}
              <div
                className="flex flex-wrap justify-between gap-3 p-6 border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <h1
                  className="text-3xl font-black tracking-[-0.033em]"
                  style={{ color: "#020617" }}
                >
                  John Doe&apos;s Network
                </h1>
              </div>

              {/* Tabs */}
              <div
                className="border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex px-6 gap-8">
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4"
                    style={{
                      borderBottomColor: "#0066ff",
                      color: "#0066ff",
                    }}
                  >
                    <p className="text-sm font-bold tracking-[0.015em]">
                      Followers (1,234)
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4"
                    style={{ color: "#6b7280" }}
                  >
                    <p className="text-sm font-bold tracking-[0.015em]">
                      Following (567)
                    </p>
                  </a>
                </div>
              </div>

              {/* Search */}
              <div
                className="p-4 border-b"
                style={{ borderColor: "#e5e7eb" }}
              >
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div
                      className="flex items-center justify-center pl-4 rounded-l-lg"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#6b7280",
                      }}
                    >
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg h-full px-4 pl-2 text-base font-normal"
                      placeholder="Search for users in your network..."
                      style={{
                        backgroundColor: "#e5e7eb",
                        border: "none",
                        outline: "none",
                        color: "#020617",
                      }}
                    />
                  </div>
                </label>
              </div>

              {/* User list */}
              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {[
                  {
                    name: "Jane Smith",
                    handle: "@jane_smith",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpx6EObnzKPpAXJO6uFvOfP-R2JDcSCCss3nSS7wE7RZMJ3pDHALd9vP_bzG16wPcX2-Y6c00-2w3XBpWgk_cZYUtDrbw2RAzikiI-TCBIZO1N066IonjnPHNYrtkmdBVv1b0eYfvU-UAQh8m6HdV7DtabLjEt9UxvJ7lxoYGFnkwIYMrs7_Fhv782dk4RcZu9QJjdB9RxHe6dJPT1hLvxTRoyJNVtZ8ZNSt6Cm9A-zR2AASbb34DjhPc7gI-NzxPvP2p-NZp3f6SY",
                    button: {
                      label: "Following",
                      bg: "#e5e7eb",
                      color: "#020617",
                    },
                  },
                  {
                    name: "Mike Johnson",
                    handle: "@mikej",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUvacmuGDTMb412_-I1kRWc51Ffoc8UeQcupwI-AzCsUFDk-i8dScJt4cYObkxci2niSs18boPYxWwKuGFdfXpaQKhwQsSRPDDfiFb7GSEaLT_5GZ2x1gUZG6-oeBSwkMfxr7gZgugJbFBauJje-iEg2Z7uq_-cr1Ahwors1WH75BdEYq_d4LaOuhUgRZQenmDscZNvnD4FHfGHEqWUbdXTziJ3wFoQQ3cZ33yyv-BRsJJAQgpYVExfTOsKLtKBvwqdXLnUZs2XfwT",
                    button: {
                      label: "Follow Back",
                      bg: "#0066ff",
                      color: "#ffffff",
                    },
                  },
                  {
                    name: "Emily White",
                    handle: "@emwhite",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0bSGaHeuVQZvlLpYvWwjzZpNRRgHNl5COUBVaDxIegAOG77rXAneZVQ2AuI54Z_sdwaLsVszRHR5ev4PpgF6lyYk89VZVRgU8EzxsD_IXxJYgiOd4OkKv_4NbEO7WcGn4AlVo_K--B_fD1gAEL54HOkD3fYGNc1JXOJCDgFcpQ4gsiqIDM98XErLGFhFUBI8BZd95-V-KkkWBUEonkEYOKq8VaiFxUMH-QuPmwy7RgSYD9SHsVBOca7PWJYKW4imj2Fqn6QTuCoUA",
                    button: {
                      label: "Following",
                      bg: "#e5e7eb",
                      color: "#020617",
                    },
                    hoverVariant: "unfollow",
                  },
                  {
                    name: "Chris Brown",
                    handle: "@chrisb",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdN67mGS1qJ7q-7i6a-RRjPG81MWaj1ElSaJ7GurDHFQ2yFEhRPFIF1U26j3k8BKyx31hoMRgtM3HcTdqs1Yq9jKKRO0LAsryaMWWu2h6bhr-O2DQ6mRNSiNs01QhxHjMj7ZAqv1XnkCFQpKZaf7iC0lDHcQUQQGiy7P3zmqt4Ky-lgA_4hDKeC9S4UF0XV8kUVb7VBM4E4vMtvaMUa0rspt5qdh65c_-uYjN58TkfeX5He0t5sHmHuCoheBDKhf6KEwG0TnEJBBCe",
                    button: {
                      label: "Remove",
                      bg: "#ef4444",
                      color: "#ffffff",
                    },
                  },
                ].map((user) => (
                  <div
                    key={user.handle}
                    className="flex items-center gap-4 px-6 min-h-[72px] py-3 justify-between"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage: `url("${user.img}")`,
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium line-clamp-1"
                          style={{ color: "#020617" }}
                        >
                          {user.name}
                        </p>
                        <p
                          className="text-sm font-normal line-clamp-2"
                          style={{ color: "#6b7280" }}
                        >
                          {user.handle}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {user.hoverVariant === "unfollow" ? (
                        <button
                          className="flex min-w-[110px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 group"
                          style={{
                            backgroundColor: "#e5e7eb",
                            color: "#020617",
                          }}
                        >
                          <span className="truncate group-hover:hidden">
                            Following
                          </span>
                          <span
                            className="truncate hidden group-hover:block"
                            style={{ color: "#dc2626" }}
                          >
                            Unfollow
                          </span>
                        </button>
                      ) : (
                        <button
                          className="flex min-w-[110px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-medium"
                          style={{
                            backgroundColor: user.button.bg,
                            color: user.button.color,
                          }}
                        >
                          <span className="truncate">{user.button.label}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load more */}
              <div
                className="p-4 text-center border-t"
                style={{ borderColor: "#e5e7eb" }}
              >
                <button
                  className="w-full sm:w-auto flex-none font-medium py-2 px-4 border rounded-lg"
                  style={{
                    backgroundColor: "#f9fafb",
                    color: "#334155",
                    borderColor: "#e5e7eb",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-1">
            <div
              className="rounded-xl border shadow-sm sticky top-24"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e7eb",
                borderRadius: "0.75rem",
              }}
            >
              <div className="p-6">
                <h3
                  className="text-lg font-bold"
                  style={{ color: "#020617" }}
                >
                  Who to follow
                </h3>
              </div>
              <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                {[
                  {
                    name: "Sarah Lee",
                    handle: "@sarah",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WiYRl4LNEskihxuvGPXS9aeY7Rwo11vcrwHYUjrxuqUHpidHD0YbsB4eqGbGmIRjose-hiZXgnkHl33Ni_T6xio0MBEQ8EndLiN9URNIMomVuq7OyB8CvkUeYnkYP8UB82OZ450A9Bn66--kYrqGSSCtuJ1aYxmScawH9o1cxIqBrrSdRefplYk6ec4Gk0HLzbG-tMzWgNB0ueKE_P4pcCMl1a48acZtFWTnah5hl-Edf_lqIJ6pInFGBPdu_-FTSIJDwNxXaxO6",
                  },
                  {
                    name: "David Kim",
                    handle: "@davidk",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC19gqAFWlShpzS3RdeATyTC907F56wrZI1DuIx2MYbfgth8Stv_VjKMw3P6cOOr_beSC9koMkq96q0xhf0er7s7XHV-XoOvWJKyb48uhBEeZ4wubAZQ1bLPA4NXmZzFDlAxAb8fC_4zvTZ6g4Qfnd0qsy-Nj7mAM_hP7QpbrO2NSVAN2jKcXWqXvf9OF7wKquTWePVDXfNwnoFOJoFjdf6w4EMG-iCpZR3tYQWTRVK-PiJePYOv9o6aH1RoxUkgUIfUwIUIMzE6--T",
                  },
                  {
                    name: "Laura Chen",
                    handle: "@laurac",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtJ_saY4_AnTolepRgwx_cmqIcW0HB-zBZr1xlyNAJRpvoCx-xeVYckO1Th7Spcaon423wpmUy5YLXJ5vwuiChwVLH1DAekJliC0maKfYGBMrFB1NrdzObjpJbQBQ6XIWAKbHpAlqZ4i-xVGcbj5V_9rv8_Xvh7UfqrUulL9bt-db1BrJ-xecYgRPdWlITB5ZTD9EbrE5qAvNcWzjFehj8NcwnVYRxOV1Gv3KyLKJx_EkYr_Pue0vEzRBrfDmggFoto6Q4Jc3QFt2",
                  },
                ].map((user) => (
                  <div
                    key={user.handle}
                    className="flex items-center gap-4 px-6 py-4 justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage: `url("${user.img}")`,
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium line-clamp-1"
                          style={{ color: "#020617" }}
                        >
                          {user.name}
                        </p>
                        <p
                          className="text-sm font-normal line-clamp-2"
                          style={{ color: "#6b7280" }}
                        >
                          {user.handle}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <button
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 text-sm font-medium"
                        style={{
                          backgroundColor: "#020617",
                          color: "#ffffff",
                        }}
                      >
                        <span className="truncate">Follow</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="text-sm font-medium"
                  style={{ color: "#0066ff" }}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FollowersFollowingPage;
