(() => {
    const supportedLocales = [
        "tr",
        "en",
        "ru",
        "ar"
    ];

    const routePaths = {
        tr: {
            home: "",
            about: "hakkimizda",
            services: "hizmetler",
            management: "sosyal-medya-yonetimi",
            advertising: "sosyal-medya-reklami",
            content: "icerik-uretimi",
            strategy: "dijital-strateji",
            analytics: "performans-analizi",
            packages: "paketler",
            blog: "blog",
            contact: "iletisim"
        },

        en: {
            home: "",
            about: "about",
            services: "services",
            management: "social-media-management",
            advertising: "social-media-advertising",
            content: "content-production",
            strategy: "digital-strategy",
            analytics: "performance-analysis",
            packages: "packages",
            blog: "blog",
            contact: "contact"
        },

        ru: {
            home: "",
            about: "about",
            services: "services",
            management: "social-media-management",
            advertising: "social-media-advertising",
            content: "content-production",
            strategy: "digital-strategy",
            analytics: "performance-analysis",
            packages: "packages",
            blog: "blog",
            contact: "contact"
        },

        ar: {
            home: "",
            about: "about",
            services: "services",
            management: "social-media-management",
            advertising: "social-media-advertising",
            content: "content-production",
            strategy: "digital-strategy",
            analytics: "performance-analysis",
            packages: "packages",
            blog: "blog",
            contact: "contact"
        }
    };

    const translations = {
        tr: {
            brandHome: "Hancer Group ana sayfa",

            navigation: {
                home: "Ana Sayfa",
                about: "Hakkımızda",
                services: "Hizmetler",
                allServices: "Tüm Hizmetler",
                management: "Sosyal Medya Yönetimi",
                advertising: "Sosyal Medya Reklamı",
                content: "İçerik Üretimi",
                strategy: "Dijital Strateji",
                analytics: "Performans Analizi",
                packages: "Paketler",
                blog: "Blog",
                contact: "İletişim"
            },

            cta: "Projenizi Konuşalım",

            menuLabel: "Menüyü aç veya kapat",
            servicesLabel: "Hizmetler menüsünü aç veya kapat",
            languageLabel: "Dil seçin",

            footer: {
                description:
                    "Strateji, yaratıcılık ve performans odaklı sosyal medya çözümleriyle markaların dijital dünyada daha güçlü bir iletişim kurmasına yardımcı oluyoruz.",

                contact: "Projenizi konuşalım",

                pages: "SAYFALAR",
                services: "HİZMETLER",
                digital: "DİJİTAL",

                rights:
                    "© 2026 Hancer Group. Tüm hakları saklıdır.",

                location: "Kıbrıs",

                signature:
                    "Digital · Social · Performance"
            }
        },

        en: {
            brandHome: "Hancer Group home page",

            navigation: {
                home: "Home",
                about: "About",
                services: "Services",
                allServices: "All Services",
                management: "Social Media Management",
                advertising: "Social Media Advertising",
                content: "Content Production",
                strategy: "Digital Strategy",
                analytics: "Performance Analysis",
                packages: "Packages",
                blog: "Blog",
                contact: "Contact"
            },

            cta: "Let's Talk About Your Project",

            menuLabel: "Open or close the menu",
            servicesLabel: "Open or close the services menu",
            languageLabel: "Select language",

            footer: {
                description:
                    "We help brands build stronger digital communication through strategy, creativity and performance-focused social media solutions.",

                contact: "Let's talk about your project",

                pages: "PAGES",
                services: "SERVICES",
                digital: "DIGITAL",

                rights:
                    "© 2026 Hancer Group. All rights reserved.",

                location: "Cyprus",

                signature:
                    "Digital · Social · Performance"
            }
        },

        ru: {
            brandHome: "Главная страница Hancer Group",

            navigation: {
                home: "Главная",
                about: "О нас",
                services: "Услуги",
                allServices: "Все услуги",
                management: "Ведение соцсетей",
                advertising: "Реклама в соцсетях",
                content: "Создание контента",
                strategy: "Цифровая стратегия",
                analytics: "Анализ эффективности",
                packages: "Пакеты",
                blog: "Блог",
                contact: "Контакты"
            },

            cta: "Обсудить проект",

            menuLabel: "Открыть или закрыть меню",
            servicesLabel: "Открыть или закрыть меню услуг",
            languageLabel: "Выбрать язык",

            footer: {
                description:
                    "Мы помогаем брендам выстраивать сильную цифровую коммуникацию с помощью стратегии, креативности и решений для социальных сетей, ориентированных на результат.",

                contact: "Обсудить проект",

                pages: "СТРАНИЦЫ",
                services: "УСЛУГИ",
                digital: "DIGITAL",

                rights:
                    "© 2026 Hancer Group. Все права защищены.",

                location: "Кипр",

                signature:
                    "Digital · Social · Performance"
            }
        },

        ar: {
            brandHome: "الصفحة الرئيسية لـ Hancer Group",

            navigation: {
                home: "الرئيسية",
                about: "من نحن",
                services: "الخدمات",
                allServices: "جميع الخدمات",
                management: "إدارة وسائل التواصل",
                advertising: "إعلانات التواصل الاجتماعي",
                content: "إنتاج المحتوى",
                strategy: "الاستراتيجية الرقمية",
                analytics: "تحليل الأداء",
                packages: "الباقات",
                blog: "المدونة",
                contact: "تواصل معنا"
            },

            cta: "لنتحدث عن مشروعك",

            menuLabel: "فتح أو إغلاق القائمة",
            servicesLabel: "فتح أو إغلاق قائمة الخدمات",
            languageLabel: "اختر اللغة",

            footer: {
                description:
                    "نساعد العلامات التجارية على بناء تواصل رقمي أقوى من خلال الاستراتيجية والإبداع وحلول وسائل التواصل الاجتماعي القائمة على الأداء.",

                contact: "لنتحدث عن مشروعك",

                pages: "الصفحات",
                services: "الخدمات",
                digital: "رقمي",

                rights:
                    "© 2026 Hancer Group. جميع الحقوق محفوظة.",

                location: "قبرص",

                signature:
                    "Digital · Social · Performance"
            }
        }
    };

    const languageNames = {
        tr: "Türkçe",
        en: "English",
        ru: "Русский",
        ar: "العربية"
    };

    const languageCodes = {
        tr: "TR",
        en: "EN",
        ru: "RU",
        ar: "AR"
    };

    const getCurrentLocale = () => {
        const firstPathPart = window.location.pathname
            .split("/")
            .filter(Boolean)[0];

        return supportedLocales.includes(firstPathPart)
            ? firstPathPart
            : "tr";
    };

    const getCurrentRouteKey = (locale) => {
        const pathParts = window.location.pathname
            .split("/")
            .filter(Boolean);

        const relativePath = pathParts
            .slice(1)
            .join("/");

        const localeRoutes = routePaths[locale];

        const routeEntry = Object.entries(
            localeRoutes
        ).find(([, path]) => path === relativePath);

        return routeEntry
            ? routeEntry[0]
            : "home";
    };

    const getRouteUrl = (
        locale,
        routeKey
    ) => {
        const path = routePaths[locale][routeKey];

        if (!path) {
            return `/${locale}/`;
        }

        return `/${locale}/${path}/`;
    };

    const locale = getCurrentLocale();

    const routeKey = getCurrentRouteKey(
        locale
    );

    const text = translations[locale];

    document.documentElement.lang = locale;

    document.documentElement.dir =
        locale === "ar"
            ? "rtl"
            : "ltr";

    const headerElement = document.getElementById(
        "site-header"
    );

    const footerElement = document.getElementById(
        "site-footer"
    );

    if (headerElement) {
        headerElement.innerHTML = `
            <header class="site-header">
                <nav class="navbar">
                    <div class="site-container navbar-inner">

                        <a class="site-logo"
                           href="${getRouteUrl(locale, "home")}"
                           aria-label="${text.brandHome}">

                            <span class="site-logo-mark">
                                <span></span>
                            </span>

                            <span class="site-logo-text">
                                HANCER
                                <strong>GROUP</strong>
                            </span>

                        </a>

                        <button class="site-menu-toggle"
                                type="button"
                                id="siteMenuToggle"
                                aria-controls="mainNavbar"
                                aria-expanded="false"
                                aria-label="${text.menuLabel}">

                            <span class="menu-line"></span>
                            <span class="menu-line"></span>
                            <span class="menu-line"></span>

                        </button>

                        <div class="navbar-collapse"
                             id="mainNavbar">

                            <ul class="navbar-nav site-navigation">

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="${getRouteUrl(locale, "home")}">
                                        ${text.navigation.home}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="${getRouteUrl(locale, "about")}">
                                        ${text.navigation.about}
                                    </a>
                                </li>

                                <li class="nav-item site-dropdown-item">

                                    <button class="nav-link site-dropdown-toggle"
                                            type="button"
                                            id="servicesDropdownToggle"
                                            aria-expanded="false"
                                            aria-label="${text.servicesLabel}">

                                        ${text.navigation.services}

                                        <span aria-hidden="true">
                                            ▾
                                        </span>

                                    </button>

                                    <div class="dropdown-menu site-dropdown"
                                         id="servicesDropdown">

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "services")}">
                                            ${text.navigation.allServices}
                                        </a>

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "management")}">
                                            ${text.navigation.management}
                                        </a>

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "advertising")}">
                                            ${text.navigation.advertising}
                                        </a>

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "content")}">
                                            ${text.navigation.content}
                                        </a>

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "strategy")}">
                                            ${text.navigation.strategy}
                                        </a>

                                        <a class="dropdown-item"
                                           href="${getRouteUrl(locale, "analytics")}">
                                            ${text.navigation.analytics}
                                        </a>

                                    </div>

                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="${getRouteUrl(locale, "packages")}">
                                        ${text.navigation.packages}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="${getRouteUrl(locale, "blog")}">
                                        ${text.navigation.blog}
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="${getRouteUrl(locale, "contact")}">
                                        ${text.navigation.contact}
                                    </a>
                                </li>

                            </ul>

                            <div class="language-switcher">

                                <button class="language-toggle"
                                        type="button"
                                        id="languageToggle"
                                        aria-expanded="false"
                                        aria-label="${text.languageLabel}">

                                    <span>
                                        ${languageCodes[locale]}
                                    </span>

                                    <span aria-hidden="true">
                                        ▾
                                    </span>

                                </button>

                                <div class="language-menu"
                                     id="languageMenu">

                                    ${supportedLocales
                                        .map((language) => `
                                            <a href="${getRouteUrl(language, routeKey)}"
                                               class="${language === locale ? "is-active" : ""}"
                                               lang="${language}"
                                               dir="${language === "ar" ? "rtl" : "ltr"}">

                                                <span>
                                                    ${languageCodes[language]}
                                                </span>

                                                ${languageNames[language]}

                                            </a>
                                        `)
                                        .join("")}

                                </div>

                            </div>

                            <a class="header-cta"
                               href="${getRouteUrl(locale, "contact")}">

                                ${text.cta}

                                <span aria-hidden="true">
                                    ↗
                                </span>

                            </a>

                        </div>

                    </div>
                </nav>
            </header>
        `;
    }

    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="site-footer">
                <div class="site-container">

                    <div class="footer-main">

                        <div class="footer-brand">

                            <a class="footer-logo"
                               href="${getRouteUrl(locale, "home")}"
                               aria-label="${text.brandHome}">

                                <span class="site-logo-mark">
                                    <span></span>
                                </span>

                                <span class="site-logo-text">
                                    HANCER
                                    <strong>GROUP</strong>
                                </span>

                            </a>

                            <p>
                                ${text.footer.description}
                            </p>

                            <a class="footer-contact-link"
                               href="${getRouteUrl(locale, "contact")}">

                                ${text.footer.contact}

                                <span aria-hidden="true">
                                    ↗
                                </span>

                            </a>

                        </div>

                        <div class="footer-navigation">

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    ${text.footer.pages}
                                </span>

                                <a href="${getRouteUrl(locale, "home")}">
                                    ${text.navigation.home}
                                </a>

                                <a href="${getRouteUrl(locale, "about")}">
                                    ${text.navigation.about}
                                </a>

                                <a href="${getRouteUrl(locale, "packages")}">
                                    ${text.navigation.packages}
                                </a>

                                <a href="${getRouteUrl(locale, "blog")}">
                                    ${text.navigation.blog}
                                </a>

                                <a href="${getRouteUrl(locale, "contact")}">
                                    ${text.navigation.contact}
                                </a>

                            </div>

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    ${text.footer.services}
                                </span>

                                <a href="${getRouteUrl(locale, "services")}">
                                    ${text.navigation.allServices}
                                </a>

                                <a href="${getRouteUrl(locale, "management")}">
                                    ${text.navigation.management}
                                </a>

                                <a href="${getRouteUrl(locale, "advertising")}">
                                    ${text.navigation.advertising}
                                </a>

                            </div>

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    ${text.footer.digital}
                                </span>

                                <a href="${getRouteUrl(locale, "content")}">
                                    ${text.navigation.content}
                                </a>

                                <a href="${getRouteUrl(locale, "strategy")}">
                                    ${text.navigation.strategy}
                                </a>

                                <a href="${getRouteUrl(locale, "analytics")}">
                                    ${text.navigation.analytics}
                                </a>

                            </div>

                        </div>

                    </div>

                    <div class="footer-bottom">

                        <p>
                            ${text.footer.rights}
                        </p>

                        <div class="footer-bottom-info">

                            <span>
                                ${text.footer.location}
                            </span>

                            <span class="footer-bottom-dot"></span>

                            <span>
                                ${text.footer.signature}
                            </span>

                        </div>

                    </div>

                </div>
            </footer>
        `;
    }

    const menuToggle = document.getElementById(
        "siteMenuToggle"
    );

    const mainNavbar = document.getElementById(
        "mainNavbar"
    );

    if (menuToggle && mainNavbar) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNavbar.classList.toggle(
                "is-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });
    }

    const dropdownToggle = document.getElementById(
        "servicesDropdownToggle"
    );

    const servicesDropdown = document.getElementById(
        "servicesDropdown"
    );

    if (dropdownToggle && servicesDropdown) {
        dropdownToggle.addEventListener("click", () => {
            const isOpen = servicesDropdown.classList.toggle(
                "is-open"
            );

            dropdownToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });
    }

    const languageToggle = document.getElementById(
        "languageToggle"
    );

    const languageMenu = document.getElementById(
        "languageMenu"
    );

    if (languageToggle && languageMenu) {
        languageToggle.addEventListener("click", () => {
            const isOpen = languageMenu.classList.toggle(
                "is-open"
            );

            languageToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        document.addEventListener("click", (event) => {
            if (
                !event.target.closest(".language-switcher")
            ) {
                languageMenu.classList.remove(
                    "is-open"
                );

                languageToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") {
                return;
            }

            languageMenu.classList.remove(
                "is-open"
            );

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    }
})();