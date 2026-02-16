export default function AlertLossIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Glow pulse */}
      <circle cx="20" cy="22" r="16" fill="#FF5252" opacity={0.08} className="al-glow" />
      {/* Triángulo */}
      <path
        d="M20 6 L35 32 H5 Z"
        stroke="#FF5252"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(255,82,82,0.1)"
        className="al-triangle"
      />
      {/* Exclamación */}
      <line x1="20" y1="16" x2="20" y2="24" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="28" r="1.5" fill="#FF5252" />
    </svg>
  )
}
