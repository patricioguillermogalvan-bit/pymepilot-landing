'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import ChartGrowthIcon from '../components/ChartGrowthIcon'
import AlertLossIcon from '../components/AlertLossIcon'
import InsightIcon from '../components/InsightIcon'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../animations.css'

const WA_PDF =
  'https://wa.me/5491123994719?text=Hola!%20Quiero%20descargar%20el%20Caso%20Completo%20de%20IEY%C2%AE%20en%20PDF'
const WA_DIAG =
  'https://wa.me/5491123994719?text=Hola!%20Me%20identifico%20con%20el%20caso%20IEY%C2%AE.%20Quiero%20un%20diagn%C3%B3stico%20de%2015%20min%20para%20mi%20distribuidora.'

const METRICS = [
  { value: '34% → 74%', label: 'Facturación recurrente', color: '#81B5A1' },
  { value: '+150', label: 'Clientes bajo seguimiento', color: '#6da88e' },
  { value: '6 meses', label: 'Tiempo de transformación', color: '#a3cabb' },
  { value: '68%', label: 'Clientes recuperados', color: '#81B5A1' },
]

const PROBLEMS = [
  'No sabían qué clientes iban a volver a comprar',
  'No sabían cuándo era el momento de contactarlos',
  'No sabían por qué dejaban de comprar',
  'Solo el 34% de su facturación era recurrente — el resto dependía de la suerte',
]

const TIMELINE = [
  {
    month: 'Agosto',
    tag: 'Mes 1',
    title: 'Primera Recuperación',
    description:
      'Contactaron a los 23 clientes que llevaban más de 45 días sin comprar. 15 volvieron a hacer pedido esa misma semana.',
    metric: '15 de 23 clientes recuperados',
    metricColor: '#81B5A1',
    quote: '"No podíamos creer que tantos clientes simplemente estaban esperando que los contactáramos."',
    highlight: false,
  },
  {
    month: 'Septiembre',
    tag: 'Mes 2',
    title: 'Reposición Predictiva',
    description:
      'El sistema empezó a detectar patrones de compra. Antes de que un cliente se quedara sin stock, recibía un mensaje personalizado.',
    metric: 'Tasa de recompra +22%',
    metricColor: '#81B5A1',
    quote: '"Los clientes nos decían: ¿cómo sabían que justo necesitaba?"',
    highlight: false,
  },
  {
    month: 'Octubre',
    tag: 'Mes 3 — PUNTO DE INFLEXIÓN',
    title: 'Todo Cambió Este Mes',
    description:
      'La facturación recurrente cruzó el 50% por primera vez. Los vendedores dejaron de perseguir clientes y empezaron a atender demanda.',
    metric: '58% facturación recurrente',
    metricColor: '#FFD700',
    quote: '"Pasamos de correr atrás de los clientes a que nos busquen ellos."',
    highlight: true,
  },
  {
    month: 'Nov — Dic',
    tag: 'Mes 4-6',
    title: 'Consolidación',
    description:
      'El sistema ya corría solo. Alertas automáticas, mensajes de seguimiento personalizados, y reportes semanales de clientes en riesgo.',
    metric: '74% facturación recurrente',
    metricColor: '#81B5A1',
    quote: '"Hoy el sistema detecta un cliente en riesgo antes de que nosotros nos demos cuenta."',
    highlight: false,
  },
]

const LESSONS = [
  {
    title: 'La recurrencia NO sucede sola',
    before: 'Esperaban que los clientes volvieran solos',
    after: 'Anticipan cuándo contactar a cada uno',
    change: 'Pasaron de reaccionar a anticipar',
  },
  {
    title: 'Los clientes recurrentes valen 5x más',
    before: 'Trataban a todos los clientes igual',
    after: 'Priorizan a los que más recompran',
    change: 'Enfocaron energía donde genera más resultado',
  },
  {
    title: 'Sin sistema, perdés clientes sin saber',
    before: 'Se daban cuenta tarde, por intuición',
    after: 'Alertas automáticas antes de que se vayan',
    change: 'Reemplazaron intuición por datos concretos',
  },
]

