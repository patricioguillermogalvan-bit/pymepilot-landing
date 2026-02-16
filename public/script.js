/* ========================================
   PYMEPILOT - ServiceNow Style Scripts
   ======================================== */

function init() {
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initFormValidation();
    initDiagnostico();
    initPlanHighlight();
    initAOS();
    initCookieConsent();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

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
   DIAGNÓSTICO EXPRESS CALCULATOR
   ---------------------------------------- */
function initDiagnostico() {
    var btn = document.getElementById('diagnostico-btn');
    if (!btn) return;

    btn.addEventListener('click', function() {
        var answers = {
            q1: getRadioValue('q1'),
            q2: getRadioValue('q2'),
            q3: getRadioValue('q3'),
            q4: getRadioValue('q4')
        };

        // Check all questions answered
        if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4) {
            var questions = document.querySelectorAll('.quiz-question');
            questions.forEach(function(q, i) {
                var name = 'q' + (i + 1);
                var answered = document.querySelector('input[name="' + name + '"]:checked');
                if (!answered) {
                    q.style.border = '2px solid #E17055';
                    q.style.borderRadius = '12px';
                    q.style.padding = '16px';
                    setTimeout(function() {
                        q.style.border = 'none';
                        q.style.padding = '0';
                    }, 3000);
                }
            });
            return;
        }

        // Score: red=3, yellow=2, green=1
        var scoreMap = { red: 3, yellow: 2, green: 1 };
        var totalScore = scoreMap[answers.q1] + scoreMap[answers.q2] + scoreMap[answers.q3] + scoreMap[answers.q4];

        var plan, planId;
        if (totalScore >= 10) {
            plan = 'TAP\u00C1 LA HEMORRAGIA';
            planId = 'plan-starter';
        } else if (totalScore >= 7) {
            plan = 'CONSTRU\u00CD LA M\u00C1QUINA \uD83D\uDD25';
            planId = 'plan-growth';
        } else {
            plan = 'DOMIN\u00C1 TU MERCADO \uD83D\uDC8E';
            planId = 'plan-scale';
        }

        // Show result
        var resultDiv = document.getElementById('quiz-result');
        var resultPlan = document.getElementById('quiz-result-plan');
        var resultCta = document.getElementById('quiz-result-cta');

        resultPlan.textContent = plan;
        resultCta.href = '#' + planId;
        resultDiv.style.display = 'block';

        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

function getRadioValue(name) {
    var selected = document.querySelector('input[name="' + name + '"]:checked');
    return selected ? selected.value : null;
}

/* ----------------------------------------
   PLAN HIGHLIGHT ON SCROLL
   ---------------------------------------- */
function initPlanHighlight() {
    var planLinks = document.querySelectorAll('a[href^="#plan-"]');
    planLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var targetId = this.getAttribute('href').substring(1);
            var targetCard = document.getElementById(targetId);
            if (targetCard) {
                var allCards = document.querySelectorAll('.plan-card');
                allCards.forEach(function(card) {
                    card.style.boxShadow = '';
                });

                setTimeout(function() {
                    targetCard.style.boxShadow = '0 0 0 3px #81B5A1, 0 20px 40px rgba(129, 181, 161, 0.3)';
                    setTimeout(function() {
                        targetCard.style.boxShadow = '';
                    }, 3000);
                }, 500);
            }
        });
    });
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

/* ----------------------------------------
   COOKIE CONSENT BANNER
   ---------------------------------------- */
function initCookieConsent() {
    var banner = document.getElementById('cookie-consent');
    if (!banner) return;

    // Check if consent already given
    var existing = getCookieValue('pymepilot-cookie-consent');
    if (existing) return;

    // Show banner with small delay
    setTimeout(function() {
        banner.style.display = 'block';
    }, 800);

    var prefsPanel = document.getElementById('cookie-prefs');
    var customizeBtn = document.getElementById('cookie-customize');
    var acceptBtn = document.getElementById('cookie-accept');
    var rejectBtn = document.getElementById('cookie-reject');
    var toggleAnalytics = document.getElementById('toggle-analytics');
    var toggleMarketing = document.getElementById('toggle-marketing');

    var prefs = { essential: true, analytics: false, marketing: false };

    // Accept All
    acceptBtn.addEventListener('click', function() {
        saveCookiePrefs({ essential: true, analytics: true, marketing: true });
        banner.style.display = 'none';
    });

    // Reject Non-Essential
    rejectBtn.addEventListener('click', function() {
        saveCookiePrefs({ essential: true, analytics: false, marketing: false });
        banner.style.display = 'none';
    });

    // Customize / Save
    customizeBtn.addEventListener('click', function() {
        if (prefsPanel.style.display === 'none') {
            prefsPanel.style.display = 'flex';
            customizeBtn.textContent = 'Guardar Preferencias';
        } else {
            saveCookiePrefs(prefs);
            banner.style.display = 'none';
        }
    });

    // Toggle Analytics
    toggleAnalytics.addEventListener('click', function() {
        prefs.analytics = !prefs.analytics;
        updateToggle(toggleAnalytics, prefs.analytics);
    });

    // Toggle Marketing
    toggleMarketing.addEventListener('click', function() {
        prefs.marketing = !prefs.marketing;
        updateToggle(toggleMarketing, prefs.marketing);
    });
}

function updateToggle(btn, isOn) {
    var knob = btn.querySelector('.cookie-banner__toggle-knob');
    if (isOn) {
        btn.className = 'cookie-banner__toggle cookie-banner__toggle--on';
        knob.className = 'cookie-banner__toggle-knob cookie-banner__toggle-knob--on';
    } else {
        btn.className = 'cookie-banner__toggle cookie-banner__toggle--off';
        knob.className = 'cookie-banner__toggle-knob cookie-banner__toggle-knob--off';
    }
}

function saveCookiePrefs(prefs) {
    var date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = 'pymepilot-cookie-consent=' + encodeURIComponent(JSON.stringify(prefs)) + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
}

function getCookieValue(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}
