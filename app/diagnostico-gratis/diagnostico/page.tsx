'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, RotateCcw, Shield, RefreshCw, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../animations.css'

/* ── TIPOS ── */
type Motor = 'retencion' | 'reposicion' | 'expansion'

interface Option {
  text: string
  motor: Motor
}

interface Question {
  question: string
  options: Option[]
}

interface MotorResult {
  key: Motor
  icon: typeof Shield
  title: string
  headline: string
  description: string
  color: string
}

/* ── PLACEHOLDER: Reemplazar preguntas con versiones finales ── */
const QUESTIONS: Question[] = [
  {
    question: '¿Cuál es tu mayor dolor de cabeza hoy?',
    options: [
      { text: 'Clientes que dejan de comprar sin aviso', motor: 'retencion' },
      { text: 'No saber cuándo un cliente necesita reponer', motor: 'reposicion' },
      { text: 'Ticket promedio estancado o en baja', motor: 'expansion' },
    ],
  },
  {
    question: '¿Cómo hace seguimiento tu equipo comercial?',
    options: [
      { text: 'No hay sistema, cada vendedor hace lo suyo', motor: 'retencion' },
      { text: 'Tenemos planillas pero nadie las actualiza', motor: 'reposicion' },
      { text: 'Hacemos seguimiento pero no sabemos qué ofrecer', motor: 'expansion' },
    ],
  },
  {
    question: '¿Cuántos clientes perdiste en los últimos 6 meses?',
    options: [
      { text: 'Más del 20%', motor: 'retencion' },
      { text: 'Entre 10% y 20%', motor: 'reposicion' },
      { text: 'Menos del 10%', motor: 'expansion' },
    ],
  },
  {
    question: '¿Qué porcentaje de tu facturación es recurrente?',
    options: [
      { text: 'Menos del 40%', motor: 'retencion' },
      { text: 'Entre 40% y 60%', motor: 'reposicion' },
      { text: 'Más del 60%', motor: 'expansion' },
    ],
  },
  {
    question: '¿Tu equipo sabe qué clientes están en riesgo HOY?',
    options: [
      { text: 'No, nos enteramos cuando ya se fueron', motor: 'retencion' },
      { text: 'A veces, pero no sistemáticamente', motor: 'reposicion' },
      { text: 'Sí, pero no sabemos cómo reactivarlos', motor: 'expansion' },
    ],
  },
  {
    question: '¿Qué resultado te cambiaría el negocio en 90 días?',
    options: [
      { text: 'Recuperar clientes que se fueron', motor: 'retencion' },
      { text: 'Anticipar pedidos y no perder ventas', motor: 'reposicion' },
      { text: 'Aumentar el ticket promedio por cliente', motor: 'expansion' },
    ],
  },
]

/* ── PLACEHOLDER: Reemplazar descripciones con contenido final ── */
const MOTOR_RESULTS: Record<Motor, MotorResult> = {
  retencion: {
    key: 'retencion',
    icon: Shield,
    title: 'Motor de Retención',
    headline: 'Tu prioridad #1: dejar de perder clientes',
    description:
      'Tu distribuidora tiene una fuga activa de clientes. El Motor de Retención detecta señales de abandono antes de que el cliente se vaya y genera alertas automáticas para tu equipo comercial. IEY® redujo su churn un 62% en 4 meses con este motor.',
    color: '#FF5252',
  },
  reposicion: {
    key: 'reposicion',
    icon: RefreshCw,
    title: 'Motor de Reposición',
    headline: 'Tu prioridad #1: anticipar los pedidos',
    description:
      'Estás perdiendo ventas porque no sabés cuándo cada cliente necesita reponer. El Motor de Reposición analiza patrones de compra y avisa a tu equipo el día exacto para contactar. IEY® aumentó su frecuencia de compra un 34% con este motor.',
    color: '#FFA726',
  },
  expansion: {
    key: 'expansion',
    icon: TrendingUp,
    title: 'Motor de Expansión',
    headline: 'Tu prioridad #1: aumentar el ticket promedio',
    description:
      'Tenés una base estable pero el ticket está estancado. El Motor de Expansión identifica oportunidades de cross-sell y up-sell personalizadas para cada cliente. IEY® subió su ticket promedio un 28% en 5 meses con este motor.',
    color: '#81B5A1',
  },
}

