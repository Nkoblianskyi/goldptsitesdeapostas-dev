"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-5">
      <div className="container mx-auto max-w-5xl">
        <div
          className="rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "#111827",
            border: "1px solid #1e2d47",
            boxShadow: "0 -4px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Gold accent top line */}
          <div
            style={{
              height: "2px",
              background: "linear-gradient(90deg, #a8873b 0%, #c9a84c 50%, #a8873b 100%)",
            }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 md:p-5">
            <div className="flex items-start gap-3 flex-1">
              {/* Cookie icon */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "#1a2235" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                </svg>
              </div>
              <div>
                <h3
                  className="text-sm font-bold mb-0.5"
                  style={{ color: "#f0ede6" }}
                >
                  Preferências de Cookies
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#8a92a6" }}
                >
                  Utilizamos cookies para melhorar a sua experiência e analisar o tráfego. Ao clicar em
                  &ldquo;Aceitar&rdquo;, concorda com a nossa{" "}
                  <Link
                    href="/cookie-policy"
                    className="font-medium transition-colors"
                    style={{ color: "#c9a84c" }}
                  >
                    Política de Cookies
                  </Link>
                  . Pode gerir as suas preferências a qualquer momento.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
              <button
                className="flex-1 sm:flex-none px-4 py-2 rounded text-xs font-semibold transition-colors"
                style={{
                  border: "1px solid #1e2d47",
                  color: "#8a92a6",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a2235"
                  e.currentTarget.style.color = "#f0ede6"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#8a92a6"
                }}
                onClick={declineAll}
              >
                Recusar
              </button>
              <button
                className="flex-1 sm:flex-none px-4 py-2 rounded text-xs font-bold transition-all"
                style={{
                  backgroundColor: "#c9a84c",
                  color: "#0a0e1a",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
                onClick={acceptAll}
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
