"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star, ExternalLink } from "lucide-react"
import { bettingSites } from "@/data/bet-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderStars = (rating: number) => {
    const stars = []
    const starRating = rating / 2
    const fullStars = Math.floor(starRating)
    const partialFill = starRating - fullStars

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4" strokeWidth={0} style={{ fill: "#c9a84c", color: "#c9a84c" }} />
        )
      } else if (i === fullStars && partialFill > 0) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4" strokeWidth={1.5} fill="none" style={{ color: "rgba(201,168,76,0.3)" }} />
            <div className="absolute overflow-hidden" style={{ width: `${partialFill * 100}%` }}>
              <Star className="w-4 h-4" strokeWidth={0} style={{ fill: "#c9a84c", color: "#c9a84c" }} />
            </div>
          </div>
        )
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4" strokeWidth={1.5} fill="none" style={{ color: "rgba(201,168,76,0.3)" }} />
        )
      }
    }
    return stars
  }

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
    >
      <div className="relative w-full max-w-sm animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-30 p-2 rounded-full transition-colors shadow-xl"
          style={{ backgroundColor: "#c0392b", color: "#ffffff" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a93226")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c0392b")}
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className="rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "#111827",
            border: "1px solid #1e2d47",
          }}
        >
          {/* Gold accent line top */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #a8873b 0%, #c9a84c 40%, #e2c97e 60%, #c9a84c 100%)",
            }}
          />

          {/* Header */}
          <div
            className="px-5 py-4 text-center"
            style={{ backgroundColor: "#0a0e1a", borderBottom: "1px solid #1e2d47" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1"
              style={{ color: "#8a92a6" }}
            >
              Oferta Especial
            </p>
            <h3
              className="text-lg font-black tracking-tight"
              style={{ color: "#c9a84c", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              ESCOLHA #1 EM PORTUGAL
            </h3>
          </div>

          {/* Content */}
          <div className="p-5">
            <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <div
                  className="relative w-44 h-20 rounded p-3"
                  style={{
                    backgroundColor: "#000000",
                    border: "1px solid #1e2d47",
                  }}
                >
                  <Image
                    src={topSite.logo || "/placeholder.svg"}
                    alt={topSite.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div
                    className="absolute -top-2 -right-2 px-2 py-0.5 rounded text-[9px] font-bold"
                    style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
                  >
                    VERIFICADO
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="flex gap-0.5">{renderStars(topSite.rating)}</div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl font-black"
                    style={{ color: "#c9a84c" }}
                  >
                    {topSite.rating.toFixed(1)}
                  </span>
                  <span style={{ color: "#8a92a6" }}>/10</span>
                </div>
              </div>

              {/* Bonus box */}
              <div
                className="p-4 rounded mb-5 text-center"
                style={{
                  backgroundColor: "#1a2235",
                  border: "1px solid #1e2d47",
                }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-1.5"
                  style={{ color: "#8a92a6" }}
                >
                  Bónus Exclusivo
                </p>
                <p
                  className="text-xl font-black leading-tight"
                  style={{ color: "#f0ede6" }}
                >
                  {topSite.bonus}
                </p>
              </div>

              {/* CTA */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded font-bold text-base transition-all"
                style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
              >
                OBTER BÓNUS AGORA
                <ExternalLink className="h-4 w-4" />
              </button>

              {/* Disclaimer */}
              <p
                className="text-[10px] text-center mt-4 leading-relaxed"
                style={{ color: "#8a92a6" }}
              >
                +18 | Aplicam-se Termos &amp; Condições | Jogue com Responsabilidade
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
