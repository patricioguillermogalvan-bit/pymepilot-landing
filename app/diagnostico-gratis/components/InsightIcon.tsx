export default function InsightIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      {/* Glow */}
      <circle cx="20" cy="18" r="14" fill="#FFD700" opacity={0.06} className="in-glow" />
      {/* Bulbo */}
      <path
        d="M20 6 C13.4 6 8 11.4 8 18 C8 22.4 10.6 26.2 14 28 L14 32 H26 L26 28 C29.4 26.2 32 22.4 32 18 C32 11.4 26.6 6 20 6Z"
        stroke="#FFD700"
        strokeWidth="1.5"
        fill="rgba(255,215,0,0.06)"
      />
      {/* Base */}
      <line x1="15" y1="34" x2="25" y2="34" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="36" x2="24" y2="36" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      {/* Filamento */}
      <path
        d="M17 22 L20 16 L23 22"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
      {/* Rayos */}
      <line x1="20" y1="1" x2="20" y2="4" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" className="in-ray in-ray-1" />
      <line x1="32" y1="8" x2="30" y2="10" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" className="in-ray in-ray-2" />
      <line x1="8" y1="8" x2="10" y2="10" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" className="in-ray in-ray-3" />
    </svg>
  )
}
