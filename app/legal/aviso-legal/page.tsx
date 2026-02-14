import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal sobre PymePilot y Patricio Guillermo Galvan.',
  robots: 'index, follow',
  alternates: { canonical: '/legal/aviso-legal' },
}

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout title="Aviso Legal" lastUpdated="12 de febrero de 2026">
      <div
        dangerouslySetInnerHTML={{
          __html: `
<h2>1. Identificación del Titular</h2>

<p>En cumplimiento con el deber de información dispuesto en la legislación argentina, se informa a los usuarios de este sitio web de los siguientes datos:</p>

<ul>
    <li><strong>Nombre comercial:</strong> PymePilot</li>
    <li><strong>Titular:</strong> Patricio Guillermo Galvan</li>
    <li><strong>CUIT:</strong> 20-40396470-1</li>
    <li><strong>Condición tributaria:</strong> Monotributista - Categoría A</li>
    <li><strong>Actividades declaradas en AFIP:</strong>
        <ul>
            <li>Servicios de Publicidad N.C.P. (F883-731009)</li>
            <li>Servicios Empresariales N.C.P. (F883-829900)</li>
        </ul>
    </li>
    <li><strong>Domicilio fiscal:</strong> Aristóbulo del Valle 2737, Quilmes, Buenos Aires (CP 1878), Argentina</li>
    <li><strong>Email de contacto:</strong> contacto@pymepilot.cloud</li>
    <li><strong>Teléfono:</strong> Disponible a solicitud vía email</li>
</ul>

<h2>2. Información del Sitio Web</h2>

<ul>
    <li><strong>Nombre de dominio:</strong> pymepilot.cloud</li>
    <li><strong>URL completa:</strong> <a href="https://pymepilot.cloud">https://pymepilot.cloud</a></li>
    <li><strong>Hosting:</strong> Hostinger International Ltd.</li>
    <li><strong>Servidor:</strong> Hostinger</li>
    <li><strong>Diseño y desarrollo:</strong> Patricio Guillermo Galvan</li>
    <li><strong>Fecha de publicación:</strong> Febrero de 2026</li>
</ul>

<h2>3. Objeto del Sitio Web</h2>

<p>Este sitio web tiene como finalidad la promoción, información y comercialización de servicios empresariales de gestión de relaciones con clientes (CRM) mediante WhatsApp Business API, dirigido especialmente a pequeñas y medianas empresas distribuidoras del sector B2B en Argentina.</p>

<h3>3.1 Servicios Ofrecidos</h3>

<p>PymePilot ofrece los siguientes servicios:</p>

<ul>
    <li>Plataforma de gestión de clientes (CRM) integrada con WhatsApp</li>
    <li>Automatización de seguimiento comercial y procesos de ventas</li>
    <li>Integración con WhatsApp Business API</li>
    <li>Herramientas de análisis y reportes comerciales</li>
    <li>Consultoría en optimización de procesos de ventas B2B</li>
    <li>Soporte técnico y capacitación de usuarios</li>
    <li>Servicios de implementación y personalización</li>
</ul>

<h3>3.2 Público Objetivo</h3>

<p>Los servicios están diseñados específicamente para:</p>

<ul>
    <li>Pequeñas y medianas empresas (PyMEs)</li>
    <li>Distribuidoras mayoristas</li>
    <li>Empresas del sector B2B (Business to Business)</li>
    <li>Comercios con operaciones en Argentina</li>
</ul>

<h2>4. Condiciones de Uso del Sitio Web</h2>

<h3>4.1 Aceptación</h3>

<p>El acceso y uso de este sitio web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal, así como en los <a href="/legal/terms-of-service">Términos y Condiciones</a> y la <a href="/legal/privacy-policy">Política de Privacidad</a>.</p>

<h3>4.2 Uso Adecuado</h3>

<p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente Aviso Legal, los Términos y Condiciones, la moral y buenas costumbres generalmente aceptadas y el orden público.</p>

<p>Queda prohibido el uso del sitio web con fines ilícitos o lesivos contra Patricio Guillermo Galvan, PymePilot o cualquier tercero, o que de cualquier forma pueda dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal utilización.</p>

<h2>5. Propiedad Intelectual e Industrial</h2>

<h3>5.1 Titularidad</h3>

<p>El nombre comercial "PymePilot", así como el diseño del sitio web, su código fuente, logotipos, marcas, y demás signos distintivos que aparecen en el sitio son propiedad exclusiva de Patricio Guillermo Galvan, o en su caso, de terceros que han autorizado debidamente su inclusión.</p>

<h3>5.2 Derechos de Autor</h3>

<p>Todos los contenidos del sitio web, incluyendo sin carácter limitativo:</p>

<ul>
    <li>Textos, fotografías, gráficos e imágenes</li>
    <li>Iconos, tecnología, software y links</li>
    <li>Diseño gráfico, código fuente y software</li>
    <li>Estructura de navegación y presentación</li>
    <li>Nombres comerciales, marcas o signos distintivos</li>
    <li>Documentación, manuales y tutoriales</li>
    <li>Contenido multimedia (videos, animaciones)</li>
</ul>

<p>Están protegidos como propiedad intelectual por las leyes argentinas y los convenios internacionales de los que Argentina es parte.</p>

<h3>5.3 Prohibiciones</h3>

<p>Queda expresamente prohibido:</p>

<ul>
    <li>La reproducción, distribución, comunicación pública y transformación de los contenidos sin autorización expresa del titular</li>
    <li>La utilización de los contenidos con fines comerciales o publicitarios</li>
    <li>La extracción o reutilización de partes sustanciales del contenido</li>
    <li>La eliminación, alteración o manipulación de avisos de derechos de autor, marcas u otros datos identificativos</li>
    <li>El uso del nombre, logotipo o marca "PymePilot" sin autorización previa por escrito</li>
    <li>La creación de obras derivadas basadas en el contenido del sitio</li>
</ul>

<h3>5.4 Uso Permitido</h3>

<p>Se autoriza exclusivamente:</p>

<ul>
    <li>La visualización de los contenidos mediante navegadores web estándar</li>
    <li>La impresión de copias individuales para uso personal y no comercial</li>
    <li>El enlace al sitio web (siempre que no implique asociación, aprobación o patrocinio)</li>
</ul>

<h2>6. Responsabilidad y Exención de Garantías</h2>

<h3>6.1 Contenido del Sitio</h3>

<p>Patricio Guillermo Galvan no garantiza la licitud, fiabilidad, utilidad, veracidad o exactitud de los servicios o de la información que presta a través del sitio web.</p>

<p>En consecuencia, Patricio Guillermo Galvan no se hace responsable de:</p>

<ul>
    <li>Errores u omisiones en los contenidos</li>
    <li>Falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web</li>
    <li>Existencia de virus, programas maliciosos o lesivos en los contenidos</li>
    <li>Uso ilícito, negligente o fraudulento del sitio web por parte de los usuarios</li>
    <li>Falta de veracidad, exactitud, exhaustividad y actualidad de los contenidos</li>
</ul>

<h3>6.2 Disponibilidad del Servicio</h3>

<p>Patricio Guillermo Galvan no garantiza la disponibilidad y continuidad del funcionamiento del sitio web. Cuando sea razonablemente posible, se advertirá previamente de las interrupciones en el funcionamiento del sitio web.</p>

<p>Patricio Guillermo Galvan no será responsable ni garantiza que:</p>

<ul>
    <li>El sitio web funcione sin errores o de forma ininterrumpida</li>
    <li>Los defectos sean corregidos inmediatamente</li>
    <li>El sitio web esté libre de virus u otros componentes dañinos</li>
</ul>

<h3>6.3 Enlaces a Terceros</h3>

<p>El sitio web puede contener enlaces (links) a otros sitios web de terceros. Patricio Guillermo Galvan no controla ni se hace responsable de:</p>

<ul>
    <li>Los contenidos, servicios, publicidad o cualquier otro material disponible en sitios enlazados</li>
    <li>Las políticas de privacidad y tratamiento de datos de sitios de terceros</li>
    <li>La disponibilidad técnica, calidad, fiabilidad o exactitud de sitios enlazados</li>
</ul>

<p>La inclusión de enlaces no implica ningún tipo de asociación, fusión, participación, colaboración, supervisión o control por parte de Patricio Guillermo Galvan respecto de los sitios enlazados.</p>

<h2>7. Protección de Datos Personales</h2>

<h3>7.1 Normativa Aplicable</h3>

<p>El tratamiento de datos personales se realiza conforme a lo establecido en:</p>

<ul>
    <li><strong>Ley 25.326 de Protección de Datos Personales</strong> (Argentina)</li>
    <li><strong>Disposición 10/2008 de la Dirección Nacional de Protección de Datos Personales</strong></li>
    <li><strong>GDPR (Reglamento General de Protección de Datos)</strong> - para usuarios de la Unión Europea</li>
    <li><strong>CCPA (California Consumer Privacy Act)</strong> - para residentes de California</li>
    <li>Normativa complementaria y supletoria aplicable</li>
</ul>

<h3>7.2 Derechos del Usuario</h3>

<p>Para ejercer sus derechos de acceso, rectificación, actualización, supresión y confidencialidad de datos personales (derechos ARCO), puede contactarnos en:</p>

<ul>
    <li><strong>Email:</strong> contacto@pymepilot.cloud</li>
    <li><strong>Asunto:</strong> "Ejercicio de Derechos ARCO - [Su Nombre]"</li>
</ul>

<h3>7.3 Más Información</h3>

<p>Para información detallada sobre cómo recopilamos, usamos y protegemos sus datos personales, consulte nuestra <a href="/legal/privacy-policy">Política de Privacidad</a>.</p>

<h2>8. Uso de Cookies</h2>

<p>Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, proporcionar funcionalidades de redes sociales y analizar el tráfico.</p>

<p>Al navegar por este sitio, usted acepta el uso de cookies de acuerdo con nuestra <a href="/legal/cookie-policy">Política de Cookies</a>.</p>

<p>Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíen cookies. Sin embargo, algunas partes del sitio pueden no funcionar correctamente sin cookies.</p>

<h2>9. Comunicaciones Comerciales</h2>

<p>De acuerdo con la legislación vigente sobre servicios de la sociedad de la información y comercio electrónico, Patricio Guillermo Galvan se compromete a:</p>

<ul>
    <li>No enviar comunicaciones comerciales sin la identificación previa y clara de su carácter publicitario</li>
    <li>Obtener consentimiento expreso del destinatario para el envío de comunicaciones comerciales</li>
    <li>Proporcionar medios sencillos y gratuitos para que el destinatario pueda revocar el consentimiento prestado</li>
    <li>Respetar las solicitudes de baja o cancelación de suscripción</li>
</ul>

<h2>10. Legislación Aplicable y Jurisdicción</h2>

<h3>10.1 Ley Aplicable</h3>

<p>Este Aviso Legal se rige e interpreta de acuerdo con las leyes de la República Argentina.</p>

<h3>10.2 Jurisdicción Competente</h3>

<p>Para cualquier controversia derivada del uso del sitio web o de los servicios ofrecidos, las partes acuerdan someterse expresamente a la jurisdicción de los tribunales ordinarios de la Ciudad de Buenos Aires, Argentina, renunciando a cualquier otro fuero que pudiera corresponderles.</p>

<h3>10.3 Resolución Alternativa de Disputas</h3>

<p>Sin perjuicio de lo anterior, las partes se comprometen a intentar resolver cualquier controversia mediante negociación de buena fe antes de recurrir a los tribunales.</p>

<h2>11. Modificaciones</h2>

<p>Patricio Guillermo Galvan se reserva el derecho de modificar el presente Aviso Legal en cualquier momento, con el fin de adaptarlo a novedades legislativas, jurisprudenciales, tecnológicas o por motivos corporativos.</p>

<p>Los cambios entrarán en vigor desde su publicación en el sitio web. Le recomendamos revisar periódicamente esta página para estar informado de cualquier actualización.</p>

<p>La fecha de "Última actualización" en la parte superior de este documento indica cuándo se realizó la última modificación.</p>

<h2>12. Nulidad e Ineficacia de las Cláusulas</h2>

<p>Si cualquier cláusula incluida en este Aviso Legal fuese declarada total o parcialmente nula o ineficaz, tal nulidad o ineficacia afectará tan solo a dicha disposición o a la parte de la misma que resulte nula o ineficaz, subsistiendo el Aviso Legal en todo lo demás.</p>

<h2>13. Información Adicional</h2>

<h3>13.1 Propiedad del Dominio</h3>

<p>El dominio pymepilot.cloud es propiedad de Patricio Guillermo Galvan y está registrado a través de un proveedor de servicios de registro de dominios autorizado.</p>

<h3>13.2 Certificado SSL</h3>

<p>Este sitio web utiliza certificados SSL (Secure Socket Layer) para garantizar la seguridad de las comunicaciones y proteger la información transmitida entre el usuario y el servidor.</p>

<h3>13.3 Accesibilidad</h3>

<p>Patricio Guillermo Galvan se esfuerza por hacer que este sitio web sea accesible para todas las personas, independientemente de sus capacidades. Si encuentra dificultades para acceder a cualquier parte del sitio, por favor contáctenos para que podamos ayudarle.</p>

<h2>14. Contacto</h2>

<p>Para cualquier consulta, sugerencia, reclamación o comentario relacionado con este Aviso Legal o con el funcionamiento del sitio web, puede contactarnos a través de los siguientes medios:</p>

<ul>
    <li><strong>Email:</strong> contacto@pymepilot.cloud</li>
    <li><strong>Dirección postal:</strong> Aristóbulo del Valle 2737, Quilmes, Buenos Aires (CP 1878), Argentina</li>
    <li><strong>Responsable:</strong> Patricio Guillermo Galvan</li>
    <li><strong>CUIT:</strong> 20-40396470-1</li>
    <li><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 hs (GMT-3)</li>
</ul>

<p>Nos comprometemos a responder a su consulta en un plazo máximo de 5 días hábiles.</p>

<hr>

<p><strong>Vigencia:</strong> Desde 01 de mayo de 2025 (fecha inicio actividad AFIP)</p>

<p><em>Al utilizar este sitio web, usted reconoce haber leído, comprendido y aceptado los términos y condiciones establecidos en este Aviso Legal.</em></p>
          `
        }}
      />
    </LegalPageLayout>
  )
}
