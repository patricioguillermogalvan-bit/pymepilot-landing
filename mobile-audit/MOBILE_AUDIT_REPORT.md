# REPORTE COMPLETO - Auditoria Mobile PymePilot
**Fecha:** 2026-02-14
**Dispositivos objetivo:** Android (360px - 412px)
**Branch:** mobile-fixes-audit
**Archivo analizado:** styles.css (4240 lineas)

---

## RESUMEN EJECUTIVO
- **Issues detectados:** 9
- **Criticos:** 3
- **Altos:** 3
- **Medios:** 2
- **Bajos:** 1

---

## ARQUITECTURA CSS ACTUAL

### Estrategia
- **Mobile-first** en su mayoria (estilos base para mobile, expanden con `min-width`)
- 3 excepciones usan `max-width: 767px` (desktop-first)

### Breakpoints usados
| Breakpoint | Cantidad | Uso |
|------------|----------|-----|
| min-width: 768px | 16 | Tablet/Desktop |
| min-width: 1024px | 5 | Desktop |
| min-width: 1200px | 1 | Desktop grande |
| max-width: 767px | 3 | Mobile overrides |

### Hallazgos clave
- **24 media queries** en total
- **0 breakpoints** para pantallas < 400px (Android tipico)
- El breakpoint 768px concentra el 67% de las reglas responsivas
- No existe `overflow-x: hidden` en html/body

---

## ISSUES DETALLADOS

### ISSUE #1 - CRITICO: No hay overflow-x: hidden en html/body
**Causa raiz probable del scroll horizontal reportado**

- **Ubicacion:** Lineas 94-113 (reset & base)
- **Problema:** El body/html no tiene `overflow-x: hidden`. Cualquier elemento que se desborde causa scroll horizontal en toda la pagina.
- **Impacto:** Scroll horizontal visible, espacio blanco a la derecha.
- **Solucion propuesta:**
```css
html, body {
    overflow-x: hidden;
}
/* O mejor aun, solo en body para no afectar sticky/fixed: */
body {
    overflow-x: hidden;
}
```
- **Riesgo desktop:** NULO

---

### ISSUE #2 - CRITICO: .case-study__metrics sin breakpoint mobile
**Grid de 3 columnas forzado en todas las pantallas**

- **Ubicacion:** Linea 1471
- **Codigo actual:**
```css
.case-study__metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
}
```
- **Problema:** En 360px, cada columna tiene ~100px. Los numeros y labels se comprimen o desbordan.
- **Solucion propuesta:**
```css
/* Base mobile */
.case-study__metrics {
    grid-template-columns: 1fr;  /* o repeat(3, 1fr) si el contenido es corto */
}
@media (min-width: 480px) {
    .case-study__metrics {
        grid-template-columns: repeat(3, 1fr);
    }
}
```
- **Riesgo desktop:** NULO (solo agrega regla mobile)

---

### ISSUE #3 - CRITICO: .form-row sin breakpoint mobile
**Grid de 2 columnas forzado en formulario**

- **Ubicacion:** Linea 3828
- **Codigo actual:**
```css
.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
}
```
- **Problema:** Los inputs del formulario de contacto se comprimen en mobile. Campos como "nombre" y "empresa" quedan con ~150px.
- **Solucion propuesta:**
```css
.form-row {
    grid-template-columns: 1fr;
}
@media (min-width: 480px) {
    .form-row {
        grid-template-columns: 1fr 1fr;
    }
}
```
- **Riesgo desktop:** NULO

---

### ISSUE #4 - ALTO: Plan cards con paddings excesivos en mobile

- **Ubicacion:** Lineas 2255, 2325, 2462, 2584
- **Problema:** Los bloques internos de `.plan-card` usan `margin: 0 var(--space-8)` (32px) y `padding: var(--space-8)` (32px). En 360px con container-padding de 24px por lado, el contenido util es:
  - 360px - 48px (container) - 2px (border) = 310px para la card
  - 310px - 64px (margin laterales internos) = 246px de contenido
  - Esto es muy estrecho para texto legible
- **Solucion propuesta:**
```css
@media (max-width: 767px) {
    .plan-card__header {
        padding: var(--space-6) var(--space-5) var(--space-4);
    }
    .plan-card__problem,
    .plan-card__solution,
    .plan-card__results,
    .plan-card__ideal {
        margin: 0 var(--space-4);
    }
    .plan-card__footer {
        padding: var(--space-4) var(--space-5) var(--space-6);
    }
    .plan-card__actions {
        padding: 0 var(--space-5) var(--space-6);
    }
}
```
- **Riesgo desktop:** NULO (solo afecta < 768px)

---

### ISSUE #5 - ALTO: Piloto Beta CTA con padding lateral excesivo

