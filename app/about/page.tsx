import Link from "next/link"
import { ArrowLeft, Trophy, Shield, Users, Target, Award, CheckCircle, Globe, BarChart2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0e1a" }}>
      <SiteHeader />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #1e2d47", backgroundColor: "#0d1320" }}>
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "#8a92a6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a92a6")}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Gold PT Sites de Apostas
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="py-12 md:py-20"
        style={{
          backgroundColor: "#0a0e1a",
          borderBottom: "1px solid #1e2d47",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-5"
              style={{ backgroundColor: "#111827", border: "1px solid #1e2d47" }}
            >
              <Trophy className="w-3.5 h-3.5" style={{ color: "#c9a84c" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#c9a84c" }}>
                Sobre Nós
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-black mb-5 text-balance leading-tight"
              style={{
                color: "#f0ede6",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              O Comparador de Apostas de Referência em Portugal
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#8a92a6" }}>
              Ajudamos apostadores portugueses a encontrar os melhores operadores licenciados. A nossa metodologia é
              independente, transparente e baseada em testes reais — não em comissões.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ backgroundColor: "#0d1320", borderBottom: "1px solid #1e2d47" }}>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, value: "50 000+", label: "Apostadores mensais" },
              { icon: Shield, value: "100%", label: "Operadores SRIJ" },
              { icon: BarChart2, value: "5+ Anos", label: "De experiência" },
              { icon: Target, value: "99%", label: "Precisão editorial" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-4 rounded"
                style={{ backgroundColor: "#111827", border: "1px solid #1e2d47" }}
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1a2235" }}
                >
                  <stat.icon className="w-4 h-4" style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="text-xl font-black leading-none" style={{ color: "#c9a84c" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#8a92a6" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-14 md:py-20">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#c9a84c" }}
              >
                A Nossa Missão
              </p>
              <h2
                className="text-2xl md:text-3xl font-black mb-5"
                style={{
                  color: "#f0ede6",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                Informação Imparcial para Decisões Mais Inteligentes
              </h2>
              <p className="leading-relaxed mb-4 text-sm" style={{ color: "#8a92a6" }}>
                No Gold PT Sites de Apostas, acreditamos que todo o apostador merece acesso a informação clara,
                honesta e atualizada. O mercado português tem dezenas de operadores licenciados e cada um tem pontos
                fortes e fracos distintos.
              </p>
              <p className="leading-relaxed text-sm" style={{ color: "#8a92a6" }}>
                A nossa equipa testa pessoalmente cada plataforma — desde o registo até ao levantamento — para que
                possa tomar uma decisão informada antes de depositar o seu dinheiro. Geramos receita através de
                parcerias de afiliados, mas isso nunca influencia as nossas classificações ou avaliações.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "Transparência Total",
                  desc: "Divulgamos como geramos receita e os critérios exatos que usamos para classificar os operadores.",
                },
                {
                  icon: Target,
                  title: "Independência Editorial",
                  desc: "Nenhum operador pode pagar para melhorar a sua posição. As classificações baseiam-se exclusivamente no desempenho.",
                },
                {
                  icon: Globe,
                  title: "Foco no Mercado PT",
                  desc: "Especializamo-nos em Portugal: regulação SRIJ, métodos de pagamento nacionais e suporte em português.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-4 rounded"
                  style={{ backgroundColor: "#111827", border: "1px solid #1e2d47" }}
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#1a2235" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: "#f0ede6" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#8a92a6" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          className="max-w-4xl mx-auto mb-16 py-14"
          style={{ borderTop: "1px solid #1e2d47", borderBottom: "1px solid #1e2d47" }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#c9a84c" }}
          >
            Os Nossos Pilares
          </p>
          <h2
            className="text-2xl md:text-3xl font-black mb-8"
            style={{
              color: "#f0ede6",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            O Que Nos Distingue de Outros Comparadores
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Testes em Primeira Mão",
                description:
                  "Cada membro da equipa cria contas reais, deposita fundos próprios e testa o suporte ao cliente antes de publicar qualquer avaliação.",
                icon: Award,
              },
              {
                title: "Atualização Mensal",
                description:
                  "O mercado muda: bónus expiram, odds evoluem, novas funcionalidades são lançadas. Revisamos todas as avaliações todos os meses.",
                icon: Target,
              },
              {
                title: "Jogo Responsável em Primeiro",
                description:
                  "Incluímos sempre recursos de jogo responsável, limites recomendados e alertas de risco em todas as nossas análises.",
                icon: Users,
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-5 rounded transition-all duration-200"
                style={{ backgroundColor: "#111827", border: "1px solid #1e2d47" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e2d47")}
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#1a2235" }}
                >
                  <value.icon className="w-4 h-4" style={{ color: "#c9a84c" }} />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#f0ede6" }}>
                  {value.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a92a6" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="max-w-4xl mx-auto">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "#c9a84c" }}
          >
            Processo de Avaliação
          </p>
          <h2
            className="text-2xl md:text-3xl font-black mb-8"
            style={{
              color: "#f0ede6",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Como Testamos e Classificamos Cada Operador
          </h2>
          <div className="space-y-3">
            {[
              "Verificamos a validade da licença SRIJ diretamente no portal oficial",
              "Registamos uma conta real e passamos pelo processo completo de verificação",
              "Depositamos fundos e testamos todos os métodos de pagamento disponíveis",
              "Avaliamos a profundidade e qualidade dos mercados desportivos oferecidos",
              "Analisamos os bónus, lemos os termos na íntegra e calculamos o valor real",
              "Contactamos o suporte em múltiplos canais e registamos os tempos de resposta",
              "Testamos a versão mobile e/ou aplicação nativa em iOS e Android",
              "Revemos a classificação mensalmente com base em mudanças na plataforma",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded"
                style={{ backgroundColor: "#111827", border: "1px solid #1e2d47" }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: "#c9a84c", color: "#0a0e1a" }}
                >
                  {index + 1}
                </div>
                <p className="text-sm flex-1" style={{ color: "#f0ede6" }}>
                  {item}
                </p>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#c9a84c" }} />
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div
          className="max-w-4xl mx-auto mt-12 pt-8"
          style={{ borderTop: "1px solid #1e2d47" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#8a92a6" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a92a6")}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
