export default function ChartGrowthIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Ejes */}
      <path d="M8 40 L8 10 M8 40 L40 40" stroke="currentColor" strokeWidth="1.5" opacity={0.25} />

      {/* Barras */}
      <rect x="13" y="32" width="5" height="8" rx="1" fill="currentColor" opacity={0.3} />
      <rect x="21" y="26" width="5" height="14" rx="1" fill="currentColor" opacity={0.5} className="lm-bar lm-bar-2" />
      <rect x="29" y="16" width="5" height="24" rx="1" fill="currentColor" opacity={0.8} className="lm-bar lm-bar-3" />

      {/* Línea de crecimiento */}
      <path
        d="M15 30 L23 22 L27 19 L33 12"
        stroke="#00D084"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lm-growth-line"
      />

      {/* Punta flecha */}
      <path d="M33 12 L29.5 14 L31 17" fill="#00D084" className="lm-growth-line" />

      {/* Punto final pulsante */}
      <circle cx="33" cy="12" r="3" fill="#00D084" className="lm-endpoint-pulse" />
    </svg>
  )
}
