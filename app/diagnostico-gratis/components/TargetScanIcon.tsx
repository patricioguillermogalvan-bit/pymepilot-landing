export default function TargetScanIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Anillos concéntricos */}
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" opacity={0.15} className="lm-ring lm-ring-1" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" opacity={0.3} className="lm-ring lm-ring-2" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" opacity={0.5} className="lm-ring lm-ring-3" />

      {/* Líneas de scan (crosshair) */}
      <line x1="24" y1="4" x2="24" y2="15" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="33" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="24" y1="33" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="4" y1="24" x2="15" y2="24" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />

      {/* Centro pulsante */}
      <circle cx="24" cy="24" r="3" fill="#7C3AED" className="lm-center-pulse" />
    </svg>
  )
}
