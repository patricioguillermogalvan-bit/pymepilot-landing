export default function MinimalFooter() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        padding: '20px 24px',
        textAlign: 'center',
        background: '#1a2a2c',
        borderTop: '1px solid rgba(129,181,161,0.1)',
        fontSize: 13,
        color: 'rgba(255,255,255,0.3)',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px 20px',
        }}
      >
        <span>&copy; {year} PymePilot. Todos los derechos reservados.</span>
        <a
          href="/legal/terms-of-service"
          style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'underline', textUnderlineOffset: 3 }}
        >
          T&eacute;rminos
        </a>
        <a
          href="/legal/privacy-policy"
          style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'underline', textUnderlineOffset: 3 }}
        >
          Privacidad
        </a>
      </div>
    </footer>
  )
}
