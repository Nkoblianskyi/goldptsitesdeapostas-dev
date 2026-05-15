"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Introdução e Âmbito",
      content: `O Gold PT Sites de Apostas (goldptsitesdeapostas.com) está empenhado na proteção da sua privacidade e no tratamento responsável dos seus dados pessoais. Esta Política de Privacidade descreve de forma clara e transparente como recolhemos, utilizamos, conservamos e protegemos as suas informações quando visita e utiliza o nosso website.

Ao aceder ao nosso site, confirma que leu e compreendeu esta política. Se não concordar com os termos aqui descritos, pedimos que não utilize os nossos serviços.`,
    },
    {
      icon: Database,
      title: "2. Dados que Recolhemos",
      content: `Dados fornecidos voluntariamente por si:
• Endereço de email e nome (quando nos contacta)
• Conteúdo das comunicações e mensagens que nos envia
• Respostas a inquéritos ou formulários de feedback

Dados recolhidos automaticamente durante a navegação:
• Endereço IP e localização geográfica aproximada
• Tipo de browser, sistema operativo e dispositivo utilizado
• Páginas visitadas, duração das visitas e interações realizadas
• Dados de referência (como chegou ao nosso site)
• Cookies e tecnologias de rastreamento similares`,
    },
    {
      icon: FileText,
      title: "3. Finalidades do Tratamento de Dados",
      content: `Utilizamos os dados recolhidos exclusivamente para:

• Prestar e aprimorar os nossos serviços de comparação e informação
• Personalizar a experiência de navegação com base no seu perfil de utilização
• Analisar tendências de uso e identificar oportunidades de melhoria
• Responder às suas questões e pedidos de suporte
• Prevenir abusos, fraudes e garantir a segurança do site
• Cumprir as obrigações legais e regulatórias aplicáveis em Portugal e na UE`,
    },
    {
      icon: Lock,
      title: "4. Partilha de Dados com Terceiros",
      content: `O Gold PT Sites de Apostas não vende nem aluga os seus dados pessoais a terceiros. A partilha de dados pode ocorrer nas seguintes circunstâncias limitadas:

• Operadores de apostas parceiros — quando clica num link afiliado e realiza um registo, transmitimos informação técnica necessária ao rastreamento da conversão
• Prestadores de serviços técnicos — empresas que nos apoiam na operação do site (servidores, análise de dados), sujeitas a acordos de processamento de dados
• Autoridades competentes — quando legalmente obrigados por lei, tribunal ou entidade reguladora portuguesa ou europeia
• Proteção de direitos — em caso de necessidade de defesa de direitos legais do Gold PT Sites de Apostas`,
    },
    {
      icon: UserCheck,
      title: "5. Os Seus Direitos ao Abrigo do RGPD",
      content: `Como titular dos dados, e nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), tem os seguintes direitos:

• Direito de Acesso — solicitar uma cópia dos seus dados pessoais que tratamos
• Direito de Retificação — corrigir dados incorretos ou incompletos
• Direito ao Apagamento — solicitar a eliminação dos seus dados ("direito a ser esquecido")
• Direito à Limitação — restringir temporariamente o tratamento dos seus dados
• Direito à Portabilidade — receber os seus dados num formato estruturado e legível por máquina
• Direito de Oposição — opor-se ao tratamento com base em interesses legítimos

Para exercer qualquer destes direitos, contacte-nos através do email indicado na secção seguinte.`,
    },
    {
      icon: Shield,
      title: "6. Segurança, Retenção e Contacto",
      content: `Medidas de segurança implementadas:
Utilizamos encriptação SSL/TLS em todas as comunicações, acesso restrito aos dados por pessoal autorizado, e sistemas de monitorização para detetar acessos não autorizados.

Período de retenção:
Conservamos os dados pelo tempo necessário às finalidades descritas ou pelo período legalmente exigido. Dados de analytics são anonimizados ao fim de 26 meses.

Atualizações a esta política:
Podemos rever esta política periodicamente. Recomendamos que a consulte regularmente. A data de última atualização encontra-se no cabeçalho deste documento.

Contacto do Responsável pelo Tratamento:
Email: privacidade@goldptsitesdeapostas.com
Website: goldptsitesdeapostas.com
    },
  ]

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

      {/* Page Header */}
      <div
        className="py-10 md:py-16"
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-5"
            style={{
              backgroundColor: "#111827",
              border: "1px solid #1e2d47",
            }}
          >
            <Shield className="w-3.5 h-3.5" style={{ color: "#c9a84c" }} />
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: "#c9a84c" }}
            >
              Documento Legal
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-black mb-3"
            style={{
              color: "#f0ede6",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Política de Privacidade
          </h1>
          <p className="text-sm" style={{ color: "#8a92a6" }}>
            Gold PT Sites de Apostas — goldptsitesdeapostas.com — Última atualização:{" "}
            {new Date().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="space-y-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded overflow-hidden transition-colors"
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1e2d47",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e2d47")}
            >
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{
                  borderBottom: "1px solid #1e2d47",
                  backgroundColor: "#0d1320",
                }}
              >
                <div
                  className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#1a2235" }}
                >
                  <section.icon className="w-4 h-4" style={{ color: "#c9a84c" }} />
                </div>
                <h2 className="text-sm font-bold" style={{ color: "#f0ede6" }}>
                  {section.title}
                </h2>
              </div>
              <div
                className="px-6 py-5 text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "#8a92a6" }}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div
          className="mt-12 pt-8"
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
