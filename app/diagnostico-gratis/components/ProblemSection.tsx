'use client'

import { AlertTriangle, Clock, BarChart3, AlertCircle, X } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'No sabés quién se va',
    text: 'Clientes dejan de comprar en silencio y tu equipo no se entera hasta que es tarde.',
    iconBg: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    borderColor: '#EF4444',
    shadowColor: 'rgba(239,68,68,0.25)',
    impactLabel: 'P\u00e9rdida por cliente:',
    impactValue: '$24–$60 millones',
    clarifier: '',
    impactUnit: 'por cliente anual',
    impactDesc: 'Cada cliente que se va = toda esa facturación perdida',
    impactBg: 'rgba(239,68,68,0.15)',
    impactBorder: '#EF4444',
    impactLabelColor: '#FCA5A5',
    impactDescColor: '#FECACA',
    multiplier: '×5 mensual → $120–$300M al año',
    multiplierBorder: 'rgba(239,68,68,0.35)',
  },
  {
    icon: Clock,
    title: 'No anticipás reposiciones',
    text: 'Tu competencia contacta al cliente cuando necesita stock. Vos llegás tarde porque no registrás ciclos.',
    iconBg: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
    borderColor: '#F97316',
    shadowColor: 'rgba(249,115,22,0.25)',
    impactLabel: 'Oportunidad perdida:',
    impactValue: '$600 mil – $3 millones',
    clarifier: '',
    impactUnit: 'por pedido',
    impactDesc: 'Cada pedido que llega tarde se lo lleva la competencia',
    impactBg: 'rgba(249,115,22,0.15)',
    impactBorder: '#F97316',
    impactLabelColor: '#FDBA74',
    impactDescColor: '#FED7AA',
    multiplier: '×10 mensual → $72–$360M al año',
    multiplierBorder: 'rgba(249,115,22,0.35)',
  },
  {
    icon: BarChart3,
    title: 'Tickets que no crecen',
    text: 'Compran siempre lo mismo porque nadie les ofrece líneas complementarias.',
    iconBg: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)',
    borderColor: '#EAB308',
    shadowColor: 'rgba(234,179,8,0.25)',
    impactLabel: 'Sin venta cruzada:',
    impactValue: '$2–$10 millones',
    clarifier: '',
    impactUnit: 'por cliente anual',
    impactDesc: 'Cada cliente podría comprar más líneas pero nadie se las ofrece',
    impactBg: 'rgba(234,179,8,0.15)',
    impactBorder: '#EAB308',
    impactLabelColor: '#FDE68A',
    impactDescColor: '#FEF3C7',
    multiplier: '×20 mensual → $40–$200M al año',
    multiplierBorder: 'rgba(234,179,8,0.35)',
  },
]

export default function ProblemSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '36px 20px 80px',
        background: 'linear-gradient(180deg, #293E40 0%, #344B4E 50%, #293E40 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle red decorative glow */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -60,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -40,
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          className="anim-fade-in-up"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(24px, 5vw, 44px)',
            fontWeight: 900,
            lineHeight: 1.12,
            marginBottom: 56,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Perdés clientes <span style={{ color: '#EF4444' }}>y plata</span>
        </h2>

        <div
          className="grid-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="hover-scale-lg anim-fade-in-up"
                style={{
                  animationDelay: `${0.15 + i * 0.12}s`,
                  background: '#344B4E',
                  borderRadius: 24,
                  padding: '36px 28px',
                  border: `2px solid ${p.borderColor}33`,
                  boxShadow: `0 4px 20px ${p.shadowColor}`,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.borderColor
                  e.currentTarget.style.boxShadow = `0 12px 40px ${p.shadowColor}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${p.borderColor}33`
                  e.currentTarget.style.boxShadow = `0 4px 20px ${p.shadowColor}`
                }}
              >
                {/* Icon */}
                <div
                  className="hover-icon-rotate"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: p.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    boxShadow: `0 8px 24px ${p.shadowColor}`,
                  }}
                >
                  <Icon size={30} color="#fff" strokeWidth={2.5} />
                </div>

                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: 14,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
                  {p.text}
                </p>

                {/* Impact card */}
                <div
                  style={{
                    background: p.impactBg,
                    border: `2px solid ${p.impactBorder}`,
                    borderRadius: 14,
                    padding: '16px 18px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <AlertCircle size={18} color={p.impactLabelColor} strokeWidth={2.5} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 900,
                        color: p.impactLabelColor,
                      }}
                    >
                      {p.impactLabel}
                    </span>
                  </div>
                  <p style={{ fontSize: 'clamp(17px, 3vw, 22px)', fontWeight: 900, color: '#FFFFFF', margin: '0 0 4px' }}>
                    {p.impactValue}
                  </p>
                  <p style={{ fontSize: 'clamp(12px, 1.8vw, 14px)', color: p.impactLabelColor, margin: '2px 0 0', fontWeight: 700 }}>
                    {p.impactUnit}
                  </p>
                  <p style={{ fontSize: 13, color: p.impactDescColor, margin: 0, marginTop: 6, lineHeight: 1.4 }}>
                    {p.impactDesc}
                  </p>
                </div>

                {/* Multiplier badge */}
                <div
                  style={{
                    marginTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'rgba(30,30,30,0.6)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: `1px solid ${p.multiplierBorder}`,
                    borderRadius: 10,
                    padding: '10px 14px',
                  }}
                >
                  <X size={16} color={p.impactLabelColor} strokeWidth={3} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.4 }}>
                    {p.multiplier}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
