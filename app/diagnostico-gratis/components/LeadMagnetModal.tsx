'use client'

import { useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SparkleIcon from './SparkleIcon'
import MoneyLeakIcon from './MoneyLeakIcon'
import ChartGrowthIcon from './ChartGrowthIcon'
import TargetScanIcon from './TargetScanIcon'

const LEAD_MAGNETS = [
  {
    icon: MoneyLeakIcon,
    title: 'Cuánto Estás Perdiendo en Clientes Inactivos',
    description: (
      <>
        Distribuidores con 80-120 clientes pierden entre
        <span style={{ color: '#FF8A80', fontWeight: 700 }}> $8 y $18 millones por mes</span> en
        clientes que &quot;desaparecieron&quot; sin que se dieran cuenta.
        <br /><br />
        <span style={{ color: '#81B5A1', fontWeight: 600 }}>
          ¿Cuánto perdés VOS? Calculalo en 30 segundos.
        </span>
      </>
    ),
    buttonText: 'CALCULAR AHORA',
    href: '/diagnostico-gratis/calculadora-perdida',
    color: '#81B5A1',
  },
  {
    icon: ChartGrowthIcon,
    title: 'Un Distribuidor Tenía Tu Mismo Problema',
    description: (
      <>
        IEY® perdía clientes sin saber cuáles, ni cuándo, ni por qué. No tenían
        forma de anticiparse.
        <br /><br />
        Hoy tienen{' '}
        <span style={{ color: '#81B5A1', fontWeight: 700 }}>74%</span> de
        facturación recurrente.
        <br /><br />
        <span style={{ fontWeight: 600 }}>
          Mirá qué hicieron mes a mes, qué les funcionó y qué no.
        </span>
      </>
    ),
    buttonText: 'DESCARGAR CASO',
    href: '/diagnostico-gratis/caso-iey',
    color: '#6da88e',
  },
  {
    icon: TargetScanIcon,
    title: 'Test: ¿Por Dónde Empezar a Mejorar?',
    description: (
      <>
        Clientes que se van, pedidos que no se repiten, oportunidades que no ves.
        Sabés que algo falla, pero{' '}
        <span style={{ color: '#FF8A80', fontWeight: 600 }}>no sabés por dónde atacar primero</span>.
        <br /><br />
        <span style={{ color: '#81B5A1', fontWeight: 600 }}>
          6 preguntas simples. Tu diagnóstico personalizado.
        </span>
      </>
    ),
    buttonText: 'HACER TEST',
    href: '/diagnostico-gratis/diagnostico',
    color: '#a3cabb',
  },
]

export default function LeadMagnetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.25s ease-out',
      }}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, #1a2a2c 0%, #293E40 40%, #344B4E 100%)',
          border: '2px solid rgba(129, 181, 161, 0.3)',
          borderRadius: 24,
          padding: '40px 28px 32px',
          boxShadow:
            '0 24px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(129, 181, 161, 0.15)',
          animation: 'modalSlideUp 0.3s ease-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = '#FFFFFF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <SparkleIcon />
          </div>
          <h2
            style={{
              fontSize: 'clamp(20px, 5vw, 24px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.2,
              margin: '0 0 16px',
              padding: '0 16px',
            }}
          >
            ¿Cuántos Clientes Perdiste Este Mes
            <br />
            <span style={{ color: '#81B5A1' }}>Sin Darte Cuenta?</span>
          </h2>
          <div style={{ textAlign: 'left', maxWidth: 420, margin: '0 auto' }}>
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.9)',
                margin: '0 0 12px',
              }}
            >
              Estas herramientas te muestran EXACTAMENTE:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Cuánto dinero dejaste en la mesa',
                'Qué clientes están por irse ahora mismo',
                'Cómo recuperarlos en los próximos 30 días',
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ color: '#81B5A1', marginRight: 8, flexShrink: 0 }}>✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {LEAD_MAGNETS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16,
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                {/* Icon */}
                <div style={{ flexShrink: 0, color: item.color }}>
                  <Icon />
                </div>

                {/* Text + Button */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.9)',
                      margin: '0 0 16px',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background:
                        'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
                      color: '#FFFFFF',
                      fontSize: 13,
                      fontWeight: 800,
                      padding: '9px 18px',
                      borderRadius: 10,
                      textDecoration: 'none',
                      border: '1.5px solid #6da88e',
                      boxShadow: '0 4px 16px rgba(129,181,161,0.3)',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase' as const,
                      textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow =
                        '0 6px 24px rgba(129,181,161,0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow =
                        '0 4px 16px rgba(129,181,161,0.3)'
                    }}
                  >
                    {item.buttonText}
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgba(255,255,255,0.35)',
            marginTop: 24,
            marginBottom: 0,
          }}
        >
          100% gratis &middot; Sin compromiso &middot; Resultados inmediatos
        </p>
      </div>
    </div>
  )
}
