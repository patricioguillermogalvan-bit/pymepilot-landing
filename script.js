/* ========================================
   PYMEPILOT - ServiceNow Style Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initFormValidation();
    initAOS();
});

/* ----------------------------------------
   MOBILE MENU
   ---------------------------------------- */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ----------------------------------------
   SMOOTH SCROLL
   ---------------------------------------- */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ----------------------------------------
   HEADER SCROLL BEHAVIOR
   ---------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ----------------------------------------
   FORM VALIDATION
   ---------------------------------------- */
function initFormValidation() {
    const form = document.getElementById('demo-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const whatsapp = document.getElementById('whatsapp');
        const empresa = document.getElementById('empresa');

        let isValid = true;

        if (!nombre.value.trim()) {
            showError(nombre, 'nombre-error', 'Ingresá tu nombre');
            isValid = false;
        }

        if (!email.value.trim()) {
            showError(email, 'email-error', 'Ingresá tu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'email-error', 'Ingresá un email válido');
            isValid = false;
        }

        if (!whatsapp.value.trim()) {
            showError(whatsapp, 'whatsapp-error', 'Ingresá tu WhatsApp');
            isValid = false;
        } else if (!isValidPhone(whatsapp.value)) {
            showError(whatsapp, 'whatsapp-error', 'Ingresá un número válido');
            isValid = false;
        }

        if (!empresa.value.trim()) {
            showError(empresa, 'empresa-error', 'Ingresá el nombre de tu empresa');
            isValid = false;
        }

        if (isValid) {
            handleFormSubmit(form);
        }
    });

    const inputs = form.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.form-error').textContent = '';
        });
    });
}

function showError(field, errorId, message) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = message;
        field.style.borderColor = '#E17055';
    }
}

function clearErrors() {
    const errors = document.querySelectorAll('.form-error');
    const inputs = document.querySelectorAll('.form-group input');

    errors.forEach(function(error) {
        error.textContent = '';
    });

    inputs.forEach(function(input) {
        input.style.borderColor = '';
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 8;
}

function handleFormSubmit(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
        Enviando...
    `;

    setTimeout(function() {
        form.innerHTML = `
            <div style="text-align: center; padding: 3rem 2rem;">
                <div style="width: 64px; height: 64px; background: rgba(129, 181, 161, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#81B5A1" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #293E40; margin-bottom: 0.5rem;">
                    ¡Gracias por tu interés!
                </h3>
                <p style="color: #6B7C7F; line-height: 1.6;">
                    Nos pondremos en contacto dentro de las próximas 24 horas hábiles.
                </p>
            </div>
        `;
    }, 1500);
}

/* ----------------------------------------
   AOS INITIALIZATION
   ---------------------------------------- */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: false
        });
    }
}
