'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA_LINK =
  'https://wa.me/5491123994719?text=Hola%2C%20vengo%20del%20anuncio.%20Quiero%20agendar%20diagn%C3%B3stico%20gratis%20de%2015%20min.'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'linear-gradient(90deg, #0D3320 0%, #14532D 50%, #0D3320 100%)',
          borderBottom: '3px solid #00C853',
          boxShadow: scrolled
            ? '0 4px 24px rgba(0,200,83,0.15), 0 2px 8px rgba(0,0,0,0.3)'
            : '0 2px 8px rgba(0,0,0,0.2)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* Logo */}
          <div
            className="hover-scale"
            style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'default' }}
          >
            <svg className="header-logo-icon" width="36" height="36" viewBox="0 0 48 48" fill="none">
              <rect x="2.6" y="2.6" width="20.25" height="20.25" rx="4.2" fill="#66BB6A" />
              <rect x="25.1" y="2.6" width="20.25" height="20.25" rx="4.2" fill="#A5D6A7" />
              <rect x="2.6" y="25.1" width="20.25" height="20.25" rx="4.2" fill="#E8F5E9" />
              <rect x="25.1" y="25.1" width="20.25" height="20.25" rx="4.2" fill="#81C784" />
            </svg>
            <span
              className="header-logo-text"
              style={{
                fontWeight: 800,
                fontSize: 20,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Pyme<span style={{ color: '#00E676' }}>Pilot</span>
            </span>
          </div>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-dark"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                ;(window as any).fbq('track', 'Lead', { content_name: 'CTA Header' })
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'linear-gradient(135deg, #00C853 0%, #00E676 100%)',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: 14,
              padding: '11px 24px',
              borderRadius: 12,
              textDecoration: 'none',
              letterSpacing: '0.025em',
              whiteSpace: 'nowrap',
              border: '2px solid #66BB6A',
              boxShadow: '0 4px 20px rgba(0,200,83,0.4)',
              textTransform: 'uppercase' as const,
              textShadow: '0 1px 4px rgba(0,0,0,0.2)',
            }}
          >
            <WhatsAppIcon size={18} />
            AGENDAR AHORA
            <ArrowRight size={16} strokeWidth={3} />
          </a>
        </div>
      </header>
      {/* Spacer - matches hero dark green bg */}
      <div style={{ height: 68, background: '#0D3320' }} />
    </>
  )
}
