'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA_LINK =
  'https://wa.me/5491123994719?text=Hola%2C%20vengo%20del%20anuncio.%20Quiero%20agendar%20diagn%C3%B3stico%20gratis%20de%2015%20min.'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a2a2c 0%, #293E40 40%, #344B4E 100%)',
        padding: '72px 20px 88px',
      }}
    >
      {/* Decorative green blobs */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -60,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(129,181,161,0.15) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -40,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(129,181,161,0.1) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 840, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Trust badge */}
        <div className="anim-fade-in-up" style={{ marginBottom: 36 }}>
          <span
            className="glass-green"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: 15,
              fontWeight: 700,
              color: '#FFFFFF',
              border: '2px solid #5a9a84',
              boxShadow: '0 4px 20px rgba(129,181,161,0.25)',
            }}
          >
            <CheckCircle size={18} strokeWidth={2.5} style={{ color: '#81B5A1' }} />
            Caso IEY&reg;: de 34% a 74% recurrente en 6 meses
          </span>
        </div>

        {/* Headline */}
        <h1
          className="anim-fade-in-up anim-delay-1"
          style={{
            fontSize: 'clamp(36px, 7vw, 68px)',
            fontWeight: 900,
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: 28,
            color: '#FFFFFF',
          }}
        >
          Tu distribuidora pierde clientes cada semana{' '}
          <br className="br-hide-mobile" />
          <span
            style={{
              color: '#81B5A1',
              textShadow: '0 0 40px rgba(129,181,161,0.5)',
            }}
          >
            y nadie te avisa
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="anim-fade-in-up anim-delay-2"
          style={{
            fontSize: 'clamp(17px, 2.5vw, 21px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 700,
            margin: '0 auto 14px',
          }}
        >

          <strong style={{ color: '#FFFFFF' }}>PymePilot</strong> detecta qu&eacute; clientes se est&aacute;n yendo,
          cu&aacute;ndo necesitan reponer y qu&eacute; ofrecerles para que vuelvan.
        </p>
        <p
          className="anim-fade-in-up anim-delay-3"
          style={{
            fontSize: 'clamp(16px, 2.2vw, 18px)',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 640,
            margin: '0 auto 48px',
          }}
        >
          Tu equipo recibe un informe diario por WhatsApp:
          qui&eacute;n contactar, qu&eacute; ofrecerle y el mensaje listo.
        </p>

        {/* CTA primary - WHITE TEXT + WhatsApp logo */}
        <div className="anim-fade-in-up anim-delay-4" style={{ marginBottom: 56 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-dark anim-pulse-slow cta-full-mobile"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                ;(window as any).fbq('track', 'Lead', { content_name: 'CTA Hero' })
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
              color: '#FFFFFF',
              fontSize: 'clamp(17px, 2.8vw, 22px)',
              fontWeight: 900,
              padding: '22px 48px',
              borderRadius: 16,
              textDecoration: 'none',
              border: '3px solid #6da88e',
              boxShadow: '0 8px 40px rgba(129,181,161,0.5)',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <span className="anim-bounce-sub" style={{ display: 'flex' }}>
              <WhatsAppIcon size={26} />
            </span>
            Agendar diagnóstico gratis
            <ArrowRight size={22} strokeWidth={3} />
          </a>
        </div>

        {/* Hero Image placeholder */}
        <div className="anim-fade-in-up anim-delay-5">
          <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
            <div
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: 24,
                border: '3px solid #5a9a84',
                boxShadow: '0 0 40px rgba(129,181,161,0.3), inset 0 0 40px rgba(129,181,161,0.05)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #2a4a3e 0%, #293E40 50%, #1a2a2c 100%)',
                borderRadius: 20,
                padding: '64px 24px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 12 }}>&#128202;</div>
              <p style={{ fontWeight: 700, color: '#a3cabb' }}>Dashboard PymePilot</p>
              <p style={{ fontSize: 13, marginTop: 4, color: 'rgba(255,255,255,0.4)' }}>
                Imagen pr&oacute;ximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
