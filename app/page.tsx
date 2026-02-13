import { readFileSync } from 'fs'
import { join } from 'path'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PymePilot | Seguimiento Inteligente por WhatsApp para Distribuidoras Mayoristas',
  description: 'Sistema de seguimiento inteligente por WhatsApp para Distribuidoras Mayoristas. De 34% a 74% de facturación recurrente en 6 meses. Caso real IEY.',
}

function getBodyContent(): string {
  const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8')

  // Extract content between <body> and </body>
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (!match) return ''

  let body = match[1]

  // Remove <script> tags (loaded via Next.js Script component)
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '')

  // Remove HTML comments for scripts section
  body = body.replace(/<!--\s*AOS Library\s*-->/gi, '')
  body = body.replace(/<!--\s*Custom Scripts\s*-->/gi, '')

  // Remove the static cookie banner (React CookieConsent component handles it)
  body = body.replace(/<!--[\s\S]*?COOKIE CONSENT BANNER[\s\S]*?-->\s*<div id="cookie-consent"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '')

  return body
}

export default function HomePage() {
  const bodyContent = getBodyContent()

  return (
    <>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link rel="stylesheet" href="/styles.css" />

      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="beforeInteractive" />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
