# Analisis Preliminar de Codigo - styles.css

## Patrones Detectados que Pueden Causar Overflow

### Width Fijos

| Linea | Selector | Propiedad | Valor | Riesgo |
|-------|----------|-----------|-------|--------|
| 67 | `:root` | `--container-max` | `1200px` | BAJO - usado con max-width, no width |
| 369 | `.nav__menu` | `max-width` | `400px` | BAJO - es max-width |
| 958-959 | `.challenge-card__icon` | `width/height` | `72px` | BAJO - icono fijo |
| 1126-1127 | `.product-card__icon` | `width/height` | `72px` | BAJO - icono fijo |
| 1146 | `.product-card__title` | `min-height` | `56px` | BAJO |
| 1154 | `.product-card__description` | `min-height` | `120px` | MEDIO - puede forzar altura innecesaria en mobile |
| 1304 | `.comparison__table` | `min-width` | `600px` | **CRITICO** - fuerza overflow en mobile |
| 1315 | `.comparison__feature-header` | `width` | `200px` | MEDIO - columna fija |
| 1391-1392 | `.feature-card__icon` | `width/height` | `80px` | BAJO - icono fijo |
| 2798 | `.tabla-comparativa__table` | `min-width` | `550px` | **CRITICO** - fuerza overflow en mobile |
| 2813 | `.tabla-comparativa__feature-header` | `width` | `220px` | MEDIO - columna fija en tabla |
| 3388 | `.piloto-beta__banner` | `max-width` | `920px` | BAJO - es max-width |

### Paddings/Margins Grandes

| Linea | Selector | Propiedad | Valor | Riesgo en mobile |
|-------|----------|-----------|-------|---------|
| 504 | `.hero` | `padding` | `88px 0 var(--space-8)` | MEDIO - 88px top es mucho en mobile |
| 372 | `.nav__menu` | `padding` | `100px var(--space-8) var(--space-8)` | BAJO - solo cuando menu esta abierto |
| 989-991 | `.results-section` | `padding` | `var(--space-12)` = 3rem | MEDIO - 48px en mobile es mucho |
| 2255 | `.plan-card__header` | `padding` | `var(--space-8) var(--space-8) var(--space-4)` = 32px laterales | MEDIO |
| 2325-2327 | `.plan-card__problem/solution/results/ideal` | `margin` | `0 var(--space-8)` = 32px laterales | **ALTO** - reduce mucho el area util en 360px |
| 2462 | `.plan-card__footer` | `padding` | `var(--space-6) var(--space-8) var(--space-8)` = 32px laterales | MEDIO |
| 2584 | `.plan-card__actions` | `padding` | `0 var(--space-8) var(--space-8)` = 32px laterales | MEDIO |
| 3386 | `.piloto-beta__banner` | `padding` | `var(--space-12)` = 48px | MEDIO - mucho padding en 360px |
| 3597 | `.piloto-beta__cta` | `padding` | `var(--space-5) var(--space-12) !important` = 48px lateral | **ALTO** - boton podria desbordarse |

### Flexbox/Grid Sin Responsividad Adecuada

