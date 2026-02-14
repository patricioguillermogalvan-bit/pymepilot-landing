# Auditoría SEO Completa — pymepilot.cloud

**Fecha:** 2026-02-14
**URL:** https://pymepilot.cloud
**Stack:** Next.js 16 + React 19 en Vercel
**Auditor:** Claude Code (análisis automatizado)

---

## 1. RESUMEN EJECUTIVO

### Score General Estimado

| Categoría | Score | Estado |
|-----------|-------|--------|
| SEO Técnico | 45/100 | Crítico |
| Performance | 55/100 | Necesita mejoras |
| Accesibilidad | 50/100 | Necesita mejoras |
| Contenido | 70/100 | Aceptable |
| Mobile | 75/100 | Aceptable |

### Top 5 Problemas Críticos

| # | Problema | Impacto SEO | Esfuerzo |
|---|----------|-------------|----------|
| 1 | **No existe sitemap.xml ni robots.txt** — Google no tiene guía para rastrear el sitio | Muy Alto | Bajo |
| 2 | **Sin Schema/JSON-LD en ninguna página** — Se pierde rich snippets en SERPs (FAQ, Organization, Product) | Alto | Medio |
| 3 | **9 de 14 links de WhatsApp tienen teléfono placeholder** (`54XXXXXXXXXX`) — CTAs principales rotos | Muy Alto (conversión) | Bajo |
| 4 | **CSS (90KB) y JS (14KB) sin minificar** — render-blocking, impacta LCP y FCP | Alto | Bajo |
| 5 | **No hay canonical URLs en ninguna página** + OG tags idénticos en todas las páginas | Alto | Bajo |

---

## 2. ANÁLISIS TÉCNICO SEO

### 2.1 Meta Tags — Homepage

| Meta Tag | Valor | Veredicto |
|----------|-------|-----------|
| `<title>` | "PymePilot \| Seguimiento Inteligente por WhatsApp para Distribuidoras Mayoristas" (77 chars) | Bien — aunque excede los 60 chars recomendados |
| `<meta description>` | "Sistema de seguimiento inteligente por WhatsApp para Distribuidoras Mayoristas. De 34% a 74% de facturación recurrente en 6 meses. Caso real IEY." (146 chars) | Bien — dentro del rango 120-160 |
| `<html lang>` | `es` | OK — pero debería ser `es-AR` para coincidir con `og:locale` |
| `viewport` | `width=device-width, initial-scale=1` | Correcto |
| `keywords` | `CRM WhatsApp, distribuidores B2B, automatización comercial, PyME Argentina, seguimiento clientes, CRM distribuidores` | Irrelevante para Google, pero no daña |
| `robots` | `index, follow` | Correcto |

### 2.2 Open Graph Tags

| Tag | Valor | Problema |
|-----|-------|----------|
| `og:title` | "PymePilot - Seguimiento Inteligente para Distribuidores B2B" | OK |
| `og:description` | "Sistema de seguimiento inteligente para distribuidores B2B..." | OK |
| `og:url` | `https://pymepilot.cloud` | **PROBLEMA:** Mismo valor en TODAS las páginas. Debería ser la URL de cada página |
| `og:image` | `https://pymepilot.cloud/og-image.jpg` (1200x630) | OK dimensiones, pero imagen es solo logo sobre fondo blanco — poco atractiva para shares |
| `og:locale` | `es_AR` | OK |
| `og:type` | `website` | OK para home, pero /about debería ser `profile` o `article` |

### 2.3 Twitter Cards

| Tag | Valor | Estado |
|-----|-------|--------|
| `twitter:card` | `summary_large_image` | Correcto |
| `twitter:title` | Mismo que OG | **PROBLEMA:** Idéntico en todas las páginas |
| `twitter:description` | Mismo que OG | **PROBLEMA:** Idéntico en todas las páginas |
| `twitter:image` | `og-image.jpg` | OK |
| `twitter:site` | **FALTA** | No hay handle de Twitter |
| `twitter:creator` | **FALTA** | No hay handle del creador |

### 2.4 Canonical URLs

**Estado: NO EXISTEN**

Ninguna de las 7+ páginas tiene `<link rel="canonical">`. Esto es un problema grave:
- Google puede indexar versiones duplicadas (con/sin trailing slash, con parámetros UTM)
- El link equity se diluye entre variantes de URL

