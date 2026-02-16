'use client'

import { Search, Target, DollarSign, CheckCircle, TrendingUp, Shield } from 'lucide-react'

const solutions = [
  {
    icon: Search,
    title: 'Detecta clientes en riesgo',
    text: 'Alerta cuando un cliente rompe su ciclo de compra. Tu equipo contacta antes de perderlo.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación recuperada:',
    metricIcon: DollarSign,
    metricValue: '$24–$60 millones',
    clarifier: '',
    metricUnit: 'por cliente recuperado',
    metricDesc: 'Cada cliente que vuelve = toda su facturación anual de vuelta',
    multiplier: '×5 mensual → $120–$300M al año',
  },
  {
    icon: Target,
    title: 'Anticipa reposiciones',
    text: 'Avisa a tu equipo 5–7 días antes de que cada cliente necesite reponer. Llegás primero.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación protegida:',
    metricIcon: Shield,
    metricValue: '$600 mil – $3 millones',
    clarifier: '',
    metricUnit: 'por reposición asegurada',
    metricDesc: 'Llegás antes que la competencia y asegurás cada pedido',
    multiplier: '×10 mensual → $72–$360M al año',
  },
  {
    icon: DollarSign,
    title: 'Venta cruzada automática',
    text: 'Sugiere líneas que tu cliente nunca compró pero sí compran similares. +88% ticket en IEY®.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación adicional:',
    metricIcon: TrendingUp,
    metricValue: '+$2–$10 millones',
    clarifier: '',
    metricUnit: 'por cliente anual',
    metricDesc: 'Clientes grandes pueden sumar $5–$10 millones anuales extra',
    multiplier: '×20 mensual → +$40–$200M al año',
  },
]

export default function SolutionSection() {
  return (
    <section
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #1a2a2c 0%, #293E40 50%, #344B4E 100%)',
      }}
    >
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
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
          Cómo PymePilot recupera{' '}
          <br className="br-hide-mobile" />
          <span
            style={{
              color: '#81B5A1',
              textShadow: '0 0 40px rgba(129,181,161,0.4)',
            }}
          >
            lo que estás perdiendo
          </span>
        </h2>

        <div
          className="grid-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {solutions.map((s, i) => {
            const Icon = s.icon
            const MetricIcon = s.metricIcon
            return (
              <div
                key={i}
                className="hover-scale-lg anim-fade-in-up"
                style={{
                  animationDelay: `${0.15 + i * 0.12}s`,
                  background: 'linear-gradient(135deg, #3d7a63 0%, #4a8a70 100%)',
                  borderRadius: 24,
                  padding: '36px 28px',
                  border: '2px solid #6da88e',
                  boxShadow: '0 8px 32px rgba(129,181,161,0.25)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(129,181,161,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(129,181,161,0.25)'
                }}
              >
                {/* Icon */}
                <div
                  className="hover-icon-rotate"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: '#a3cabb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    boxShadow: '0 8px 24px rgba(165,214,167,0.3)',
                  }}
                >
                  <Icon size={30} color="#1a2a2c" strokeWidth={2.5} />
                </div>

                <h3
                  style={{
                    fontSize: 21,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: 14,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: '0 0 20px' }}>
                  {s.text}
                </p>

                {/* Badge */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(163,202,187,0.2)',
                    border: '2px solid #a3cabb',
                    borderRadius: 12,
                    padding: '6px 16px',
                    fontSize: 13,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    marginBottom: 16,
                  }}
                >
                  <CheckCircle size={14} strokeWidth={3} />
                  {s.badge}
                </span>

                {/* Metric card */}
                <div
                  style={{
                    background: 'rgba(129,181,161,0.15)',
                    border: '2px solid #6da88e',
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
                    <MetricIcon size={18} color="#a3cabb" strokeWidth={2.5} />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 900,
                        color: '#a3cabb',
                      }}
                    >
                      {s.metricLabel}
                    </span>
                  </div>
                  <p style={{ fontSize: 'clamp(17px, 3vw, 22px)', fontWeight: 900, color: '#FFFFFF', margin: '0 0 4px' }}>
                    {s.metricValue}
                  </p>
                  <p style={{ fontSize: 'clamp(12px, 1.8vw, 14px)', color: '#a3cabb', margin: '2px 0 0', fontWeight: 700 }}>
                    {s.metricUnit}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>
                    {s.metricDesc}
                  </p>
                </div>

                {/* Multiplier badge */}
                <div
                  style={{
                    marginTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(129,181,161,0.35)',
                    borderRadius: 10,
                    padding: '10px 14px',
                  }}
                >
                  <CheckCircle size={16} color="#a3cabb" strokeWidth={3} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.4 }}>
                    {s.multiplier}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* How it works */}
        <div
          className="glass-green anim-fade-in-up anim-delay-5"
          style={{
            marginTop: 48,
            borderRadius: 20,
            padding: '28px 32px',
            maxWidth: 720,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', margin: '0 0 20px' }}>
            Cómo funciona
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { num: '1', text: 'Nos conectamos a tu sistema actual', sub: '(ERP, Excel, lo que sea)' },
              { num: '2', text: 'El motor analiza automático cada día' },
              { num: '3', text: 'Tu equipo recibe informe por WhatsApp', highlight: 'con todo listo' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'rgba(129,181,161,0.2)',
                  border: '1.5px solid #6da88e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 800,
                  color: '#a3cabb',
                }}>
                  {step.num}
                </span>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>
                  {step.text}
                  {step.sub && <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}> {step.sub}</span>}
                  {step.highlight && <span style={{ color: '#a3cabb', fontWeight: 700 }}> {step.highlight}</span>}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '16px 0 0', borderTop: '1px solid rgba(129,181,161,0.15)', paddingTop: 14 }}>
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Timeline:</strong> 1-2 semanas setup. 30 segundos por contacto.
          </p>
        </div>
      </div>
    </section>
  )
}
