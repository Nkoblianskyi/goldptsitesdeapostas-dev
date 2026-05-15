import type React from "react"

interface LogoProps {
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg"
  showWordmark?: boolean
  className?: string
}

const sizeMap = {
  sm: { icon: 28, text: "text-base", sub: "text-[9px]" },
  md: { icon: 36, text: "text-lg", sub: "text-[10px]" },
  lg: { icon: 48, text: "text-2xl", sub: "text-xs" },
}

export default function Logo({
  variant = "dark",
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const { icon, text, sub } = sizeMap[size]
  const goldColor = "#c9a84c"
  const goldLight = "#e2c97e"
  const navyColor = variant === "dark" ? "#0a0e1a" : "#ffffff"
  const textColor = variant === "dark" ? "#f0ede6" : "#0a0e1a"
  const subColor = variant === "dark" ? "#c9a84c" : "#a8873b"

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Faceted diamond icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer diamond shape */}
        <polygon
          points="24,2 46,24 24,46 2,24"
          fill={goldColor}
          stroke={goldLight}
          strokeWidth="0.5"
        />
        {/* Top facet */}
        <polygon
          points="24,2 46,24 24,18"
          fill={goldLight}
          opacity="0.9"
        />
        {/* Left facet */}
        <polygon
          points="24,2 2,24 24,18"
          fill={goldColor}
          opacity="0.75"
        />
        {/* Right facet */}
        <polygon
          points="46,24 24,46 24,30"
          fill={goldColor}
          opacity="0.6"
        />
        {/* Bottom facet */}
        <polygon
          points="2,24 24,46 24,30"
          fill="#a8873b"
          opacity="0.8"
        />
        {/* Center facet */}
        <polygon
          points="24,18 46,24 24,30 2,24"
          fill={goldLight}
          opacity="0.35"
        />
        {/* Inner letter G */}
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="700"
          fontSize="16"
          fill={navyColor}
          opacity="0.92"
        >
          G
        </text>
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`${text} font-bold tracking-tight`}
            style={{
              color: textColor,
              fontFamily: "var(--font-playfair), Georgia, serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: goldColor }}>GOLD PT</span>
          </span>
          <span
            className={`${sub} font-semibold tracking-widest uppercase`}
            style={{
              color: subColor,
              fontFamily: "var(--font-inter), sans-serif",
              letterSpacing: "0.18em",
            }}
          >
            Sites de Apostas
          </span>
        </div>
      )}
    </div>
  )
}
