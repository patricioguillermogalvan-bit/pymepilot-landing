import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - PymePilot CRM WhatsApp',
  description: 'Contactá a PymePilot para consultas sobre nuestro CRM especializado en WhatsApp para distribuidores B2B.',
  robots: 'index, follow',
}

export default function ContactPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <style>{`
        .contact-page { background: #1A2123; min-height: 100vh; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }

        .contact-hero { position: relative; overflow: hidden; padding: 120px 1.5rem 64px; text-align: center; }
        .contact-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(129,181,161,0.15) 0%, transparent 70%); pointer-events: none; }
        .contact-hero h1 { font-size: 3rem; font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.1; }
        .contact-hero p { font-size: 1.25rem; color: #9AABAE; max-width: 640px; margin: 0 auto 48px; line-height: 1.6; }

        .wa-btn { display: inline-flex; align-items: center; gap: 12px; padding: 20px 40px; background: linear-gradient(135deg, #5C8F83 0%, #81B5A1 100%); color: #fff; font-size: 1.125rem; font-weight: 700; border-radius: 12px; text-decoration: none; transition: all 0.3s; box-shadow: 0 8px 32px rgba(129,181,161,0.3); }
        .wa-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(129,181,161,0.5); }
        .wa-btn svg { width: 24px; height: 24px; transition: transform 0.3s; }
        .wa-btn:hover svg { transform: scale(1.15); }

        .section-dark { padding: 80px 1.5rem; background: #252E30; }
        .section-default { padding: 80px 1.5rem; background: #1A2123; }
        .section-title { font-size: 2rem; font-weight: 700; color: #fff; text-align: center; margin-bottom: 48px; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-narrow { max-width: 800px; margin: 0 auto; }

        .benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .benefit-card { padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px); transition: all 0.3s; }
        .benefit-card:hover { border-color: rgba(129,181,161,0.4); box-shadow: 0 8px 32px rgba(129,181,161,0.1); }
        .benefit-icon { font-size: 2.5rem; margin-bottom: 12px; }
        .benefit-card h3 { font-size: 1.125rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .benefit-card p { font-size: 0.95rem; color: #9AABAE; line-height: 1.7; }
        .benefits-note { text-align: center; color: #6B7C7F; font-size: 1rem; margin-top: 40px; }

        .founder-card { position: relative; padding: 48px; border-radius: 24px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(16px); box-shadow: 0 16px 64px rgba(0,0,0,0.3); }
        .founder-inner { display: flex; align-items: center; gap: 32px; }
        .founder-avatar { flex-shrink: 0; width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #5C8F83, #81B5A1); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2.5rem; font-weight: 700; box-shadow: 0 8px 32px rgba(129,181,161,0.4); }
        .founder-info h3 { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .founder-info .role { color: #81B5A1; font-weight: 600; margin-bottom: 4px; }
        .founder-info .sub { color: #6B7C7F; margin-bottom: 20px; }
        .founder-info .quote { color: #D1DADC; line-height: 1.7; font-style: italic; }
        .founder-glow-1 { position: absolute; top: -24px; right: -24px; width: 96px; height: 96px; background: rgba(129,181,161,0.15); border-radius: 50%; filter: blur(48px); pointer-events: none; }
        .founder-glow-2 { position: absolute; bottom: -24px; left: -24px; width: 128px; height: 128px; background: rgba(129,181,161,0.08); border-radius: 50%; filter: blur(48px); pointer-events: none; }

        .contact-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .contact-card { padding: 24px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 16px; text-decoration: none; transition: all 0.3s; }
        .contact-card:hover { border-color: rgba(129,181,161,0.4); }
        .contact-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(129,181,161,0.15); display: flex; align-items: center; justify-content: center; color: #81B5A1; flex-shrink: 0; }
        .contact-label { font-size: 0.8rem; color: #6B7C7F; margin-bottom: 2px; }
        .contact-value { font-size: 0.95rem; font-weight: 600; color: #fff; }

        @media (max-width: 768px) {
          .contact-hero h1 { font-size: 2rem; }
          .contact-hero { padding-top: 100px; }
          .benefits-grid, .contact-methods { grid-template-columns: 1fr; }
          .founder-inner { flex-direction: column; text-align: center; }
          .founder-card { padding: 32px 24px; }
          .wa-btn { padding: 16px 28px; font-size: 1rem; }
        }
      `}</style>

      {/* Header */}
      <header className="header" id="header">
        <div className="header__container">
          <nav className="nav">
            <a href="/" className="nav__logo">
              <div className="logo__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#5C8F83"/>
                  <rect x="16.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#81B5A1"/>
                  <rect x="1.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#293E40"/>
                  <rect x="16.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#3D6362"/>
                </svg>
              </div>
              <span className="logo__text">PymePilot</span>
            </a>
            <div className="nav__menu" style={{ position: 'static', maxWidth: 'none', width: 'auto', height: 'auto', padding: 0, boxShadow: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ul className="nav__list" style={{ flexDirection: 'row', gap: '0.25rem', marginBottom: 0 }}>
                <li className="nav__item"><a href="/#solucion" className="nav__link">Solución</a></li>
                <li className="nav__item"><a href="/#caso-iey" className="nav__link">Caso IEY</a></li>
                <li className="nav__item"><a href="/#proceso" className="nav__link">Cómo Funciona</a></li>
                <li className="nav__item"><a href="/#pricing" className="nav__link">Precio</a></li>
                <li className="nav__item"><a href="/#faq" className="nav__link">FAQ</a></li>
              </ul>
              <div className="nav__actions" style={{ flexDirection: 'row' }}>
                <a href="https://wa.me/5491157064734?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20PYMEPILOT." className="btn btn--primary" target="_blank" rel="noopener">Agendá una reunión</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <h1>Hablemos de tu Distribuidora</h1>
          <p>15 minutos para entender si PymePilot puede duplicar tu facturación recurrente</p>
          <a
            href="https://wa.me/5491157064734?text=Hola!%20Quiero%20agendar%20una%20reuni%C3%B3n%20de%2015%20min%20para%20conocer%20PymePilot"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendá reunión - 15 min
          </a>
        </section>

        {/* Qué vas a obtener */}
        <section className="section-dark">
          <div className="section-inner">
            <h2 className="section-title">En 15 minutos vas a obtener</h2>
            <div className="benefits-grid">
              {[
                { icon: '📊', title: 'Análisis de tu situación actual', desc: '% de facturación recurrente, churn mensual estimado, diagnóstico de pérdida de clientes' },
                { icon: '🎯', title: 'Diagnóstico de oportunidades', desc: 'Dónde estás perdiendo plata sin darte cuenta y qué clientes podés recuperar' },
                { icon: '📈', title: 'Proyección de resultados', desc: 'Qué números podés alcanzar en 6 meses basado en el caso IEY® (+114% facturación recurrente)' },
                { icon: '🚀', title: 'Plan de implementación', desc: 'Si PymePilot aplica para tu caso, te explicamos cómo funciona y los próximos pasos' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="benefits-note">Sin compromiso. Sin pitch de venta. Solo números y claridad.</p>
          </div>
        </section>

        {/* Quién te atiende */}
        <section className="section-default">
          <div className="section-narrow">
            <div className="founder-card">
              <div className="founder-glow-1" />
              <div className="founder-glow-2" />
              <div className="founder-inner">
                <div className="founder-avatar">PG</div>
                <div className="founder-info">
                  <h3>Patricio Galván</h3>
                  <p className="role">Creador de PymePilot</p>
                  <p className="sub">Encargado del canal mayorista en IEY®</p>
                  <p className="quote">
                    &ldquo;Viví en primera persona el problema de perder clientes recurrentes en silencio.
                    Construimos PymePilot para resolver nuestro propio problema en IEY®.
                    Los resultados (+114% en facturación recurrente) nos mostraron que otras
                    distribuidoras necesitaban esto.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Otras formas de contacto */}
        <section className="section-dark">
          <div className="section-narrow">
            <h2 className="section-title">Otras formas de contacto</h2>
            <div className="contact-methods">
              <a href="mailto:contacto@pymepilot.cloud" className="contact-card">
                <div className="contact-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">contacto@pymepilot.cloud</p>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="contact-label">Ubicación</p>
                  <p className="contact-value">Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__main">
            <div className="footer__brand">
              <a href="/" className="footer__logo">
                <div className="logo__icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#81B5A1"/>
                    <rect x="16.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#a3cebb"/>
                    <rect x="1.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#5C8F83"/>
                    <rect x="16.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#6fa396"/>
                  </svg>
                </div>
                <span className="logo__text">PymePilot</span>
              </a>
              <p className="footer__tagline">El sistema que convierte clientes nuevos en recurrentes. Especialistas en distribuidoras mayoristas B2B.</p>
              <div className="footer__contact-info"><a href="mailto:contacto@pymepilot.cloud">contacto@pymepilot.cloud</a></div>
            </div>
            <div className="footer__links">
              <div className="footer__column"><h4>Las 4 Verticales</h4><ul><li><a href="/#solucion">Clientes Nuevos</a></li><li><a href="/#solucion">Reposición Predictiva</a></li><li><a href="/#solucion">Cross-Sell</a></li><li><a href="/#solucion">Recuperación Inactivos</a></li></ul></div>
              <div className="footer__column"><h4>Caso de Éxito</h4><ul><li><a href="/#caso-iey">Resultados IEY</a></li><li><a href="/#comparacion">Comparación</a></li></ul></div>
              <div className="footer__column"><h4>Recursos</h4><ul><li><a href="/#proceso">Cómo Funciona</a></li><li><a href="/#pricing">Precio</a></li><li><a href="/#faq">Preguntas Frecuentes</a></li></ul></div>
              <div className="footer__column"><h4>Legal</h4><ul><li><a href="/about">Acerca de PymePilot</a></li><li><a href="/contact">Contacto</a></li><li><a href="/legal/aviso-legal">Aviso Legal</a></li><li><a href="/legal/privacy-policy">Política de Privacidad</a></li><li><a href="/legal/terms-of-service">Términos y Condiciones</a></li><li><a href="/legal/cookie-policy">Política de Cookies</a></li></ul></div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2025 PymePilot. Todos los derechos reservados.</p>
            <p className="footer__location">Hecho en Argentina</p>
          </div>
        </div>
      </footer>
    </>
  )
}
