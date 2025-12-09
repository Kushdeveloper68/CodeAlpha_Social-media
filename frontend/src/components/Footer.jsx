import React from 'react'

function Footer() {
  return (
      <footer
              className="flex flex-col gap-8 px-5 py-10 text-center mt-16 border-t"
              style={{ borderColor: "#e5e7eb", fontFamily: "Inter, sans-serif" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-sm font-normal leading-normal transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Contact
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">
                    photo_camera
                  </span>
                </a>
                <a
                  href="#"
                  className="transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  <span className="material-symbols-outlined">group</span>
                </a>
              </div>

              <p
                className="text-sm font-normal leading-normal"
                style={{ color: "#6b7280" }}
              >
                © 2024 SocialX. All rights reserved.
              </p>
            </footer>
  )
}

export default Footer