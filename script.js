/* ========================================
   PYMEPILOT LANDING PAGE SCRIPTS
   Vanilla JavaScript - No dependencies
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScroll();
    initFaqAccordion();
    initFormValidation();
    initAOS();
    initHeaderScroll();
});

/* ----------------------------------------
   MOBILE MENU
   Toggle hamburger menu on mobile
   ---------------------------------------- */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !navMenu) return;

    // Toggle menu on hamburger click
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
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
   Smooth scrolling for anchor links
   ---------------------------------------- */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or empty
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
   FAQ ACCORDION
   Expand/collapse FAQ items
   ---------------------------------------- */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', function() {
            // Close other open items (optional - uncomment for single open)
            // faqItems.forEach(function(otherItem) {
            //     if (otherItem !== item && otherItem.hasAttribute('open')) {
            //         otherItem.removeAttribute('open');
            //     }
            // });
        });
    });
}

/* ----------------------------------------
   FORM VALIDATION
   Client-side validation for contact form
   ---------------------------------------- */
function initFormValidation() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset errors
        clearErrors();

        // Get form values
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const whatsapp = document.getElementById('whatsapp');
        const empresa = document.getElementById('empresa');

        let isValid = true;

        // Validate nombre
        if (!nombre.value.trim()) {
            showError(nombre, 'nombre-error', 'Por favor ingresá tu nombre');
            isValid = false;
        } else if (nombre.value.trim().length < 2) {
            showError(nombre, 'nombre-error', 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showError(email, 'email-error', 'Por favor ingresá tu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'email-error', 'Por favor ingresá un email válido');
            isValid = false;
        }

        // Validate WhatsApp
        if (!whatsapp.value.trim()) {
            showError(whatsapp, 'whatsapp-error', 'Por favor ingresá tu WhatsApp');
            isValid = false;
        } else if (!isValidPhone(whatsapp.value)) {
            showError(whatsapp, 'whatsapp-error', 'Por favor ingresá un número válido');
            isValid = false;
        }

        // Validate empresa
        if (!empresa.value.trim()) {
            showError(empresa, 'empresa-error', 'Por favor ingresá el nombre de tu empresa');
            isValid = false;
        }

        if (isValid) {
            // Form is valid - here you would typically send to a backend
            handleFormSubmit(form);
        }
    });

    // Real-time validation on blur
    const inputs = form.querySelectorAll('.form__input');
    inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Clear error on focus
        input.addEventListener('focus', function() {
            this.classList.remove('error');
            const errorEl = document.getElementById(this.id + '-error');
            if (errorEl) errorEl.textContent = '';
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;

    switch(fieldId) {
        case 'nombre':
            if (!value) {
                showError(field, 'nombre-error', 'Por favor ingresá tu nombre');
            } else if (value.length < 2) {
                showError(field, 'nombre-error', 'El nombre debe tener al menos 2 caracteres');
            }
            break;
        case 'email':
            if (!value) {
                showError(field, 'email-error', 'Por favor ingresá tu email');
            } else if (!isValidEmail(value)) {
                showError(field, 'email-error', 'Por favor ingresá un email válido');
            }
            break;
        case 'whatsapp':
            if (!value) {
                showError(field, 'whatsapp-error', 'Por favor ingresá tu WhatsApp');
            } else if (!isValidPhone(value)) {
                showError(field, 'whatsapp-error', 'Por favor ingresá un número válido');
            }
            break;
        case 'empresa':
            if (!value) {
                showError(field, 'empresa-error', 'Por favor ingresá el nombre de tu empresa');
            }
            break;
    }
}

function showError(field, errorId, message) {
    field.classList.add('error');
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function clearErrors() {
    const inputs = document.querySelectorAll('.form__input');
    const errors = document.querySelectorAll('.form__error');

    inputs.forEach(function(input) {
        input.classList.remove('error');
    });

    errors.forEach(function(error) {
        error.textContent = '';
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    // Accept various phone formats - at least 8 digits
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 8;
}

function handleFormSubmit(form) {
    // Get the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando...';

    // Simulate form submission (replace with actual backend integration)
    setTimeout(function() {
        // Show success message
        form.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">✅</span>
                <h3 style="font-family: 'Poppins', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem; color: #2D3436;">
                    ¡Gracias por tu interés!
                </h3>
                <p style="color: #636E72;">
                    Nos pondremos en contacto contigo dentro de las próximas 24 horas hábiles.
                </p>
            </div>
        `;
    }, 1500);
}

/* ----------------------------------------
   AOS INITIALIZATION
   Animate On Scroll library setup
   ---------------------------------------- */
function initAOS() {
    // Check if AOS is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: function() {
                // Disable on mobile if performance is an issue
                // return window.innerWidth < 768;
                return false;
            }
        });
    }
}

/* ----------------------------------------
   HEADER SCROLL BEHAVIOR
   Add shadow on scroll
   ---------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('header');

    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

/* ----------------------------------------
   UTILITY FUNCTIONS
   Helper functions for various tasks
   ---------------------------------------- */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const args = arguments;
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}
