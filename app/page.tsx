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

  // Strip AOS attributes — AOS CSS hides elements with opacity:0
  // and the JS init timing in Next.js is unreliable, leaving content invisible
  body = body.replace(/\s*data-aos="[^"]*"/gi, '')
  body = body.replace(/\s*data-aos-delay="[^"]*"/gi, '')
  body = body.replace(/\s*data-aos-duration="[^"]*"/gi, '')

  return body
}

export default function HomePage() {
  const bodyContent = getBodyContent()

  return (
    <>
      <link rel="stylesheet" href="/styles.css" />

      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
