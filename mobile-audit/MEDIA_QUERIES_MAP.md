# Mapa de Media Queries - PymePilot

## Breakpoints Detectados

---

### Breakpoint 1: Section Header Title (min-width: 768px)
**Linea:** 275
```css
@media (min-width: 768px) {
    .section-header__title {
        font-size: var(--text-4xl);
    }
}
```

---

### Breakpoint 2: Navigation Desktop (min-width: 1024px)
**Linea:** 452
```css
@media (min-width: 1024px) {
    .nav__toggle { display: none; }
    .nav__menu { position: static; width: auto; max-width: none; height: auto; background: transparent; padding: 0; box-shadow: none; display: flex; align-items: center; gap: var(--space-8); }
    .nav__list { flex-direction: row; gap: var(--space-1); margin-bottom: 0; }
    .nav__link { padding: var(--space-2) var(--space-3); font-size: var(--text-sm); }
    .nav__actions { flex-direction: row; align-items: center; }
    .nav__link--featured { padding: 7px 16px; font-size: var(--text-sm); }
    .nav__link--featured .verified-badge { width: 18px; height: 18px; }
}
```

---

### Breakpoint 3: Hero Title (min-width: 768px)
**Linea:** 699
```css
@media (min-width: 768px) {
    .hero__title {
        font-size: var(--text-5xl);
    }
}
```

---

### Breakpoint 4: Hero Grid (min-width: 1024px)
**Linea:** 705
```css
@media (min-width: 1024px) {
    .hero__container {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
    }
    .hero__title {
        font-size: var(--text-5xl);
    }
}
```

---

