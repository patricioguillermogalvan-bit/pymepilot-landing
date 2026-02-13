'use client'

import { useState, useEffect } from 'react'

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/;SameSite=Lax`
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const existing = getCookie('pymepilot-cookie-consent')
    if (!existing) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const save = (p: CookiePreferences) => {
    setCookie('pymepilot-cookie-consent', JSON.stringify(p), 365)
    setVisible(false)
    setShowPrefs(false)
  }

  const acceptAll = () => save({ essential: true, analytics: true, marketing: true })
  const rejectNonEssential = () => save({ essential: true, analytics: false, marketing: false })
  const saveCustom = () => save(prefs)

  if (!visible) return null

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <div style={styles.content}>
          <div style={styles.header}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81B5A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(129,181,161,0.12)" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span style={styles.headerText}>Privacidad y Cookies</span>
          </div>

          <p style={styles.text}>
            Utilizamos cookies esenciales para el funcionamiento del sitio, cookies analíticas (Google Analytics) y cookies de marketing (Meta Pixel) para mejorar su experiencia y mostrar anuncios relevantes. Puede gestionar sus preferencias en nuestra{' '}
            <a href="/legal/cookie-policy" style={styles.link}>Política de Cookies</a>.
          </p>

          {showPrefs && (
            <div style={styles.prefsPanel}>
              <label style={styles.prefRow}>
                <span style={styles.prefInfo}>
                  <span style={styles.prefName}>Esenciales</span>
                  <span style={styles.prefDesc}>Necesarias para el funcionamiento del sitio</span>
                </span>
                <span style={styles.toggleDisabled}>
                  <span style={styles.toggleKnobOn} />
                </span>
              </label>

              <label style={styles.prefRow}>
                <span style={styles.prefInfo}>
                  <span style={styles.prefName}>Analíticas</span>
                  <span style={styles.prefDesc}>Google Analytics — uso del sitio</span>
                </span>
                <button
                  type="button"
                  onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                  style={prefs.analytics ? styles.toggleOn : styles.toggleOff}
                  aria-label="Toggle analíticas"
                >
                  <span style={prefs.analytics ? styles.toggleKnobOn : styles.toggleKnobOff} />
                </button>
              </label>

              <label style={styles.prefRow}>
                <span style={styles.prefInfo}>
                  <span style={styles.prefName}>Marketing</span>
                  <span style={styles.prefDesc}>Meta Pixel — publicidad personalizada</span>
                </span>
                <button
                  type="button"
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  style={prefs.marketing ? styles.toggleOn : styles.toggleOff}
                  aria-label="Toggle marketing"
                >
                  <span style={prefs.marketing ? styles.toggleKnobOn : styles.toggleKnobOff} />
                </button>
              </label>
            </div>
          )}

          <div style={styles.actions}>
            <button onClick={acceptAll} style={styles.btnPrimary}>
              Aceptar Todo
            </button>
            <button onClick={rejectNonEssential} style={styles.btnSecondary}>
              Rechazar No Esenciales
            </button>
            {!showPrefs ? (
              <button onClick={() => setShowPrefs(true)} style={styles.btnGhost}>
                Personalizar
              </button>
            ) : (
              <button onClick={saveCustom} style={styles.btnGhost}>
                Guardar Preferencias
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    animation: 'cookieSlideUp 0.4s ease-out',
  },
  banner: {
    background: 'rgba(26, 42, 44, 0.97)',
    backdropFilter: 'blur(16px)',
    borderTop: '1px solid rgba(129, 181, 161, 0.25)',
    boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.3)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
  },
  headerText: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '15px',
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: '-0.01em',
  },
  text: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#9AABAE',
    margin: '0 0 20px 0',
    maxWidth: '800px',
  },
  link: {
    color: '#81B5A1',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  prefsPanel: {
    background: 'rgba(52, 75, 78, 0.5)',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '20px',
    border: '1px solid rgba(129, 181, 161, 0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  prefRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
  },
  prefInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  prefName: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    color: '#FFFFFF',
  },
  prefDesc: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '12px',
    color: '#6B7C7F',
  },
  toggleOn: {
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    background: '#81B5A1',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    flexShrink: 0,
    transition: 'background 0.2s',
    padding: 0,
  },
  toggleOff: {
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    background: '#374143',
    border: '1px solid #4A5759',
    cursor: 'pointer',
    position: 'relative',
    flexShrink: 0,
    transition: 'background 0.2s',
    padding: 0,
  },
  toggleDisabled: {
    width: '44px',
    height: '24px',
    borderRadius: '9999px',
    background: '#81B5A1',
    opacity: 0.6,
    position: 'relative',
    flexShrink: 0,
    display: 'inline-block',
  },
  toggleKnobOn: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#FFFFFF',
    transition: 'all 0.2s',
    display: 'block',
  },
  toggleKnobOff: {
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#9AABAE',
    transition: 'all 0.2s',
    display: 'block',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
  },
  btnPrimary: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '14px',
    padding: '10px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#81B5A1',
    color: '#293E40',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  btnSecondary: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '14px',
    padding: '10px 24px',
    borderRadius: '8px',
    border: '1.5px solid #4A5759',
    cursor: 'pointer',
    background: 'transparent',
    color: '#D1DADC',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  btnGhost: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '14px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    color: '#81B5A1',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
}
