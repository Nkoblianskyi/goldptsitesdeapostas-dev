export function BettingInfoSection() {
  const criteria = [
    { label: "Segurança e Licenciamento SRIJ", value: 100 },
    { label: "Variedade de Mercados Desportivos", value: 95 },
    { label: "Qualidade e Competitividade das Odds", value: 90 },
    { label: "Bónus e Condições das Promoções", value: 85 },
    { label: "Experiência Mobile e Aplicação", value: 92 },
  ]

  const cards = [
    {
      title: "Odds Competitivas",
      description:
        "Monitorizamos as odds diariamente e comparamos os valores praticados entre todos os operadores listados para encontrar as melhores cotações disponíveis.",
    },
    {
      title: "Ampla Cobertura de Mercados",
      description:
        "Futebol, ténis, basquetebol, F1, e-sports e muito mais. Avaliamos a profundidade dos mercados em cada casa de apostas.",
    },
    {
      title: "Foco no Mercado Português",
      description:
        "Especializamo-nos em operadores com presença e suporte dedicado para apostadores em Portugal, incluindo métodos de pagamento nacionais.",
    },
    {
      title: "Avaliações com Dados Reais",
      description:
        "Cada pontuação baseia-se em testes práticos realizados pela nossa equipa, complementados por feedback real de utilizadores portugueses.",
    },
  ]

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#0a0e1a" }}>
      <div className="container mx-auto px-4">
        <div
          className="max-w-[1250px] mx-auto rounded-lg overflow-hidden"
          style={{
            backgroundColor: "#0d1220",
            border: "1px solid #1e2d47",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left — methodology + progress bars */}
            <div
              className="px-6 md:px-10 py-10 md:py-12"
              style={{ borderBottom: "1px solid #1e2d47" }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#c9a84c" }}
              >
                Metodologia
              </p>
              <h2
                className="text-2xl md:text-3xl font-black mb-4 leading-tight text-balance"
                style={{
                  color: "#f0ede6",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Como Avaliamos Cada Casa de Apostas
              </h2>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: "#8a92a6" }}>
                A nossa equipa de analistas aplica uma grelha de critérios objetivos a cada operador. Testamos
                pessoalmente cada plataforma — desde o registo até ao levantamento — para garantir que as nossas
                avaliações refletem a experiência real do apostador.
              </p>

              <div className="space-y-5">
                {criteria.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-medium" style={{ color: "#c8cdd8" }}>
                        {item.label}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "#c9a84c" }}>
                        {item.value}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#1e2d47" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.value}%`, backgroundColor: "#c9a84c" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — feature cards grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ borderLeft: "1px solid #1e2d47" }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className="p-6 md:p-7 transition-colors duration-200"
                  style={{
                    borderBottom: index < 2 ? "1px solid #1e2d47" : undefined,
                    borderRight: index % 2 === 0 ? "1px solid #1e2d47" : undefined,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111827")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#0a0e1a", border: "1px solid #1e2d47" }}
                  >
                    <span className="text-[11px] font-black" style={{ color: "#c9a84c" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 text-sm" style={{ color: "#f0ede6" }}>
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#8a92a6" }}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