### Breakpoint 5: Problems Grid (min-width: 768px)
**Linea:** 893
```css
@media (min-width: 768px) {
    .problems__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

### Breakpoint 6: Case Study Grids (min-width: 768px)
**Linea:** 1062
```css
@media (min-width: 768px) {
    .challenges-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .results-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

### Breakpoint 7: Products Grid (min-width: 768px)
**Linea:** 1244
```css
@media (min-width: 768px) {
    .products__grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .products__bundle {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}
```

---

### Breakpoint 8: Products Grid (min-width: 1024px)
**Linea:** 1256
```css
@media (min-width: 1024px) {
    .products__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### Breakpoint 9: Products Grid Full (min-width: 1200px)
**Linea:** 1262
```css
@media (min-width: 1200px) {
    .products__grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

---

### Breakpoint 10: Features Grid (min-width: 768px)
**Linea:** 1419
```css
@media (min-width: 768px) {
    .features__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

### Breakpoint 11: Testimonials (min-width: 768px)
**Linea:** 1637
```css
@media (min-width: 768px) {
    .case-study {
        grid-template-columns: 1fr 1fr;
    }
    .testimonials__grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .testimonials__grid--featured {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### Breakpoint 12: Process Timeline (min-width: 768px)
**Linea:** 1745
```css
@media (min-width: 768px) {
    .process__timeline {
        grid-template-columns: repeat(3, 1fr);
    }
    .process__line { display: block; position: absolute; ... }
    .step { display: grid; grid-template-rows: 80px 90px 1fr 50px; justify-items: center; text-align: center; gap: 0; }
    .step__number { position: relative; z-index: 1; align-self: center; }
    .step__title { display: flex; align-items: flex-start; justify-content: center; text-align: center; }
    .step__content { width: 100%; align-self: start; padding-top: var(--space-4); }
    .step__list li { text-align: left; }
    .step__time { align-self: end; justify-self: center; margin-top: 0; }
}
```

---

### Breakpoint 13: Pricing Hero Title (min-width: 768px)
**Linea:** 2005
```css
@media (min-width: 768px) {
    .pricing-hero__title {
        font-size: var(--text-4xl);
    }
    .pricing-hero__metrics {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, auto) repeat(5, auto);
    }
}
```

---

### Breakpoint 14: Pricing Hero Metrics (min-width: 1024px)
**Linea:** 2016
```css
@media (min-width: 1024px) {
    .pricing-hero__metrics {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, auto);
    }
}
```

---

### Breakpoint 15: Quiz Options (min-width: 768px)
**Linea:** 2162
```css
@media (min-width: 768px) {
    .quiz-options {
        flex-direction: row;
    }
    .quiz-option {
        flex: 1;
    }
}
```

---

### Breakpoint 16: Planes Grid Desktop (min-width: 768px)
**Linea:** 2737
```css
@media (min-width: 768px) {
    .planes__grid {
        grid-template-columns: repeat(3, 1fr);
        column-gap: var(--space-6);
        row-gap: 0;
    }
    .plan-card--growth {
        z-index: 1;
        box-shadow: 0 0 40px rgba(245, 158, 11, 0.2);
    }
}
```

---

### Breakpoint 17: Planes Grid Mobile (max-width: 767px)
**Linea:** 2750
```css
@media (max-width: 767px) {
    .planes__grid { grid-template-columns: 1fr; row-gap: var(--space-8); }
    .plan-card { grid-row: span 1; grid-template-rows: none; display: flex; flex-direction: column; }
    .plan-card--growth { order: -1; }
    .plan-card__footer { margin-top: auto; }
    .plan-card__amount { font-size: 2rem; }
    .plan-card__name { font-size: var(--text-xl); }
}
```

---

### Breakpoint 18: Caso Detallado Grid (min-width: 768px)
**Linea:** 3208
```css
@media (min-width: 768px) {
    .caso-detallado__grid {
        grid-template-columns: 1fr 1fr;
    }
    .timeline { flex-direction: row; padding-left: 0; padding-top: var(--space-8); }
    .timeline::before { left: 8px; right: 8px; top: 11px; bottom: auto; width: auto; height: 2px; }
    .timeline__item { flex-direction: column; align-items: center; text-align: center; flex: 1; }
    .timeline__dot { position: absolute; left: 50%; transform: translateX(-50%); top: calc(-1 * var(--space-8)); }
    .timeline__content { align-items: center; }
}
```

---

### Breakpoint 19: Garantia Grid (min-width: 768px)
**Linea:** 3368
```css
@media (min-width: 768px) {
    .garantia__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

### Breakpoint 20: Piloto Beta Columns (min-width: 768px)
**Linea:** 3649
```css
@media (min-width: 768px) {
    .piloto-beta__columns {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: var(--space-8);
    }
    .piloto-beta__title {
        font-size: var(--text-3xl);
    }
}
```

---

### Breakpoint 21: CTA Section (min-width: 768px)
**Linea:** 3842
```css
@media (min-width: 768px) {
    .cta-section__wrapper {
        grid-template-columns: 1fr 1fr;
    }
    .cta-section__title {
        font-size: var(--text-4xl);
    }
    .cta-section__form {
        padding: var(--space-10);
    }
}
```

---

### Breakpoint 22: Footer (min-width: 768px)
**Linea:** 3941
```css
@media (min-width: 768px) {
    .footer__main {
        grid-template-columns: 1.5fr 2fr;
    }
    .footer__links {
        grid-template-columns: repeat(4, 1fr);
    }
    .footer__bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}
```

---

### Breakpoint 23: Hero Scroll Hide (max-width: 767px)
**Linea:** 4000
```css
@media (max-width: 767px) {
    .hero__scroll {
        display: none;
    }
}
```

---

### Breakpoint 24: Cookie Banner Mobile (max-width: 767px)
**Linea:** 4222
```css
@media (max-width: 767px) {
    .cookie-banner__inner { padding: var(--space-4); }
    .cookie-banner__text { font-size: var(--text-xs); }
    .cookie-banner__actions { flex-direction: column; align-items: stretch; }
    .cookie-banner__btn { justify-content: center; text-align: center; }
}
```

---

## Resumen
- **Total de breakpoints:** 24
- **Breakpoints mobile (max-width < 768px):** 3 (lineas 2750, 4000, 4222)
- **Breakpoints tablet (768px - 1024px):** 16 (todos los min-width: 768px)
- **Breakpoints desktop (> 1024px):** 5 (min-width: 1024px y 1200px)

## Observaciones

1. **Estrategia mobile-first inconsistente:** El CSS base es mobile-first (estilos base para mobile, se expanden con min-width), pero hay 3 media queries con `max-width: 767px` que son desktop-first. Esto puede generar conflictos.

2. **Breakpoint gap:** No hay breakpoints entre 768px y 1024px (rango tablet). Los layouts saltan directamente de 1 columna a 3 columnas en muchos grids.

3. **Planes/Cards subgrid con override mobile:** El `.plan-card` usa `grid-row: span 8` con subgrid en desktop, y en mobile se cambia a `display: flex` con `grid-template-rows: none`. Esta transicion es compleja y potencialmente fragil.

4. **Tables con min-width fijo:** `.comparison__table` tiene `min-width: 600px` y `.tabla-comparativa__table` tiene `min-width: 550px`. Ambas causan overflow horizontal garantizado en pantallas < 600px.

5. **No hay breakpoints para pantallas pequenas (< 400px):** Ningun breakpoint cubre dispositivos Android tipicos (360px-412px).

6. **El breakpoint 768px se repite 16 veces:** Muchas reglas podrian consolidarse en un solo bloque.
