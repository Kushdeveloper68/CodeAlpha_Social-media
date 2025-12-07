import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        color: "#0F172A",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* TopNavBar */}
      <header
        className="sticky top-0 z-50 flex h-16 items-center justify-center border-b backdrop-blur-sm"
        style={{
          borderColor: "rgba(229,231,235,0.8)",
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
      >
        <nav className="flex w-full max-w-screen-xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <div
              className="size-7"
              style={{ color: "#0066ff" }} // primary
            >
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h1
              className="text-xl font-bold tracking-tighter"
              style={{ color: "#101418" }}
            >
              SocialX
            </h1>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <label className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-gray-400">
                  search
                </span>
              </div>
              <input
                type="search"
                placeholder="Search SocialX"
                className="form-input block w-full rounded-full border-transparent py-2 pl-10 pr-4 placeholder:text-[#64748B] focus:ring-1"
                style={{
                  backgroundColor: "#f3f4f6",
                  color: "#101418",
                  outline: "none",
                  borderColor: "#0066ff",
                  boxShadow: "0 0 0 1px transparent",
                }}
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-[#64748B] hover:bg-gray-100">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-[#64748B] hover:bg-gray-100">
              <span className="material-symbols-outlined">chat_bubble</span>
            </button>
            <div
              className="ml-2 h-10 w-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvKwPk-xXZ2_gyQ6YmoWIHdrc68lZOLyMw-invNC0fZqPCFOOlj4St0_XnHmRXO97tFG59JWocH7K2WhZFk-RxcujDVBZ-8P--dFNDu4BgVhPV5_3JALo3qs2mpjQIIztyJ6L0fK0s6c_pPJEpSCN1Wf2_fRt82NTHaP3qaJG2cudm6PgAy7Sh9N3uf3HhUqsHB5ilaUQR_00dFd7RYKWZyygcSjwrlqNe_0_wKHdJpz89wLhc5acAOCXtcg_KgrZ6TYMUjR6LH50o")',
              }}
            ></div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-screen-xl gap-8 px-4 py-8 md:px-8">
        {/* Feed Column */}
        <div className="w-full flex-1 max-w-[760px] space-y-6">
          {/* Composer */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem", // rounded-xl
              borderColor: "#e5e7eb",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuxfaV_6kPG-s429fZyw9f2FLLpgbx13ObE3-FUAjCz6dt42tzl3fDj7UUfbvPaJa7rsqen7Ds23DEnuwxlDymxNc5G6dE021mE2cUdXCplbzs4pC8LTPL9eap4htTY22gLXW06fb0WXctwraFtf-u6brPrNA23gzIuFR2_E2Z6YZlS2a3Hhk0qgj5P7-3XFzbywe-Tob7iapuOsd4O0eptjOk9WF3Mm3HcUGIuSlJSjQ3aRPtxNJ4R7d1W9S7aoin3N36-3ucc26y")',
                }}
              ></div>
              <div className="flex-1">
                <textarea
                  rows={3}
                  placeholder="What's on your mind?"
                  className="form-textarea w-full resize-none border-0 bg-transparent p-0 text-lg placeholder:text-[#64748B] focus:ring-0"
                  style={{ color: "#101418", outline: "none" }}
                ></textarea>
                <div className="mt-2 flex items-center justify-between border-t pt-3">
                  <div className="flex items-center gap-1">
                    {["image", "smart_display", "location_on"].map((icon) => (
                      <button
                        key={icon}
                        className="flex h-9 w-9 items-center justify-center rounded-full"
                        style={{ color: "#64748B" }}
                      >
                        <span className="material-symbols-outlined">
                          {icon}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    className="h-9 cursor-pointer px-5 text-sm font-bold text-white"
                    style={{
                      backgroundColor: "#0066ff",
                      borderRadius: "9999px",
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div
            className="overflow-hidden border bg-white shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDT0D8KLfQ654Td-QNbD_f5AEOwXmLfw6Os8IOXp4oPvNv3kvuksCsHxa_LhypkSRJJTr7E60lM3w8lo9AEKB2cQs5pavx96GO3PqV9mFJnHnYB8kbtjfHOMDbEe5yWAiuRvPGJHbpWvbrC2PtmrMSGiwOK4RffYzAAPwqRftckIyGnk5YqfWHLFI5in2hEzX43JpXGJbk9Dto_rX-wAVQOsmzQRL89IHog6Z7x2H7CF_4hmZgaBFSJd-LX6ocrsc_rc2EIHI4uHtja")',
                  }}
                ></div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-baseline gap-2">
                    <p
                      className="font-bold"
                      style={{ color: "#101418" }}
                    >
                      Username
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#64748B" }}
                    >
                      @username • 2h
                    </p>
                  </div>
                  <p
                    className="mt-1 text-base"
                    style={{ color: "#101418" }}
                  >
                    This is a sample post on SocialX. It&apos;s a great place to
                    share updates with your friends and followers! #socialmedia
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full aspect-video bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN891wOCZlv0t1z2JXA-DRX9bL1_D6KfKk7-aiL9RQNlcliQBWrJRLn3JInbIN4zphkTkc1Y6tPrDygeo_VA84xExqKRiyQQ33YyqY4RULisPK9L_zbe7BCwB9AB8CsAln159CC6hhYhrQcse7kp3NHv8Nsy3WLua3v4YJJynLMPdGmqc-x3fq3CO_zPUvZtU5VxsMLHk0bzs8Ny6-dNrW1Un8wggkI1dcLak7yPodSH3lOE7_rGU9wMM-_IlsZ2NXYx7jb9gkTmbD")',
              }}
            ></div>
            <div
              className="flex items-center justify-around px-4 py-1 text-sm"
              style={{ color: "#64748B" }}
            >
              {[
                ["favorite", "1.2k"],
                ["mode_comment", "234"],
                ["repeat", "98"],
                ["ios_share", ""],
              ].map(([icon, count]) => (
                <button
                  key={icon}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                >
                  <span className="material-symbols-outlined text-xl">
                    {icon}
                  </span>
                  {count && (
                    <span className="text-xs font-bold">{count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="overflow-hidden border bg-white shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5HxLdIzuEIi4WE3TCa0Jwu7dW7k1E2FoPz5qjWirrr-57zVof40va4tTmSYwtxO1A7ev09pZkKuR-suzsdpVZccHhvvTKgbwBPuLKasT3qDp2chI1ObQPH_tv9HZif8RfZ7jmdApZGnySJan5dboorco4hB0VWLQ6UNwgCgOvEFBxVq6AW5rdF0WOj8Zz8jU4XAfNNnwMWgsNGmrdABholBHieklu0K_FT68iHc4gXERh9c2nNfsPCvB5JnHi9H_nxP-Qoi-FwkoK")',
                  }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <p
                      className="font-bold"
                      style={{ color: "#101418" }}
                    >
                      Another User
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#64748B" }}
                    >
                      @anotheruser • 5h
                    </p>
                  </div>
                  <p
                    className="mt-1 text-base"
                    style={{ color: "#101418" }}
                  >
                    Just discovered this amazing new coffee shop. The latte art
                    is incredible! ☕️
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-around px-4 py-1 text-sm"
              style={{ color: "#64748B" }}
            >
              {[
                ["favorite", "876"],
                ["mode_comment", "102"],
                ["repeat", "45"],
                ["ios_share", ""],
              ].map(([icon, count]) => (
                <button
                  key={icon}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2"
                >
                  <span className="material-symbols-outlined text-xl">
                    {icon}
                  </span>
                  {count && (
                    <span className="text-xs font-bold">{count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Skeleton Loader */}
          <div
            className="animate-pulse border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 h-3 rounded bg-gray-200"></div>
                </div>
                <div className="h-3 rounded bg-gray-200"></div>
                <div className="h-3 rounded bg-gray-200"></div>
              </div>
            </div>
            <div className="mt-4 h-64 w-full rounded-lg bg-gray-200"></div>
          </div>

          {/* Infinite Scroll Sentinel */}
          <div className="h-1 w-full" id="infinite-scroll-sentinel"></div>
        </div>

        {/* Right Sidebar */}
        <aside className="hidden w-[360px] shrink-0 space-y-6 lg:block">
          {/* Suggested Users */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ color: "#101418" }}
            >
              Who to follow
            </h2>
            <div className="mt-4 space-y-4">
              {[
                [
                  "CreativeMind",
                  "@creativemind",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZBNkA8ymjRJHJpZZPpLz8vMgmAmPj-1k--HM0TV-no1UR0qXtBv9-HbETFKYxbMN0xJzng65sMNe3w_-nHpBLHIMu7ANBwU9Mey8EuSyFDJT1yj21Qs1nkL2-hyD3lKqlKibXA8NZ0gI7W1Kxk_KDl1uU8821p28CHUdZIu53l8MTNQuAtDZhPDWWitcdPoxOEQztbevYtQedDzSpZFM1PKe3ZZ_hoCPvmtc_J0VZgfVcURrOowMmR1OSovEqkTDDbX83eefAtbX",
                ],
                [
                  "TechGuru",
                  "@techguru",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2BxAv1vr0TD5qb-J-Zpf_HWdTN5g4w5YrDkbOcB2BjkTfNPT4FRAV6Wd_dl9zuXo6SU_coTlnaQbx0_-MUOQFsZSA4Wf1qrbwwHowht4sy9QYkKpOyEbEJXId-CtmwD01kKrkfpnR6Cu3ZNqvdWQC8vN5jw0Sen0_sNnSCHtQP4iu9XzGkirDyJ9OzZYCG3ZkZ1gavGgrfXJgOIsNsVDMYUgsfS9v6F9kHm0LRutKUKpUKXe_7UfrjDbzncpXCF9YNJOGQxVwqA3a",
                ],
                [
                  "TravelBug",
                  "@travelbug",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBL8T1wD1MRrT_piY7lZffbqJxTtnEsys-OZ1-x6ZfBifIVE_8_NT6F2tiSReHP0nvgkj5qDoF3L4DRScD_G_yzBiw35Fdhxuhz_v1vyQO73SnDPu21ccvQthiaYZ_84XNhRCm0PziFIF_zwFsGKAC7Ow_HhmFbzPDO1uCt-LsfHfeivJZzR2AzRSP-szLStqT9wLVBNzK_ybt-kkdM3IwN6e1fngps96xhbRGjzoOxjK3TSlDmeHeM0qxdRpm0GVDmvzd7zedy47CV",
                ],
              ].map(([name, handle, img]) => (
                <div key={name} className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${img}")` }}
                  ></div>
                  <div className="flex-1">
                    <p
                      className="font-bold"
                      style={{ color: "#101418" }}
                    >
                      {name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#64748B" }}
                    >
                      {handle}
                    </p>
                  </div>
                  <button
                    className="h-8 px-4 text-sm font-bold"
                    style={{
                      borderRadius: "9999px",
                      backgroundColor: "#000000",
                      color: "#ffffff",
                    }}
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 block text-sm font-medium hover:underline"
              style={{ color: "#0066ff" }}
            >
              Show more
            </a>
          </div>

          {/* Trending Topics */}
          <div
            className="border bg-white p-4 shadow-sm"
            style={{
              borderRadius: "0.75rem",
              borderColor: "#e5e7eb",
            }}
          >
            <h2
              className="text-lg font-bold"
              style={{ color: "#101418" }}
            >
              Trending Topics
            </h2>
            <div className="mt-4 space-y-3">
              {[
                ["1 · Trending", "#WebDesign", "21.5k posts"],
                ["2 · Trending", "#FutureOfAI", "18.2k posts"],
                ["3 · Trending", "#MondayMotivation", "15k posts"],
              ].map(([label, topic, posts]) => (
                <div key={topic}>
                  <p
                    className="text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-bold"
                    style={{ color: "#101418" }}
                  >
                    {topic}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#64748B" }}
                  >
                    {posts}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 block text-sm font-medium hover:underline"
              style={{ color: "#0066ff" }}
            >
              Show more
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
