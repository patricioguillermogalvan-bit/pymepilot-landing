import { readFileSync } from 'fs'
import { join } from 'path'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PymePilot | Seguimiento Inteligente por WhatsApp para Distribuidoras Mayoristas',
  description: 'Sistema de seguimiento inteligente por WhatsApp para Distribuidoras Mayoristas. De 34% a 74% de facturación recurrente en 6 meses. Caso real IEY.',
  alternates: { canonical: '/' },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Funciona con mi sistema de facturación actual?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, con total seguridad. Nos integramos con cualquier sistema: ERP, software de gestión propio, o incluso planillas de Excel. No tenés que migrar nada ni cambiar la forma en que trabajás. Nosotros nos conectamos a lo que ya usás, extraemos los datos que necesitamos y tu operación sigue funcionando exactamente igual. Con IEY® nos integramos en menos de 2 semanas y el equipo no tuvo que aprender ninguna herramienta nueva.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto tarda la implementación?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Entre 1 y 2 semanas desde que nos das acceso a tus datos. La primera semana conectamos tu base, analizamos tu cartera de clientes y configuramos los motores de inteligencia. La segunda semana tu equipo ya está recibiendo los primeros informes con clientes concretos para contactar, propuestas personalizadas y la cadena de contactos sugerida paso a paso. No es un proyecto de 6 meses como las consultoras tradicionales: en IEY® empezaron a ver resultados desde el primer mes.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué pasa si no funciona?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tenés 90 días de garantía total. Si en ese tiempo no ves un aumento medible en ventas recurrentes o recuperación de clientes, te devolvemos el 100% de lo que pagaste. Sin preguntas, sin letra chica, sin excusas. Nosotros asumimos el riesgo porque los resultados de IEY® (+114.8% en facturación recurrente en 6 meses) nos dan la confianza de que el sistema funciona. Tu única inversión real es el tiempo de probarlo.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Necesito conocimientos técnicos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ninguno. Nuestro motor inteligente hace todo el análisis de forma automática y le envía a tu equipo informes claros y accionables: qué cliente contactar, por qué, qué ofrecerle, y una cadena de contactos sugerida paso a paso con propuestas personalizadas basadas en su historial. Tu equipo solo necesita leer el informe y actuar. Nosotros nos encargamos de toda la parte técnica, la inteligencia artificial y el mantenimiento del sistema.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se diferencia de un CRM como Kommo o HubSpot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Un CRM es una herramienta vacía que vos tenés que llenar, configurar y mantener. PYMEPILOT es un sistema activo con tres motores de inteligencia que trabajan solos: el motor de recuperación detecta clientes que se están yendo, el de reposición predictiva anticipa cuándo necesitan reponer stock, y el de cross-selling identifica productos que nunca les ofreciste. Tu equipo no carga datos, no configura reglas y no necesita capacitación. Solo recibe los informes y actúa sobre oportunidades concretas que el sistema ya analizó por ellos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Solo funciona para distribuidoras?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Está diseñado específicamente para distribuidoras y mayoristas B2B en Argentina. Empresas que tienen clientes recurrentes, catálogos amplios y equipos comerciales que necesitan saber a quién contactar cada día, con qué oferta y en qué momento. Si tu negocio depende de que los clientes te sigan comprando mes a mes, el sistema está hecho para vos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué pasa con la confidencialidad de mis datos?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tus datos están protegidos en servidores seguros, nunca se comparten con terceros y nunca se utilizan para entrenar modelos de inteligencia artificial. La información de tu empresa y de tus clientes es estrictamente confidencial. El caso de IEY® se publica únicamente con métricas porcentuales y con autorización explícita del fundador. Con tu empresa aplicamos exactamente el mismo criterio: nada se publica, se comparte ni se menciona sin tu autorización por escrito.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo cancelar en cualquier momento?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, sin ningún tipo de permanencia ni penalización. Si en algún momento decidís que no querés continuar, cancelás y listo. No hay contratos de largo plazo, no hay cláusulas ocultas y no hay costos de salida. Creemos que si el sistema funciona (y los resultados lo demuestran), vas a querer quedarte por decisión propia, no por obligación.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