| Linea | Selector | Display | Breakpoint mobile? | Riesgo |
|-------|----------|---------|---------------------|--------|
| 569 | `.hero__features` | `flex` column | Si (siempre column) | BAJO |
| 591-593 | `.hero__cta` | `flex` wrap | Si (tiene flex-wrap) | BAJO |
| 801 | `.problems__grid` | `grid` (1col base) | Si | BAJO |
| 915 | `.challenges-grid` | `grid` (1col base) | Si | BAJO |
| 1011 | `.results-grid` | `grid` (1col base) | Si | BAJO |
| 1080 | `.products__grid` | `grid` (1col base) | Si | BAJO |
| 1376 | `.features__grid` | `grid` (1col base) | Si | BAJO |
| 1434 | `.case-study` | `grid` (1col base) | Si | BAJO |
| 1471 | `.case-study__metrics` | `grid 3col SIEMPRE` | **NO** | **CRITICO** - 3 columnas forzadas en mobile |
| 1547 | `.testimonials__grid` | `grid` (1col base) | Si | BAJO |
| 1660 | `.process__timeline` | `grid` (1col base) | Si | BAJO |
| 1872 | `.pricing-hero__metrics` | `grid 1col base` | Si | BAJO |
| 1888-1890 | `.metric-card` | `grid subgrid span 5` | Si (1col en mobile) | MEDIO - subgrid en 1col |
| 2180 | `.planes__grid` | `grid 1col base` | Si | BAJO |
| 2191-2193 | `.plan-card` | `grid subgrid span 8` | Si (override en max-width:767px) | MEDIO |
| 2968 | `.caso-detallado__grid` | `grid 1col base` | Si | BAJO |
| 3255 | `.garantia__grid` | `grid 1col base` | Si | BAJO |
| 3534 | `.piloto-beta__columns` | `grid 1col base` | Si | BAJO |
| 3731 | `.cta-section__wrapper` | `grid` (1col base) | Si | BAJO |
| 3828 | `.form-row` | `grid 2col SIEMPRE` | **NO** | **ALTO** - 2 columnas forzadas en mobile |
| 3903 | `.footer__links` | `grid 2col SIEMPRE` | Parcial (4col en 768px) | MEDIO - 2col en base puede ser OK |

### Imagenes Sin Max-Width

```css
/* Linea 115-118 - Regla global CORRECTA */
img, svg {
    display: block;
    max-width: 100%;
}
```
Las imagenes tienen `max-width: 100%` global. **Sin riesgo aqui.**

### Overflow Handling

| Linea | Selector | overflow | Riesgo |
|-------|----------|----------|--------|
| 505 | `.hero` | `overflow: hidden` | BUENO - contiene overflow |
| 1296 | `.comparison__table-wrapper` | `overflow-x: auto` | BUENO - scroll horizontal controlado |
| 1808 | `.pricing-hero` | `overflow: hidden` | BUENO |
| 2789 | `.tabla-comparativa__wrapper` | `overflow-x: auto` | BUENO - scroll horizontal controlado |
| - | `html, body` | **NINGUNO** | **CRITICO** - no hay `overflow-x: hidden` en body/html |

---

## Elementos Sospechosos Priorizados (Top 5)

### 1. CRITICO: `.case-study__metrics` - Grid 3 columnas sin breakpoint
**Linea 1471** - `grid-template-columns: repeat(3, 1fr)` sin media query para mobile.
En 360px, cada columna tendria ~100px. Con padding interno de `var(--space-4)` = 16px, el contenido se comprime demasiado o se desborda.

### 2. CRITICO: `.form-row` - Grid 2 columnas sin breakpoint
**Linea 3828** - `grid-template-columns: 1fr 1fr` fijo. Los inputs del formulario se comprimen demasiado en mobile. Deberia ser 1fr en mobile.

### 3. CRITICO: Tablas con min-width fijo (600px y 550px)
**Lineas 1304 y 2798** - Aunque tienen wrappers con `overflow-x: auto`, si algun ancestor no contiene correctamente el overflow, esto causa scroll horizontal en toda la pagina.

### 4. ALTO: `.plan-card` paddings laterales excesivos en mobile
**Lineas 2255, 2325, 2462, 2584** - Los bloques internos usan `margin: 0 var(--space-8)` = 32px por lado. En una pantalla de 360px, eso deja solo 296px de contenido util dentro de la card. Sumado al padding del container (24px * 2), queda aun menos.

### 5. ALTO: No hay `overflow-x: hidden` en html/body
El CSS base no tiene ningun `overflow-x: hidden` en `html` o `body`. Cualquier elemento que se desborde horizontalmente causara scroll horizontal en toda la pagina. Esta es probablemente la causa raiz del "espacio blanco a la derecha" reportado.
