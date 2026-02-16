'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import LeadMagnetModal from './LeadMagnetModal'
import SparkleIcon from './SparkleIcon'

export default function LeadMagnetTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [minimized, setMinimized] = useState(false)

  // Delayed entrance: 2s after page load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return <LeadMagnetModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

  return (
    <>
      {minimized ? (
        /* ── MINIMIZED: small floating pill ── */
        <button
          onClick={() => setMinimized(false)}
          className="trigger-float trigger-entrance"
          aria-label="Abrir recursos gratis"
          style={{
            position: 'fixed',
            zIndex: 1500,
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
            border: '1.5px solid rgba(129,181,161,0.3)',
            fontFamily: 'inherit',
            transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(129,181,161,0.35)'
            e.currentTarget.style.borderColor = 'rgba(129,181,161,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = ''
            e.currentTarget.style.boxShadow = ''
            e.currentTarget.style.borderColor = 'rgba(129,181,161,0.3)'
          }}
        >
          <SparkleIcon size={22} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#81B5A1',
            }}
          >
            Recursos Gratis
          </span>
        </button>
      ) : (
        /* ── EXPANDED: full premium card ── */
        <div
          className="trigger-float trigger-entrance trigger-idle"
          style={{
            position: 'fixed',
            zIndex: 1500,
            cursor: 'pointer',
          }}
          onClick={() => setIsOpen(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(129,181,161,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = ''
            e.currentTarget.style.boxShadow = ''
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.98)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
          }}
        >
          {/* GRATIS badge */}
          <span
            style={{
              position: 'absolute',
              top: -8,
              right: -8,
              background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
              color: '#FFFFFF',
              fontSize: 11,
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: 8,
              boxShadow: '0 2px 12px rgba(129,181,161,0.4)',
              zIndex: 2,
            }}
          >
            Gratis
          </span>

          {/* Minimize button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setMinimized(true)
            }}
            aria-label="Minimizar"
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              width: 24,
              height: 24,
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
              zIndex: 2,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            }}
          >
            <X size={12} strokeWidth={3} />
          </button>

          {/* Content */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <SparkleIcon size={36} />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: 3,
                }}
              >
                Recursos gratuitos
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.3,
                }}
              >
                3 herramientas para tu distribuidora
              </div>
            </div>
          </div>

          {/* CTA mini-button */}
          <div
            className="trigger-cta-btn"
            style={{
              marginTop: 12,
              background: 'linear-gradient(135deg, #5a9a84 0%, #81B5A1 100%)',
              color: '#FFFFFF',
              fontSize: 13,
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: 8,
              textAlign: 'center',
              transition: 'opacity 0.2s, transform 0.2s',
              border: '1.5px solid #6da88e',
              textShadow: '0 1px 4px rgba(0,0,0,0.2)',
            }}
          >
            Ver recursos &rarr;
          </div>
        </div>
      )}

      <LeadMagnetModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