export default function DiagnosticoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Motor[]>([])
  const [result, setResult] = useState<MotorResult | null>(null)

  const handleAnswer = (motor: Motor) => {
    const newAnswers = [...answers, motor]

    if (currentStep < QUESTIONS.length - 1) {
      setAnswers(newAnswers)
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate result
      const counts: Record<Motor, number> = { retencion: 0, reposicion: 0, expansion: 0 }
      newAnswers.forEach((m) => counts[m]++)
      const winner = (Object.entries(counts) as [Motor, number][]).sort(
        (a, b) => b[1] - a[1]
      )[0][0]
      setAnswers(newAnswers)
      setResult(MOTOR_RESULTS[winner])
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([])
    setResult(null)
  }

  const waText = result
    ? `Hola! Hice el Test de Diagnóstico 🎯%0A%0AMi resultado: ${result.title}%0A${result.headline}%0A%0AQuiero agendar el diagnóstico gratis de 15 min.`
    : 'Hola! Quiero hacer el Test de Diagnóstico 🎯'

  const waLink = `https://wa.me/5491123994719?text=${waText}`

  const progress = result ? 100 : (currentStep / QUESTIONS.length) * 100

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
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#81B5A1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
            }}
          >
            <ArrowLeft size={18} />
            Volver
          </Link>
          {!result && (
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
              {currentStep + 1} / {QUESTIONS.length}
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: 'rgba(255,255,255,0.08)' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #5a9a84, #81B5A1)',
            transition: 'width 0.4s ease',
            borderRadius: '0 2px 2px 0',
          }}
        />
      </div>

      {!result ? (
        /* ── QUIZ STEP ── */
        <section
          key={currentStep}
          style={{
            padding: '60px 20px 80px',
            maxWidth: 600,
            margin: '0 auto',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          {/* Question */}
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: 14,
                fontWeight: 800,
                color: '#81B5A1',
                background: 'rgba(129,181,161,0.12)',
                padding: '6px 16px',
                borderRadius: 100,
                marginBottom: 24,
              }}
            >
              Pregunta {currentStep + 1}
            </span>
            <h2
              style={{
                fontSize: 'clamp(22px, 5vw, 32px)',
                fontWeight: 900,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {QUESTIONS[currentStep].question}
            </h2>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {QUESTIONS[currentStep].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option.motor)}
                className="hover-lift"
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background 0.2s',
                  fontFamily: 'inherit',
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#5a9a84'
                  e.currentTarget.style.background = 'rgba(129,181,161,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
              >
                {option.text}
              </button>
            ))}
          </div>

          {/* Back button (within quiz) */}
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                margin: '28px auto 0',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.4)',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
              }}
            >
              <ArrowLeft size={16} />
              Pregunta anterior
            </button>
          )}
        </section>
      ) : (
        /* ── RESULTS ── */
        <section
          style={{
            padding: '56px 20px 80px',
            maxWidth: 640,
            margin: '0 auto',
            animation: 'fadeIn 0.4s ease-out',
          }}
        >
          {/* Result Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: `${result.color}18`,
                border: `2px solid ${result.color}50`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <result.icon size={36} style={{ color: result.color }} />
            </div>

            <span
              style={{
                display: 'inline-block',
                fontSize: 13,
                fontWeight: 800,
                color: result.color,
                background: `${result.color}18`,
                padding: '6px 16px',
                borderRadius: 100,
                marginBottom: 16,
              }}
            >
              Tu resultado
            </span>

            <h2
              style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: 12,
              }}
            >
              {result.title}
            </h2>

            <p
              style={{
                fontSize: 'clamp(17px, 2.5vw, 20px)',
                fontWeight: 700,
                color: result.color,
                marginBottom: 20,
              }}
            >
              {result.headline}
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: 520,
                margin: '0 auto',
              }}
            >
              {result.description}
            </p>
          </div>

          {/* CTA Section */}
          <div
            className="glass-dark"
            style={{
              borderRadius: 20,
              padding: '32px 28px',
              textAlign: 'center',
              borderTop: `3px solid ${result.color}`,
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(18px, 3.5vw, 22px)',
                fontWeight: 900,
                marginBottom: 8,
              }}
            >
              ¿Querés activar este motor en tu distribuidora?
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 28,
                lineHeight: 1.5,
              }}
            >
              En 15 minutos te mostramos cómo funciona con tus datos reales.
              Sin compromiso.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-dark anim-pulse-slow cta-full-mobile"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                  ;(window as any).fbq('track', 'Lead', {
                    content_name: `Lead Magnet: Quiz - ${result.title}`,
                  })
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
                color: '#FFFFFF',
                fontSize: 'clamp(15px, 2.8vw, 19px)',
                fontWeight: 900,
                padding: '20px 40px',
                borderRadius: 16,
                textDecoration: 'none',
                border: '3px solid #6da88e',
                boxShadow: '0 8px 40px rgba(129,181,161,0.5)',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              <WhatsAppIcon size={22} />
              Agendar diagnóstico gratis
              <ArrowRight size={20} strokeWidth={3} />
            </a>

            <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              15 min por WhatsApp. Resultado inmediato.
            </p>
          </div>

          {/* Restart */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button
              onClick={handleRestart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10,
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                fontWeight: 600,
                padding: '10px 20px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              }}
            >
              <RotateCcw size={16} />
              Hacer el test de nuevo
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
