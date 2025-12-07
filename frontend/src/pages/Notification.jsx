import React from "react";

const NotificationsPage = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex h-full grow flex-col">
        {/* Header */}
        <header
          className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 sticky top-0 z-10 border-b border-solid"
          style={{
            backgroundColor: "#FFFFFF", // card
            borderColor: "#e5e7eb",
          }}
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3" style={{ color: "#0F172A" }}>
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

            {/* Search */}
            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div
                  className="flex items-center justify-center pl-4 rounded-l-lg border-r-0"
                  style={{
                    color: "#64748B",
                    backgroundColor: "#f5f7f8",
                    border: "none",
                  }}
                >
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg h-full px-4 pl-2 text-base font-normal leading-normal"
                  placeholder="Search"
                  style={{
                    color: "#0F172A",
                    backgroundColor: "#f5f7f8",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </label>
          </div>

          {/* Right side nav + avatar */}
          <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium leading-normal">
              <a href="#" style={{ color: "#0F172A" }}>
                Home
              </a>
              <a href="#" style={{ color: "#0F172A" }}>
                Explore
              </a>
              <a href="#" style={{ color: "#0F172A" }}>
                Messages
              </a>
              <a href="#" style={{ color: "#0066ff", fontWeight: 700 }}>
                Notifications
              </a>
            </nav>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 text-sm font-bold leading-normal tracking-[0.015em] min-w-0"
              style={{
                backgroundColor: "#f5f7f8",
                color: "#0F172A",
              }}
            >
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqk0VNkKO5JJ5ycUSImbQlSdfvz6gBndXygqdg8JjG9f-MmVJOjf4HHePU26af7p8DdnhUDaJiownSqGT82HA5U0VKpLEC5m4gVInvIAzoKCyvZJUcJ1gFK7s3z-rbUaaZigmD03HYq4JaSPhm_cbB43Fdqwcsq1NpAO6GflGdWLyYjE6xiE5u5d5Da8Q4YHmbuwdok6DMkv4ItTPBbK4BJuprBWw2U1NCY8rXHrAoYGmnGkou1gtkq2n45QhdycMvkghuQpKnM1DR")',
              }}
            ></div>
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col w-full max-w-3xl flex-1">
            {/* Title + CTA */}
            <div className="flex flex-wrap justify-between items-center gap-3 p-4 mb-4">
              <p
                className="text-4xl font-black leading-tight tracking-[-0.033em] min-w-72"
                style={{ color: "#0F172A" }}
              >
                Notifications
              </p>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]"
                style={{
                  backgroundColor: "transparent",
                  color: "#0066ff",
                }}
              >
                <span className="truncate">Mark all as read</span>
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {/* Today */}
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider px-4 mb-3"
                  style={{ color: "#64748B" }}
                >
                  Today
                </h3>
                <div
                  className="flex flex-col shadow-sm overflow-hidden border"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "0.75rem", // rounded-xl
                    borderColor: "#e5e7eb",
                  }}
                >
                  {/* Today item 1 */}
                  <div
                    className="flex items-center gap-4 px-5 min-h-[72px] py-3 justify-between cursor-pointer border-b relative"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4"
                      style={{
                        backgroundColor: "#0066ff",
                        borderRadius: "0 9999px 9999px 0",
                      }}
                    />
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9KLLNRx66T5SjzE1oEh1vcqWIwwhwS2K6BSlv88s27Cv8Isrg5s33BeTGG93IiPt_1J84Qeg95_rtTh6Bw7CJiDokapxCgjVLTPNBhSNEOC-t29g7svOGeucm5tw3ovAgDUKABkzKscTmTcpTEwNnB41kJNqTsX8Dp7KEUWDD_N9TxTIsZMkaLxByBmqtGerPv0b6omBmjI2IcLf6m0yLw2aSbcupHavjyh3nhTs2hUzt5dxpSCTYFo7QMgsRMouShjXEjxyigJkG")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium leading-normal"
                          style={{ color: "#0F172A" }}
                        >
                          <span className="font-bold">@aaron</span> liked your
                          post.
                        </p>
                        <p
                          className="text-sm font-normal leading-normal"
                          style={{ color: "#64748B" }}
                        >
                          2h ago
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex size-7 items-center justify-center">
                        <span
                          className="material-symbols-outlined !text-2xl"
                          style={{
                            color: "#ef4444",
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          favorite
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Today item 2 */}
                  <div className="flex items-center gap-4 px-5 min-h-[72px] py-3 justify-between cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMMZLrXN2c0h67KSW_IBV73dJ668oY-NgHRFXKn9l__E740yNG8mAfK30HgmjJb4gOyqyiy3uRfV25eNseC51j6kqFEdCE5RZ81gwjnBbm5-KdiHrEKnNdYZiM8GdkWRZhzPbmauMfSwZHz_IdGLxD4NEPW3atKmKAo9aub7Y4YHC3l8V7qpGjai3A2oEorcIJ36CLoSSvVCT7IxbZHREIn6ZzppRQb53Aap3cv_mClaRvsC_rTZu9Wl5Memjo2auiRgezdBa5gjEb")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium leading-normal"
                          style={{ color: "#0F172A" }}
                        >
                          <span className="font-bold">@brian</span> started
                          following you.
                        </p>
                        <p
                          className="text-sm font-normal leading-normal"
                          style={{ color: "#64748B" }}
                        >
                          5h ago
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex size-7 items-center justify-center">
                        <span
                          className="material-symbols-outlined !text-2xl"
                          style={{ color: "#0066ff" }}
                        >
                          person_add
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider px-4 mb-3"
                  style={{ color: "#64748B" }}
                >
                  Yesterday
                </h3>
                <div
                  className="flex flex-col shadow-sm overflow-hidden border"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "0.75rem",
                    borderColor: "#e5e7eb",
                  }}
                >
                  {/* Yesterday item 1 */}
                  <div
                    className="flex items-center gap-4 px-5 min-h-[72px] py-3 justify-between cursor-pointer border-b"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1aG13yxfD_MqkH1kYJKIHp0gixs126RFsBBxbXc5gbmDrC-7Ys_3VHKqB0-NL6IQOqSOw2yEJxHfv7k8l1x74gxshpM7xOMu6h95Ft2SgvyDInh969cT-aiPdUmS9S1q-_xQKbKZPYzkTMaIOfgKD7m-6Q7FYUoM0x1hqF-ANawnbPc6HjXLBl335EKsRpzNq0SnkQFeL3xzcIMJV5fBDNpggNsaOANG1eFbNsKySqDG-MyGP1es3mE-C46OUiV8LoAUOO8VrlvAb")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium leading-normal"
                          style={{ color: "#0F172A" }}
                        >
                          <span className="font-bold">@casey</span> commented on
                          your post: "This is amazing!"
                        </p>
                        <p
                          className="text-sm font-normal leading-normal"
                          style={{ color: "#64748B" }}
                        >
                          18h ago
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex size-7 items-center justify-center">
                        <span
                          className="material-symbols-outlined !text-2xl"
                          style={{ color: "#00C2A8" }}
                        >
                          chat_bubble
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Yesterday item 2 */}
                  <div className="flex items-center gap-4 px-5 min-h-[72px] py-3 justify-between cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYG62L1xu_fklUa3xdyh9cH_hoi4pHTR-0k20uDtRuiI86K2FsdGk3kab79BAgRzvkY3X3AcqHEmQQxCOyiATT990mfiEgAUPaLAqbPSomrY4nKgBfVJXph7eb0RuCCAtYaRqxR7FqnjE_owtlZtxtWOayt4jrvRQ2gMDe21oDG-law9V9o6BoHsvNqScYP6jyV5a1t4FoxvNYCjd9rIvPra30K2tHnQ4_sG_0QnmMLbcQ2wcDlADsk1l_9lgDZd6_5jXWWQeJCrXz")',
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p
                          className="text-base font-medium leading-normal"
                          style={{ color: "#0F172A" }}
                        >
                          <span className="font-bold">@diana</span> mentioned
                          you in a comment.
                        </p>
                        <p
                          className="text-sm font-normal leading-normal"
                          style={{ color: "#64748B" }}
                        >
                          22h ago
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex size-7 items-center justify-center">
                        <span
                          className="material-symbols-outlined !text-2xl"
                          style={{ color: "#a855f7" }}
                        >
                          alternate_email
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty state block (optional, keep commented in JSX if needed) */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotificationsPage;
