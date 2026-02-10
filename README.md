# PymePilot Landing Page

Landing page profesional para PymePilot - Agencia de automatización IA especializada en distribuidoras B2B argentinas.

## Estructura del Proyecto

```
pymepilot-landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS (mobile-first)
├── script.js           # JavaScript vanilla
├── README.md           # Este archivo
└── assets/
    └── icons/          # Iconos SVG (inline en HTML)
```

## Stack Técnico

- **HTML5** semántico
- **CSS3** con custom properties, flexbox y grid
- **JavaScript** vanilla (sin frameworks)
- **AOS** para animaciones de scroll (via CDN)
- **Google Fonts** - Poppins + Open Sans (via CDN)

## Secciones

1. **Hero** - Headline principal con CTA
2. **Problema** - Pain points de distribuidoras
3. **Solución** - 4 módulos con precios
4. **Diferenciadores** - Tabla comparativa
5. **Social Proof** - Casos de éxito
6. **Proceso** - 3 pasos de implementación
7. **FAQ** - Accordion con 7 preguntas
8. **CTA Final** - Formulario de contacto
9. **Footer** - Links y contacto

## Deployment

### Opción 1: Servidor Local

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .

# Con PHP
php -S localhost:8000
```

Luego abrir `http://localhost:8000` en el navegador.

### Opción 2: Hosting Estático

Subir todos los archivos a cualquier hosting estático:

- **Netlify**: Drag & drop la carpeta
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push a repositorio + habilitar Pages
- **Firebase Hosting**: `firebase deploy`

### Opción 3: Servidor Web Tradicional

Copiar archivos a la carpeta pública del servidor:
- Apache: `/var/www/html/`
- Nginx: `/usr/share/nginx/html/`

## Configuración del Formulario

El formulario actualmente muestra un mensaje de éxito simulado. Para conectarlo a un backend:

### Opción A: Formspree (Sin backend)

```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

### Opción B: Netlify Forms

```html
<form name="contact" netlify>
```

### Opción C: Backend propio

Modificar `handleFormSubmit()` en `script.js`:

```javascript
function handleFormSubmit(form) {
    const formData = new FormData(form);

    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar éxito
    })
    .catch(error => {
        // Mostrar error
    });
}
```

## Personalización

### Colores

Editar las custom properties en `styles.css`:

```css
:root {
    --primary-blue: #0066CC;
    --success-green: #00B894;
    --alert-orange: #FF6B35;
    /* ... */
}
```

### Contenido

- Textos: Editar directamente en `index.html`
- Precios: Buscar `modulo-card__price` en `index.html`
- FAQ: Buscar `faq__item` en `index.html`

### Imágenes

Reemplazar los placeholders:

1. **Hero Screenshot**: Buscar `hero__placeholder`
2. **Video Testimonial**: Buscar `video-placeholder`

Para el video de YouTube:
```html
<iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0"
    allowfullscreen>
</iframe>
```

## Verificación

1. Abrir `index.html` en navegador
2. Verificar responsive (DevTools: 375px, 768px, 1024px, 1440px)
3. Probar:
   - Menú hamburguesa (mobile)
   - FAQ accordion
   - Hover effects en cards
   - Scroll animations
   - Validación de formulario
4. Lighthouse audit (target >90)

## Compatibilidad

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers modernos

## Licencia

© 2025 PymePilot. Todos los derechos reservados.
