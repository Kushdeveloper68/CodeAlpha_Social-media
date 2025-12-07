import React from "react";

const ExplorePage = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: "#f5f7f8", // background-light
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col w-full max-w-7xl flex-1">
            {/* Header */}
            <header
              className="flex items-center justify-between whitespace-nowrap border-b border-solid px-6 sm:px-10 py-3 sticky top-0 z-50"
              style={{
                borderColor: "#e2e8f0",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div
                    className="size-6"
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
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "#0f172a" }}
                  >
                    SocialX
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-9">
                  <a
                    href="#"
                    className="text-sm font-medium hover:text-[#0066ff]"
                    style={{ color: "#475569" }}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-sm font-bold"
                    style={{ color: "#0066ff" }}
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium hover:text-[#0066ff]"
                    style={{ color: "#475569" }}
                  >
                    Messages
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium hover:text-[#0066ff]"
                    style={{ color: "#475569" }}
                  >
                    Notifications
                  </a>
                </div>
              </div>

              <div className="flex flex-1 justify-end items-center gap-4">
                {/* Small search in header */}
                <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
                  <div className="flex w-full flex-1 items-stretch h-full">
                    <div
                      className="flex items-center justify-center pl-4 border-r-0 rounded-l-lg"
                      style={{
                        color: "#64748b",
                        backgroundColor: "#f5f7f8",
                      }}
                    >
                      <span className="material-symbols-outlined text-xl">
                        search
                      </span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-full px-4 text-sm font-normal border-l-0 rounded-l-none"
                      placeholder="Search"
                      style={{
                        borderRadius: "0.5rem",
                        color: "#0f172a",
                        backgroundColor: "#f5f7f8",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </label>

                <button
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden h-10 gap-2 text-sm font-bold min-w-0 px-2.5"
                  style={{
                    borderRadius: "0.5rem",
                    backgroundColor: "#f5f7f8",
                    color: "#0f172a",
                  }}
                >
                  <span className="material-symbols-outlined">light_mode</span>
                </button>

                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover size-10"
                  style={{
                    borderRadius: "9999px",
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKJZ3tXnRTf791TGkt5WUO6dYawoaKGGkRoNgzmHwfpElZ8bhLPiA0fElvHVxklmgwqFnVXVmg0-SbFPheH1uy45MG26ZBw8la-Rb_9rix_i0GqkEVvsdewu_JavEMMcj9AreODrcG7iE0s8KbVaEjUsjoZtak6goX631hsxX0UwltLcHowWTgqmNKxqGWdsRWw9hAdp7gWZ42UIh_9_4fzYmNINm2LiTrnHcE2CI4AH_2fAV28o9sLz1LTz2jZARXyvHZFMl5G-V9')",
                  }}
                ></div>
              </div>
            </header>

            {/* Main */}
            <main className="px-4 sm:px-6 lg:px-10 py-8">
              <div className="flex flex-col gap-8">
                {/* Big search bar */}
                <div className="px-4 py-3">
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-2xl mx-auto">
                    <div
                      className="flex w-full flex-1 items-stretch h-full shadow-sm"
                      style={{
                        borderRadius: "0.75rem",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <div
                        className="flex items-center justify-center pl-5 border-r-0 rounded-l-xl"
                        style={{
                          color: "#64748b",
                        }}
                      >
                        <span className="material-symbols-outlined text-2xl">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden h-full px-4 text-base font-normal border-l-0 rounded-l-none"
                        placeholder="Search posts, users, or hashtags..."
                        style={{
                          borderRadius: "0.75rem",
                          color: "#0f172a",
                          backgroundColor: "#ffffff",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </label>
                </div>

                {/* Filters */}
                <div className="flex gap-3 px-4 py-3 overflow-x-auto justify-center">
                  <div
                    className="flex h-10 shrink-0 items-center justify-center gap-x-2 pl-4 pr-4 cursor-pointer"
                    style={{
                      borderRadius: "0.5rem",
                      backgroundColor: "#0066ff",
                    }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#ffffff" }}
                    >
                      All
                    </p>
                  </div>

                  {["Photos", "Videos", "Text", "Articles"].map((label) => (
                    <div
                      key={label}
                      className="flex h-10 shrink-0 items-center justify-center gap-x-2 pl-4 pr-4 cursor-pointer border"
                      style={{
                        borderRadius: "0.5rem",
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                      }}
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#334155" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trending Users */}
                <div>
                  <h2
                    className="text-2xl font-bold px-4 pb-3 pt-5"
                    style={{ color: "#0f172a" }}
                  >
                    Trending Users
                  </h2>
                  <div className="flex w-full overflow-x-auto px-4 py-3">
                    <div className="flex min-h-min flex-row items-start justify-start gap-6">
                      {[
                        "user_one",
                        "user_two",
                        "user_three",
                        "user_four",
                        "user_five",
                        "user_six",
                        "user_seven",
                      ].map((user) => (
                        <div
                          key={user}
                          className="flex flex-col justify-center items-center gap-2 w-20 text-center"
                        >
                          <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover p-0.5 border-2"
                            style={{
                              borderRadius: "9999px",
                              borderColor: "#0066ff",
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_NsugJSE8RQX7WK1LfS0msKdsZgAMXfIpjUtIJBE4axfWAmv-Kd0k8yG6wiWezznVfepzfbdX8GanCCWyRRIjwo8-aTkW0jEtyoAjsgHXdnkAKm0GXuk0DvKGwP22YeTkuuxKIT3GJf7GUFU0rAYFu-QVtm_cLueQ_Fpo9eKh6nbqnLUWj3HW7HRGXWNQDcqU-BBTWyTlWlUddNlJznXPEHOpCZuUlrNPfyMC1cJiYrbC6ACyAHOA_ZgtMNT3psaqZc94NI9ZuJJg')",
                            }}
                          >
                            <div
                              className="w-full h-full bg-center bg-no-repeat bg-cover"
                              style={{ borderRadius: "9999px" }}
                            ></div>
                          </div>
                          <p
                            className="text-sm font-medium truncate w-full"
                            style={{ color: "#1e293b" }}
                          >
                            {user}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trending Posts grid */}
                <div>
                  <h2
                    className="text-2xl font-bold px-4 pb-3 pt-5"
                    style={{ color: "#0f172a" }}
                  >
                    Trending Posts
                  </h2>
                  <div className="px-4 py-3">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
                      {[
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_QrkqA6Is7_KWVbxv4U26-HF_rwO6OnSdH4PPdti0WJVv4zTAtlobZtp65wBNbgcZqddUUNd6lAtlgy3CbfD_aWIrXEQCGVa2bHftvVnI3CHrdv12C3W3wMTqTrHxmDzIoCt6ZvoM2PefQeTaK6TMykqdl5NtkqlsESdSZV_wh9YkXAF_yEvX7iitRVRMQTPa5sk445OWNqcABDyTuv0g4SerMk9D0mQlPvkgj7uOU-Kcye19zAU8pecWu3eMzgc6PfHWEPBJru0J",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-XDzRQ7oVetlDlxipO1HN_if1KXHRIFJSw0xd4bIXy6LzquloJncaGMo3xBB-T-hi2RpCtHLr-t5e5nk06pU_DGuujUCweBl0D2x-eZwhzgmndhnqmE9RudjIkIjWjk0ATc0ToAhmBLSR7L961_NSlkCnV8sDnmx4sX2TSH0oGFQd1qxEf9RGPvykNmou_jGovWhPQ4GFztUen5Sg26o-K3zIOtclzPlghF0FBCbZ41TqmlKTLzVBYCnvrzsfY_fYAGKwBDv80c3w",
                          name: "Carl P.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-XHb7GHCfWkl-hV7GAPahHcHRGgPN6oScrLZsJe7bFnjQLvUpbGig6BuBUUglcyuQQ1xIEBWhrnathu2mhWVwx8aHO6nkwrRfQZmSgznbDBdwdBmUT7TB4cBOPpWp5ImBYNwzyPLuPd3Djpwm6dBqepm8eTvUKvO79eWfJh2Aofy6jWcRhlKrbXqDhJwwzhyAGPYRRJDTMdXUvI7EhqNdeKo3Y_-9ssYsIxoUtNHpux6c8NF8GkKvaSfBQfmkghTjLAf8XR7KrytH",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGYrulDHliP_dzCx-tpNoQqOrA8B7iGz-rrNUVMQAsDLuBz2JU76CnJU2ZakQjLvjsTtwuxyDlfptOBjlNCYWILUCKvO-fTh1FZ5GAcQLUyGDTv5nR15jB-40UunARzX4fpWNLqEOmD-0C-hjbLX7cNf7G7QxoEiehSfwaH354WJMKxh0aaMdB7r65iAA-1geeYh3_Q_X7x9ca975TgbuwnKvCZMbwOj4YcWjyKhHdjUQOUn48yonrbflF1oF4XLgrohv9SpeQdcV",
                          name: "Julia M.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2M6ATnQpXaxKJHR8xytj_w1E3jO2F-G54QuR_qVSF647loyjSxJ2FTvQrLyUnOagJaZW_CrzRTLPOnEv6u1NsLLkZIkPmxfPmz9PnuF7cSARqTwnrUcqD9dI_MsOXSdNTqSEHgWLJbr7Yn4UEeigv4KfjEmyqqiU3yWv_G5DTSsxiggApcwQuDCXENsHpEoNHrLzM6CCepmvwJIJOVrddqqwaL0UuSW-UFzw9DbjIE1F1n--n6ncTEiEuy4DkNvToU3ShMZFNS4e6",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBstGCHpfv4GhBxRJwwWJxzB7aNAw828q8Y6_xV6TLaAOf8fMDyRnkc7bfjOktetIJcBb7JzQ5FQHqwwW932UFmlR9-4RTfzHxgPdntscuA9lZPBQDCk2cbGTC4t1ksxW1WwjSthQNzbJQMa0bhH1CKGY4Fe8MQ9iqK71NABk0bv0a2zp6Ti9Ex1KeJK-Ow-WjVDZ6z0g4yuyMzohGnXIs8-UO33xLkPpK1GvxfF3PWYfZDQCtW_HOMUMJKJS0O46IPAnbOilPWeKs4",
                          name: "Alex G.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLiaS9YjHeBTIgu1y0ghnlZUruhuoWu-mT3OwtyjPpHeOacFDVXLP5LjYAHTf26Qsj_ZQkrxKcMUx4oMGJ8XGBEJS0Ca4rA2Cb35nYcxzCqsazR9TDXE39kcg7Dcuu98JrqUb_ehK6TKJ-ENoO6-zwHORL5a_J1h4tCgKft-plfXdcvf2k0ZcCvCXBfZ39YNV_1vNZFN1rAMCjTq6sk0HrBfbJw6b6J07uXrASRfI8wdS-QjAAMDkZqE6CZOdfANiIoGe9AP3YKFq3",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAyu_LiAi7a8O40Z4GkuRT7dHJQGY3d1hCxl1_pOTo3pjs7TH5u_TWgJQdE0Ch-q8B8gYLTIPknnAydfcQwIFzs7KUemSFG5NLcCRVqaNZ8Ri8M1WnRtiT6Veu8W8x2KEenOZGx31KntGSqgf9YWFEbn0WVtFZ6L-6tqQ0Wjbla-_IdO-NrdPOQeihOu2d7I8du6gZ6p09hQuUHuVrgDMgpUSUh_MV5ds8a097WbwbN3dr5-VQyilsNB49mEDTnQQ2udwDgsXgVg8",
                          name: "Sarah L.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAst3A55qs6HI68zvlrWgflvYh0K-aILw3RPhV--44BjRlej2oe70q6YUxj1H8Pi3FplAs0AgD30jtD0IbQ29Fgu6YH6GSor2DMy7wPpJE6lWObe9GqzhqoffauQspdSPZMykRMK_3eeKNKoQtx_6dn2lMhWyvegucu9QKyDJoJmSSvMG3xIp9whcRnZGt5EF6Wkw80TCq6Kxy1NRl9dKP1ar21VW2SSiuJxfRHRYqeDScxfMJ3js-Dhna1L9BQwjdk8ns8U_4wt6-x",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuB8UIl-O9l5hVpMnPA_EwY76j5PvJuRBKMozDhwWOShh3PqE79xngcm4FcgLUdFOMibheWHYGDxCpDo0lzlcEStGEFIOOjgwOslNDFzqMEQEq42J-Mh49UR4pApnXvb2b_4dg47-odBwRxE-Rxzcq-M0jHzsk8-nh683bQsZ8WFDX7ke-gfQlkQZFY6mksUqRHJdiYWXx4kycEc9XEtG1UMqVhLxCWikmKRJb4J2KZql4YImoQghskH9wpt8045N3GR5f4qDlWU_imZ",
                          name: "Mike R.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpkh93fVJxUTIzTy4IWhhf0HYjEF3ENnGQ7dx7mZfE5TtM2mYuvDw11oaB53pOqld9G-NSUwxNISZNu0Om4mT3wpPppkPwP6wezi1NSn4LUQ6AFMFTNGIc4OhBTI-mhaeg4sVqy2Fz_HCXbLtNsvkpWfJXlpPNJJIKERkeF3vmvo1mJtCnYdek2oqUk56SG5RNUWTSPlRLdLKMWRSwTJa6AbwCOiZBP4bpTien1CSSLWYHTxsp1Rf7-JjldCxWBfIWWC5FFchMI_rg",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvlB9H91De0A5s8yO-Uw18qahEcF9wDVFnClSAdOdtFUWOi3pSdVGFu6-CgrL95w39ksRi3rn_F4eD-cB4eGb5aXh_cJiJM5jR1oLkObjE5VMDdf7THnxX7rxXYfW7_s3Vkpt7BLaTNOLAgmxczVW3HEPXWHiTrO3VWdx_mcy9rnxgrrPlq2tLaQ_z-1pOjirx94bddy9ikrI_kU7F-eX8NZONLs-nwqAnpyUlBe9QA1VMHRdnW77gjMPypbYzKs4fHOiymlR6L1Vv",
                          name: "Emily K.",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRPknFYFTZx7neGI-_417Xcq5orlCq1Zl-oq_3c90QB4Jv5_EFtDTkIAOc5kdBeSszlQUwzI8CVlMGHKrlgb4V4GmM-KNg125zwUQqOnmsmKDaGe9TnGqUWhEKlBbdF413DZnBwBEQVTQ5cSUqjuAqsUuilYEUom9tPy1OLMmMD054YpSbM9tlrCaZTnZgWnPX8pUgYPOPZgPa5kQupPfZ_SOZMip4VZm16Q2WipWjsi4PRofTUkiber53CqOgDPR5NhtkTPyasK1a",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuAQtt154YOfWoANT0QmHGM8GOmrZc_q9ubrZ5mioX-ANK5iGM37KeJxPHsGGN9s24EN7oAPzyIaatJ6RDIG02kdHzBbwxTBqxPKhea6WJIwDB5t2vg7b1Vw0h4zBvDv5-tB5oJzaoq7nDH5HAYyNYsBKHHb2DNrdl1c8Jyegnk1Thou8Vb9XYCNpVv-a6-zue6a0cler1oEyN7D6vLFyqjO7hvsGlpCqaA16Mbw5IcwN1JFuwmZMN4aZEJ0No0vwq8yqgWBHgYB69hw",
                          name: "David Chen",
                        },
                        {
                          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9lYmqtreI3xqtzhxoTMvXEk9uE6UPbJ5mmFj1WMwhpUblP0Ao9GbvWZOhW22ZTmo21MKp0iLQl30kkWL_gUIXJrYC1yEms_hkzrxrA-RJ939oqa5RQgy6BLYCuNiS-vtSckaCW_pB4-w-G-L7Cr16ozd0DDpjd6rUUNkG3XwrKPcAb1FRFeijP2vfeSyXyLf5im-l7h6ilbOcPLBUrtskVvbSGsY88MyuDHrbElW4F4bTdl4vLZBDZUMAXEUjq7YAp-5Nfz3nbIbW",
                          avatar:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuB06zar6LypVithDaxnNk3ZpuzsEfzvn6TXmRrP5GcKrkd-Sqi582wmr7TbQXgK8MsLP5kCBpaAdaL5M_klCpqFwyVDOUPpG6jO1rL3A9T1WJ-9CRRAN8iNj18IJnhM7w5eCsl1TzpwXntXurD6oeN18RizjOQu1oGx15le059hkMveKfa92QuAA79Klto1ceeZ2EJh21u_8j73_d3uAP7ExwdoH80rmMm7sbYVRrJg6IDdhNQfE8ns8ODdgrVow9Anp-xeT7OZwgRB",
                          name: "Aisha B.",
                        },
                      ].map((card) => (
                        <div
                          key={card.name}
                          className="mb-6 break-inside-avoid group cursor-pointer"
                        >
                          <div
                            className="relative overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-lg"
                            style={{ borderRadius: "0.75rem" }}
                          >
                            <img
                              className="w-full h-auto"
                              src={card.img}
                              alt={card.name}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background:
                                  "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                              }}
                            ></div>
                            <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                              <img
                                className="w-8 h-8 rounded-full border-2 border-white"
                                src={card.avatar}
                                alt={card.name}
                              />
                              <p
                                className="text-sm font-semibold"
                                style={{ color: "#ffffff" }}
                              >
                                {card.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* end trending posts */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
