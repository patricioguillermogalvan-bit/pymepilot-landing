'use client'

import { Shield, ArrowRight, CheckCircle } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WA_LINK =
  'https://wa.me/5491123994719?text=Hola%2C%20vengo%20del%20anuncio.%20Quiero%20agendar%20diagn%C3%B3stico%20gratis%20de%2015%20min.'

const incentives = [
  'Sin compromiso de compra',
  'Setup gratis (quedan 7 cupos)',
  '15 minutos por WhatsApp',
]

export default function GuaranteeCTA() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '96px 20px',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 100%)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Green glow center */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 55%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Guarantee box */}
        <div
          className="anim-fade-in-up"
          style={{
            background: 'linear-gradient(135deg, #00832D 0%, #00A844 50%, #00832D 100%)',
            border: '3px solid #66BB6A',
            borderRadius: 28,
            padding: '48px 36px',
            marginBottom: 40,
            boxShadow: '0 12px 48px rgba(0,200,83,0.3)',
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              margin: '0 auto 24px',
              borderRadius: '50%',
              background: '#A5D6A7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(165,214,167,0.4)',
            }}
          >
            <Shield size={40} color="#0D3320" strokeWidth={2} />
          </div>

          <h3 style={{ fontSize: 'clamp(24px, 4.5vw, 32px)', fontWeight: 900, color: '#FFFFFF', marginBottom: 16 }}>
            Garant&iacute;a 90 D&iacute;as &mdash; 100% Money Back
          </h3>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            Si en 90 d&iacute;as no aumenta tu facturaci&oacute;n recurrente, te devolvemos TODO.
            Sin preguntas. Sin letra chica.
          </p>
        </div>

        {/* Urgency */}
        <div
          className="glass-dark anim-fade-in-up anim-delay-1"
          style={{
            borderRadius: 16,
            padding: '24px 28px',
            marginBottom: 48,
          }}
        >
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            Cada d&iacute;a sin seguimiento inteligente = clientes que se van en silencio.
            <br />
            IEY&reg; lo resolvi&oacute; en 6 meses.{' '}
            <strong style={{ color: '#00E676' }}>&iquest;Cu&aacute;nto m&aacute;s vas a esperar?</strong>
          </p>
        </div>

        {/* CTA Final - WHITE TEXT + WhatsApp GIANT */}
        <div className="anim-fade-in-up anim-delay-2" style={{ marginBottom: 32 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-dark anim-pulse-glow cta-full-mobile"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                ;(window as any).fbq('track', 'Lead', { content_name: 'CTA Final' })
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              background: 'linear-gradient(135deg, #00C853 0%, #00E676 100%)',
              color: '#FFFFFF',
              fontSize: 'clamp(17px, 3vw, 24px)',
              fontWeight: 900,
              padding: '24px 52px',
              borderRadius: 20,
              textDecoration: 'none',
              border: '3px solid #66BB6A',
              boxShadow: '0 12px 48px rgba(0,200,83,0.5)',
              letterSpacing: '0.025em',
              textTransform: 'uppercase' as const,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <span className="anim-bounce-sub" style={{ display: 'flex' }}>
              <WhatsAppIcon size={28} />
            </span>
            AGENDAR DIAGN&Oacute;STICO GRATIS AHORA
            <ArrowRight size={24} strokeWidth={3} />
          </a>
        </div>

        {/* Incentives */}
        <div
          className="incentives-responsive anim-fade-in-up anim-delay-3"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px 32px',
            marginBottom: 56,
          }}
        >
          {incentives.map((text, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#00E676',
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <CheckCircle size={18} strokeWidth={2.5} />
              {text}
            </span>
          ))}
        </div>

        {/* Founder card */}
        <div
          className="glass-green founder-card-responsive anim-fade-in-up anim-delay-4"
          style={{
            borderRadius: 24,
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
          }}
        >
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                background: '#00C853',
                opacity: 0.3,
                filter: 'blur(10px)',
              }}
            />
            <div
              style={{
                position: 'relative',
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00C853 0%, #00A844 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 24,
                border: '3px solid #66BB6A',
              }}
            >
              PG
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.85)',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Gestiono 150 clientes mayoristas en IEY&reg;. En 15 minutos vemos si el
              sistema aplica a tu distribuidora.&rdquo;
            </p>
            <span
              style={{
                fontSize: 13,
                color: '#00E676',
                fontWeight: 800,
                marginTop: 10,
                display: 'block',
              }}
            >
              &mdash; Patricio G., Fundador PymePilot
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
