"use client"

import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "Apenas Operadores Licenciados",
      description:
        "Cada casa de apostas listada detém licença válida emitida pelo SRIJ. Nunca recomendamos operadores ilegais ou sem regulação.",
    },
    {
      icon: Award,
      title: "Avaliações Baseadas em Testes Reais",
      description:
        "A nossa equipa cria contas, deposita fundos e testa cada plataforma pessoalmente antes de publicar qualquer avaliação.",
    },
    {
      icon: Clock,
      title: "Informação Atualizada Mensalmente",
      description:
        "Bónus, odds e condições mudam frequentemente. Revisamos todo o conteúdo todos os meses para garantir exatidão.",
    },
    {
      icon: Users,
      title: "Mais de 50 000 Apostadores Mensais",
      description:
        "Somos o comparador de referência para apostadores portugueses. A nossa audiência cresce porque confiamos na verdade.",
    },
    {
      icon: CheckCircle,
      title: "Termos dos Bónus Verificados",
      description:
        "Lemos os termos e condições de cada promoção. Nunca publicamos um bónus sem compreender os requisitos de apostas aplicáveis.",
    },
    {
      icon: Zap,
      title: "Independência Editorial Total",
      description:
        "Nenhum operador paga para aparecer no topo. A posição de cada casa de apostas reflete exclusivamente o desempenho real avaliado.",
    },
  ]

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
          <div className="max-w-2xl mb-10">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#c9a84c" }}
            >
              Porquê Escolher-nos
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-4 text-balance leading-tight"
              style={{
                color: "#f0ede6",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Rigor e Transparência em Cada Avaliação
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8a92a6" }}>
              O nosso processo editorial é totalmente independente. Analisamos cada operador com os mesmos critérios
              objetivos, independentemente de parcerias comerciais.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-5 rounded transition-all duration-200"
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid #1e2d47",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#c9a84c"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e2d47"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0a0e1a", border: "1px solid #1e2d47" }}
                  >
                    <feature.icon className="w-4 h-4" style={{ color: "#c9a84c" }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: "#3a4a60" }}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#f0ede6" }}>
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a92a6" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
