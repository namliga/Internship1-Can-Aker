(() => {
    const initializeRevealAnimations = () => {
        const revealElements = [
            ...document.querySelectorAll(".reveal")
        ];

        if (revealElements.length === 0) {
            return;
        }

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            prefersReducedMotion ||
            !("IntersectionObserver" in window)
        ) {
            revealElements.forEach((element) => {
                element.classList.add("is-visible");
            });

            return;
        }

        document.documentElement.classList.add(
            "reveal-ready"
        );

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -20px 0px"
            }
        );

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                revealElements.forEach((element) => {
                    revealObserver.observe(element);
                });
            });
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeRevealAnimations
        );
    } else {
        initializeRevealAnimations();
    }
    const contactForm = document.getElementById(
    "contactForm"
);

const contactFormMessage = document.getElementById(
    "contactFormMessage"
);

if (contactForm && contactFormMessage) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();

            return;
        }

        contactFormMessage.textContent =
            "Form bilgileri hazırlandı. Statik demo sürümünde sunucu bağlantısı bulunmadığı için gerçek gönderim yapılmadı.";
    });
}
})();