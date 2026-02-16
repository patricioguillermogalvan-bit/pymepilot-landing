'use client'

import { ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA_LINK =
  'https://wa.me/5491123994719?text=Hola%2C%20vengo%20del%20anuncio.%20Quiero%20agendar%20diagn%C3%B3stico%20gratis%20de%2015%20min.'

export default function CTARepeat() {
  return (
    <section
      style={{
        padding: '48px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #1a2a2c 0%, #293E40 100%)',
        borderTop: '1px solid rgba(129,181,161,0.15)',
        borderBottom: '1px solid rgba(129,181,161,0.15)',
      }}
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-dark cta-full-mobile"
        onClick={() => {
          if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
            ;(window as any).fbq('track', 'Lead', { content_name: 'CTA Repeat' })
          }
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          background: 'linear-gradient(135deg, #4a8a70 0%, #5a9a84 100%)',
          color: '#FFFFFF',
          fontSize: 'clamp(15px, 2.5vw, 18px)',
          fontWeight: 900,
          padding: '18px 40px',
          borderRadius: 14,
          textDecoration: 'none',
          border: '2px solid #81B5A1',
          boxShadow: '0 8px 32px rgba(129,181,161,0.4)',
          textShadow: '0 2px 6px rgba(0,0,0,0.25)',
        }}
      >
        <span className="anim-bounce-sub" style={{ display: 'flex' }}>
          <WhatsAppIcon size={20} />
        </span>
        Agendar reunión gratis
        <ArrowRight size={18} strokeWidth={3} />
      </a>
      <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
        Sin compromiso. Setup gratis. Garant&iacute;a 90 d&iacute;as.
      </p>
    </section>
  )
}
