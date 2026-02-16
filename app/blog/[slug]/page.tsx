import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  extractTOC,
} from '@/lib/blog'
import { mdxComponents } from '@/components/blog/MDXComponents'
import TableOfContents from '@/components/blog/TableOfContents'
import BlogCTA from '@/components/blog/BlogCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter } = post
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    robots: 'index, follow',
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://pymepilot.cloud/blog/${slug}`,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      siteName: 'PymePilot',
      locale: 'es_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post
  const toc = extractTOC(content)
  const related = getRelatedPosts(slug, frontmatter.tags)

  const date = new Date(frontmatter.date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PymePilot',
      url: 'https://pymepilot.cloud',
    },
    mainEntityOfPage: `https://pymepilot.cloud/blog/${slug}`,
    image: frontmatter.image
      ? `https://pymepilot.cloud${frontmatter.image}`
      : undefined,
  }

  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <style>{`
        .post-page { background: #1A2123; min-height: 100vh; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }

        .post-hero { position: relative; overflow: hidden; padding: 120px 1.5rem 48px; text-align: center; }
        .post-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(129,181,161,0.15) 0%, transparent 70%); pointer-events: none; }
        .post-hero__inner { max-width: 720px; margin: 0 auto; position: relative; }
        .post-hero__tags { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
        .post-hero__tag { font-size: 0.7rem; font-weight: 600; color: #81B5A1; background: rgba(129,181,161,0.1); padding: 4px 12px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.03em; }
        .post-hero h1 { font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.15; }
        .post-hero__meta { font-size: 0.9rem; color: #6B7C7F; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }
        .post-hero__meta-dot { color: #6B7C7F; }

        .post-layout { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem 80px; display: grid; grid-template-columns: 1fr 220px; gap: 64px; align-items: start; }
        .post-article { max-width: 720px; width: 100%; min-width: 0; overflow-wrap: break-word; word-break: break-word; }
        .post-sidebar { position: relative; }

        .related-posts { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem 80px; }
        .related-posts__title { font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 32px; }
        .related-posts__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .blog-card { display: flex; flex-direction: column; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(8px); text-decoration: none; transition: all 0.3s; overflow: hidden; }
        .blog-card:hover { border-color: rgba(129,181,161,0.4); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
        .blog-card__image { height: 200px; background: #252E30; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .blog-card__image-placeholder { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .blog-card__body { padding: 24px; display: flex; flex-direction: column; flex-grow: 1; }
        .blog-card__tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; min-height: 58px; align-content: flex-start; }
        .blog-card__tag { font-size: 0.7rem; font-weight: 600; color: #81B5A1; background: rgba(129,181,161,0.1); padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.03em; }
        .blog-card__title { font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 8px; line-height: 1.4; min-height: 4.2em; max-height: 4.2em; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .blog-card__excerpt { font-size: 0.9rem; color: #9AABAE; line-height: 1.6; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .blog-card__meta { font-size: 0.8rem; color: #6B7C7F; display: flex; align-items: center; gap: 6px; margin-top: auto; }
        .blog-card__dot { color: #6B7C7F; }

        @media (max-width: 1024px) {
          .post-layout { grid-template-columns: 1fr; gap: 0; }
          .post-article { max-width: 100%; }
          .post-sidebar { order: -1; margin-bottom: 32px; }
          .related-posts__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .post-hero { padding: 100px 16px 32px; }
          .post-hero h1 { font-size: 1.75rem; }
          .post-layout { padding: 0 16px 60px; }
          .related-posts { padding: 0 16px 60px; }
          .related-posts__grid { grid-template-columns: 1fr; }
          .blog-card__body { padding: 16px; }
          .blog-card__tags { min-height: auto; }
          .blog-card__title { min-height: auto; max-height: none; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

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
              </ul>
              <div className="nav__actions">
                <a href="https://wa.me/5491157064734?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20PYMEPILOT." className="btn btn--primary" target="_blank" rel="noopener">Agendá una reunión</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Script src="/script.js" strategy="afterInteractive" />

      <div className="post-page">
        {/* Hero */}
        <section className="post-hero">
          <div className="post-hero__inner">
            <div className="post-hero__tags">
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="post-hero__tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1>{frontmatter.title}</h1>
            <div className="post-hero__meta">
              <span>{frontmatter.author}</span>
              <span className="post-hero__meta-dot">·</span>
              <span>{date}</span>
              <span className="post-hero__meta-dot">·</span>
              <span>{readingTime}</span>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="post-layout">
          <article className="post-article">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypePrettyCode, { theme: 'github-dark-dimmed' }],
                  ],
                },
              }}
            />
            <BlogCTA />
          </article>
          <aside className="post-sidebar">
            <TableOfContents items={toc} />
          </aside>
        </div>

        {/* Related posts */}
        <RelatedPosts posts={related} />
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
              <div className="footer__column"><h4>Recursos</h4><ul><li><a href="/#proceso">Cómo Funciona</a></li><li><a href="/#pricing">Precio</a></li><li><a href="/blog">Blog</a></li><li><a href="/#faq">Preguntas Frecuentes</a></li></ul></div>
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
