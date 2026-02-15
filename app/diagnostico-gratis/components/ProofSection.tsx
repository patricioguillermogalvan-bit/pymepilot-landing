'use client'

import { TrendingDown, DollarSign, Users, TrendingUp, ArrowRight, ArrowUp, CheckCircle } from 'lucide-react'

const stats = [
  {
    value: '-56%',
    label: 'Clientes perdidos/mes',
    icon: TrendingDown,
  },
  {
    value: '+88%',
    label: 'Ticket promedio',
    icon: DollarSign,
  },
  {
    value: '18',
    label: 'Clientes recuperados en 30 días',
    icon: Users,
  },
]

export default function ProofSection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 20px',
        background: '#0A0A0A',
      }}
    >
      {/* Subtle green overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,200,83,0.03)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main metric card - GREEN */}
        <div
          className="anim-fade-in-up"
          style={{
            maxWidth: 660,
            margin: '0 auto 56px',
            background: 'linear-gradient(135deg, #00832D 0%, #00A844 50%, #00832D 100%)',
            borderRadius: 24,
            padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)',
            border: '2px solid #66BB6A',
            boxShadow: '0 12px 48px rgba(0,200,83,0.3)',
            textAlign: 'center',
          }}
        >
          <div
            className="metric-responsive"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 5vw, 40px)',
              marginBottom: 16,
            }}
          >
            {/* Before */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(48px, 10vw, 80px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                34%
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 2 }}>
                Antes
              </div>
            </div>

            {/* Arrow */}
            <div className="anim-float">
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: '#00E676',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 28px rgba(0,230,118,0.4)',
                }}
              >
                <ArrowRight size={30} color="#0D0D0D" strokeWidth={3} />
              </div>
            </div>

            {/* After */}
            <div>
              <div
                style={{
                  fontSize: 'clamp(48px, 10vw, 80px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#C8E6C9',
                  textShadow: '0 0 40px rgba(200,255,200,0.5)',
                }}
              >
                74%
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 2 }}>
                Despu&eacute;s
              </div>
            </div>
          </div>

          <p style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
            Facturaci&oacute;n Recurrente en 6 meses
          </p>

          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(0,230,118,0.25)',
              border: '2px solid #A5D6A7',
              borderRadius: 100,
              padding: '8px 20px',
              fontSize: 16,
              fontWeight: 900,
              color: '#FFFFFF',
            }}
          >
            <TrendingUp size={18} strokeWidth={3} />
            +114.8% mejora
          </span>
        </div>

        {/* Stats grid - GREEN cards */}
        <div
          className="grid-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="hover-lift anim-fade-in-up"
                style={{
                  animationDelay: `${0.1 + i * 0.1}s`,
                  background: 'linear-gradient(135deg, #14532D 0%, #1B5E20 100%)',
                  borderRadius: 20,
                  padding: '32px 24px',
                  border: '2px solid #00C853',
                  boxShadow: '0 4px 20px rgba(0,200,83,0.2)',
                }}
              >
                {/* Icon */}
                <div
                  className="hover-icon-rotate"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: '#00E676',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    boxShadow: '0 8px 24px rgba(0,230,118,0.3)',
                  }}
                >
                  <Icon size={28} color="#0D0D0D" strokeWidth={2.5} />
                </div>

                {/* Value */}
                <div
                  style={{
                    fontSize: 'clamp(36px, 6vw, 48px)',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: 8,
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Badge IEY - Social Proof Premium */}
        <div style={{ marginTop: 56, textAlign: 'center' }}>

          {/* Texto conector con flechas modernas */}
          <p
            className="anim-fade-in-up"
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 20,
              fontWeight: 600,
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <span className="anim-bounce-sub" style={{ display: 'flex', color: '#00E676' }}>
              <ArrowUp size={22} strokeWidth={3} />
            </span>
            Resultados reales validados en:
            <span className="anim-bounce-sub" style={{ display: 'flex', color: '#00E676' }}>
              <ArrowUp size={22} strokeWidth={3} />
            </span>
          </p>

          {/* Card Premium IEY */}
          <div
            className="anim-fade-in-up anim-delay-1"
            style={{
              position: 'relative',
              maxWidth: 640,
              margin: '0 auto',
              background: 'linear-gradient(135deg, #0D3320 0%, #14532D 50%, #0D3320 100%)',
              borderRadius: 24,
              padding: '48px 32px 40px',
              border: '4px solid #00C853',
              boxShadow: '0 16px 64px rgba(0,200,83,0.35), 0 0 0 1px rgba(0,200,83,0.1)',
              transition: 'transform 0.3s ease',
              overflow: 'visible',
            }}
          >
            {/* Glow effect de fondo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500,
                height: 500,
                background: 'radial-gradient(circle, rgba(0,200,83,0.15) 0%, transparent 60%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            {/* Badge "CASO VALIDADO" flotante */}
            <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #00C853, #00E676)',
                  color: '#0D3320',
                  fontWeight: 900,
                  fontSize: 13,
                  padding: '8px 20px',
                  borderRadius: 100,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  boxShadow: '0 4px 20px rgba(0,200,83,0.5)',
                  whiteSpace: 'nowrap',
                }}
              >
                <CheckCircle size={16} strokeWidth={3} />
                CASO VALIDADO
              </span>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>

              {/* Logo IEY + Título */}
              <div
                className="iey-logo-responsive"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 24,
                  marginBottom: 28,
                }}
              >
                {/* Logo IEY - GRANDE */}
                <div
                  style={{
                    flexShrink: 0,
                    minWidth: 120,
                    padding: 24,
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/icons/IEY - PNG BLANCO CON ESPACIO-13 (1).png"
                    alt="IEY"
                    style={{ height: 64, width: 'auto', objectFit: 'contain' }}
                  />
                </div>

                {/* Textos */}
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', lineHeight: 1.3 }}>
                    Sistema Operativo en IEY&reg;
                  </div>
                  <div style={{ fontSize: 14, color: '#A5D6A7', fontWeight: 600, marginTop: 4 }}>
                    Distribuidor #1 Accesorios MagSafe Argentina
                  </div>
                </div>
              </div>

              {/* Separador decorativo */}
              <div
                style={{
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, #00C853, transparent)',
                  margin: '0 auto 28px',
                  maxWidth: 400,
                }}
              />

              {/* Features - 3 Checks de validación */}
              <div
                className="iey-checks-responsive"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                {/* Check 1 */}
                <div
                  className="glass-dark"
                  style={{
                    borderRadius: 14,
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(0,200,83,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 10px',
                    }}
                  >
                    <CheckCircle size={18} color="#00E676" strokeWidth={2.5} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#FFFFFF' }}>M&eacute;tricas Reales</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>No proyecciones</div>
                </div>

                {/* Check 2 */}
                <div
                  className="glass-dark"
                  style={{
                    borderRadius: 14,
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(0,200,83,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 10px',
                    }}
                  >
                    <CheckCircle size={18} color="#00E676" strokeWidth={2.5} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#FFFFFF' }}>6 Meses Operativo</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Jul-Dic 2025</div>
                </div>

                {/* Check 3 */}
                <div
                  className="glass-dark"
                  style={{
                    borderRadius: 14,
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(0,200,83,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 10px',
                    }}
                  >
                    <CheckCircle size={18} color="#00E676" strokeWidth={2.5} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#FFFFFF' }}>Datos Verificables</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Auditables</div>
                </div>
              </div>

              {/* Testimonio de Agustín - Foco flujo de caja */}
              <div
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: 16,
                  padding: '22px 24px',
                  borderLeft: '4px solid #00C853',
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.85)',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Como due&ntilde;o, lo que m&aacute;s valoro es la{' '}
                  <span style={{ color: '#00E676', fontWeight: 800, fontStyle: 'normal' }}>previsibilidad</span>.
                  Pasar de 34% a 74% de facturaci&oacute;n recurrente sobre la facturaci&oacute;n total del canal me dio un{' '}
                  <span style={{ color: '#00E676', fontWeight: 800, fontStyle: 'normal' }}>flujo de caja estable y predecible</span>.
                  Me permite proyectar mucho mejor a mediano y largo plazo.&rdquo;
                </p>
                <span
                  style={{
                    fontSize: 13,
                    color: '#00E676',
                    fontWeight: 800,
                    marginTop: 12,
                    display: 'block',
                  }}
                >
                  &mdash; Agust&iacute;n M., Fundador IEY&reg;
                </span>
              </div>

            </div>
          </div>

          {/* Disclaimer de transparencia */}
          <p
            className="anim-fade-in-up anim-delay-2"
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              marginTop: 20,
              maxWidth: 500,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5,
            }}
          >
            Todas las m&eacute;tricas mostradas arriba son datos reales del sistema
            operando en IEY&reg; durante 6 meses (Julio-Diciembre 2025).
          </p>
        </div>
      </div>
    </section>
  )
}