- **Ubicacion:** Linea 3597
- **Codigo actual:**
```css
.piloto-beta__cta {
    padding: var(--space-5) var(--space-12) !important;  /* 48px lateral */
}
```
- **Problema:** El boton CTA con 48px de padding lateral + el texto + icono puede exceder el ancho de pantalla en 360px, o forzar al texto a quedar muy comprimido.
- **Solucion propuesta:**
```css
@media (max-width: 767px) {
    .piloto-beta__cta {
        padding: var(--space-4) var(--space-6) !important;
        font-size: var(--text-base) !important;
        width: 100%;
    }
}
```
- **Riesgo desktop:** NULO

---

### ISSUE #6 - ALTO: Piloto Beta banner padding excesivo

- **Ubicacion:** Linea 3386
- **Codigo actual:**
```css
.piloto-beta__banner {
    padding: var(--space-12);  /* 48px en todos los lados */
}
```
- **Problema:** 48px de padding en una pantalla de 360px deja solo 264px para contenido (360 - 48*2 - 24*2 container).
- **Solucion propuesta:**
```css
@media (max-width: 767px) {
    .piloto-beta__banner {
        padding: var(--space-6);
    }
}
```
- **Riesgo desktop:** NULO

---

### ISSUE #7 - MEDIO: Tablas con min-width (600px / 550px)

- **Ubicacion:** Lineas 1304, 2798
- **Problema:** `.comparison__table` tiene `min-width: 600px` y `.tabla-comparativa__table` tiene `min-width: 550px`. Aunque ambas estan envueltas en contenedores con `overflow-x: auto`, el scroll horizontal dentro de la seccion puede ser confuso para el usuario movil.
- **Nota:** Los wrappers con `overflow-x: auto` DEBERIAN contener el overflow. Si el scroll horizontal de la pagina completa persiste, la causa raiz es probablemente ISSUE #1 (falta de overflow-x: hidden en body).
- **Solucion propuesta:** Verificar primero si ISSUE #1 resuelve el problema. Si no, considerar:
  - Layout alternativo para mobile (cards en vez de tabla)
  - O indicador visual de "scroll horizontal" para las tablas
- **Riesgo desktop:** NULO

---

### ISSUE #8 - MEDIO: .results-section padding excesivo en mobile

- **Ubicacion:** Linea 989
- **Codigo actual:**
```css
.results-section {
    padding: var(--space-12);  /* 48px */
}
```
- **Problema:** 48px de padding es excesivo en mobile 360px.
- **Solucion propuesta:**
```css
@media (max-width: 767px) {
    .results-section {
        padding: var(--space-6);
    }
}
```
- **Riesgo desktop:** NULO

---

### ISSUE #9 - BAJO: .product-card__description min-height innecesario

- **Ubicacion:** Linea 1154
- **Codigo actual:**
```css
.product-card__description {
    min-height: 120px;
}
```
- **Problema:** En mobile (1 columna), las cards no necesitan altura uniforme. El min-height crea espacio vacio innecesario.
- **Solucion propuesta:**
```css
@media (max-width: 767px) {
    .product-card__description {
        min-height: auto;
    }
    .product-card__title {
        min-height: auto;
    }
}
```
- **Riesgo desktop:** NULO

---

## PLAN DE ACCION (Orden recomendado)

| Orden | Issue | Prioridad | Impacto esperado |
|-------|-------|-----------|------------------|
| 1 | #1 - overflow-x: hidden | CRITICO | Resuelve scroll horizontal de toda la pagina |
| 2 | #2 - case-study__metrics | CRITICO | Corrige grid comprimido en mobile |
| 3 | #3 - form-row | CRITICO | Corrige formulario ilegible en mobile |
| 4 | #4 - plan-card paddings | ALTO | Mas espacio para contenido de cards |
| 5 | #5 - piloto-beta CTA | ALTO | Boton CTA usable en mobile |
| 6 | #6 - piloto-beta banner | ALTO | Seccion no se comprime |
| 7 | #8 - results-section padding | MEDIO | Mas espacio para contenido |
| 8 | #7 - tablas min-width | MEDIO | Verificar despues de #1 |
| 9 | #9 - product-card min-height | BAJO | Elimina espacio vacio |

---

## RIESGO DESKTOP
**BAJO** - Todas las soluciones propuestas usan media queries que solo aplican en pantallas < 768px o < 480px. Los estilos desktop permanecen intactos.

---

## PASO SIGUIENTE
**Requiere aprobacion del usuario para proceder a FASE 2 (implementacion de fixes).**
- Opcion A: Implementar todos los fixes de una vez (recomendado, son cambios menores)
- Opcion B: Implementar uno por uno y verificar
- Necesario: Acceso al sitio en navegador para verificar con DevTools (local o deployado)
