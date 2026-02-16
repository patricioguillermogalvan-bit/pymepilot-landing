export default function AnalyticsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Eje */}
      <path d="M6 34 L6 8 M6 34 L34 34" stroke="currentColor" strokeWidth="1.5" opacity={0.2} />
      {/* Barras */}
      <rect x="10" y="26" width="5" height="8" rx="1" fill="currentColor" opacity={0.25} />
      <rect x="18" y="20" width="5" height="14" rx="1" fill="currentColor" opacity={0.4} className="an-bar an-bar-2" />
      <rect x="26" y="12" width="5" height="22" rx="1" fill="currentColor" opacity={0.6} className="an-bar an-bar-3" />
      {/* Línea de tendencia */}
      <path
        d="M12 24 L20 18 L28 10"
        stroke="#00D084"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="an-trend-line"
      />
      {/* Punto final pulsante */}
      <circle cx="28" cy="10" r="2.5" fill="#00D084" className="an-endpoint" />
    </svg>
  )
}
