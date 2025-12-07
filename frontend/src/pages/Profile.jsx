import React from "react";

const ProfilePage = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#F7FAFC", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* TopNavBar */}
      <header
        className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap backdrop-blur-sm"
        style={{
          borderBottom: "1px solid #e2e8f0", // border-light
          backgroundColor: "rgba(255,255,255,0.8)", // card/80
        }}
      >
        <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8"
                style={{ color: "#0066ff" }} // primary
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
                style={{ color: "#0F172A" }} // dark
              >
                SocialX
              </h2>
            </div>
          </div>

          {/* Center search */}
          <div className="hidden md:flex flex-1 justify-center max-w-md">
            <label className="flex flex-col w-full">
              <div className="flex w-full flex-1 items-stretch h-10">
                <div
                  className="flex items-center justify-center pl-3 rounded-l-lg"
                  style={{
                    color: "#64748B", // muted
                    backgroundColor: "#F7FAFC",
                  }}
                >
                  <span className="material-symbols-outlined text-2xl">
                    search
                  </span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-full px-4 text-base rounded-l-none"
                  placeholder="Search SocialX"
                  style={{
                    borderRadius: "0.5rem",
                    color: "#0F172A",
                    backgroundColor: "#F7FAFC",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </label>
          </div>

          {/* Right nav + avatar */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden lg:flex items-center gap-6">
              {["Home", "Explore", "Notifications", "Messages"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#0F172A" }}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 w-10 transition-colors"
              style={{
                borderRadius: "9999px",
                backgroundColor: "#F7FAFC",
                color: "#0F172A",
              }}
            >
              <span className="material-symbols-outlined text-2xl">
                settings
              </span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover size-10"
              style={{
                borderRadius: "9999px",
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBziVjYVqBtMVYmgK_fur_MYcl8f0K4r0StYUOv5FQTVXeD5A28BbaQZ0iOVOxu8dgQ3LOuuoyw2TZra_aQaVj8FQYvPiVLa4Fl1pdmNQXnPDK-DXMz-tfKJbsZrEg-x22FCljcRj3c1p44gTQBJkqo3ZK3oQj4hXXWcDh3aWPeT51Gwd42csHwanxyIO0MI_ioX2oJVYxZg-bC93YRFOnbf-x9gLnqH7_3YkPK8Aj3gtYsfzVjt3AU25WtC1gstObdamwDxPuaVGjI")',
              }}
            ></div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex h-full grow flex-col items-center">
        <div className="flex flex-col w-full max-w-5xl flex-1">
          {/* Header image */}
          <div className="w-full h-48 md:h-64 mt-4 px-4">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBFiC5sTU8ZF6XbUNiWs6TLTng08aNWvbK201MMyG89-uwLXu615dKm66wTBHGIKKvuHNF8WZy5fEK5XpS52fKwRIg6e-lkenRYN_GdK0jl1O8iui9idJWasK0kLT2GMnTgg1oY2849LXTvkWV_a7PuLj2z9Jri-mc01T9-Y1Xknoch3JPBCLdNWliSXD8s-eEvL48nZ2pssyCUjgR4tv80RziNtlFq-u6478iljuRRcL0z7FQVOiJ4rScpcf7nNkWpa2h1BcBhEMN")',
              }}
            ></div>
          </div>

          {/* Profile container */}
          <div
            className="p-4 shadow-sm -mt-24 mx-4 pt-28 relative"
            style={{
              backgroundColor: "#FFFFFF", // card
              borderRadius: "1.5rem", // rounded-b-2xl + top from shadow section
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
          >
            {/* Profile header */}
            <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex gap-4 items-center">
                <div
                  className="absolute -top-16 left-8 bg-center bg-no-repeat aspect-square bg-cover h-32 w-32 md:h-40 md:w-40 border-4"
                  style={{
                    borderRadius: "9999px",
                    borderColor: "#FFFFFF",
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZNjXVqvPpGrRPrMVcLuJ8KTVUrjuoVVc3w0LZizCWB-wFDa4yqDLeTnrjODqkq8l6nNM7dAwxEN738IG-T0rur3F93dxzQFDkAY-0GS51OGiVNZ27jnXQLIUkjKJrPNAacSP7nkWoEoRpmuYVbAwim4UWZ4mO5fPpLV-xSCnLIfon9e_gVO7NdfI_6F4P1OfeNgHdBUpr2ygVuMv-tkLDLylwZ4tOIYXbhLHqWZWHKdnHd1DYx3MBehWWPDJKhYA9U83YMjHXiha")',
                  }}
                ></div>
                <div className="flex flex-col justify-center flex-grow pt-16 md:pt-0 md:pl-48">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#0F172A" }}
                  >
                    Eleanor Vance
                  </p>
                  <p
                    className="text-base font-normal"
                    style={{ color: "#64748B" }}
                  >
                    @eleanorvance
                  </p>
                  <p
                    className="text-base font-normal mt-2 max-w-md"
                    style={{ color: "#64748B" }}
                  >
                    Digital artist &amp; photographer exploring the intersection
                    of nature and technology. Based in San Francisco.
                  </p>
                </div>
              </div>

              {/* Follow / Message buttons */}
              <div className="flex w-full max-w-[480px] gap-3 mt-4 md:mt-0">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                  style={{
                    borderRadius: "0.5rem",
                    backgroundColor: "#0066ff",
                    color: "#ffffff",
                  }}
                >
                  <span className="truncate">Follow</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 px-4 text-sm font-bold tracking-wide flex-1 transition-colors"
                  style={{
                    borderRadius: "0.5rem",
                    backgroundColor: "#00C2A8", // accent
                    color: "#ffffff",
                  }}
                >
                  <span className="truncate">Message</span>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 py-3 mt-4">
              {[
                ["1,204", "Posts"],
                ["25.8K", "Followers"],
                ["1,530", "Following"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-1 p-3 items-start"
                  style={{
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#0F172A" }}
                  >
                    {value}
                  </p>
                  <div className="flex items-center gap-2">
                    <p
                      className="text-sm font-normal"
                      style={{ color: "#64748B" }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 px-4">
            <div
              className="flex gap-8"
              style={{ borderBottom: "1px solid #e2e8f0" }}
            >
              <a
                href="#"
                className="flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2"
                style={{ borderBottomColor: "#0066ff" }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: "#0066ff" }}
                >
                  Posts
                </p>
              </a>
              {["Media", "About"].map((tab) => (
                <a
                  key={tab}
                  href="#"
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-3 pt-2"
                >
                  <p
                    className="text-sm font-bold transition-colors"
                    style={{ color: "#64748B" }}
                  >
                    {tab}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx3eO0MeVAF0oYl1c-wrNDDs7SyouK6jkpc7QJOCbepL6sQZBFBQoJDJwE5eiElO3xDxOuByIEk-T-Nd-wWuhxh-Vrp6Vj0h717BfIlwHaA7aJ3_TX2BeOLhShd8X0PyRDrt24ZumvdZg973L7Thnbu62dMXycVrGh3dN76Ymwg348M9xu16M4s7YPaIuG_yB4hRVBhPw2My-GpBiBMHwQaf9BPcsQJhzAWGW1bNgNNJ0kHUNACcAZaGyZ6WmaiOiHLnZ55oa-K9I5",
                text: "Lost in the woods. 🌲 Found my peace.",
                likes: "312",
                comments: "45",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8uQ-kzAeSfYBtwM37k3OdVQk8ev2CqSRqEyzeZFCpoL7tZLjne_qqy-BftC6INNTI4Kb_Bre7qVTi-U0IhoWXqP1n4vcd1LyMmVXYy34_kYNVsHx3pZ4qteMHqLxElzwBdvXsBnZGgj7joTKcuMT2WmVtJWnIDXzyckWsCvzYuFrtD5BaCqskRZSF-Ojuhuq2ugslnyd9vkdzE6Kx-Gm-cls8m_VJYpqy4KXP9egeclOfFtFN8EPaTq49mOMq-G6lcgy_NEyAxvgW",
                text: "Capturing moments, one frame at a time.",
                likes: "560",
                comments: "88",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJ3SBuFp-UYvuwYvYO6vspw6m7s55VcU5pGX6cepvhzaVGAgObFBoQ2XbfJPwX3-kx2I-pjvbo4szMuqyfVDgouhNubp9HStf3hV5uDu2BE_QzVwJ6hyjy4EeiA6CRVRm7C17qU0uoNSV05m1ytjzATv9-x8XPeED3B9IBSTqrrRKcSBAZIXiTgvMZeUZZ0g9yhssj0ttT-hPGulao_yDtR2u5IdvgDsRa50_joTDZfgPH32Ejg9Uf1G-_-qmZyCF_3D_1n-k3SVd",
                text: "City lights and late night adventures.",
                likes: "721",
                comments: "102",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHbAWA1rZ_5QGYXmo600fNOVNOyXsH12f0MFRa4rXxCqSZD4bjPa-PsVxrh_phAwfqNpexaFpp388r6whWUf5ZNRExJV90CNhCaa5qgRZ2UohRcqN-HkByTDk5nTGmRS_ODRvDQHddoFpAj3Llp5OlkPRNF18lgMZC45VzarpZ4XsOfZ-eY2SNbvNCVZxQud6Ra501jIswFNIQ9pj1ca33yUeCn2i7nba6WMWWiLhQv7a9dMEfHeQgQcYll1Fs3lpLMxtYnajNuK8a",
                text: "Experimenting with new light painting techniques.",
                likes: "459",
                comments: "67",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcO-BLgVMJfHwXoN5LRhkaKAdSE8VHLkd9IFyPz3Y1GM46lOA_zKgdbwCqmFamMD2IIsBKc-ZcH5KWnaA6nwX3Ghl9ZaVsF9LHAt0Z0825a4V3BcbvCive-IFX0QigzsBKHkO97bQjldF1LQWlLXoeD54qQWCU0vsO9oW79_wdp-hGUGYY0E8KIvVHyr32Lk1gVJss3o3zHU786ftInmLpO_ZrmJy46UTdlW6LKNAlUToyf2Go9Uv3jspK7EXO8wc1vD2cuPh8Zb7J",
                text: "Morning coffee and creative flows.",
                likes: "289",
                comments: "32",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCES7OMszAdpciq4R2Ip9r8fZY76W0N0AOOYN2g3asIlQi0NTWD13t6OSEZBKtwV3IQ8vLXCXhgnXRP0hGcmAnNlCBMIjAF5jzCN62GieAVQJSZLs0_wSYVEJnfkx0A1BVInKf4bl1Ba41WllzgsygJkSacYeLTZM55VZZT_HZ5fcmSvQwEsFxkwQcXOy77ENQNFmAnWzHwRgzqqCd84FO-e5GnYwkcvqT1nZa-b9OkmTOWg0hs-tGFrOJTXBOLoi4nyKMISKjk6T4u",
                text: "The mountains are calling and I must go.",
                likes: "983",
                comments: "150",
              },
            ].map((post) => (
              <div
                key={post.text}
                className="flex flex-col shadow-sm overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1.5rem",
                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                }}
              >
                <div
                  className="bg-center bg-no-repeat aspect-[4/3] bg-cover"
                  style={{
                    backgroundImage: `url("${post.img}")`,
                  }}
                ></div>
                <div className="p-4 flex flex-col gap-2">
                  <p
                    className="text-base font-medium"
                    style={{ color: "#0F172A" }}
                  >
                    {post.text}
                  </p>
                  <div
                    className="flex items-center gap-4 pt-2"
                    style={{ color: "#64748B" }}
                  >
                    <div className="flex items-center gap-1.5 cursor-pointer">
                      <span className="material-symbols-outlined text-xl">
                        favorite
                      </span>
                      <span className="text-sm font-medium">
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 cursor-pointer">
                      <span className="material-symbols-outlined text-xl">
                        chat_bubble
                      </span>
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