const CHECKLIST = [
  'Tenés clientes que dejaron de comprar y no sabés por qué',
  'No tenés forma de saber quién va a recomprar y quién no',
  'Tus vendedores contactan clientes "cuando se acuerdan"',
  'No sabés cuánto dinero perdés en clientes inactivos',
  'Sentís que tu facturación depende demasiado de la suerte',
]

export default function CasoIEYPage() {
  const [checked, setChecked] = useState<boolean[]>(new Array(CHECKLIST.length).fill(false))
  const checkedCount = checked.filter(Boolean).length

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const trackLead = (name: string) => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', 'Lead', { content_name: name })
    }
  }

  return (
    <div style={{ background: '#1a2a2c', minHeight: '100vh', color: '#FFFFFF' }}>
      {/* Back button */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 20px',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link
            href="/diagnostico-gratis"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#81B5A1' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
          >
            <ArrowLeft size={18} />
            Volver al diagnóstico
          </Link>
        </div>
      </div>

      {/* ═══════════ SECCIÓN 1: HERO ═══════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #1a2a2c 0%, #293E40 40%, #1a2a2c 100%)',
          padding: '64px 20px 80px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -60,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(129,181,161,0.12) 0%, transparent 65%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="anim-fade-in-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <ChartGrowthIcon />
          </div>
          <span
            className="glass-green anim-fade-in-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderRadius: 100,
              padding: '8px 20px',
              fontSize: 13,
              fontWeight: 700,
              color: '#FFFFFF',
              border: '2px solid #5a9a84',
              marginBottom: 28,
            }}
          >
            <CheckCircle size={16} strokeWidth={2.5} style={{ color: '#81B5A1' }} />
            Caso de estudio verificable
          </span>
          <h1
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 20,
            }}
          >
            Teníamos el Mismo{' '}
            <span style={{ color: '#81B5A1', textShadow: '0 0 30px rgba(129,181,161,0.4)' }}>
              Problema que Vos
            </span>
          </h1>
          <p
            className="anim-fade-in-up anim-delay-2"
            style={{
              fontSize: 'clamp(16px, 2.5vw, 19px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            IEY® perdía clientes sin saberlo. En 6 meses pasaron de{' '}
            <span style={{ color: '#FF8A80', fontWeight: 700 }}>34%</span> a{' '}
            <span style={{ color: '#81B5A1', fontWeight: 700 }}>74%</span> de facturación recurrente.
            Esta es su historia.
          </p>
        </div>
      </section>

      {/* Métricas */}
      <section style={{ padding: '56px 20px', background: '#1a2a2c' }}>
        <div
          className="grid-responsive"
          style={{
            maxWidth: 800,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="glass-dark anim-fade-in-up hover-lift"
              style={{
                borderRadius: 16,
                padding: '24px 16px',
                textAlign: 'center',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(20px, 4vw, 26px)',
                  fontWeight: 900,
                  color: m.color,
                  marginBottom: 4,
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ SECCIÓN 2: EL PROBLEMA ═══════════ */}
      <section style={{ padding: '56px 20px', background: '#1a2a2c' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2
            className="anim-fade-in-up"
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Julio: El Problema
          </h2>
          <p
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Así estaba IEY® cuando empezaron. ¿Te suena familiar?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PROBLEMS.map((problem, i) => (
              <div
                key={i}
                className="glass-dark anim-fade-in-up"
                style={{
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  borderLeft: '3px solid #FF5252',
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <AlertLossIcon />
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Patricio */}
          <div
            className="anim-fade-in-up"
            style={{
              marginTop: 32,
              padding: '24px 28px',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.03)',
              borderLeft: '3px solid rgba(255,255,255,0.2)',
            }}
          >
            <p
              style={{
                fontSize: 15,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.6)',
                margin: '0 0 8px',
                lineHeight: 1.6,
              }}
            >
              &ldquo;Sabíamos que perdíamos clientes, pero no teníamos forma de saber cuáles,
              ni cuándo contactarlos, ni qué decirles. Era como manejar a ciegas.&rdquo;
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0, fontWeight: 600 }}>
              — Patricio, Director Comercial de IEY®
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ SECCIÓN 3: TIMELINE ═══════════ */}
      <section style={{ padding: '56px 20px', background: '#1a2a2c' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2
            className="anim-fade-in-up"
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            La Transformación{' '}
            <span style={{ color: '#81B5A1' }}>Mes a Mes</span>
          </h2>
          <p
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginBottom: 48,
              lineHeight: 1.6,
            }}
          >
            Qué hicieron, qué funcionó y qué no.
          </p>

          {/* Timeline vertical */}
          <div style={{ position: 'relative' }}>
            {/* Línea vertical */}
            <div
              style={{
                position: 'absolute',
                left: 19,
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #5a9a84 0%, rgba(129,181,161,0.15) 100%)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {TIMELINE.map((step, i) => (
                <div
                  key={i}
                  className="anim-fade-in-up"
                  style={{
                    position: 'relative',
                    paddingLeft: 52,
                    animationDelay: `${0.1 + i * 0.15}s`,
                  }}
                >
                  {/* Círculo */}
                  <div
                    className={step.highlight ? 'anim-pulse-slow' : ''}
                    style={{
                      position: 'absolute',
                      left: 8,
                      top: 4,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: step.highlight ? '#FFD700' : '#5a9a84',
                      border: `3px solid ${step.highlight ? '#FFD700' : '#5a9a84'}`,
                      boxShadow: step.highlight
                        ? '0 0 20px rgba(255,215,0,0.4)'
                        : '0 0 12px rgba(129,181,161,0.3)',
                    }}
                  />

                  {/* Card */}
                  <div
                    className={`glass-dark hover-lift ${step.highlight ? 'anim-pulse-glow' : ''}`}
                    style={{
                      borderRadius: 16,
                      padding: '24px',
                      border: step.highlight
                        ? '1.5px solid rgba(255,215,0,0.4)'
                        : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {/* Tag */}
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 11,
                        fontWeight: 800,
                        color: step.highlight ? '#FFD700' : '#81B5A1',
                        background: step.highlight
                          ? 'rgba(255,215,0,0.12)'
                          : 'rgba(129,181,161,0.12)',
                        padding: '4px 12px',
                        borderRadius: 100,
                        marginBottom: 12,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {step.tag}
                    </span>

                    <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: '#FFFFFF' }}>
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.65)',
                        margin: '0 0 16px',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Métrica */}
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: 13,
                        fontWeight: 700,
                        color: step.metricColor,
                        background: `${step.metricColor}15`,
                        padding: '6px 14px',
                        borderRadius: 8,
                        marginBottom: 16,
                      }}
                    >
                      {step.metric}
                    </div>

                    {/* Quote */}
                    <p
                      style={{
                        fontSize: 13,
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.45)',
                        margin: 0,
                        lineHeight: 1.5,
                        borderLeft: '2px solid rgba(255,255,255,0.1)',
                        paddingLeft: 12,
                      }}
                    >
                      {step.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECCIÓN 4: 3 LECCIONES ═══════════ */}
      <section style={{ padding: '56px 20px', background: '#1a2a2c' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2
            className="anim-fade-in-up"
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            3 Lecciones que{' '}
            <span style={{ color: '#81B5A1' }}>Cambiaron Todo</span>
          </h2>
          <p
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Lo que IEY® aprendió y que aplica a cualquier distribuidora.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {LESSONS.map((lesson, i) => (
              <div
                key={i}
                className="glass-dark anim-fade-in-up hover-lift"
                style={{
                  borderRadius: 16,
                  padding: '28px 24px',
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>
                    <InsightIcon />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>
                    {lesson.title}
                  </h3>
                </div>

                {/* Antes / Después */}
                <div
                  className="grid-responsive"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}
                >
                  <div
                    style={{
                      background: 'rgba(255,82,82,0.06)',
                      border: '1px solid rgba(255,82,82,0.2)',
                      borderRadius: 10,
                      padding: '14px 16px',
                    }}
                  >
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#FF8A80', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Antes
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>
                      {lesson.before}
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'rgba(129,181,161,0.06)',
                      border: '1px solid rgba(129,181,161,0.2)',
                      borderRadius: 10,
                      padding: '14px 16px',
                    }}
                  >
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#81B5A1', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Después
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>
                      {lesson.after}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  → {lesson.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECCIÓN 5: ¿TE IDENTIFICÁS? ═══════════ */}
      <section
        style={{
          padding: '72px 20px',
          background: 'linear-gradient(180deg, #1a2a2c 0%, #1a2a2c 100%)',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2
            className="anim-fade-in-up"
            style={{
              fontSize: 'clamp(22px, 4.5vw, 32px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            ¿Te Identificás con{' '}
            <span style={{ color: '#81B5A1' }}>Esta Historia</span>?
          </h2>
          <p
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginBottom: 36,
              lineHeight: 1.6,
            }}
          >
            Marcá las que te pasan a vos:
          </p>

          {/* Checklist interactivo */}
          <div
            className="glass-dark anim-fade-in-up anim-delay-2"
            style={{ borderRadius: 16, padding: '24px 28px', marginBottom: 32 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CHECKLIST.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggleCheck(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    background: checked[i] ? 'rgba(129,181,161,0.08)' : 'transparent',
                    border: checked[i]
                      ? '1px solid rgba(129,181,161,0.3)'
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: '14px 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#FFFFFF',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      border: checked[i]
                        ? '2px solid #81B5A1'
                        : '2px solid rgba(255,255,255,0.2)',
                      background: checked[i] ? 'rgba(129,181,161,0.15)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      marginTop: 1,
                    }}
                  >
                    {checked[i] && (
                      <CheckCircle size={14} strokeWidth={3} style={{ color: '#81B5A1' }} />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: checked[i] ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {checkedCount >= 3 && (
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#FF8A80',
                  textAlign: 'center',
                  marginTop: 20,
                  marginBottom: 0,
                  animation: 'fadeInUp 0.3s ease-out',
                }}
              >
                {checkedCount === 5
                  ? 'Marcaste las 5. Tu distribuidora necesita esto urgente.'
                  : `Marcaste ${checkedCount} de 5. IEY® tenía exactamente los mismos problemas.`}
              </p>
            )}
          </div>

          {/* 2 CTAs */}
          <div
            className="grid-responsive"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {/* CTA 1: Descargar PDF */}
            <a
              href={WA_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-dark cta-full-mobile"
              onClick={() => trackLead('Lead Magnet: Caso IEY PDF')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 900,
                padding: '18px 20px',
                borderRadius: 14,
                textDecoration: 'none',
                border: '2px solid #6da88e',
                boxShadow: '0 8px 32px rgba(129,181,161,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                textShadow: '0 1px 4px rgba(0,0,0,0.2)',
              }}
            >
              <WhatsAppIcon size={20} />
              Descargar Caso Completo
            </a>

            {/* CTA 2: Diagnóstico */}
            <a
              href={WA_DIAG}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-full-mobile"
              onClick={() => trackLead('Lead Magnet: Caso IEY Diagnóstico')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'transparent',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 900,
                padding: '18px 20px',
                borderRadius: 14,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Quiero Mi Diagnóstico
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: 16,
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            100% gratis &middot; Sin compromiso &middot; Respuesta inmediata
          </p>
        </div>
      </section>
    </div>
  )
}
