/* ==========================================
   HYCHEM LABORATORIES
   MAIN JAVASCRIPT FILE
========================================== */

/* ==========================
PRELOADER
========================== */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});

/* ==========================
MOBILE MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
}

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });
});

/* ==========================
HEADER SHADOW ON SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});

/* ==========================
SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".section, .card, .feature-card, .product-card, .cert-card"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

/* ==========================
COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    +counter.getAttribute("data-target");

                let current = 0;

                const increment = target / 100;

                const updateCounter = () => {

                    if (current < target) {

                        current += increment;

                        counter.innerText =
                            Math.ceil(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================
BACK TO TOP BUTTON
========================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================
FORM VALIDATION
========================== */

const form = document.getElementById("quoteForm");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs =
            form.querySelectorAll(
                "input[required]"
            );

        let valid = true;

        inputs.forEach(input => {

            if (
                input.value.trim() === ""
            ) {

                valid = false;

                input.style.border =
                    "2px solid red";

            } else {

                input.style.border =
                    "1px solid #ddd";

            }

        });

        if (!valid) {

            alert(
                "Please fill all required fields."
            );

            return;
        }

        alert(
            "Thank you! Your inquiry has been submitted."
        );

        form.reset();

    });

}

/* ==========================
GALLERY LIGHTBOX
========================== */

const galleryImages =
    document.querySelectorAll(
        ".gallery-grid img"
    );

if (galleryImages.length > 0) {

    const lightbox =
        document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background =
        "rgba(0,0,0,0.9)";
    lightbox.style.display = "none";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "99999";

    const img =
        document.createElement("img");

    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "12px";

    lightbox.appendChild(img);

    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            img.src = image.src;

            lightbox.style.display = "flex";

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

/* ==========================
LAZY IMAGE LOADING
========================== */

const lazyImages =
    document.querySelectorAll("img");

const lazyObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const image =
                        entry.target;

                    image.src =
                        image.dataset.src ||
                        image.src;

                    lazyObserver.unobserve(
                        image
                    );

                }

            });

        }
    );

lazyImages.forEach(image => {
    lazyObserver.observe(image);
});

/* ==========================
PRODUCT FILTERS
(For future use)
========================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const products =
    document.querySelectorAll(
        ".product-card"
    );

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.filter;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category ===
                    category
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        });

    });

});

/* ==========================
CURRENT YEAR AUTO UPDATE
========================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}

console.log(
    "Hychem Laboratories Website Loaded Successfully"
);
/* ==========================
HIDE NAVBAR ON SCROLL DOWN
SHOW ON SCROLL UP
========================== */

let lastScrollTop = 0;

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    let currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {

        // Scrolling down
        header.classList.add("hide-nav");

    } else {

        // Scrolling up
        header.classList.remove("hide-nav");

    }

    lastScrollTop = currentScroll <= 0
        ? 0
        : currentScroll;
});
/* ==========================
DRAWER MENU
========================== */

const hamburger =
document.getElementById("hamburger");

const drawer =
document.getElementById("mobileDrawer");

const overlay =
document.getElementById("drawerOverlay");

const closeDrawer =
document.getElementById("closeDrawer");

hamburger.addEventListener("click", () => {

    drawer.classList.add("active");
    overlay.classList.add("active");

});

closeDrawer.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

function closeMenu(){

    drawer.classList.remove("active");
    overlay.classList.remove("active");

}

document
.querySelectorAll(".drawer-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});