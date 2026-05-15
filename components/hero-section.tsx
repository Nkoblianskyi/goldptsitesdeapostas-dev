"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, CheckCircle } from "lucide-react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section
      className="gold-hero relative overflow-hidden flex items-center"
      style={{
        backgroundColor: "#0a0e1a",
        borderBottom: "1px solid #1e2d47",
      }}
    >
      <style>{`
        .gold-hero {
          min-height: 250px;
          max-height: 250px;
        }
        @media (min-width: 768px) {
          .gold-hero {
            min-height: 400px;
            max-height: 400px;
          }
        }
      `}</style>
      {/* Geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <pattern id="geo-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e2d47" strokeWidth="0.5" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo-grid)" />
        </svg>
        {/* Radial glow top-left */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Radial glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-60px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e2c97e 50%, #c9a84c 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 w-full">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
            >
              Ranking {currentYear}
            </span>
            {lastUpdated && (
              <span
                className="inline-flex items-center px-3 py-1 rounded text-xs font-medium"
                style={{
                  backgroundColor: "#111827",
                  color: "#8a92a6",
                  border: "1px solid #1e2d47",
                }}
              >
                Atualizado: {lastUpdated}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="px-3 py-1 text-xs font-bold rounded transition-colors"
              style={{ color: "#c0392b", border: "1px solid rgba(192,57,43,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(192,57,43,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              +18
            </button>
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="px-3 py-1 text-xs rounded transition-colors"
              style={{ color: "#8a92a6", border: "1px solid #1e2d47" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Publicidade
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-1 md:mb-2"
            style={{ color: "#c9a84c" }}
          >
            Comparador Independente — Portugal
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-balance mb-2 md:mb-3"
            style={{ color: "#f0ede6", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Os Melhores{" "}
            <span style={{ color: "#c9a84c" }}>Sites de Apostas</span>{" "}
            em Portugal
          </h1>

          <p
            className="text-sm md:text-base leading-relaxed max-w-2xl mb-4 md:mb-6"
            style={{ color: "#8a92a6" }}
          >
            Comparamos e analisamos de forma independente todos os operadores licenciados pelo SRIJ.
            Encontre a casa de apostas certa com base em critérios objetivos e verificados pela nossa equipa.
          </p>

          {/* Trust indicators — hidden on small screens to keep hero compact */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {[
              { icon: <Shield className="w-4 h-4" style={{ color: "#c9a84c" }} />, label: "SRIJ Licenciado" },
              { icon: <CheckCircle className="w-4 h-4" style={{ color: "#c9a84c" }} />, label: "Bónus Verificados" },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Análises Atualizadas",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                label: "100% Seguro",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2 rounded"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1e2d47",
                }}
              >
                {item.icon}
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#f0ede6" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
