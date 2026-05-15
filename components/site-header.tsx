"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Logo from "./logo"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
          : ""
      }`}
      style={{
        backgroundColor: "#0a0e1a",
        borderBottom: "1px solid #1e2d47",
      }}
    >
      {/* Top notice bar */}
      <div
        style={{
          backgroundColor: "#0d1320",
          borderBottom: "1px solid #1e2d47",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-7">
          <p
            className="text-[10px] font-medium tracking-wide"
            style={{ color: "#8a92a6" }}
          >
            Comparador independente — apenas maiores de 18 anos
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold tracking-wide uppercase transition-colors"
              style={{ color: "#c9a84c" }}
            >
              Jogo Responsável
            </a>
            <span style={{ color: "#1e2d47" }}>|</span>
            <span
              className="text-[10px] font-bold px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: "#c0392b",
                color: "#ffffff",
              }}
            >
              18+
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center group">
          <Logo variant="dark" size="md" />
        </Link>

        {/* Right badges */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* SRIJ verified */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded"
            style={{
              border: "1px solid #1e2d47",
              backgroundColor: "#111827",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            </svg>
            <span
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "#c9a84c" }}
            >
              SRIJ Licenciado
            </span>
          </div>

          {/* Mobile SRIJ */}
          <div
            className="flex sm:hidden items-center gap-1 px-2 py-1 rounded"
            style={{
              border: "1px solid #1e2d47",
              backgroundColor: "#111827",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            </svg>
            <span
              className="text-[10px] font-bold"
              style={{ color: "#c9a84c" }}
            >
              SRIJ
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