**Páginas afectadas:**
- `/` (homepage)
- `/about`
- `/contact`
- `/legal/privacy-policy`
- `/legal/terms-of-service`
- `/legal/cookie-policy`
- `/legal/aviso-legal`

### 2.5 Sitemap.xml

**Estado: NO EXISTE (404)**

- No hay archivo `sitemap.xml` en `/public/`
- No hay generación automática vía Next.js (`app/sitemap.ts`)
- Google Search Console no tiene sitemap para procesar

### 2.6 Robots.txt

**Estado: NO EXISTE (404)**

- No hay archivo `robots.txt` en `/public/`
- No hay generación vía Next.js (`app/robots.ts`)
- Sin robots.txt, Google rastrea todo sin restricciones (incluyendo páginas que no deberían priorizarse)

### 2.7 Schema.org / JSON-LD

**Estado: COMPLETAMENTE AUSENTE**

No hay structured data en ninguna página del sitio. Oportunidades perdidas:

| Schema | Página | Beneficio SERP |
|--------|--------|----------------|
| `Organization` | Home/About | Knowledge panel, logo en búsquedas |
| `LocalBusiness` | Home | Presencia en búsquedas locales (Argentina) |
| `FAQPage` | Home (sección FAQ) | **Rich snippets de FAQ expandibles en Google** |
| `Product` / `Service` | Home (sección pricing) | Precios y features en SERPs |
| `BreadcrumbList` | Legal pages | Breadcrumbs en resultados |
| `WebSite` + `SearchAction` | Home | Sitelinks searchbox |
| `ContactPage` | /contact | Datos de contacto enriquecidos |

### 2.8 Estructura de Headings

**Homepage (index.html renderizado vía dangerouslySetInnerHTML):**

```
H1: "¿Cuántos clientes perdió tu distribuidora este mes..." (1 solo H1 — CORRECTO)
├── H2: "Tu distribuidora pierde clientes todos los días..."
│   └── H4: (cards de problemas) ⚠️ Salta H3
├── H2: "4 formas de vender más sin sumar vendedores"
│   └── H3: Activación / Reposición / Cross-Sell / Recuperación ✓
├── H2: "De cero a resultados en 3 pasos"
│   └── H3: Paso 1, 2, 3 ✓
├── H2: "Cómo logramos que IEY® pase del 34% al 74%..."
│   ├── H3: "% de Facturación recurrente..."
│   └── H4: Métricas ✓
├── H2: "¿Por qué PYMEPILOT y no un CRM genérico?"
├── H2: "Un sistema construido a la vista de todos"
│   └── H3: Video / Actualizaciones / Transparencia ✓
├── H2: "Dejá de perder clientes..."
│   └── H4: Métricas comparativas ✓
├── H2: "¿Qué Plan Necesitás?"
│   └── H4: Preguntas del quiz ⚠️ Salta H3
├── H2: "Elegí según tu problema más urgente"
│   └── H3: Planes (Starter / Growth / Scale) ✓
├── H2: "¿Qué incluye cada plan?"
├── H2: "Caso Validado: IEY®"
│   └── H4: Situación / Resultados / Mejoras
├── H2: "Lo que nos preguntás antes de arrancar" (FAQ)
└── H2: "Tu competencia ya está contactando..." (CTA final)
```

**Problemas detectados:**
- Las problem cards usan H4 directamente bajo H2 (saltan H3)
- Las preguntas del quiz usan H4 bajo H2 (saltan H3)
- En general, buena estructura con 1 H1 y jerarquía razonable

**Subpáginas:**
| Página | H1 | Estado |
|--------|----|--------|
| /about | "Construido desde adentro" | OK |
| /contact | "Hablemos de tu Distribuidora" | OK |
| /legal/privacy-policy | "Política de Privacidad" | OK |
| /legal/terms-of-service | "Términos y Condiciones" | OK |
| /legal/cookie-policy | **FALTA H1** | **PROBLEMA** |
| /legal/aviso-legal | "Aviso Legal" | OK |

### 2.9 Titles duplicados en legal pages

**Problema:** El template de título produce duplicación del brand name:

```
"Política de Privacidad | PymePilot | PymePilot"  ← duplicado
"Términos y Condiciones | PymePilot | PymePilot"  ← duplicado
```

