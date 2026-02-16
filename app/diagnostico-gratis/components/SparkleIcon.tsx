export default function SparkleIcon({ size = 40 }: { size?: number }) {
  const scale = size / 40

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* Main star */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="currentColor"
        style={{ position: 'absolute', inset: 0 }}
      >
        <path
          className="sparkle-rotate"
          d="M20 4L23 17L36 20L23 23L20 36L17 23L4 20L17 17L20 4Z"
          style={{
            transformOrigin: '20px 20px',
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.5))',
          }}
        />
      </svg>

      {/* Small sparkle — top right */}
      <svg
        width={Math.round(12 * scale)}
        height={Math.round(12 * scale)}
        viewBox="0 0 12 12"
        fill="currentColor"
        className="sparkle-twinkle"
        style={{
          position: 'absolute',
          top: Math.round(-2 * scale),
          right: Math.round(-2 * scale),
        }}
      >
        <path d="M6 1L7 5L11 6L7 7L6 11L5 7L1 6L5 5L6 1Z" />
      </svg>

      {/* Small sparkle — bottom left */}
      <svg
        width={Math.round(10 * scale)}
        height={Math.round(10 * scale)}
        viewBox="0 0 10 10"
        fill="currentColor"
        className="sparkle-twinkle-delayed"
        style={{
          position: 'absolute',
          bottom: Math.round(-1 * scale),
          left: Math.round(-1 * scale),
        }}
      >
        <path d="M5 0.5L5.8 4.2L9.5 5L5.8 5.8L5 9.5L4.2 5.8L0.5 5L4.2 4.2L5 0.5Z" />
      </svg>
    </div>
  )
}
