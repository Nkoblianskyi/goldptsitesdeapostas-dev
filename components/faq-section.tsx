"use client"

import { useState } from "react"
import { ChevronDown, PhoneCall } from "lucide-react"

const faqs = [
  {
    question: "As apostas desportivas são legais em Portugal?",
    answer:
      "Sim. As apostas desportivas online são totalmente legais em Portugal para maiores de 18 anos, desde que realizadas através de operadores com licença válida emitida pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Todos os operadores listados no nosso site cumprem este requisito.",
  },
  {
    question: "Como escolho a casa de apostas certa para mim?",
    answer:
      "Depende das suas prioridades. Se valoriza odds elevadas, compare os valores praticados nos mesmos eventos. Se prefere variedade de mercados, analise a cobertura desportiva. Se o bónus de boas-vindas é decisivo, leia os requisitos de apostas com atenção. A nossa tabela comparativa facilita essa escolha.",
  },
  {
    question: "Quais métodos de pagamento estão disponíveis em Portugal?",
    answer:
      "Os operadores licenciados para Portugal oferecem habitualmente: MB Way, Multibanco, transferência bancária, cartões Visa e Mastercard, e carteiras eletrónicas como Neteller e Skrill. Os depósitos são geralmente instantâneos; os levantamentos processam-se em 24 a 72 horas consoante o método escolhido.",
  },
  {
    question: "O que são os requisitos de apostas de um bónus?",
    answer:
      "Os requisitos de apostas (também chamados rollover ou wagering) indicam quantas vezes precisa de apostar o valor do bónus antes de poder levantar quaisquer ganhos provenientes desse bónus. Por exemplo, um bónus de 50€ com requisito de 5x obriga-o a apostar 250€ em mercados elegíveis antes do levantamento.",
  },
  {
    question: "É seguro depositar dinheiro numa casa de apostas licenciada?",
    answer:
      "Sim. Os operadores licenciados pelo SRIJ são obrigados a manter os fundos dos clientes separados dos fundos operacionais, a usar encriptação SSL em todas as transações e a cumprir normas rigorosas de proteção de dados. Verifique sempre se o site exibe o logótipo SRIJ antes de depositar.",
  },
  {
    question: "Posso apostar pelo telemóvel?",
    answer:
      "Sim. Todos os principais operadores disponíveis em Portugal oferecem aplicações nativas para iOS e Android, ou sites móveis otimizados com funcionalidades equivalentes à versão desktop. Pode acompanhar eventos em direto, apostar ao vivo e gerir a sua conta a partir de qualquer dispositivo.",
  },
  {
    question: "Qual é a idade mínima para criar uma conta?",
    answer:
      "Em Portugal, a idade mínima legal para apostar é 18 anos. Todos os operadores licenciados são obrigados a verificar a identidade dos utilizadores através de documento de identificação válido durante o processo de registo, antes de permitir qualquer depósito ou aposta.",
  },
  {
    question: "Como funciona o vosso sistema de classificação?",
    answer:
      "Avaliamos cada operador numa escala de 0 a 10, com base em seis critérios ponderados: validade da licença SRIJ, segurança e proteção de dados, oferta de mercados e qualidade das odds, estrutura e clareza dos bónus, métodos de pagamento disponíveis e qualidade do suporte ao cliente. As pontuações são revistas mensalmente.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
              Perguntas Frequentes
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-4 text-balance leading-tight"
              style={{
                color: "#f0ede6",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Tudo o que Precisa de Saber Sobre Apostas em Portugal
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8a92a6" }}>
              Respostas claras e objetivas às questões mais comuns sobre apostas desportivas online no mercado português.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded overflow-hidden transition-all duration-200"
                style={{
                  border: `1px solid ${openIndex === index ? "#c9a84c" : "#1e2d47"}`,
                  backgroundColor: "#111827",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span
                    className="font-semibold pr-4 text-sm md:text-base transition-colors"
                    style={{ color: openIndex === index ? "#c9a84c" : "#f0ede6" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-all duration-300"
                    style={{
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      color: openIndex === index ? "#c9a84c" : "#3a4a60",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === index ? "320px" : "0" }}
                >
                  <div
                    className="px-5 pb-5 pt-0 text-sm leading-relaxed"
                    style={{ color: "#8a92a6", borderTop: "1px solid #1e2d47" }}
                  >
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsible Gaming Card */}
          <div className="max-w-3xl mx-auto mt-8">
            <div
              className="p-5 rounded flex flex-col sm:flex-row items-center gap-4"
              style={{
                backgroundColor: "#111827",
                border: "1px solid #c9a84c",
              }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#0a0e1a", border: "1px solid #1e2d47" }}
              >
                <PhoneCall className="w-5 h-5" style={{ color: "#c9a84c" }} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold mb-1 text-sm" style={{ color: "#f0ede6" }}>
                  Precisa de Ajuda com o Jogo?
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8a92a6" }}>
                  O jogo deve ser uma forma de entretenimento responsável. Se sentir que perdeu o controlo, visite{" "}
                  <a
                    href="https://jogoresponsavel.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition-colors"
                    style={{ color: "#c9a84c" }}
                  >
                    jogoresponsavel.pt
                  </a>{" "}
                  ou ligue para a Linha de Apoio:{" "}
                  <strong style={{ color: "#f0ede6" }}>800 201 201</strong> (gratuita).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
