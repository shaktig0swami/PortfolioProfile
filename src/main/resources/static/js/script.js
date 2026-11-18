// =====================================
// MOBILE NAVIGATION
// =====================================

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {

    menuBtn.addEventListener('click', function () {

        const isOpen = navLinks.classList.toggle('open');

        menuBtn.setAttribute('aria-expanded', isOpen);

        menuBtn.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {

        link.addEventListener('click', function () {

            navLinks.classList.remove('open');

            menuBtn.setAttribute('aria-expanded', 'false');

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

}


// =====================================
// REVEAL ANIMATION - CORRECTED
// =====================================

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('animate');

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}


// =====================================
// ANIMATED COUNTING NUMBERS
// =====================================

const counters = document.querySelectorAll('.counter');

let countersStarted = false;

if ('IntersectionObserver' in window && counters.length) {

    const counterObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting && !countersStarted) {

                countersStarted = true;

                counters.forEach(function (counter) {

                    const target = Number(counter.dataset.target);
                    const duration = 1500;
                    const startTime = performance.now();

                    function updateCounter(now) {

                        const progress = Math.min(
                            (now - startTime) / duration,
                            1
                        );

                        const eased = 1 - Math.pow(1 - progress, 3);

                        counter.textContent = Math.floor(
                            target * eased
                        ).toLocaleString('en-IN');

                        if (progress < 1) {

                            requestAnimationFrame(updateCounter);

                        } else {

                            counter.textContent =
                                target.toLocaleString('en-IN');
                        }
                    }
                    requestAnimationFrame(updateCounter);
                });
                counterObserver.disconnect();
            }
        });
    }, {
        threshold: 0.3
    });
    const statsSection = counters[0].closest('.stats');

    if (statsSection) {
        counterObserver.observe(statsSection);
    }
}


// =====================================
// FOOTER YEAR
// =====================================

const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =====================================
// CONTACT FORM
// =====================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function () {
        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }
    });
}