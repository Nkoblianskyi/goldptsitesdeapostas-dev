"use client"

import { useState } from "react"
import { bettingSites } from "@/data/bet-sites"
import { Star, ExternalLink, Shield, CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) return null

  const fullStars = Math.floor(topSite.stars)

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0a0e1a" }}>
      <div className="container mx-auto px-4">
        <div
          className="max-w-[1250px] mx-auto rounded-lg overflow-hidden px-6 md:px-10 py-10 md:py-12"
          style={{
            backgroundColor: "#0d1220",
            border: "1px solid #1e2d47",
          }}
        >
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#c9a84c" }}
            >
              Destaque do Editor
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-4 text-balance leading-tight"
              style={{
                color: "#f0ede6",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              A Nossa Primeira Escolha Para Apostadores Portugueses
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8a92a6" }}>
              Após análise detalhada de todos os critérios, este é o operador que recomendamos com maior confiança para
              quem inicia ou quer melhorar a sua experiência de apostas desportivas em Portugal.
            </p>
          </div>

          {/* Featured Card */}
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-lg overflow-hidden"
              style={{
                border: "2px solid #c9a84c",
                boxShadow: "0 0 32px rgba(201,168,76,0.08)",
              }}
            >
              {/* Top bar */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{ backgroundColor: "#080c16", borderBottom: "1px solid #1e2d47" }}
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" style={{ color: "#c9a84c" }} />
                  <span className="font-bold text-sm tracking-wide" style={{ color: "#c9a84c" }}>
                    #1 — Melhor Escolha {new Date().getFullYear()}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold" style={{ color: "#8a92a6" }}>
                  <span className="hidden sm:flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    SRIJ Licenciado
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" style={{ color: "#c9a84c" }} />
                    Verificado
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8" style={{ backgroundColor: "#111827" }}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left — Logo + Rating */}
                  <div className="flex flex-col items-center text-center flex-shrink-0">
                    <div
                      className="w-52 h-28 flex items-center justify-center rounded p-4 mb-5"
                      style={{ backgroundColor: "#000000", border: "1px solid #1e2d47" }}
                    >
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={180}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          strokeWidth={i < fullStars ? 0 : 1.5}
                          style={{
                            fill: i < fullStars ? "#c9a84c" : "none",
                            color: i < fullStars ? "#c9a84c" : "#2a3a50",
                          }}
                        />
                      ))}
                    </div>

                    {/* Score */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black" style={{ color: "#c9a84c" }}>
                        {topSite.rating.toFixed(1)}
                      </span>
                      <span className="text-lg font-medium" style={{ color: "#8a92a6" }}>/10</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "#8a92a6" }}>
                      {topSite.reviews.toLocaleString("pt-PT")} avaliações
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="hidden md:block w-px self-stretch"
                    style={{ backgroundColor: "#1e2d47" }}
                  />
                  <div className="block md:hidden h-px w-full" style={{ backgroundColor: "#1e2d47" }} />

                  {/* Right — Bonus + CTA */}
                  <div className="flex-1 w-full">
                    <div
                      className="rounded p-5 mb-5 text-center"
                      style={{
                        backgroundColor: "#0a0e1a",
                        border: "1px solid #1e2d47",
                      }}
                    >
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2"
                        style={{ color: "#8a92a6" }}
                      >
                        Bónus Exclusivo de Boas-Vindas
                      </p>
                      <p
                        className="text-2xl md:text-3xl font-black leading-tight mb-2"
                        style={{ color: "#f0ede6" }}
                      >
                        {topSite.bonus}
                      </p>
                      <p className="text-xs" style={{ color: "#8a92a6" }}>
                        Termos e condições aplicam-se. Aposte com responsabilidade.
                      </p>
                    </div>

                    <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored">
                      <button
                        className="w-full flex items-center justify-center gap-2 py-4 rounded font-bold text-base transition-all"
                        style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a8873b")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a84c")}
                      >
                        Reivindicar Bónus Agora
                        <ExternalLink className="ml-1 w-5 h-5" />
                      </button>
                    </Link>

                    <p className="text-[11px] mt-3 text-center" style={{ color: "#8a92a6" }}>
                      +18 | Apenas para novos utilizadores | Jogue com responsabilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
