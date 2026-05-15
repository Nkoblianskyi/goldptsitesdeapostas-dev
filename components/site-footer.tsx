"use client"

import Link from "next/link"
import Image from "next/image"
import { AlertTriangle, Mail, Shield } from "lucide-react"
import Logo from "./logo"

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0a0e1a", color: "#f0ede6", borderTop: "1px solid #1e2d47" }}>
      {/* Gold accent bar */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #a8873b 0%, #c9a84c 40%, #e2c97e 60%, #c9a84c 100%)" }} />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12"
          style={{ borderBottom: "1px solid #1e2d47" }}
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <Logo variant="dark" size="md" />
            </Link>
            <p
              className="text-sm leading-relaxed mb-5 max-w-md"
              style={{ color: "#8a92a6" }}
            >
              Comparador independente das melhores casas de apostas desportivas licenciadas pelo SRIJ em Portugal.
              Análises imparciais, bónus verificados e informação de confiança.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#8a92a6" }}>
              <Mail className="w-4 h-4" style={{ color: "#c9a84c" }} />
              <span>info@goldptsitesdeapostas.com</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-[10px] font-bold mb-5 uppercase tracking-[0.2em]"
              style={{ color: "#c9a84c" }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Página Inicial" },
                { href: "/#betting-sites", label: "Casas de Apostas" },
                { href: "/about", label: "Sobre Nós" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: "#8a92a6" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ede6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8a92a6")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-[10px] font-bold mb-5 uppercase tracking-[0.2em]"
              style={{ color: "#c9a84c" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Política de Privacidade" },
                { href: "/cookie-policy", label: "Política de Cookies" },
                { href: "https://jogoresponsavel.pt", label: "Jogo Responsável", external: true },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors"
                    style={{ color: "#8a92a6" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ede6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8a92a6")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners section */}
        <div
          className="mb-12 pb-12"
          style={{ borderBottom: "1px solid #1e2d47" }}
        >
          <h4
            className="text-[10px] font-bold mb-6 text-center uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            style={{ color: "#c9a84c" }}
          >
            <Shield className="h-3.5 w-3.5" />
            Parceiros de Jogo Responsável
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {[
              { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ" },
              { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare" },
              { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware" },
              { href: "https://www.jogoresponsavel.pt/", src: "/jogo-responsavel-new.png", alt: "Jogo Responsável" },
            ].map((partner, idx, arr) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition-opacity hover:opacity-80"
                style={{
                  padding: "10px 14px",
                  backgroundColor: idx === arr.length - 1 ? "transparent" : "#f7f4ef",
                  border: "1px solid",
                  borderColor: idx === arr.length - 1 ? "#1e2d47" : "transparent",
                }}
              >
                <div className="relative w-[90px] h-[40px]">
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="px-3 py-1.5 rounded font-black text-sm"
              style={{ backgroundColor: "#c0392b", color: "#ffffff" }}
            >
              18+
            </span>
            <span className="font-semibold text-sm" style={{ color: "#f0ede6" }}>
              Apenas para maiores de 18 anos
            </span>
          </div>

          <p
            className="max-w-3xl mx-auto leading-relaxed text-xs md:text-sm"
            style={{ color: "#8a92a6" }}
          >
            Gold PT Sites de Apostas é um site de comparação independente. Não somos uma casa de apostas. Todo o
            conteúdo é destinado a maiores de 18 anos residentes em Portugal. Os links externos direcionam para
            operadores licenciados pelo SRIJ. goldptsitesdeapostas.com
          </p>

          <p
            className="flex items-center justify-center gap-2 font-semibold text-sm"
            style={{ color: "#c0392b" }}
          >
            <AlertTriangle className="h-4 w-4" />
            <span>O jogo pode causar dependência. Aposte com responsabilidade.</span>
          </p>

          <p
            className="font-medium pt-4 text-xs"
            style={{
              color: "#1e2d47",
              borderTop: "1px solid #1e2d47",
              paddingTop: "1rem",
              marginTop: "1rem",
              color: "#8a92a6",
            }}
          >
            © {new Date().getFullYear()} Gold PT Sites de Apostas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