**Causa:** El layout define `template: '%s | PymePilot'` pero las páginas legales ya incluyen "| PymePilot" en su título.

### 2.10 Indexabilidad

| Check | Estado |
|-------|--------|
| `noindex` directives | Ninguna (correcto) |
| `nofollow` directives | Ninguna (correcto) |
| X-Robots-Tag header | No configurado |
| Contenido renderizado en servidor | **PARCIAL** — Homepage usa `dangerouslySetInnerHTML` con `readFileSync`, contenido está en el HTML inicial |
| JavaScript rendering | Contenido principal NO depende de JS para renderizar (bueno para SEO) |

---

## 3. PERFORMANCE Y CORE WEB VITALS

### 3.1 Métricas de Tamaño de Recursos

| Recurso | Tamaño | Minificado | Impacto |
|---------|--------|------------|---------|
| `styles.css` | **92 KB** (4,239 líneas) | NO | Alto — render-blocking |
| `script.js` | **14 KB** (404 líneas) | NO | Medio — afterInteractive |
| `index.html` (body content) | ~150 KB (2,026 líneas) | NO | Alto — HTML payload grande |
| `demo.mp4` (video hero) | **2.17 MB** | N/A | Alto — hero autoplay |
| `og-image.jpg` | 17 KB | N/A | OK |
| Google Fonts (Inter) | ~30-50 KB | Sí (Google CDN) | Medio |
| AOS library CSS | Externa (unpkg CDN) | Sí | **ELIMINADA** — se stripped en page.tsx |
| Imágenes IEY logo (x5) | Sin width/height | N/A | CLS risk |

### 3.2 Estimación Core Web Vitals

| Métrica | Estimación | Target | Estado |
|---------|-----------|--------|--------|
| **LCP** (Largest Contentful Paint) | ~3.5-5s | < 2.5s | Malo — CSS render-blocking + video 2MB autoplay |
| **FID/INP** (Interaction to Next Paint) | ~100-200ms | < 200ms | Aceptable — JS ligero |
| **CLS** (Cumulative Layout Shift) | ~0.15-0.25 | < 0.1 | Malo — imágenes sin dimensiones + font swap |

### 3.3 Problemas de Performance Identificados

**ALTO IMPACTO:**

1. **CSS no minificado y render-blocking (92KB)**
   - Se carga vía `<link rel="stylesheet" href="/styles.css" />` en page.tsx
   - Bloquea el primer renderizado completo
   - Ahorro estimado con minificación: ~25KB (27%)

2. **Video autoplay en hero (2.17MB)**
   - `preload="auto"` descarga todo el video inmediatamente
   - Sin `poster` attribute — muestra frame vacío hasta cargar
   - Impacta directamente el LCP

3. **Google Fonts render-blocking**
   - Se cargan vía `<link>` en el `<head>` del layout
   - Sin `font-display: swap` en CSS — causa FOIT (Flash of Invisible Text)
   - El texto es invisible hasta que Inter carga completamente

4. **HTML payload excesivo (~150KB)**
   - El homepage inyecta ~2,000 líneas de HTML vía `dangerouslySetInnerHTML`
   - Incluye SVGs inline extensos (40+ iconos SVG embebidos)
   - Sin compresión gzip/brotli visible en config

**MEDIO IMPACTO:**

5. **JavaScript sin minificar (14KB)**
   - Cargado con `strategy="afterInteractive"` (no bloquea render)
   - Pero aún son bytes innecesarios por el wire

6. **Imágenes sin dimensiones explícitas**
   - 5 tags `<img>` sin `width` ni `height` → causa CLS
   - Ninguna imagen usa `loading="lazy"`

7. **Scroll listener sin throttle**
   - `initHeaderScroll()` agrega listener al scroll sin debounce
   - Impacta scroll performance en móviles

### 3.4 Headers de Seguridad y Cache

**Headers configurados en next.config.js:**

| Header | Valor | SEO Impact |
|--------|-------|------------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Positivo — HTTPS enforced |
| `X-Frame-Options` | `SAMEORIGIN` | Neutro |
| `X-Content-Type-Options` | `nosniff` | Neutro |
| `X-XSS-Protection` | `1; mode=block` | Neutro (deprecated) |
| `Referrer-Policy` | `origin-when-cross-origin` | Puede limitar datos de referral en Analytics |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Neutro |

