'use client'

import { Search, Target, DollarSign, CheckCircle, TrendingUp, Shield } from 'lucide-react'

const solutions = [
  {
    icon: Search,
    title: 'Detecta clientes en riesgo',
    text: 'Analiza tu base todos los días y alerta cuándo un cliente rompió su ciclo de compra. Tu equipo contacta ANTES de que sea tarde.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación Recuperada:',
    metricIcon: DollarSign,
    metricValue: '$24M - $60M',
    clarifier: 'millones',
    metricUnit: 'por cliente/año',
    metricDesc: 'Cada cliente recuperado = Facturación anual completa que vuelve a tu distribuidora',
    multiplier: 'Recuperando 5 clientes al año: $120M - $300M millones vuelven a tu facturación',
  },
  {
    icon: Target,
    title: 'Anticipa reposiciones',
    text: 'Aprende cada cuánto repone cada cliente y avisa a tu equipo 5-7 días ANTES de que necesite. Llegás primero que la competencia.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación Protegida:',
    metricIcon: Shield,
    metricValue: '$600K',
    clarifier: 'mil',
    metricValue2: '$3M',
    clarifier2: 'millones',
    metricUnit: 'por reposición',
    metricDesc: 'Contactás antes que la competencia = Asegurás cada pedido (clientes grandes: $1.5 a $3 millones+)',
    multiplier: 'Anticipando 10 reposiciones/mes: $72M - $360M millones/año asegurados',
  },
  {
    icon: DollarSign,
    title: 'Aumenta ticket con cross-sell',
    text: 'Detecta productos que cada cliente nunca compró pero SÍ compran clientes similares. +88% ticket promedio en IEY®.',
    badge: 'Motor Inteligente',
    metricLabel: 'Facturación Adicional:',
    metricIcon: TrendingUp,
    metricValue: '+$2M - $10M',
    clarifier: 'millones',
    metricUnit: 'por cliente/año',
    metricDesc: 'Si incorpora nuevas líneas que roten bien, clientes grandes pueden sumar $5 a $10 millones adicionales anuales',
    multiplier: '20 clientes adoptando nuevas líneas: +$40M - $200M millones/año adicionales',
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
          C&oacute;mo PymePilot Recupera
          <br />
          <span
            style={{
              color: '#81B5A1',
              textShadow: '0 0 40px rgba(129,181,161,0.4)',
            }}
          >
            Lo Que Est&aacute;s Perdiendo
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
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: '0 0 20px' }}>
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
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s.metricLabel}
                    </span>
                  </div>
                  <p style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, color: '#FFFFFF', margin: '0 0 4px' }}>
                    {s.metricValue}
                    {s.clarifier && <span style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', opacity: 0.8, fontWeight: 700 }}> {s.clarifier}</span>}
                    {(s as any).metricValue2 && <>{' - '}{(s as any).metricValue2}</>}
                    {(s as any).clarifier2 && <span style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', opacity: 0.8, fontWeight: 700 }}> {(s as any).clarifier2}</span>}
                    {' '}
                    <span style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#a3cabb' }}>{s.metricUnit}</span>
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
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            <strong style={{ color: '#FFFFFF' }}>C&oacute;mo funciona:</strong> Nos conectamos a tu
            sistema actual (ERP, Excel, lo que sea) &rarr; El motor analiza autom&aacute;tico cada
            d&iacute;a &rarr; Tu equipo recibe informe por WhatsApp con TODO listo.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', margin: '12px 0 0' }}>
            <strong style={{ color: '#FFFFFF' }}>Timeline:</strong> 1-2 semanas setup. 30 segundos
            por contacto.
          </p>
        </div>
      </div>
    </section>
  )
}
