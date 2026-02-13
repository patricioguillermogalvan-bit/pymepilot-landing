import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acerca de PymePilot - CRM WhatsApp para Distribuidores B2B',
  description: 'Conoce PymePilot, la plataforma CRM especializada en WhatsApp para distribuidores PyME en Argentina. Automatización inteligente de seguimiento comercial.',
  robots: 'index, follow',
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <article className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none">

        <h1>Acerca de PymePilot</h1>

        <h2>Quiénes Somos</h2>

        <p>PymePilot es una plataforma de CRM (Customer Relationship Management) especializada en WhatsApp, diseñada específicamente para pequeñas y medianas empresas distribuidoras del sector B2B en Argentina.</p>

        <p>Fundada y operada por Patricio Guillermo Galvan, PymePilot nace de la necesidad real de los distribuidores mayoristas argentinos de contar con herramientas tecnológicas accesibles, efectivas y adaptadas a su forma de trabajar.</p>

        <p>Nuestra plataforma combina la potencia del CRM con la inmediatez de WhatsApp Business API para ofrecer una solución de automatización inteligente de seguimiento comercial que se integra de forma natural en el flujo de trabajo diario de los equipos de ventas.</p>

        <h2>Nuestra Misión</h2>

        <p>Transformar la gestión comercial de distribuidores y mayoristas en Argentina mediante la automatización inteligente por WhatsApp.</p>

        <p>Creemos que la tecnología CRM no debería ser exclusiva de las grandes corporaciones. Por eso, nos enfocamos en:</p>

        <ul>
          <li><strong>Automatizar seguimientos comerciales</strong> para que ningún cliente quede sin atención y cada oportunidad de venta sea aprovechada.</li>
          <li><strong>Mejorar las tasas de conversión y recompra</strong> mediante un seguimiento sistemático, basado en datos y adaptado al ciclo de cada cliente.</li>
          <li><strong>Hacer la tecnología CRM accesible para PyMEs argentinas</strong>, con implementaciones rápidas, sin complejidad técnica y con resultados medibles desde el primer mes.</li>
        </ul>

        <h2>Qué Ofrecemos</h2>

        <p>PymePilot brinda un ecosistema completo de herramientas para potenciar la gestión comercial de distribuidores B2B:</p>

        <ul>
          <li><strong>Plataforma CRM integrada con WhatsApp Business API:</strong> Gestione sus relaciones comerciales directamente desde el canal que sus clientes ya utilizan.</li>
          <li><strong>Automatización de seguimiento comercial:</strong> Motor inteligente que programa, ejecuta y optimiza el seguimiento de cada cliente según su comportamiento de compra.</li>
          <li><strong>Análisis y reportes de ventas:</strong> Informes claros y accionables sobre rendimiento comercial, tasas de recompra, clientes en riesgo y oportunidades de crecimiento.</li>
          <li><strong>Consultoría en procesos comerciales B2B:</strong> Asesoramiento experto para optimizar su flujo de ventas, segmentación de cartera y estrategias de retención.</li>
          <li><strong>Soporte técnico especializado:</strong> Acompañamiento continuo para garantizar la adopción exitosa de la plataforma y la obtención de resultados.</li>
        </ul>

        <h2>Caso de Éxito</h2>

        <p>PymePilot fue validado con IEY, marca #1 en accesorios MagSafe en Argentina. En 6 meses de implementación, los resultados incluyeron un aumento de la facturación recurrente del 34% al 74%, la recuperación de clientes inactivos y la optimización de los procesos de reposición y cross-sell.</p>

        <h2>Información del Titular</h2>

        <ul>
          <li><strong>Nombre:</strong> Patricio Guillermo Galvan</li>
          <li><strong>CUIT:</strong> 20-40396470-1</li>
          <li><strong>Condición tributaria:</strong> Monotributista - Categoría A</li>
          <li><strong>Actividades declaradas en AFIP:</strong>
            <ul>
              <li>Servicios de Publicidad N.C.P. (F883-731009)</li>
              <li>Servicios Empresariales N.C.P. (F883-829900)</li>
            </ul>
          </li>
          <li><strong>Ubicación:</strong> Quilmes, Buenos Aires, Argentina</li>
          <li><strong>Email de contacto:</strong> <a href="mailto:contacto@pymepilot.cloud">contacto@pymepilot.cloud</a></li>
          <li><strong>Sitio web:</strong> <a href="https://pymepilot.cloud">https://pymepilot.cloud</a></li>
        </ul>

        <hr />

        <p><em>PymePilot — Seguimiento inteligente por WhatsApp para distribuidoras B2B en Argentina.</em></p>

      </article>

      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  )
}
