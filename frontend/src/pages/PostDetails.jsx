import React from "react";

const PostDetailPage = () => {
  return (
    <div
      className="relative flex min-h-screen w-full"
      style={{
        backgroundColor: "#f5f6f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Left Sidebar - Navigation */}
      <aside className="sticky top-0 h-screen w-1/5 max-w-[280px] min-w-[220px] p-4 hidden lg:block">
        <div
          className="flex h-full flex-col justify-between p-4 shadow-sm border"
          style={{
            borderRadius: "1rem",
            backgroundColor: "#ffffff",
            borderColor: "#e2e8f0",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 pb-4">
              <span
                className="material-symbols-outlined text-3xl"
                style={{ color: "#0055ff" }}
              >
                hub
              </span>
              <h2
                className="text-xl font-bold"
                style={{ color: "#0f172a" }}
              >
                SocialX
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2"
                style={{
                  backgroundColor: "rgba(0,85,255,0.1)",
                  color: "#0055ff",
                }}
              >
                <span className="material-symbols-outlined">home</span>
                <p className="text-sm font-medium leading-normal">Home</p>
              </a>
              {[
                ["explore", "Explore"],
                ["notifications", "Notifications"],
                ["email", "Messages"],
                ["person", "Profile"],
              ].map(([icon, label]) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                  style={{ color: "#4b5563" }}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <p className="text-sm font-medium leading-normal">{label}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]"
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "#0055ff",
                color: "#ffffff",
              }}
            >
              <span className="truncate">Post</span>
            </button>
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover size-10"
                style={{
                  borderRadius: "9999px",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMHVq6iZIhEluk8S9uuIWfKp5M9QbV4NpEB8nDzYYT-HgttCNSjrNHIBH4l3P4LhA3qleEEwMUdksWv51dAiKV8hcYAvFFWKBHlc8BYnyycCzAEHqJTLttJ9bRrMax9ZXjUC-nrSkQ-ccvEcKDd-JWvHmCM66oF6cY7b995VHKja6lkE1zPto7MzbrZMJDHoWGgs3Slkx15AmsxmqeWsZxGhIng2Y00qWF3rByr6cs9fvDxQWsj8twL0zHMIQ_lycVC0thf_chpfQz")',
                }}
              ></div>
              <div className="flex flex-col">
                <h1
                  className="text-sm font-medium leading-normal"
                  style={{ color: "#0f172a" }}
                >
                  John Doe
                </h1>
                <p
                  className="text-xs font-normal leading-normal"
                  style={{ color: "#6b7280" }}
                >
                  @johndoe
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-[760px] mx-auto py-5 px-4">
        <div className="flex flex-col gap-4">
          {/* Back Navigation */}
          <div className="flex items-center gap-2 pb-2">
            <button
              className="flex items-center justify-center p-2 rounded-full"
              style={{ color: "#4b5563" }}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2
              className="text-xl font-bold"
              style={{ color: "#0f172a" }}
            >
              Post
            </h2>
          </div>

          {/* Main Post Card */}
          <div
            className="flex flex-col shadow-sm border"
            style={{
              borderRadius: "1rem", // rounded-xl
              backgroundColor: "#ffffff",
              borderColor: "#e5e7eb",
            }}
          >
            {/* Card Header */}
            <div className="flex items-start justify-between p-4">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover size-12"
                  style={{
                    borderRadius: "9999px",
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8GANM0MPQQv7Yt3K1jnct2P976_IJVko1BaeDNbet-Nx7WjW7tfEkokCyAPY0uy8_LTh-laEXQ3_lA_sDXBKYsK99agxFAly3i4_GOBjhKjCUta7Azy434-gDDX5uAvn8QRtPclT-Gqc-rBS7n7VUbul5EjXWthZDMEqOLVVWj2vW-j-kQFtpVrM67KUaiOH8PbgZhjzphV6WeWUe77RnjtvEQQp7UiLWwt5_fPm_SGLSYSGlUNHT-uDI5Jz5DVQGxOTrD4O0kc5e")',
                  }}
                ></div>
                <div className="flex flex-col">
                  <p
                    className="text-base font-bold"
                    style={{ color: "#0f172a" }}
                  >
                    Jane Smith
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    @janesmith
                  </p>
                </div>
              </div>
              <button
                className="p-2 rounded-full"
                style={{ color: "#6b7280" }}
              >
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>

            {/* Card Body */}
            <div className="px-4 pb-3">
              <p style={{ color: "#374151" }}>
                Exploring the serene landscapes of the Swiss Alps. The air is
                crisp, the views are breathtaking. Utterly magical experience! ✨
                #travel #alps #nature #adventure
              </p>
            </div>

            {/* Card Image */}
            <div className="px-4 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover"
                style={{
                  borderRadius: "1rem",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcjFs7FuwdMfjEM93TLGhj6W0t7m5uehGo1GZlNo1Nf-TaA1SnBBAXNKFmY2FU6zyreUXW4WOxrAJGv6vayzVf3P4SC957EjrgxX6OZoFO1aDMngPsa91reC3xSQ1iXyyvpe2cmxUnlITTrbf8GstAvd5sKGSPKInbb3e7_e2nK11ME2-vbJmHjMLBX6ICDuibRZ_VQMcWVK3RGkiKEIh1h9oJQ3HLERGMMvY2CJIUDzY-24Gcl3QuWT-JCuDGIfa7Fc9n_CEJryyM")',
                }}
              ></div>
            </div>

            {/* Timestamp */}
            <div
              className="px-4 pb-3 border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <p
                className="text-sm"
                style={{ color: "#6b7280" }}
              >
                2:45 PM · Oct 26, 2023
              </p>
            </div>

            {/* Reaction Bar */}
            <div
              className="flex flex-wrap gap-4 px-4 py-2 justify-between border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              {[
                ["favorite", "1.2k", "#ef4444"],
                ["chat_bubble", "48", "#0055ff"],
                ["repeat", "156", "#22c55e"],
                ["ios_share", "92", "#0055ff"],
              ].map(([icon, count, hoverColor]) => (
                <div
                  key={icon}
                  className="flex items-center justify-center gap-2 py-2 cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#6b7280" }}
                  >
                    {icon}
                  </span>
                  <p
                    className="text-[13px] font-bold leading-normal"
                    style={{ color: "#6b7280" }}
                  >
                    {count}
                  </p>
                </div>
              ))}
            </div>

            {/* Composer */}
            <div className="flex items-start px-4 py-3 gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover size-10 shrink-0 mt-2"
                style={{
                  borderRadius: "9999px",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh1FGAXVt4g7N8MHJDLzTTG07Y-4Jngpfz9C0eg_sasfRFa-ECkwA0836HNsYmQ-D_rClC0NvoRNlnmcieKRK5ogOb6U8CzkWd3IRmR352lnzAUo85Xf-rDs6jSwaOBKzZ7yNTNGiUH-j_bcLa6StDS2TjujXn5DcSGej6XTNTIeqGCpKqGVneTMWHHcetTlhXPxBUiW-qhdWINRcYFWdC1nQKx_anqnoaUTQV-bnVBNRtUpPGqQwb2WIDvpdYy0cDSmdhuUKmi0y-")',
                }}
              ></div>
              <div className="flex-1">
                <textarea
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden h-12 p-3 text-base font-normal leading-normal"
                  placeholder="Add a comment..."
                  style={{
                    borderRadius: "0.5rem",
                    color: "#111827",
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    outline: "none",
                  }}
                />
              </div>
              <button
                className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold leading-normal mt-1 self-start"
                style={{
                  borderRadius: "0.5rem",
                  backgroundColor: "#0055ff",
                  color: "#ffffff",
                }}
              >
                <span className="truncate">Post</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div
            className="flex flex-col shadow-sm border"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#ffffff",
              borderColor: "#e5e7eb",
            }}
          >
            <h3
              className="text-lg font-bold leading-tight px-4 pb-2 pt-4 border-b"
              style={{ color: "#0f172a", borderColor: "#e5e7eb" }}
            >
              Comments
            </h3>

            {/* Comment 1 */}
            <div
              className="flex gap-3 p-4 border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover size-10 shrink-0"
                style={{
                  borderRadius: "9999px",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBluDVtDUHEYsTVXTHR-Q9WBglRLFW3uxKpZ9CHgaZEleH9LzYYcrCneAhdO-RAZp-Gi-9UWemobQd4_kcnHOVCplflfrzEquhZGvGRSmgmVfapus6bafLNBG1czUTGBZsV4m91Cxl6txdvDefR8AabNacVWOteQaHWPoojdpmsKfH6zvpf0KtWIHAk-6oTRzz5a8BHge1L9IRRwhSDEHbNAvfm8qIo7GxMybVlTm7xbwmyusVS_dxehccFhtWtTZhxn4mcxP3QVJz")',
                }}
              ></div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#0f172a" }}
                  >
                    Alex Johnson
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    @alexj
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#9ca3af" }}
                  >
                    · 1h
                  </p>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "#4b5563" }}
                >
                  Wow, that looks absolutely stunning! Adding this to my travel
                  bucket list for sure.
                </p>
                <div
                  className="flex items-center gap-2 mt-1"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined text-base">
                    favorite_border
                  </span>
                  <span className="text-xs font-medium">12</span>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-3 p-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover size-10 shrink-0"
                style={{
                  borderRadius: "9999px",
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhutpPMitwBKaZXnvRYGFAvQv6Bdqey9aQZdUnbQWcujOtpX_iiOcZDPCnuoV26qu-CiFsKHwHkFmfuGwk3-MNFaYzbqfudw6ytkEHnP-ZMhPCWrT0jEWEw2rMTG_Cdu8ZOD02rY7UgsKddf-cMuOwxJwFdjON00OmIGI-Ue64cag10jTsDiPQHcSGxQ_CfcGFrJtg7jelqPEBAys2hfFcSf2Xiaenvvq6V9_xNbqCSH6bBr_uznO6OPQS4iA3_-j5vjleKpfVZxN4")',
                }}
              ></div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#0f172a" }}
                  >
                    Maria Garcia
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    @mariag
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#9ca3af" }}
                  >
                    · 45m
                  </p>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "#4b5563" }}
                >
                  Incredible shot! What camera did you use?
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{
                      color: "#ef4444",
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    favorite
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#ef4444" }}
                  >
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="sticky top-0 h-screen w-1/4 max-w-[360px] min-w-[300px] py-5 pr-4 hidden xl:block">
        <div className="flex flex-col gap-4">
          {/* Related Posts Card */}
          <div
            className="flex flex-col gap-2 shadow-sm border p-4"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#ffffff",
              borderColor: "#e5e7eb",
            }}
          >
            <h3
              className="text-lg font-bold"
              style={{ color: "#0f172a" }}
            >
              You might like
            </h3>

            {[
              {
                title: "Urban Exploration",
                desc: "The beauty of city lights after dusk.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8_bjGQ2slatG8Ptf3I0OjGwxNgSdbiEqUx1zZ0ptAk6ve8jbCo7h06kXoOxbeKabTdWmy-nxVx9Xd3LHMq2E9ibo7OL_4O1F7JEcZ23zZTGhUJWixbHQPYARNfGXE5w894xmGR4-MdY_tmMEfNnGvXWmT7oenQ69FRG-5RRycydJ12tcxImc6sWZWo8o2jo03zTPVtGF1Lo7CNr1KPC8ztibRMyr4Z3oOSfXGoBl2zckj5LE9wrxDNTOqA0eLiX3e-ICJlT9Z6wFL",
              },
              {
                title: "Foodie Finds",
                desc: "Parisian mornings and fresh croissants.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8tPIF38XceqnYGgK1E5onB2lIzjR0PTgJvzV01k1lRQqR5-HEgOLPTcYwt3JaLS1penw5pQ2InDEhYlpgt9xahQtT1IWHk31a3dwYIf2r6VAQhZKidXItXDLUvaTmxGUxvCBFe-U5Z_T80iaBYgfVEYghVpmgkPx-ieqwV5HDOTRxtPQvQrNJQDbUQj9I4mri2xDe8MeIQgAOjKTMvnbQZP91aR9x-roNLWyHADUgGtX6RK0PDhdO9sFgTDRmwvgapW839ZmNC3Uf",
              },
              {
                title: "Adventure Awaits",
                desc: "Conquering the mountain peaks, one step at a time.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7j23ZrFT15UlhYtW7awTZvKqYXDr5QHzkKVWmz-T__98QuI4B1yV3VXQasuMripbmGg9O5iIdZzOEG0HTpoN5uojF3enLe0OwmNPNPFSiowkHNS5ehj42nmi2wmh0pDdOENRz3b-vHQdeoU2UxyPOQPc1L89wSDG4M4isiIpf2mMao9HvoMoOz6bY7bfPjlI7Y3EZRJDMAepqTPxI8tkvaWLggJ2uPxOzSmrhxAIxwDg16DE_pv_asMp6m9irZRHxVhe9u5V73yic",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 py-2"
              >
                <div
                  className="w-16 h-16 bg-center bg-no-repeat aspect-square bg-cover shrink-0"
                  style={{
                    borderRadius: "0.5rem",
                    backgroundImage: `url("${item.img}")`,
                  }}
                ></div>
                <div className="flex flex-col">
                  <p
                    className="text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-medium text-sm leading-tight"
                    style={{ color: "#374151" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Who to Follow Card */}
          <div
            className="flex flex-col gap-2 shadow-sm border p-4"
            style={{
              borderRadius: "1rem",
              backgroundColor: "#ffffff",
              borderColor: "#e5e7eb",
            }}
          >
            <h3
              className="text-lg font-bold"
              style={{ color: "#0f172a" }}
            >
              Who to follow
            </h3>

            {[
              {
                name: "Sam Wilson",
                handle: "@samw",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Me851E3NlM4YxdBpMw5oVGeiXsMdD3dJQtKTZiiW0wrI1mGM28Zd6taMN1ZO5sMfgxwacQeniEyr4GM7ED1O-HnPd7TazeSe5AKP1OqeK_EXdC6NWoLWg9QHebzuu_RYf2qJgCmtpFH2Vd6b7MASVCq-CJZzJWi9T9nDeKyl0o07xp_jTNV0gNRdc3omD4rlMT4-EPu4G2KQMp_uLPbQsO-d1wgBQsTIckU-GLpFYN701h35GcnIvBHe41kKOz0hS5lSYMSTukCn",
              },
              {
                name: "Chloe Carter",
                handle: "@chloec",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EuSxjCoYNZjolWH4j2dYvnG6KR5sb8LB6A6Kyb8OhJDXzT04CW5dWow-MMTg5oQNvlViZ1DHtVCqjwMu4Kr5aHiWaFmQjvQFnnmCjgEoNtDgo-dItvnOgCJY8mKrLNYxmsJkfzY9MzEE1n9uMHZLxEfxKRpgQcnbOeIKxlz4BIB2VM92TAOT8nmt-NvWBAIoyg6VkqE83-VGR9UZrNy167JqJsWziBLAjz0A6GHfEp1vuzXS55V5UiMSop4yCJKkEHuriRtQ2LDw",
              },
            ].map((user) => (
              <div
                key={user.handle}
                className="flex items-center justify-between gap-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover size-10"
                    style={{
                      borderRadius: "9999px",
                      backgroundImage: `url("${user.img}")`,
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#0f172a" }}
                    >
                      {user.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#6b7280" }}
                    >
                      {user.handle}
                    </p>
                  </div>
                </div>
                <button
                  className="min-w-[80px] cursor-pointer items-center justify-center overflow-hidden h-8 px-4 text-xs font-bold"
                  style={{
                    borderRadius: "9999px",
                    backgroundColor: "#111827",
                    color: "#ffffff",
                  }}
                >
                  <span className="truncate">Follow</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PostDetailPage;