**Headers FALTANTES:**

| Header | Recomendación |
|--------|--------------|
| `Content-Security-Policy` | Falta — importante para seguridad |
| `Cache-Control` | Falta para assets estáticos — Vercel los maneja por defecto pero se puede optimizar |

---

## 4. MOBILE Y ACCESIBILIDAD

### 4.1 Responsive Design

| Check | Estado |
|-------|--------|
| Viewport meta tag | `width=device-width, initial-scale=1.0` — Correcto |
| Breakpoints CSS | 768px / 1024px / 1200px — Buena cobertura |
| Mobile menu | Hamburger con JS toggle — Funcional |
| Font sizes responsive | Sí, via clamp() y media queries |
| Touch targets | Botones con padding adecuado (48px min-height visible en CSS) |

### 4.2 Accesibilidad (a11y)

**Problemas encontrados:**

| Severidad | Problema | Ubicación |
|-----------|----------|-----------|
| ALTA | **40+ SVGs sin `aria-hidden="true"`** — screen readers leen paths como contenido | Todo index.html |
| ALTA | **Video sin aria-label ni texto alternativo** | Hero section |
| ALTA | **Form validation sin `aria-invalid`, `aria-describedby`, `role="alert"`** | ContactForm.tsx |
| MEDIA | **Botón hamburger**: tiene `aria-label` pero no `aria-expanded` | Header nav |
| MEDIA | **Links WhatsApp con placeholder**: Screen readers leen "54XXXXXXXXXX" | Múltiples secciones |
| MEDIA | **Contraste de colores**: `#81B5A1` sobre fondo oscuro `#293E40` puede no cumplir WCAG AA ratio 4.5:1 | Acento principal |
| BAJA | **Cookie consent**: Toggle buttons sin `aria-pressed` | CookieConsent.tsx |
| BAJA | **Scroll indicator** decorativo sin aria-hidden | Hero section |

### 4.3 Imágenes

| Imagen | alt text | width/height | lazy loading |
|--------|----------|--------------|-------------|
| IEY logo (x5 instancias) | `alt="IEY"` | No | No |
| og-image.jpg | N/A (meta tag) | 1200x630 | N/A |
| Video poster | **NO EXISTE** | N/A | N/A |
| Favicon | Existe (.ico + .png + apple-icon) | OK | N/A |

---

## 5. ANÁLISIS DE CONTENIDO

### 5.1 Keywords Target Implícitos

Basado en el contenido de la página:

| Keyword | Densidad Estimada | Relevancia |
|---------|-------------------|------------|
| "distribuidora/distribuidores" | Alta (~30+ menciones) | Core |
| "WhatsApp" | Alta (~15+ menciones) | Core |
| "clientes recurrentes" | Alta (~20+ menciones) | Core |
| "seguimiento" | Media (~10+ menciones) | Core |
| "PyME" | Baja (~5 menciones) | Secondary |
| "CRM" | Baja (~3 menciones) | Secondary |
| "B2B" | Baja (~3 menciones) | Secondary |
| "IEY" (caso de éxito) | Alta (~15+ menciones) | Branding |
| "facturación recurrente" | Media (~8 menciones) | Long-tail |

**Observación:** Buena densidad natural de keywords. No hay keyword stuffing. El contenido está bien enfocado en el nicho.

### 5.2 Estructura de URLs

| URL | Estado | Limpieza |
|-----|--------|----------|
| `/` | OK | Limpia |
| `/about` | OK | Limpia |
| `/contact` | OK | Limpia |
| `/legal/privacy-policy` | OK | Limpia, bien categorizada |
| `/legal/terms-of-service` | OK | Limpia |
| `/legal/cookie-policy` | OK | Limpia |
| `/legal/aviso-legal` | OK | Limpia |

Todas las URLs son limpias, descriptivas y usan kebab-case. Sin problemas.

### 5.3 Links Internos

