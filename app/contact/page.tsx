import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto - PymePilot CRM WhatsApp',
  description: 'Contactá a PymePilot para consultas sobre nuestro CRM especializado en WhatsApp para distribuidores B2B.',
  robots: 'index, follow',
}

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">

      <div style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: '2.25rem',
          fontWeight: 800,
          color: '#293E40',
          marginBottom: '12px',
        }}>
          Contacto
        </h1>
        <p style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: '1.125rem',
          color: '#6B7C7F',
          lineHeight: '1.6',
        }}>
          ¿Tenés consultas sobre PymePilot? Escribinos y te respondemos a la brevedad.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '48px',
      }}>

        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #E4EAEB',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        }}>
          <ContactForm />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #E4EAEB',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81B5A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              color: '#293E40',
              marginBottom: '4px',
            }}>Email</h3>
            <a href="mailto:contacto@pymepilot.cloud" style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '14px',
              color: '#81B5A1',
              textDecoration: 'none',
            }}>
              contacto@pymepilot.cloud
            </a>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #E4EAEB',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81B5A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              color: '#293E40',
              marginBottom: '4px',
            }}>Ubicación</h3>
            <p style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '14px',
              color: '#6B7C7F',
              margin: 0,
              lineHeight: '1.5',
            }}>
              Quilmes, Buenos Aires, Argentina
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid #E4EAEB',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81B5A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              color: '#293E40',
              marginBottom: '4px',
            }}>Horario</h3>
            <p style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '14px',
              color: '#6B7C7F',
              margin: 0,
              lineHeight: '1.5',
            }}>
              Lunes a Viernes<br />9:00 - 18:00 hs (GMT-3)
            </p>
          </div>
        </div>

      </div>

      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#81B5A1',
            color: '#293E40',
            borderRadius: '8px',
            textDecoration: 'none',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  )
}
