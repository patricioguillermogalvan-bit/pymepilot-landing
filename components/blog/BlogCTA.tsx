export default function BlogCTA() {
  return (
    <>
      <style>{`
        .blog-cta { padding: 48px; border-radius: 24px; background: linear-gradient(135deg, rgba(92,143,131,0.15) 0%, rgba(129,181,161,0.05) 100%); border: 1px solid rgba(129,181,161,0.2); box-shadow: 0 16px 48px rgba(0,0,0,0.2); text-align: center; margin-top: 64px; }
        .blog-cta h3 { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .blog-cta p { font-size: 1.1rem; color: #9AABAE; margin-bottom: 32px; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto; }
        .blog-cta .cta-btn { display: inline-flex; align-items: center; gap: 12px; padding: 18px 36px; background: linear-gradient(135deg, #5C8F83 0%, #81B5A1 100%); color: #fff; font-size: 1.1rem; font-weight: 700; border-radius: 12px; text-decoration: none; transition: all 0.3s; box-shadow: 0 8px 32px rgba(129,181,161,0.3); }
        .blog-cta .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(129,181,161,0.5); }
        .blog-cta .cta-btn svg { width: 22px; height: 22px; }
        @media (max-width: 768px) { .blog-cta { padding: 32px 24px; } .blog-cta h3 { font-size: 1.4rem; } .blog-cta .cta-btn { padding: 16px 28px; font-size: 1rem; } }
      `}</style>
      <aside className="blog-cta">
        <h3>¿Querés estos resultados en tu distribuidora?</h3>
        <p>Agendá una reunión de 15 minutos y te mostramos cómo funciona el sistema. Sin compromiso.</p>
        <a
          href="https://wa.me/5491157064734?text=Hola!%20Estuve%20leyendo%20el%20blog%20de%20PymePilot%20y%20quiero%20saber%20m%C3%A1s."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendá tu Demo
        </a>
      </aside>
    </>
  )
}
