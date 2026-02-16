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
        background: 'linear-gradient(180deg, #1a2a2c 0%, #1a2a2c 100%)',
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
          background: 'radial-gradient(circle, rgba(129,181,161,0.12) 0%, transparent 55%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Guarantee box */}
        <div
          className="anim-fade-in-up left-on-mobile"
          style={{
            background: 'linear-gradient(135deg, #3d7a63 0%, #4a8a70 50%, #3d7a63 100%)',
            border: '3px solid #6da88e',
            borderRadius: 28,
            padding: '48px 36px',
            marginBottom: 40,
            boxShadow: '0 12px 48px rgba(129,181,161,0.3)',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              margin: '0 0 20px',
              borderRadius: '50%',
              background: '#a3cabb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(163,202,187,0.4)',
            }}
          >
            <Shield size={32} color="#1a2a2c" strokeWidth={2} />
          </div>

          <h3 style={{ fontSize: 'clamp(22px, 4.5vw, 32px)', fontWeight: 900, color: '#FFFFFF', marginBottom: 16, textAlign: 'left' }}>
            Garantía 90 días
          </h3>
          <p style={{ fontSize: 'clamp(15px, 2.2vw, 18px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', margin: 0, textAlign: 'left' }}>
            Si en 90 días no aumenta tu facturación recurrente, te devolvemos todo. Sin preguntas. Sin letra chica.
          </p>
        </div>

        {/* Urgency */}
        <div
          className="glass-dark anim-fade-in-up anim-delay-1 left-on-mobile"
          style={{
            borderRadius: 16,
            padding: '24px 28px',
            marginBottom: 48,
            textAlign: 'left',
          }}
        >
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.5 }}>
            Cada día sin seguimiento inteligente = <span style={{ color: '#FF8A80' }}>clientes que se van en silencio</span>
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '0 0 8px' }}>
            IEY&reg; lo resolvió en 6 meses.
          </p>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', fontWeight: 800, color: '#81B5A1', margin: 0 }}>
            ¿Cuánto más vas a esperar?
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
              background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
              color: '#FFFFFF',
              fontSize: 'clamp(17px, 3vw, 24px)',
              fontWeight: 900,
              padding: '24px 52px',
              borderRadius: 20,
              textDecoration: 'none',
              border: '3px solid #6da88e',
              boxShadow: '0 12px 48px rgba(129,181,161,0.5)',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <span className="anim-bounce-sub" style={{ display: 'flex' }}>
              <WhatsAppIcon size={28} />
            </span>
            Agendar diagnóstico gratis
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
                color: '#81B5A1',
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
                background: '#5a9a84',
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
                background: 'linear-gradient(135deg, #5a9a84 0%, #4a8a70 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: 24,
                border: '3px solid #6da88e',
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
                color: '#81B5A1',
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
