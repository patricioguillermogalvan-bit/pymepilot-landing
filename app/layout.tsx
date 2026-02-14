import type { Metadata } from 'next'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: {
    default: 'PymePilot - CRM WhatsApp para Distribuidores B2B',
    template: '%s | PymePilot',
  },
  description: 'Plataforma CRM especializada en WhatsApp para distribuidores PyME en Argentina. Automatización inteligente de seguimiento comercial y gestión de clientes.',
  keywords: ['CRM WhatsApp', 'distribuidores B2B', 'automatización comercial', 'PyME Argentina', 'seguimiento clientes', 'CRM distribuidores'],
  authors: [{ name: 'Patricio Guillermo Galvan' }],
  creator: 'PymePilot',
  publisher: 'PymePilot',
  metadataBase: new URL('https://pymepilot.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://pymepilot.cloud',
    title: 'PymePilot - Seguimiento Inteligente para Distribuidores B2B',
    description: 'Sistema de seguimiento inteligente para distribuidores B2B. Analiza tu base y le dice a tu equipo a quién contactar, cuándo y qué ofrecer.',
    siteName: 'PymePilot',
    images: [{
      url: 'https://pymepilot.cloud/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PymePilot - Seguimiento Inteligente para Distribuidores B2B',
    description: 'Sistema de seguimiento inteligente para distribuidores B2B. Analiza tu base y le dice a tu equipo a quién contactar, cuándo y qué ofrecer.',
    images: ['https://pymepilot.cloud/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @keyframes cookieSlideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PymePilot',
              url: 'https://pymepilot.cloud',
              logo: 'https://pymepilot.cloud/og-image.jpg',
              description: 'Sistema de seguimiento inteligente por WhatsApp para Distribuidoras Mayoristas.',
              email: 'contacto@pymepilot.cloud',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Aristóbulo del Valle 2737',
                addressLocality: 'Quilmes',
                addressRegion: 'Buenos Aires',
                addressCountry: 'AR',
              },
              founder: {
                '@type': 'Person',
                name: 'Patricio Guillermo Galván',
              },
            }),
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
