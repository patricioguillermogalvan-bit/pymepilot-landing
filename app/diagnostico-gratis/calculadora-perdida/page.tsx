'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, AlertTriangle, TrendingDown, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'
import MoneyLeakIcon from '../components/MoneyLeakIcon'
import AlertLossIcon from '../components/AlertLossIcon'
import AnalyticsIcon from '../components/AnalyticsIcon'
import InsightIcon from '../components/InsightIcon'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../animations.css'

const RECOVERY_RATE = 0.65

interface Results {
  perdidaMensual: number
  perdidaAnual: number
  tasaFuga: number
  recuperoPotencial: number
  clientesInactivos: number
}

function formatARS(n: number): string {
  return n.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })
}

export default function CalculadoraPerdidaPage() {
  const [activosDesde, setActivosDesde] = useState('')
  const [activosHasta, setActivosHasta] = useState('')
  const [perdidosDesde, setPerdidosDesde] = useState('')
  const [perdidosHasta, setPerdidosHasta] = useState('')
  const [ticketDesde, setTicketDesde] = useState('')
  const [ticketHasta, setTicketHasta] = useState('')
  const [results, setResults] = useState<Results | null>(null)
  const [error, setError] = useState('')

  const avg = (a: number, b: number) => {
    const lo = Math.min(a, b)
    const hi = Math.max(a, b)
    return (lo + hi) / 2
  }

  const handleCalculate = () => {
    const aDesde = parseInt(activosDesde)
    const aHasta = parseInt(activosHasta)
    const pDesde = parseInt(perdidosDesde)
    const pHasta = parseInt(perdidosHasta)
    const tDesde = parseFloat(ticketDesde)
    const tHasta = parseFloat(ticketHasta)

    if (!aDesde || aDesde <= 0 || !aHasta || aHasta <= 0) {
      setError('Ingresá el rango de clientes activos')
      return
    }
    if (!pDesde || pDesde < 0 || !pHasta || pHasta < 0) {
      setError('Ingresá el rango de clientes que dejaron de comprar')
      return
    }
    if (!tDesde || tDesde <= 0 || !tHasta || tHasta <= 0) {
      setError('Ingresá el rango de ticket promedio')
      return
    }

    const activos = avg(aDesde, aHasta)
    const perdidos = avg(pDesde, pHasta)
    const ticket = avg(tDesde, tHasta)

    if (perdidos > activos) {
      setError('Los clientes perdidos no pueden superar los activos')
      return
    }

    setError('')
    const perdidaMensual = perdidos * ticket
    setResults({
      perdidaMensual,
      perdidaAnual: perdidaMensual * 12,
      tasaFuga: (perdidos / activos) * 100,
      recuperoPotencial: perdidaMensual * 12 * RECOVERY_RATE,
      clientesInactivos: Math.round(perdidos),
    })

    setTimeout(() => {
      document.getElementById('resultado')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const avgActivos = avg(parseInt(activosDesde) || 0, parseInt(activosHasta) || 0)
  const avgPerdidos = avg(parseInt(perdidosDesde) || 0, parseInt(perdidosHasta) || 0)

  const waText = results
    ? `Hola! Acabo de usar la Calculadora de Pérdida de Clientes 💰%0A%0AMis números:%0A- ~${Math.round(avgActivos)} clientes activos%0A- ~${Math.round(avgPerdidos)} clientes perdidos%0A- Pérdida mensual estimada: ${formatARS(results.perdidaMensual)}%0A- Pérdida anual proyectada: ${formatARS(results.perdidaAnual)}%0A- Tasa de fuga: ${results.tasaFuga.toFixed(1)}%%0A%0AQuiero saber cómo recuperar esos clientes.`
    : 'Hola! Quiero usar la Calculadora de Pérdida de Clientes 💰'

  const waLink = `https://wa.me/5491123994719?text=${waText}`

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
    background: 'rgba(129,181,161,0.06)',
    border: '1.5px solid rgba(129,181,161,0.2)',
    borderRadius: 12,
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 14,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 8,
  }

  const rangeLabelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = '#5a9a84'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,181,161,0.15)'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = 'rgba(129,181,161,0.2)'
    e.currentTarget.style.boxShadow = 'none'
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#81B5A1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
            }}
          >
            <ArrowLeft size={18} />
            Volver al diagnóstico
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #1a2a2c 0%, #293E40 40%, #1a2a2c 100%)',
          padding: '56px 20px 64px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -40,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(129,181,161,0.1) 0%, transparent 65%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            className="anim-fade-in-up"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
          >
            <MoneyLeakIcon />
          </div>
          <h1
            className="anim-fade-in-up anim-delay-1"
            style={{
              fontSize: 'clamp(26px, 5.5vw, 42px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 16,
            }}
          >
            Cuánto Estás Perdiendo en{' '}
            <span style={{ color: '#81B5A1', textShadow: '0 0 30px rgba(129,181,161,0.4)' }}>
              Clientes Inactivos
            </span>
          </h1>
          <p
            className="anim-fade-in-up anim-delay-2"
            style={{
              fontSize: 'clamp(15px, 2.3vw, 18px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Distribuidores con 80-120 clientes pierden entre{' '}
            <span style={{ color: '#FF8A80', fontWeight: 700 }}>$8 y $18 millones por mes</span>{' '}
            sin darse cuenta. ¿Cuánto perdés vos?
          </p>
        </div>
      </section>

      {/* Calculator Form */}
      <section style={{ padding: '56px 20px', background: '#1a2a2c' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div
            className="glass-dark anim-fade-in-up"
            style={{ borderRadius: 20, padding: '32px 28px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Field 1 */}
              <div>
                <label style={labelStyle}>
                  <Users size={16} style={{ verticalAlign: 'middle', marginRight: 6, color: '#81B5A1' }} />
                  ¿Cuántos clientes activos tenés?
                </label>
                <div
                  className="grid-responsive"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                >
                  <div>
                    <span style={rangeLabelStyle}>Desde</span>
                    <input
                      type="number"
                      placeholder="80"
                      value={activosDesde}
                      onChange={(e) => setActivosDesde(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <span style={rangeLabelStyle}>Hasta</span>
                    <input
                      type="number"
                      placeholder="120"
                      value={activosHasta}
                      onChange={(e) => setActivosHasta(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              {/* Field 2 */}
              <div>
                <label style={labelStyle}>
                  <TrendingDown size={16} style={{ verticalAlign: 'middle', marginRight: 6, color: '#81B5A1' }} />
                  ¿Cuántos dejaron de comprar en los últimos 3 meses?
                </label>
                <div
                  className="grid-responsive"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                >
                  <div>
                    <span style={rangeLabelStyle}>Desde</span>
                    <input
                      type="number"
                      placeholder="10"
                      value={perdidosDesde}
                      onChange={(e) => setPerdidosDesde(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <span style={rangeLabelStyle}>Hasta</span>
                    <input
                      type="number"
                      placeholder="25"
                      value={perdidosHasta}
                      onChange={(e) => setPerdidosHasta(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6, marginBottom: 0 }}>
                  Si no sabés exacto, poné un rango aproximado
                </p>
              </div>

              {/* Field 3 */}
              <div>
                <label style={labelStyle}>
                  <DollarSign size={16} style={{ verticalAlign: 'middle', marginRight: 6, color: '#81B5A1' }} />
                  Ticket promedio mensual por cliente (ARS)
                </label>
                <div
                  className="grid-responsive"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
                >
                  <div>
                    <span style={rangeLabelStyle}>Desde</span>
                    <input
                      type="number"
                      placeholder="300000"
                      value={ticketDesde}
                      onChange={(e) => setTicketDesde(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <span style={rangeLabelStyle}>Hasta</span>
                    <input
                      type="number"
                      placeholder="500000"
                      value={ticketHasta}
                      onChange={(e) => setTicketHasta(e.target.value)}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p style={{ fontSize: 14, color: '#FF5252', fontWeight: 600, margin: 0 }}>
                  {error}
                </p>
              )}

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="cta-dark"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
                  color: '#FFFFFF',
                  fontSize: 17,
                  fontWeight: 900,
                  padding: '18px 32px',
                  borderRadius: 14,
                  border: '2px solid #6da88e',
                  boxShadow: '0 8px 32px rgba(129,181,161,0.4)',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase' as const,
                  textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                  fontFamily: 'inherit',
                }}
              >
                CALCULAR MI PÉRDIDA
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {results && (
        <section
          id="resultado"
          style={{
            padding: '56px 20px 72px',
            background: 'linear-gradient(180deg, #1a2a2c 0%, #1a2a2c 100%)',
            animation: 'fadeInUp 0.5s ease-out',
          }}
        >
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {/* Box rojo principal */}
            <div
              className="alarm-box"
              style={{
                background: 'rgba(255,82,82,0.08)',
                border: '2px solid #FF5252',
                borderRadius: 20,
                padding: '32px 24px',
                textAlign: 'center',
                marginBottom: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
                <AlertLossIcon />
                <p
                  style={{
                    fontSize: 13,
                    color: '#FF8A80',
                    fontWeight: 700,
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Pérdida Estimada
                </p>
              </div>
              <div
                style={{
                  fontSize: 'clamp(36px, 8vw, 56px)',
                  fontWeight: 900,
                  color: '#FF5252',
                  lineHeight: 1,
                }}
              >
                {formatARS(results.perdidaMensual)}
              </div>
              <div style={{ fontSize: 20, color: '#FF8A80', fontWeight: 700, marginTop: 4 }}>
                /mes
              </div>
            </div>

            {/* Desglose */}
            <div
              className="glass-dark"
              style={{ borderRadius: 16, padding: '24px 20px', marginBottom: 20 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <AnalyticsIcon />
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  Desglose Detallado
                </h3>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  <span>~{results.clientesInactivos} clientes inactivos sin seguimiento</span>
                  <span style={{ color: '#FF8A80', fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>
                    {results.tasaFuga.toFixed(1)}% fuga
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: 12,
                  }}
                >
                  <span>Ventas perdidas por mes</span>
                  <span style={{ color: '#FF8A80', fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>
                    {formatARS(results.perdidaMensual)}
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: 12,
                  }}
                >
                  <span>Si continúa así, en 12 meses</span>
                  <span style={{ color: '#FF8A80', fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>
                    {formatARS(results.perdidaAnual)}
                  </span>
                </li>
                <li
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: 12,
                  }}
                >
                  <span>Recupero potencial con PymePilot</span>
                  <span style={{ color: '#81B5A1', fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>
                    {formatARS(results.recuperoPotencial)}
                  </span>
                </li>
              </ul>
            </div>

            {/* Dato clave */}
            <div
              style={{
                background: 'rgba(255,167,38,0.08)',
                border: '1px solid rgba(255,167,38,0.3)',
                borderRadius: 16,
                padding: '20px',
                marginBottom: 36,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <InsightIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      color: '#FFB74D',
                      fontWeight: 700,
                      margin: '0 0 8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    Dato Clave
                  </p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.6 }}>
                    En IEY®, el{' '}
                    <strong style={{ color: '#81B5A1' }}>68% de los clientes que dejaron de comprar</strong>{' '}
                    volvieron a hacerlo cuando se los contactó en el momento justo con el mensaje correcto.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div style={{ textAlign: 'center' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-dark anim-pulse-slow cta-full-mobile"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                    ;(window as any).fbq('track', 'Lead', {
                      content_name: 'Lead Magnet: Calculadora Pérdida',
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
                  letterSpacing: '0.025em',
                  textTransform: 'uppercase' as const,
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                <WhatsAppIcon size={22} />
                QUIERO RECUPERAR ESOS CLIENTES
                <ArrowRight size={20} strokeWidth={3} />
              </a>
              <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                Diagnóstico gratis de 15 min. Sin compromiso.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
