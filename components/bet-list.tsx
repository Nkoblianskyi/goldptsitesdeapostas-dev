"use client"

import { BetCard } from "@/components/bet-card"
import { bettingSites } from "@/data/bet-sites"

export function BetList() {
  return (
    <section
      className="py-8 md:py-12"
      style={{ backgroundColor: "#0a0e1a" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div
            className="flex items-center justify-between mb-6 pb-4"
            style={{ borderBottom: "1px solid #1e2d47" }}
          >
            <div>
              <h2
                className="text-xl md:text-2xl font-black"
                style={{ color: "#f0ede6" }}
              >
                Casas de Apostas Licenciadas em Portugal
              </h2>
              <p
                className="text-sm mt-0.5"
                style={{ color: "#8a92a6" }}
              >
                {bettingSites.length} operadores analisados e verificados pelo SRIJ
              </p>
            </div>
            <div
              className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded"
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1e2d47",
                color: "#8a92a6",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: "#c9a84c" }}
              />
              Ordenados por avaliação
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {bettingSites.map((site, index) => (
              <BetCard key={site.name} site={site} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
