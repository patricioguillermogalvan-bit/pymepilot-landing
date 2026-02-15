'use client'

import { AlertTriangle, Clock, BarChart3, AlertCircle, X } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'No sabés quién se está yendo',
    text: 'Clientes dejan de comprarte en silencio. 60, 90, 120 días sin comprar y tu equipo no se entera hasta que es tarde.',
    iconBg: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    borderColor: '#EF4444',
    shadowColor: 'rgba(239,68,68,0.25)',
    impactLabel: 'PÉRDIDA REAL POR CLIENTE:',
    impactValue: '$24M - $60M',
    clarifier: 'millones',
    impactUnit: 'por año',
    impactDesc: 'Un solo cliente perdido = Hasta $60 millones que no vas a facturar este año',
    impactBg: 'rgba(239,68,68,0.15)',
    impactBorder: '#EF4444',
    impactLabelColor: '#FCA5A5',
    impactDescColor: '#FECACA',
    multiplier: 'Si perdés 5 clientes al año: $120M - $300M millones no facturados',
    multiplierBorder: 'rgba(239,68,68,0.35)',
  },
  {
    icon: Clock,
    title: 'No anticipás cuándo necesitan reponer',
    text: 'Tu competencia contacta al cliente justo cuando necesita stock. Vos llegás tarde porque no llevás registro de ciclos de reposición.',
    iconBg: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
    borderColor: '#F97316',
    shadowColor: 'rgba(249,115,22,0.25)',
    impactLabel: 'OPORTUNIDAD PERDIDA:',
    impactValue: '$600K',
    clarifier: 'mil',
    impactValue2: '$3M',
    clarifier2: 'millones',
    impactUnit: 'por pedido',
    impactDesc: 'Clientes grandes pueden representar pedidos de $1.5 a $3 millones que se lleva tu competencia',
    impactBg: 'rgba(249,115,22,0.15)',
    impactBorder: '#F97316',
    impactLabelColor: '#FDBA74',
    impactDescColor: '#FED7AA',
    multiplier: '10 oportunidades perdidas/mes: $72M - $360M millones/año que no facturás',
    multiplierBorder: 'rgba(249,115,22,0.35)',
  },
  {
    icon: BarChart3,
    title: 'Tickets que no crecen',
    text: 'Clientes compran siempre lo mismo. Nunca les ofreciste productos complementarios porque no sabés qué más necesitan.',
    iconBg: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)',
    borderColor: '#EAB308',
    shadowColor: 'rgba(234,179,8,0.25)',
    impactLabel: 'SIN CROSS-SELL:',
    impactValue: '+30% - 40% ticket',
    clarifier: '',
    impactUnit: 'no aprovechado',
    impactDesc: 'Si incorpora nuevas líneas, su compra anual puede crecer $2M - $10M millones adicionales',
    impactBg: 'rgba(234,179,8,0.15)',
    impactBorder: '#EAB308',
    impactLabelColor: '#FDE68A',
    impactDescColor: '#FEF3C7',
    multiplier: '20 clientes sin cross-sell: $40M - $200M millones/año dejados de facturar',
    multiplierBorder: 'rgba(234,179,8,0.35)',
  },
]

export default function ProblemSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #111111 0%, #1A1A1A 50%, #111111 100%)',
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
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 900,
            lineHeight: 1.12,
            marginBottom: 56,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Por Qu&eacute; Est&aacute;s Perdiendo Clientes
          <br />
          <span style={{ color: '#EF4444' }}>(Y Plata) Todos Los D&iacute;as</span>
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
                  background: '#1E1E1E',
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
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
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
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {p.impactLabel}
                    </span>
                  </div>
                  <p style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, color: '#FFFFFF', margin: '0 0 4px' }}>
                    {p.impactValue}
                    {p.clarifier && <span style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', opacity: 0.8, fontWeight: 700 }}> {p.clarifier}</span>}
                    {(p as any).impactValue2 && <>{' - '}{(p as any).impactValue2}</>}
                    {(p as any).clarifier2 && <span style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', opacity: 0.8, fontWeight: 700 }}> {(p as any).clarifier2}</span>}
                    {' '}
                    <span style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: p.impactLabelColor }}>{p.impactUnit}</span>
                  </p>
                  <p style={{ fontSize: 13, color: p.impactDescColor, margin: 0, lineHeight: 1.4 }}>
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
