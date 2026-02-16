'use client'

import React from 'react'
import Script from 'next/script'

interface LegalPageLayoutProps {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <style>{`
        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 1.5rem 4rem;
        }
        .legal-content h1 {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #293E40;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .legal-content .legal-date {
          font-size: 0.875rem;
          color: #9AABAE;
          margin-bottom: 3rem;
        }
        .legal-content h2 {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #293E40;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .legal-content h3 {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: #344B4E;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .legal-content p {
          font-size: 1rem;
          line-height: 1.8;
          color: #4A5759;
          margin-bottom: 1rem;
        }
        .legal-content ul, .legal-content ol {
          color: #4A5759;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          list-style: disc;
        }
        .legal-content ol {
          list-style: decimal;
        }
        .legal-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
          font-size: 1rem;
        }
        .legal-content a {
          color: #5a9a84;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-content a:hover {
          color: #81B5A1;
        }
        .legal-content strong {
          color: #293E40;
          font-weight: 600;
        }
        .legal-content hr {
          border: none;
          border-top: 1px solid #E4EAEB;
          margin: 2rem 0;
        }
        .legal-content em {
          color: #6B7C7F;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }
        .legal-content th {
          background: #F1F5F6;
          color: #293E40;
          font-weight: 600;
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 2px solid #D1DADC;
        }
        .legal-content td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #E4EAEB;
          color: #4A5759;
        }
        .legal-back {
          display: flex;
          justify-content: center;
          padding-bottom: 4rem;
        }
        .legal-back a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          background: #81B5A1;
          color: #293E40;
          text-decoration: none;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .legal-back a:hover {
          background: #a3cabb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(129, 181, 161, 0.4);
        }
        @media (max-width: 768px) {
          .legal-content h1 {
            font-size: 1.875rem;
          }
          .legal-content h2 {
            font-size: 1.25rem;
          }
          .legal-content {
            padding-top: 100px;
          }
        }
      `}</style>

      {/* Header - Idéntico a la landing */}
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
                <a href="https://wa.me/5491123994719?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20PYMEPILOT." className="btn btn--primary" target="_blank" rel="noopener">Agendá una reunión</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Script src="/script.js" strategy="afterInteractive" />

      {/* Contenido legal */}
      <div className="legal-content">
        <h1>{title}</h1>
        {lastUpdated && (
          <p className="legal-date">Última actualización: {lastUpdated}</p>
        )}
        {children}
      </div>

      {/* Botón volver */}
      <div className="legal-back">
        <a href="/">← Volver al inicio</a>
      </div>

      {/* Footer - Idéntico a la landing */}
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
              <p className="footer__tagline">
                El sistema que convierte clientes nuevos en recurrentes.
                Especialistas en distribuidoras mayoristas B2B.
              </p>
              <div className="footer__contact-info">
                <a href="mailto:contacto@pymepilot.cloud">contacto@pymepilot.cloud</a>
              </div>
            </div>

            <div className="footer__links">
              <div className="footer__column">
                <h4>Las 4 Verticales</h4>
                <ul>
                  <li><a href="/#solucion">Clientes Nuevos</a></li>
                  <li><a href="/#solucion">Reposición Predictiva</a></li>
                  <li><a href="/#solucion">Cross-Sell</a></li>
                  <li><a href="/#solucion">Recuperación Inactivos</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h4>Caso de Éxito</h4>
                <ul>
                  <li><a href="/#caso-iey">Resultados IEY</a></li>
                  <li><a href="/#comparacion">Comparación</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h4>Recursos</h4>
                <ul>
                  <li><a href="/#proceso">Cómo Funciona</a></li>
                  <li><a href="/#pricing">Precio</a></li>
                  <li><a href="/#faq">Preguntas Frecuentes</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h4>Legal</h4>
                <ul>
                  <li><a href="/about">Acerca de PymePilot</a></li>
                  <li><a href="/contact">Contacto</a></li>
                  <li><a href="/legal/aviso-legal">Aviso Legal</a></li>
                  <li><a href="/legal/privacy-policy">Política de Privacidad</a></li>
                  <li><a href="/legal/terms-of-service">Términos y Condiciones</a></li>
                  <li><a href="/legal/cookie-policy">Política de Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">© 2025 PymePilot. Todos los derechos reservados.</p>
            <p className="footer__location">Hecho en Argentina</p>
          </div>
        </div>
      </footer>
    </>
  )
}
