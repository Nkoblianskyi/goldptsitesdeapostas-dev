"use client"

import { ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BettingSite } from "@/data/bet-sites"

interface BetCardProps {
  site: BettingSite
  rank: number
}

export function BetCard({ site, rank }: BetCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "Melhor Escolha"
      case 2:
        return "Recomendado"
      case 3:
        return "Popular"
      default:
        return "Verificado"
    }
  }

  const renderStars = (rating: number, size = 14) => {
    const starRating = Math.round((rating / 2) * 5) / 5
    const stars = []

    for (let i = 0; i < 5; i++) {
      const fill = Math.min(1, Math.max(0, starRating - i))
      const fillPct = Math.round(fill * 100)
      const id = `star-${rating}-${i}-${rank}`

      stars.push(
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", flexShrink: 0 }}
        >
          <defs>
            <clipPath id={id}>
              <rect x="0" y="0" width={fillPct === 100 ? 14 : (14 * fillPct) / 100} height="14" />
            </clipPath>
          </defs>
          <path
            d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
            fill="#1e2d47"
          />
          {fillPct > 0 && (
            <path
              d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
              fill="#c9a84c"
              clipPath={`url(#${id})`}
            />
          )}
        </svg>,
      )
    }
    return stars
  }

  const isTop = rank === 1

  return (
    <div
      className="group relative rounded overflow-hidden transition-all duration-200"
      style={{
        backgroundColor: "#111827",
        border: `1px solid ${isTop ? "#c9a84c" : "#1e2d47"}`,
        boxShadow: isTop ? "0 0 20px rgba(201,168,76,0.08)" : "none",
      }}
      onMouseEnter={(e) => {
        if (!isTop) e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"
      }}
      onMouseLeave={(e) => {
        if (!isTop) e.currentTarget.style.borderColor = "#1e2d47"
      }}
    >
      {/* Top label strip */}
      <div
        className="flex items-center text-xs font-bold"
        style={{
          backgroundColor: isTop ? "#c9a84c" : "#1a2235",
          color: isTop ? "#0a0e1a" : "#8a92a6",
          borderBottom: `1px solid ${isTop ? "#a8873b" : "#1e2d47"}`,
        }}
      >
        <span
          className="px-3 py-1.5"
          style={{ borderRight: `1px solid ${isTop ? "rgba(0,0,0,0.15)" : "#1e2d47"}` }}
        >
          #{rank}
        </span>
        <span className="px-3 py-1.5">{getRankLabel(rank)}</span>
        {isTop && (
          <span
            className="ml-auto px-3 py-1.5 text-[10px] font-semibold"
            style={{ borderLeft: "1px solid rgba(0,0,0,0.15)", opacity: 0.8 }}
          >
            SRIJ Licenciado
          </span>
        )}
      </div>

      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-0 items-stretch">
          {/* Logo */}
          <div
            className="col-span-3 flex items-center justify-center p-5"
            style={{ borderRight: "1px solid #1e2d47", backgroundColor: "#000000" }}
          >
            <div className="w-full max-w-[180px] h-20 flex items-center justify-center">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={180}
                height={80}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div
            className="col-span-4 flex flex-col items-center justify-center p-5 text-center"
            style={{ borderRight: "1px solid #1e2d47" }}
          >
            <span
              className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
              style={{ color: "#8a92a6" }}
            >
              Bónus de Boas-Vindas
            </span>
            <p
              className="text-xl font-black leading-tight"
              style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
            >
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div
            className="col-span-3 flex flex-col items-center justify-center p-5 text-center"
            style={{ borderRight: "1px solid #1e2d47" }}
          >
            <div className="flex justify-center gap-[2px] mb-1.5">{renderStars(site.rating)}</div>
            <div className="flex items-baseline gap-1">
              <span
                className="text-3xl font-black"
                style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
              >
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm" style={{ color: "#8a92a6" }}>/10</span>
            </div>
            <p className="text-[10px] mt-1" style={{ color: "#8a92a6" }}>
              ({formatReviews(site.reviews)} avaliações)
            </p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex flex-col items-center justify-center p-5 gap-2.5">
            <button
              className="w-full py-2.5 rounded font-bold text-sm transition-all flex items-center justify-center gap-1.5"
              style={{
                backgroundColor: "#c9a84c",
                color: "#0a0e1a",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
            >
              Obter Bónus
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1 text-[10px]" style={{ color: "#8a92a6" }}>
              <CheckCircle className="w-3 h-3" style={{ color: "#c9a84c" }} />
              <span>Verificado SRIJ</span>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden p-4">
          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <div className="flex justify-center">
              <div
                className="w-full max-w-[140px] h-16 flex items-center justify-center rounded p-2"
                style={{ backgroundColor: "#000000" }}
              >
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={140}
                  height={64}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
            <div
              className="flex flex-col items-center text-center px-2"
              style={{ borderLeft: "1px solid #1e2d47", borderRight: "1px solid #1e2d47" }}
            >
              <span className="text-[9px] font-semibold uppercase mb-1" style={{ color: "#8a92a6" }}>
                Bónus
              </span>
              <p
                className="text-base font-black leading-tight"
                style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
              >
                {site.bonus}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-[2px] mb-1">{renderStars(site.rating)}</div>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-2xl font-black"
                  style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
                >
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-xs" style={{ color: "#8a92a6" }}>/10</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              className="flex-1 max-w-xs flex items-center justify-center gap-2 py-2.5 rounded font-bold text-sm transition-all"
              style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
            >
              Obter Bónus
              <ExternalLink className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1 text-xs" style={{ color: "#8a92a6" }}>
              <CheckCircle className="w-3.5 h-3.5" style={{ color: "#c9a84c" }} />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-28 h-16 shrink-0 flex items-center justify-center rounded p-2"
              style={{ backgroundColor: "#000000" }}
            >
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={112}
                height={64}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[9px] font-semibold uppercase block mb-0.5" style={{ color: "#8a92a6" }}>
                Bónus
              </span>
              <p
                className="text-lg font-black leading-tight"
                style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
              >
                {site.bonus}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span
                className="text-xl font-black"
                style={{ color: isTop ? "#c9a84c" : "#f0ede6" }}
              >
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs" style={{ color: "#8a92a6" }}>/10</span>
            </div>
            <div className="flex gap-[2px]">{renderStars(site.rating)}</div>
            <button
              className="flex items-center gap-1 px-3 py-1.5 rounded font-bold text-xs transition-all"
              style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
            >
              Bónus
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Link>

      {/* Disclaimer strip */}
      <div
        className="px-4 py-1.5"
        style={{ borderTop: "1px solid #1e2d47", backgroundColor: "#0d1320" }}
      >
        <p className="text-[10px] text-center" style={{ color: "#8a92a6" }}>
          +18 | Jogo Responsável |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="transition-colors"
            style={{ color: "#c9a84c" }}
          >
            jogoresponsavel.pt
          </a>
          {" "}| Aplicam-se T&C
        </p>
      </div>
    </div>
  )
}
