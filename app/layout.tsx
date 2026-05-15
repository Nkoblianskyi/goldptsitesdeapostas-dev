import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Gold PT Sites de Apostas | Melhores Casas de Apostas Licenciadas SRIJ 2025",
  description:
    "Comparador independente das melhores casas de apostas desportivas em Portugal. Análises detalhadas, bónus verificados e operadores licenciados pelo SRIJ. A sua referência em apostas seguras.",
  keywords: [
    "casas de apostas Portugal",
    "melhores sites de apostas",
    "apostas desportivas online",
    "casas de apostas licenciadas SRIJ",
    "bónus apostas Portugal",
    "comparador apostas Portugal 2025",
    "apostas futebol Portugal",
    "melhor casa de apostas",
    "sites de apostas seguros",
    "apostas online legais Portugal",
    "odds desportivas Portugal",
    "betano Portugal",
    "bet365 Portugal",
    "bwin Portugal",
    "unibet Portugal",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://goldptsitesdeapostas.com",
  },
  openGraph: {
    title: "Gold PT Sites de Apostas | Top Casas de Apostas 2025",
    description:
      "Encontre as melhores casas de apostas licenciadas em Portugal. Comparações imparciais, bónus exclusivos e guias completos.",
    siteName: "Gold PT Sites de Apostas",
    locale: "pt_PT",
    type: "website",
    url: "https://goldptsitesdeapostas.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold PT Sites de Apostas | Melhores Casas de Apostas 2025",
    description:
      "Comparador independente das melhores casas de apostas licenciadas pelo SRIJ em Portugal. Bónus verificados e análises reais.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${playfair.variable} antialiased`} style={{ backgroundColor: "#0a0e1a" }}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0a0e1a" />
        <meta name="author" content="Gold PT Sites de Apostas" />
        <meta property="og:site_name" content="Gold PT Sites de Apostas - Comparador de Apostas" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />
        <meta
          name="disclaimer"
          content="Site de comparação independente. Não somos uma casa de apostas. Links para sites licenciados pelo SRIJ. goldptsitesdeapostas.com"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