| Desde | Hacia | Tipo |
|-------|-------|------|
| Homepage nav | #solucion, #caso-iey, #proceso, #pricing, #faq | Anchor links |
| Footer | /legal/* (4 páginas) | Internal links |
| Footer | /about, /contact | Internal links |
| About/Contact | Homepage | Via nav logo |

**Problemas:**
- Navegación de páginas internas (about, contact, legal) **NO tiene link de vuelta a las secciones del homepage** (#solucion, etc.)
- No hay breadcrumbs en páginas legales
- No hay cross-linking entre páginas legales

### 5.4 Links Externos (WhatsApp)

**PROBLEMA CRÍTICO:**

| Ubicación | Teléfono | Estado |
|-----------|----------|--------|
| Header CTA | `54XXXXXXXXXX` | **ROTO** |
| Hero CTA primario | `54XXXXXXXXXX` | **ROTO** |
| Vertical 1 (Activación) | `54XXXXXXXXXX` | **ROTO** |
| Vertical 2 (Reposición) | `54XXXXXXXXXX` | **ROTO** |
| Vertical 3 (Cross-Sell) | `54XXXXXXXXXX` | **ROTO** |
| Vertical 4 (Recuperación) | `54XXXXXXXXXX` | **ROTO** |
| Comparación CRM | `54XXXXXXXXXX` | **ROTO** |
| Transparencia | `54XXXXXXXXXX` | **ROTO** |
| Métricas CTA | `5491157064734` | OK |
| Plan Starter | `5491157064734` | OK |
| Plan Growth | `5491157064734` | OK |
| Plan Scale | `5491157064734` | OK |
| Beta CTA | `5491157064734` | OK |
| Footer CTA | `54XXXXXXXXXX` | **ROTO** |

**9 de 14 CTAs de WhatsApp están rotos (64%).** Los botones más visibles del sitio (header, hero, verticales) no funcionan.

### 5.5 OG Image

- **Existe:** Sí (`/public/og-image.jpg`, 17KB, 1200x630)
- **Contenido:** Solo logo PymePilot centrado sobre fondo blanco
- **Problema:** Poco atractiva para social sharing — no tiene tagline, ni branding visual fuerte, ni call to action

---

## 6. CHECKLIST DE ACCIONES POR PRIORIDAD

### PRIORIDAD ALTA (impacto inmediato en SEO y conversión)

- [ ] **Crear `app/sitemap.ts`** — Generar sitemap dinámico con todas las URLs
- [ ] **Crear `app/robots.ts`** — Permitir crawling + referenciar sitemap
- [ ] **Reemplazar TODOS los `54XXXXXXXXXX`** con `5491157064734` en index.html (9 instancias)
- [ ] **Agregar canonical URLs** — En layout.tsx o por página con `alternates.canonical`
- [ ] **Agregar FAQPage JSON-LD** en homepage — Rich snippets de FAQ
- [ ] **Agregar Organization JSON-LD** — En layout o homepage
- [ ] **Minificar CSS** — Configurar Next.js para procesar /public CSS o migrar a CSS Modules
- [ ] **Minificar JS** — Idem
- [ ] **Agregar `font-display: swap`** a la carga de Google Fonts
- [ ] **Arreglar titles duplicados** en legal pages (`| PymePilot | PymePilot`)
- [ ] **Agregar H1 faltante** en `/legal/cookie-policy`

### PRIORIDAD MEDIA (mejora de Core Web Vitals y UX)

- [ ] **Agregar `poster` al video** — Imagen estática para LCP instantáneo
- [ ] **Cambiar `preload="auto"` a `preload="metadata"`** en el video
- [ ] **Agregar `width` y `height`** a todas las `<img>` tags (5 instancias)
- [ ] **Agregar `loading="lazy"`** a imágenes below-the-fold
- [ ] **Agregar `aria-hidden="true"`** a todos los SVGs decorativos (~40 instancias)
- [ ] **OG tags únicos por página** — Cada page.tsx debería tener su propio `openGraph` en metadata
- [ ] **Mejorar OG image** — Incluir tagline y branding visual
- [ ] **Agregar `aria-expanded`** al botón hamburger
- [ ] **Agregar throttle** al scroll event listener en script.js
- [ ] **Corregir heading hierarchy** — H4 → H3 en problem cards y quiz

### PRIORIDAD BAJA (polish y mejoras incrementales)

- [ ] **Agregar Service/Product JSON-LD** para los 3 planes
- [ ] **Agregar BreadcrumbList JSON-LD** en legal pages
- [ ] **Cambiar `lang="es"` a `lang="es-AR"`** para consistencia con `og:locale`
- [ ] **Agregar `twitter:site`** handle
- [ ] **Cross-linking** entre páginas legales y breadcrumbs
- [ ] **Verificar contraste** de `#81B5A1` sobre `#293E40` (WCAG AA)
- [ ] **Renombrar imágenes** — `IEY - PNG BLANCO CON ESPACIO-13 (1).png` → `iey-logo-white.png`
- [ ] **Agregar `aria-pressed`** a toggles del cookie consent
- [ ] **Considerar migrar** homepage de `dangerouslySetInnerHTML` a componentes React nativos

---

## 7. CÓDIGO DE EJEMPLO PARA FIXES PRIORITARIOS

### 7.1 Sitemap — `app/sitemap.ts`

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pymepilot.cloud'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms-of-service`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookie-policy`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/aviso-legal`,
      lastModified: new Date('2026-02-12'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
```

### 7.2 Robots — `app/robots.ts`

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://pymepilot.cloud/sitemap.xml',
  }
}
```

### 7.3 FAQPage JSON-LD — Agregar en `app/page.tsx`

```typescript
import Script from 'next/script'

// Dentro del componente, antes del cierre de <>:
<Script
  id="faq-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Necesito un equipo técnico para implementar PymePilot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Nosotros nos encargamos de todo..."
          }
        },
        // ... agregar todas las FAQ del sitio
      ]
    })
  }}
/>
```

### 7.4 Organization JSON-LD — Agregar en `app/layout.tsx`

```typescript
<Script
  id="org-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PymePilot",
      "url": "https://pymepilot.cloud",
      "logo": "https://pymepilot.cloud/og-image.jpg",
      "description": "Sistema de seguimiento inteligente por WhatsApp para Distribuidoras Mayoristas",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aristóbulo del Valle 2737",
        "addressLocality": "Quilmes",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "founder": {
        "@type": "Person",
        "name": "Patricio Guillermo Galván"
      }
    })
  }}
/>
```

### 7.5 Canonical URLs — Agregar en `app/layout.tsx` metadata

```typescript
export const metadata: Metadata = {
  // ... existing metadata ...
  alternates: {
    canonical: 'https://pymepilot.cloud',
  },
}
```

Y en cada página override:
```typescript
// app/about/page.tsx
export const metadata: Metadata = {
  // ...
  alternates: {
    canonical: 'https://pymepilot.cloud/about',
  },
}
```

### 7.6 Fix Teléfono Placeholder — Buscar y reemplazar en `index.html`

```
Buscar:    54XXXXXXXXXX
Reemplazar: 5491157064734
```

9 instancias en líneas: 65, 96, 284, 317, 349, 376, 606, 740, 1868

### 7.7 Font Display — Cambiar carga de fonts en `app/layout.tsx`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```
Ya tiene `display=swap` en la URL de Google Fonts. Pero verificar que la CSS local no override con `font-display: block`.

---

## 8. RESUMEN DE MÉTRICAS

| Métrica | Valor Actual | Objetivo |
|---------|-------------|----------|
| Páginas indexables | 7 | 7 |
| Sitemap | No existe | Debe existir |
| Robots.txt | No existe | Debe existir |
| JSON-LD schemas | 0 | Mín. 3 (Org, FAQ, Product) |
| Canonical URLs | 0/7 páginas | 7/7 |
| CSS size (sin minificar) | 92 KB | ~65 KB minificado |
| JS size (sin minificar) | 14 KB | ~8 KB minificado |
| Video hero | 2.17 MB autoplay | Poster + preload=metadata |
| Imágenes con alt | 5/5 (100%) | OK |
| Imágenes con dimensions | 0/5 (0%) | 5/5 |
| Imágenes con lazy loading | 0/5 (0%) | 4/5 (below fold) |
| SVGs con aria-hidden | 0/40+ (0%) | 40+/40+ |
| WhatsApp CTAs funcionales | 5/14 (36%) | 14/14 (100%) |
| Heading hierarchy correcta | ~85% | 100% |
| H1 por página | 6/7 páginas | 7/7 |
| OG tags únicos | 1/7 (solo home parcial) | 7/7 |
| Google Fonts font-display | swap (vía URL) | OK |
| HSTS | Sí (2 años + preload) | OK |

---

*Reporte generado el 2026-02-14. Auditoría basada en análisis de código fuente y verificación del sitio en producción.*
