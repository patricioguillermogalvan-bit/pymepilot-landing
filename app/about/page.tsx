import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Acerca de PymePilot - CRM WhatsApp para Distribuidores B2B',
  description: 'Conoce PymePilot, la plataforma CRM especializada en WhatsApp para distribuidores PyME en Argentina. Caso real IEY: +114% facturación recurrente.',
  robots: 'index, follow',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <style>{`
        .about-page { background: #1A2123; min-height: 100vh; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }

        .about-hero { position: relative; overflow: hidden; padding: 120px 1.5rem 64px; text-align: center; }
        .about-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(129,181,161,0.15) 0%, transparent 70%); pointer-events: none; }
        .about-hero h1 { font-size: 3rem; font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.1; }
        .about-hero p { font-size: 1.25rem; color: #9AABAE; max-width: 700px; margin: 0 auto; line-height: 1.6; }

        .section-dark { padding: 80px 1.5rem; background: #252E30; }
        .section-default { padding: 80px 1.5rem; background: #1A2123; }
        .section-title { font-size: 2rem; font-weight: 700; color: #fff; text-align: center; margin-bottom: 48px; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-narrow { max-width: 800px; margin: 0 auto; }

        /* Timeline */
        .timeline-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .timeline-card { padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px); transition: all 0.3s; height: 100%; display: flex; flex-direction: column; }
        .timeline-card.highlight { background: linear-gradient(135deg, rgba(92,143,131,0.15) 0%, rgba(129,181,161,0.05) 100%); border-color: rgba(129,181,161,0.3); box-shadow: 0 8px 32px rgba(129,181,161,0.1); }
        .timeline-year { font-size: 0.8rem; font-weight: 700; margin-bottom: 8px; }
        .timeline-year.red { color: #E17055; }
        .timeline-year.yellow { color: #FDCB6E; }
        .timeline-year.green { color: #81B5A1; }
        .timeline-card h3 { font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .timeline-card p { font-size: 0.95rem; color: #9AABAE; line-height: 1.7; margin-bottom: 16px; flex-grow: 1; }
        .timeline-stat { font-size: 2rem; font-weight: 700; }
        .timeline-stat.red { color: #E17055; }
        .timeline-stat.yellow { color: #FDCB6E; }
        .timeline-stat.green { color: #81B5A1; }
        .timeline-sublabel { font-size: 0.8rem; color: #6B7C7F; }

        /* Founder */
        .founder-card { position: relative; padding: 48px; border-radius: 24px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(16px); box-shadow: 0 16px 64px rgba(0,0,0,0.3); }
        .founder-center { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; }
        .founder-avatar { width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #5C8F83, #81B5A1); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2.5rem; font-weight: 700; box-shadow: 0 8px 32px rgba(129,181,161,0.4); flex-shrink: 0; }
        .founder-name { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .founder-role { color: #81B5A1; font-weight: 600; font-size: 1.1rem; margin-bottom: 2px; }
        .founder-sub { color: #6B7C7F; margin-bottom: 24px; }
        .founder-text { max-width: 640px; margin: 0 auto; }
        .founder-text p { color: #D1DADC; line-height: 1.8; margin-bottom: 16px; font-size: 0.95rem; }
        .founder-text .highlight-text { color: #fff; font-weight: 600; }
        .founder-text .quote { color: #81B5A1; font-style: italic; }
        .founder-glow-1 { position: absolute; top: -24px; right: -24px; width: 96px; height: 96px; background: rgba(129,181,161,0.15); border-radius: 50%; filter: blur(48px); pointer-events: none; }
        .founder-glow-2 { position: absolute; bottom: -24px; left: -24px; width: 128px; height: 128px; background: rgba(129,181,161,0.08); border-radius: 50%; filter: blur(48px); pointer-events: none; }

        /* Differentiators */
        .diff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .diff-card { padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px); transition: all 0.3s; }
        .diff-card:hover { border-color: rgba(129,181,161,0.4); box-shadow: 0 8px 32px rgba(129,181,161,0.1); }
        .diff-icon { margin-bottom: 16px; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(129,181,161,0.08); border-radius: 12px; }
        .diff-card h3 { font-size: 1.25rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .diff-card p { font-size: 0.95rem; color: #9AABAE; line-height: 1.7; }

        /* IEY Validation */
        .iey-box { padding: 48px; border-radius: 24px; background: linear-gradient(135deg, rgba(92,143,131,0.1) 0%, rgba(129,181,161,0.03) 100%); border: 1px solid rgba(129,181,161,0.2); box-shadow: 0 16px 48px rgba(0,0,0,0.2); }
        .iey-header { text-align: center; margin-bottom: 40px; }
        .iey-header h2 { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .iey-logo { display: inline-block; padding: 8px 0; }
        .iey-logo img { height: 48px; width: auto; filter: brightness(1.1); }
        .iey-subtitle { color: #6B7C7F; margin-top: 12px; font-size: 1rem; }
        .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .metric-card { text-align: center; padding: 24px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
        .metric-label { font-size: 0.8rem; color: #6B7C7F; margin-bottom: 8px; }
        .metric-value { font-size: 2rem; font-weight: 700; color: #81B5A1; margin-bottom: 4px; }
        .metric-change { font-size: 0.8rem; color: #81B5A1; }
        .iey-footnote { text-align: center; color: #6B7C7F; margin-top: 32px; font-size: 0.8rem; }

        /* CTA */
        .cta-section { padding: 80px 1.5rem; background: #252E30; text-align: center; }
        .cta-section h2 { font-size: 2.25rem; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .cta-section p { font-size: 1.125rem; color: #9AABAE; margin-bottom: 40px; }
        .wa-btn { display: inline-flex; align-items: center; gap: 12px; padding: 20px 40px; background: linear-gradient(135deg, #5C8F83 0%, #81B5A1 100%); color: #fff; font-size: 1.125rem; font-weight: 700; border-radius: 12px; text-decoration: none; transition: all 0.3s; box-shadow: 0 8px 32px rgba(129,181,161,0.3); }
        .wa-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(129,181,161,0.5); }
        .wa-btn svg { width: 24px; height: 24px; transition: transform 0.3s; }
        .wa-btn:hover svg { transform: scale(1.15); }

        @media (max-width: 768px) {
          .about-hero h1 { font-size: 2rem; }
          .about-hero { padding-top: 100px; }
          .timeline-grid { grid-template-columns: 1fr; }
          .diff-grid { grid-template-columns: 1fr; }
          .metrics-grid { grid-template-columns: 1fr; }
          .founder-card { padding: 32px 24px; }
          .iey-box { padding: 32px 24px; }
          .cta-section h2 { font-size: 1.75rem; }
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

            <button className="nav__toggle" id="nav-toggle" aria-label="Abrir menú">
              <span className="hamburger"></span>
            </button>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="/#solucion" className="nav__link">Solución</a></li>
                <li className="nav__item">
                  <a href="/#caso-iey" className="nav__link nav__link--featured">
                    <span>Caso IEY</span>
                    <svg className="verified-badge" width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.396 11c.002-.686-.164-1.363-.487-1.975a3.724 3.724 0 0 0-1.32-1.466c.009-.207.009-.414 0-.621a4.578 4.578 0 0 0-.654-2.357A4.505 4.505 0 0 0 16 2.648a4.166 4.166 0 0 0-2.398-.654c-.206-.009-.413-.009-.62 0A3.724 3.724 0 0 0 11 .604a3.724 3.724 0 0 0-1.975.487 3.724 3.724 0 0 0-1.466 1.32c-.207-.009-.414-.009-.621 0a4.578 4.578 0 0 0-2.357.654 4.505 4.505 0 0 0-1.933 1.935 4.578 4.578 0 0 0-.654 2.357c-.009.207-.009.414 0 .621A3.724 3.724 0 0 0 .604 11c-.002.686.164 1.363.487 1.975.323.612.782 1.134 1.32 1.466-.009.207-.009.414 0 .621a4.578 4.578 0 0 0 .654 2.357 4.505 4.505 0 0 0 1.933 1.935c.741.422 1.573.65 2.42.654.206.009.413.009.62 0a3.724 3.724 0 0 0 1.975.487 3.724 3.724 0 0 0 1.975-.487c.612-.323 1.134-.782 1.466-1.32.207.009.414.009.621 0a4.578 4.578 0 0 0 2.357-.654 4.505 4.505 0 0 0 1.933-1.935 4.578 4.578 0 0 0 .654-2.357c.009-.207.009-.414 0-.621a3.724 3.724 0 0 0 1.32-1.466c.323-.612.49-1.29.487-1.975z" fill="#1DA1F2"/><path d="M9.662 14.85l-3.429-3.428 1.293-1.294 2.136 2.136 4.559-4.559L15.514 9l-5.852 5.85z" fill="#fff"/></svg>
                  </a>
                </li>
                <li className="nav__item"><a href="/#proceso" className="nav__link">Cómo Funciona</a></li>
                <li className="nav__item"><a href="/#pricing" className="nav__link">Precio</a></li>
                <li className="nav__item"><a href="/blog" className="nav__link">Blog</a></li>
                <li className="nav__item"><a href="/#faq" className="nav__link">FAQ</a></li>
              </ul>
              <div className="nav__actions">
                <a href="https://wa.me/5491157064734?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20PYMEPILOT." className="btn btn--primary" target="_blank" rel="noopener">Agendá una reunión</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Script src="/script.js" strategy="afterInteractive" />

      <div className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <h1>Construido desde adentro</h1>
          <p>PymePilot nació de una frustración real: ver cómo distribuidores pierden clientes todos los meses por falta de seguimiento sistemático</p>
        </section>

        {/* Timeline */}
        <section className="section-dark">
          <div className="section-inner">
            <div className="timeline-grid">
              <div className="timeline-card">
                <span className="timeline-year red">AGOSTO 2025</span>
                <h3>El Problema</h3>
                <p>IEY® perdía clientes recurrentes en silencio. El seguimiento manual no escalaba con el crecimiento del canal mayorista.</p>
                <div className="timeline-stat red">34%</div>
                <span className="timeline-sublabel">Facturación recurrente</span>
              </div>
              <div className="timeline-card">
                <span className="timeline-year yellow">SEP — DIC 2025</span>
                <h3>La Solución</h3>
                <p>Desarrollamos el sistema de seguimiento inteligente. Motor de IA que analiza la base y genera informes diarios para el equipo comercial.</p>
                <div className="timeline-stat yellow">6 meses</div>
                <span className="timeline-sublabel">De desarrollo y testing</span>
              </div>
              <div className="timeline-card highlight">
                <span className="timeline-year green">HOY</span>
                <h3>Los Resultados</h3>
                <p>Validado en IEY® con 6 meses de data real. Ahora disponible para otras distribuidoras mayoristas.</p>
                <div className="timeline-stat green">+114%</div>
                <span className="timeline-sublabel">Facturación recurrente (34% → 74%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quién está detrás */}
        <section className="section-default">
          <div className="section-narrow">
            <h2 className="section-title">Quién está detrás</h2>
            <div className="founder-card">
              <div className="founder-glow-1" />
              <div className="founder-glow-2" />
              <div className="founder-center">
                <div className="founder-avatar">PG</div>
                <div>
                  <div className="founder-name">Patricio Galván</div>
                  <div className="founder-role">Fundador de PymePilot</div>
                  <div className="founder-sub">Encargado del canal mayorista en IEY®</div>
                  <div className="founder-text">
                    <p>Cuando el canal mayorista de IEY® (marca #1 de accesorios MagSafe en Argentina) empezó a crecer, el seguimiento manual de clientes no alcanzaba. Veíamos cómo clientes recurrentes se iban en silencio y no teníamos forma sistemática de detectarlo ni actuar a tiempo.</p>
                    <p>Construimos PymePilot para resolver nuestro propio problema: un sistema que analiza la base de datos, detecta oportunidades y le dice al equipo comercial exactamente a quién contactar, cuándo y con qué mensaje.</p>
                    <p className="highlight-text">Los resultados en IEY® (+114% en facturación recurrente en 6 meses) nos mostraron que otras distribuidoras mayoristas enfrentaban el mismo problema. Por eso decidimos compartir el sistema.</p>
                    <p className="quote">&ldquo;PymePilot es el sistema que hubiera querido tener desde el día 1.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué somos diferentes */}
        <section className="section-dark">
          <div className="section-inner">
            <h2 className="section-title">Por qué somos diferentes</h2>
            <div className="diff-grid">
              <div className="diff-card">
                <div className="diff-icon">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <rect x="8" y="16" width="24" height="18" rx="2" stroke="#81B5A1" strokeWidth="2" fill="none"/>
                    <path d="M4 16l16-10 16 10" stroke="#81B5A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="16" y="24" width="8" height="10" rx="1" stroke="#81B5A1" strokeWidth="1.5" fill="rgba(129,181,161,0.15)"/>
                    <rect x="12" y="20" width="4" height="4" rx="0.5" stroke="#81B5A1" strokeWidth="1.5" opacity="0.6" fill="none"/>
                    <rect x="24" y="20" width="4" height="4" rx="0.5" stroke="#81B5A1" strokeWidth="1.5" opacity="0.6" fill="none"/>
                  </svg>
                </div>
                <h3>Construido EN una distribuidora</h3>
                <p>No desde una consultora o agencia. Vivimos el problema en primera persona dentro de IEY®.</p>
              </div>
              <div className="diff-card">
                <div className="diff-icon">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <line x1="6" y1="34" x2="34" y2="34" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    <line x1="6" y1="6" x2="6" y2="34" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    <rect x="10" y="22" width="5" height="12" rx="1.5" fill="#81B5A1" opacity="0.4"/>
                    <rect x="18" y="14" width="5" height="20" rx="1.5" fill="#81B5A1" opacity="0.6"/>
                    <rect x="26" y="8" width="5" height="26" rx="1.5" fill="#81B5A1"/>
                    <circle cx="32" cy="8" r="5" fill="#293E40" stroke="#81B5A1" strokeWidth="1.5"/>
                    <path d="M29.5 8l2 2 3.5-3.5" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <h3>Resultados reales, no promesas</h3>
                <p>6 meses de data validada con métricas públicas. No vendemos humo, mostramos números concretos.</p>
              </div>
              <div className="diff-card">
                <div className="diff-icon">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="16" stroke="#81B5A1" strokeWidth="1.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="11" stroke="#81B5A1" strokeWidth="1.5" opacity="0.5"/>
                    <circle cx="20" cy="20" r="6" stroke="#81B5A1" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="2" fill="#81B5A1"/>
                    <line x1="20" y1="2" x2="20" y2="8" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <line x1="20" y1="32" x2="20" y2="38" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <line x1="2" y1="20" x2="8" y2="20" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <line x1="32" y1="20" x2="38" y2="20" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </div>
                <h3>Especialización total</h3>
                <p>100% enfocado en distribuidores B2B mayoristas. No intentamos resolver todo para todos.</p>
              </div>
              <div className="diff-card">
                <div className="diff-icon">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <ellipse cx="20" cy="20" rx="16" ry="10" stroke="#81B5A1" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="20" r="6" stroke="#81B5A1" strokeWidth="2" fill="rgba(129,181,161,0.15)"/>
                    <circle cx="20" cy="20" r="2.5" fill="#81B5A1"/>
                    <line x1="20" y1="4" x2="20" y2="8" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    <line x1="20" y1="32" x2="20" y2="36" stroke="#81B5A1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                </div>
                <h3>Transparencia absoluta</h3>
                <p>Documentamos el desarrollo y los resultados en público. Sin secretos, sin promesas vacías.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Validado en IEY */}
        <section className="section-default">
          <div className="section-inner">
            <div className="iey-box">
              <div className="iey-header">
                <h2>Validado en</h2>
                <div className="iey-logo"><img src="/assets/icons/IEY - PNG BLANCO CON ESPACIO-13 (1).png" alt="IEY®" loading="lazy" /></div>
                <p className="iey-subtitle">Distribuidor #1 de Accesorios MagSafe en Argentina</p>
              </div>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-label">Facturación Recurrente</div>
                  <div className="metric-value">34% → 74%</div>
                  <div className="metric-change">+114% de mejora</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Pérdida de Clientes / Mes</div>
                  <div className="metric-value">18% → 8%</div>
                  <div className="metric-change">-56% reducción</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Clientes Recurrentes</div>
                  <div className="metric-value">4 → 19</div>
                  <div className="metric-change">+375% crecimiento</div>
                </div>
              </div>
              <p className="iey-footnote">Métricas reales de agosto 2025 a febrero 2026 · Datos verificables</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <h2>¿Querés estos resultados en tu distribuidora?</h2>
          <p>Hablemos 15 minutos. Sin compromiso.</p>
          <a
            href="https://wa.me/5491157064734?text=Hola!%20Vi%20el%20caso%20de%20IEY%20y%20quiero%20saber%20c%C3%B3mo%20aplicar%20el%20sistema%20en%20mi%20distribuidora"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendá tu reunión de 15 min
          </a>
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
