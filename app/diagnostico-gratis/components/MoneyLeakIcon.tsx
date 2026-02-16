export default function MoneyLeakIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Billete */}
      <rect x="8" y="14" width="32" height="18" rx="3" fill="currentColor" opacity={0.2} />
      <rect x="12" y="18" width="24" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" opacity={0.15} />

      {/* Símbolo $ */}
      <text
        x="24" y="28"
        fontSize="14"
        fill="currentColor"
        textAnchor="middle"
        fontWeight="bold"
        style={{ fontFamily: 'inherit' }}
      >
        $
      </text>

      {/* Flecha abajo */}
      <path
        d="M24 33 L24 41 M21 38 L24 41 L27 38"
        stroke="#FF4444"
        strokeWidth="2"
        strokeLinecap="round"
        className="lm-drip-arrow"
      />

      {/* Gotas cayendo */}
      <circle cx="16" cy="38" r="2" fill="#FF4444" className="lm-drop lm-drop-1" />
      <circle cx="24" cy="42" r="1.5" fill="#FF4444" className="lm-drop lm-drop-2" />
      <circle cx="32" cy="38" r="2" fill="#FF4444" className="lm-drop lm-drop-3" />
    </svg>
  )
}
