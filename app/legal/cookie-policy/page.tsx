import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en PymePilot.',
  robots: 'index, follow',
  alternates: { canonical: '/legal/cookie-policy' },
}

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Política de Cookies" lastUpdated="12 de febrero de 2026">

        <h2>1. Introducción</h2>

        <p>Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en nuestro sitio web <a href="https://pymepilot.cloud">https://pymepilot.cloud</a> (el &quot;Sitio&quot;), los tipos de cookies que utilizamos, y cómo puede controlarlas.</p>

        <p>Al utilizar nuestro Sitio, usted acepta el uso de cookies de acuerdo con esta Política de Cookies.</p>

        <h2>2. ¿Qué son las Cookies?</h2>

        <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o teléfono móvil) cuando visita un sitio web.</p>

        <p>Las cookies permiten que el sitio web:</p>

        <ul>
          <li>Reconozca su dispositivo</li>
          <li>Recuerde sus preferencias</li>
          <li>Mejore su experiencia de navegación</li>
          <li>Proporcione funcionalidades específicas</li>
          <li>Analice cómo los usuarios interactúan con el sitio</li>
        </ul>

        <h2>3. Tipos de Cookies que Utilizamos</h2>

        <h3>3.1 Cookies Estrictamente Necesarias</h3>

        <p><strong>Propósito:</strong> Estas cookies son esenciales para el funcionamiento del Sitio y no pueden ser desactivadas en nuestros sistemas.</p>

        <p><strong>Qué hacen:</strong></p>

        <ul>
          <li>Permiten la navegación básica del sitio</li>
          <li>Proporcionan acceso a áreas seguras</li>
          <li>Recuerdan sus preferencias de privacidad (consentimiento de cookies)</li>
          <li>Mantienen la seguridad del sitio</li>
        </ul>

        <p><strong>Duración:</strong> Sesión (se eliminan al cerrar el navegador) o persistentes (hasta 12 meses)</p>

        <p><strong>Cookies utilizadas:</strong></p>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Propósito</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>pymepilot-cookie-consent</td>
              <td>Almacena sus preferencias de cookies</td>
              <td>12 meses</td>
            </tr>
            <tr>
              <td>session_id</td>
              <td>Mantiene su sesión activa</td>
              <td>Sesión</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Cookies Analíticas (Google Analytics)</h3>

        <p><strong>Propósito:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro Sitio mediante la recopilación y el análisis de información de forma anónima.</p>

        <p><strong>Qué hacen:</strong></p>

        <ul>
          <li>Cuentan el número de visitantes</li>
          <li>Rastrean cómo los usuarios navegan por el sitio</li>
          <li>Identifican las páginas más visitadas</li>
          <li>Miden el tiempo de permanencia</li>
          <li>Analizan patrones de tráfico</li>
          <li>Ayudan a mejorar la experiencia del usuario</li>
        </ul>

        <p><strong>Proveedor:</strong> Google LLC</p>

        <p><strong>Duración:</strong> Hasta 26 meses</p>

        <p><strong>Cookies utilizadas:</strong></p>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Propósito</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Distingue usuarios únicos</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_ga_XXXXXXXXXX</td>
              <td>Mantiene el estado de la sesión</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Distingue usuarios</td>
              <td>24 horas</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Limita la tasa de solicitudes</td>
              <td>1 minuto</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a></p>

        <h3>3.3 Cookies de Marketing y Publicidad (Meta Pixel)</h3>

        <p><strong>Propósito:</strong> Se utilizan para rastrear visitantes en sitios web y mostrar anuncios relevantes basados en sus intereses.</p>

        <p><strong>Qué hacen:</strong></p>

        <ul>
          <li>Rastrean su comportamiento de navegación</li>
          <li>Crean perfiles de intereses publicitarios</li>
          <li>Muestran anuncios personalizados en Facebook e Instagram</li>
          <li>Miden la efectividad de campañas publicitarias</li>
          <li>Realizan remarketing (mostrar anuncios a visitantes previos)</li>
          <li>Optimizan la entrega de anuncios</li>
        </ul>

        <p><strong>Proveedor:</strong> Meta Platforms Inc. (Facebook)</p>

        <p><strong>Duración:</strong> Hasta 90 días</p>

        <p><strong>Cookies utilizadas:</strong></p>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Propósito</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_fbp</td>
              <td>Almacena y rastrea visitas en sitios web</td>
              <td>3 meses</td>
            </tr>
            <tr>
              <td>fr</td>
              <td>Entrega anuncios relevantes</td>
              <td>3 meses</td>
            </tr>
            <tr>
              <td>_fbc</td>
              <td>Almacena la última visita</td>
              <td>2 años</td>
            </tr>
          </tbody>
        </table>

        <p><strong>Más información:</strong> <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">Política de Privacidad de Meta</a></p>

        <h3>3.4 Cookies de Preferencias</h3>

        <p><strong>Propósito:</strong> Permiten que el sitio recuerde información que cambia la forma en que se comporta o se ve el sitio, como su idioma preferido o la región en la que se encuentra.</p>

        <p><strong>Qué hacen:</strong></p>

        <ul>
          <li>Recuerdan su idioma preferido</li>
          <li>Almacenan preferencias de visualización</li>
          <li>Mantienen configuraciones de accesibilidad</li>
        </ul>

        <p><strong>Duración:</strong> Hasta 12 meses</p>

        <h2>4. Cookies de Terceros</h2>

        <p>Además de nuestras propias cookies, utilizamos cookies de terceros para los siguientes fines:</p>

        <h3>4.1 Hostinger Analytics</h3>

        <ul>
          <li><strong>Proveedor:</strong> Hostinger International Ltd.</li>
          <li><strong>Propósito:</strong> Análisis de rendimiento y velocidad del sitio</li>
          <li><strong>Tipo:</strong> Analíticas</li>
        </ul>

        <h2>5. Cómo Utilizamos las Cookies</h2>

        <p>Utilizamos cookies para:</p>

        <h3>5.1 Funcionalidad del Sitio</h3>

        <ul>
          <li>Garantizar el funcionamiento correcto del sitio</li>
          <li>Recordar sus preferencias de privacidad</li>
          <li>Mantener la seguridad durante su navegación</li>
        </ul>

        <h3>5.2 Análisis y Mejora</h3>

        <ul>
          <li>Entender cómo los usuarios utilizan nuestro sitio</li>
          <li>Identificar problemas técnicos</li>
          <li>Mejorar el contenido y la estructura del sitio</li>
          <li>Optimizar la experiencia del usuario</li>
        </ul>

        <h3>5.3 Marketing y Publicidad</h3>

        <ul>
          <li>Mostrar anuncios relevantes en plataformas de terceros</li>
          <li>Medir la efectividad de campañas publicitarias</li>
          <li>Realizar remarketing a visitantes previos</li>
          <li>Crear audiencias personalizadas</li>
        </ul>

        <h2>6. Consentimiento de Cookies</h2>

        <h3>6.1 Banner de Consentimiento</h3>

        <p>Cuando visita nuestro Sitio por primera vez, verá un banner de consentimiento de cookies que le permite:</p>

        <ul>
          <li><strong>Aceptar todas:</strong> Permite todas las cookies (esenciales, analíticas y de marketing)</li>
          <li><strong>Rechazar:</strong> Solo permite cookies estrictamente necesarias</li>
          <li><strong>Personalizar:</strong> Elegir qué tipos de cookies aceptar</li>
        </ul>

        <h3>6.2 Cookies Esenciales</h3>

        <p>Las cookies estrictamente necesarias no requieren su consentimiento ya que son esenciales para el funcionamiento del sitio. Sin embargo, todas las demás cookies requieren su consentimiento explícito.</p>

        <h3>6.3 Gestión de Consentimiento</h3>

        <p>Su consentimiento se almacena durante 12 meses. Después de ese período, se le pedirá nuevamente su consentimiento.</p>

        <h2>7. Cómo Controlar y Eliminar Cookies</h2>

        <h3>7.1 A través de Nuestro Banner de Cookies</h3>

        <p>Puede cambiar sus preferencias de cookies en cualquier momento:</p>

        <ul>
          <li>Eliminando las cookies de su navegador (el banner aparecerá nuevamente)</li>
          <li>Contactándonos en contacto@pymepilot.cloud para solicitar el restablecimiento de preferencias</li>
        </ul>

        <h3>7.2 A través de su Navegador</h3>

        <p>Todos los navegadores modernos le permiten controlar las cookies a través de la configuración. A continuación, encontrará enlaces a instrucciones para navegadores populares:</p>

        <ul>
          <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Gestionar cookies en Chrome</a></li>
          <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Gestionar cookies en Firefox</a></li>
          <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Gestionar cookies en Safari</a></li>
          <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Gestionar cookies en Edge</a></li>
        </ul>

        <h3>7.3 Desactivar Google Analytics</h3>

        <p>Puede optar por no participar en Google Analytics instalando el complemento de exclusión del navegador:</p>

        <p><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Complemento de exclusión de Google Analytics</a></p>

        <h3>7.4 Desactivar Publicidad Personalizada</h3>

        <p>Puede gestionar sus preferencias de publicidad en:</p>

        <ul>
          <li><strong>Facebook:</strong> <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">Preferencias de anuncios de Facebook</a></li>
          <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google</a></li>
        </ul>

        <h3>7.5 Configuración &quot;Do Not Track&quot;</h3>

        <p>Algunos navegadores ofrecen una señal &quot;Do Not Track&quot; (No rastrear). Actualmente, no existen estándares universales para responder a esta señal, por lo que nuestro Sitio no responde automáticamente a solicitudes &quot;Do Not Track&quot;.</p>

        <h2>8. Consecuencias de Desactivar Cookies</h2>

        <p>Si decide desactivar o rechazar cookies, tenga en cuenta que:</p>

        <h3>8.1 Cookies Esenciales</h3>

        <p>Si bloquea cookies esenciales:</p>

        <ul>
          <li>El sitio puede no funcionar correctamente</li>
          <li>Algunas funcionalidades pueden no estar disponibles</li>
          <li>Su experiencia de usuario puede verse afectada negativamente</li>
        </ul>

        <h3>8.2 Cookies Analíticas</h3>

        <p>Si bloquea cookies analíticas:</p>

        <ul>
          <li>No afectará su experiencia de navegación</li>
          <li>No podremos mejorar el sitio basándonos en su comportamiento</li>
          <li>Seguirá viendo todo el contenido normalmente</li>
        </ul>

        <h3>8.3 Cookies de Marketing</h3>

        <p>Si bloquea cookies de marketing:</p>

        <ul>
          <li>No afectará su experiencia en nuestro sitio</li>
          <li>Seguirá viendo anuncios, pero serán menos relevantes</li>
          <li>No verá anuncios personalizados basados en sus intereses</li>
        </ul>

        <h2>9. Transferencias Internacionales de Datos</h2>

        <p>Algunos de nuestros proveedores de cookies (Google, Meta) están ubicados fuera de Argentina, principalmente en Estados Unidos.</p>

        <p>Cuando utiliza nuestro Sitio, sus datos pueden ser transferidos a estos países. Hemos implementado salvaguardias adecuadas (como Cláusulas Contractuales Estándar) para proteger sus datos durante estas transferencias.</p>

        <h2>10. Cookies y Privacidad</h2>

        <p>El uso de cookies está estrechamente relacionado con nuestra <a href="/legal/privacy-policy">Política de Privacidad</a>. Le recomendamos leerla para comprender cómo manejamos su información personal.</p>

        <p>En particular:</p>

        <ul>
          <li>Las cookies pueden recopilar datos personales (direcciones IP, comportamiento de navegación)</li>
          <li>Estos datos están sujetos a las mismas protecciones que otros datos personales</li>
          <li>Tiene los mismos derechos sobre datos recopilados por cookies (acceso, rectificación, eliminación)</li>
        </ul>

        <h2>11. Cumplimiento Legal</h2>

        <p>Nuestra Política de Cookies cumple con:</p>

        <ul>
          <li><strong>GDPR (Reglamento General de Protección de Datos - UE):</strong> Artículos relacionados con consentimiento y transparencia</li>
          <li><strong>ePrivacy Directive (Directiva de privacidad electrónica - UE):</strong> Requisitos específicos de cookies</li>
          <li><strong>CCPA (Ley de Privacidad del Consumidor de California):</strong> Divulgación de tecnologías de seguimiento</li>
          <li><strong>Ley 25.326 de Protección de Datos Personales (Argentina)</strong></li>
        </ul>

        <h2>12. Actualizaciones de esta Política</h2>

        <p>Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en:</p>

        <ul>
          <li>Las cookies que utilizamos</li>
          <li>Los proveedores de terceros</li>
          <li>Los requisitos legales</li>
          <li>Nuestras prácticas comerciales</li>
        </ul>

        <p>Cualquier cambio se publicará en esta página con una fecha de &quot;Última actualización&quot; revisada. Le recomendamos revisar esta política periódicamente.</p>

        <h2>13. Glosario de Términos</h2>

        <h3>Cookie de sesión</h3>
        <p>Cookie temporal que se elimina cuando cierra su navegador.</p>

        <h3>Cookie persistente</h3>
        <p>Cookie que permanece en su dispositivo durante un período de tiempo específico o hasta que la elimina manualmente.</p>

        <h3>Cookie de primera parte</h3>
        <p>Cookie establecida directamente por el sitio web que está visitando.</p>

        <h3>Cookie de terceros</h3>
        <p>Cookie establecida por un dominio diferente al sitio web que está visitando.</p>

        <h3>Pixel de seguimiento (Tracking Pixel)</h3>
        <p>Pequeña imagen (generalmente 1x1 píxel) utilizada para rastrear el comportamiento del usuario, similar a las cookies.</p>

        <h2>14. Preguntas Frecuentes (FAQ)</h2>

        <h3>¿Las cookies contienen información personal?</h3>
        <p>Las cookies en sí mismas no contienen información personal identificable, pero pueden estar vinculadas a información personal que usted nos proporcione o que recopilemos sobre su uso del sitio.</p>

        <h3>¿Puedo usar el sitio sin cookies?</h3>
        <p>Puede usar el sitio con cookies esenciales únicamente, pero algunas funcionalidades pueden estar limitadas.</p>

        <h3>¿Comparten cookies mi información con terceros?</h3>
        <p>Las cookies de terceros (Google Analytics, Meta Pixel) comparten información con esos proveedores según sus políticas de privacidad.</p>

        <h3>¿Cuánto tiempo se almacenan las cookies?</h3>
        <p>El tiempo de almacenamiento varía según el tipo de cookie. Consulte las tablas anteriores para duraciones específicas.</p>

        <h2>15. Contacto</h2>

        <p>Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:</p>

        <ul>
          <li><strong>Email:</strong> contacto@pymepilot.cloud</li>
          <li><strong>Dirección postal:</strong> Aristóbulo del Valle 2737, Quilmes, Buenos Aires (CP 1878), Argentina</li>
          <li><strong>Responsable:</strong> Patricio Guillermo Galvan</li>
          <li><strong>CUIT:</strong> 20-40396470-1</li>
        </ul>

        <hr />

        <p><em>Al continuar utilizando nuestro Sitio, usted acepta el uso de cookies según lo descrito en esta Política de Cookies.</em></p>

    </LegalPageLayout>
  )
}
