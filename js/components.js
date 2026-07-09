(() => {
    const headerElement = document.getElementById("site-header");
    const footerElement = document.getElementById("site-footer");

    if (headerElement) {
        headerElement.innerHTML = `
            <header class="site-header">
                <nav class="navbar">
                    <div class="site-container navbar-inner">

                        <a class="site-logo"
                           href="/tr/"
                           aria-label="Hancer Group ana sayfa">

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
                                aria-label="Menüyü aç veya kapat">

                            <span class="menu-line"></span>
                            <span class="menu-line"></span>
                            <span class="menu-line"></span>

                        </button>

                        <div class="navbar-collapse"
                             id="mainNavbar">

                            <ul class="navbar-nav site-navigation">

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="/tr/">
                                        Ana Sayfa
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="/tr/hakkimizda/">
                                        Hakkımızda
                                    </a>
                                </li>

                                <li class="nav-item site-dropdown-item">

                                    <button class="nav-link site-dropdown-toggle"
                                            type="button"
                                            id="servicesDropdownToggle"
                                            aria-expanded="false">

                                        Hizmetler

                                        <span aria-hidden="true">
                                            ▾
                                        </span>

                                    </button>

                                    <div class="dropdown-menu site-dropdown"
                                         id="servicesDropdown">

                                        <a class="dropdown-item"
                                           href="/tr/hizmetler/">
                                            Tüm Hizmetler
                                        </a>

                                        <a class="dropdown-item"
                                           href="/tr/sosyal-medya-yonetimi/">
                                            Sosyal Medya Yönetimi
                                        </a>

                                        <a class="dropdown-item"
                                           href="/tr/sosyal-medya-reklami/">
                                            Sosyal Medya Reklamı
                                        </a>

                                        <a class="dropdown-item"
                                           href="/tr/icerik-uretimi/">
                                            İçerik Üretimi
                                        </a>

                                        <a class="dropdown-item"
                                           href="/tr/dijital-strateji/">
                                            Dijital Strateji
                                        </a>

                                        <a class="dropdown-item"
                                           href="/tr/performans-analizi/">
                                            Performans Analizi
                                        </a>

                                    </div>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"
                                        href="/tr/paketler/">
                                        Paketler
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="/tr/blog/">
                                        Blog
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="/tr/iletisim/">
                                        İletişim
                                    </a>
                                </li>

                            </ul>

                            <a class="header-cta"
                               href="/tr/iletisim/">

                                Projenizi Konuşalım

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
                               href="/tr/"
                               aria-label="Hancer Group ana sayfa">

                                <span class="site-logo-mark">
                                    <span></span>
                                </span>

                                <span class="site-logo-text">
                                    HANCER
                                    <strong>GROUP</strong>
                                </span>

                            </a>

                            <p>
                                Strateji, yaratıcılık ve performans odaklı
                                sosyal medya çözümleriyle markaların dijital
                                dünyada daha güçlü bir iletişim kurmasına
                                yardımcı oluyoruz.
                            </p>

                            <a class="footer-contact-link"
                               href="/tr/iletisim/">

                                Projenizi konuşalım

                                <span aria-hidden="true">
                                    ↗
                                </span>

                            </a>

                        </div>

                        <div class="footer-navigation">

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    SAYFALAR
                                </span>

                                <a href="/tr/">Ana Sayfa</a>
                                <a href="/tr/hakkimizda/">Hakkımızda</a>
                                <a href="/tr/paketler/">Paketler</a>
                                <a href="/tr/blog/">Blog</a>
                                <a href="/tr/iletisim/">İletişim</a>

                            </div>

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    HİZMETLER
                                </span>

                                <a href="/tr/hizmetler/">
                                    Tüm Hizmetler
                                </a>

                                <a href="/tr/sosyal-medya-yonetimi/">
                                    Sosyal Medya Yönetimi
                                </a>

                                <a href="/tr/sosyal-medya-reklami/">
                                    Sosyal Medya Reklamı
                                </a>

                            </div>

                            <div class="footer-column">

                                <span class="footer-column-title">
                                    DİJİTAL
                                </span>

                                <a href="/tr/icerik-uretimi/">
                                    İçerik Üretimi
                                </a>

                                <a href="/tr/dijital-strateji/">
                                    Dijital Strateji
                                </a>

                                <a href="/tr/performans-analizi/">
                                    Performans Analizi
                                </a>

                            </div>

                        </div>

                    </div>

                    <div class="footer-bottom">

                        <p>
                            © 2026 Hancer Group. Tüm hakları saklıdır.
                        </p>

                        <div class="footer-bottom-info">

                            <span>
                                Kıbrıs
                            </span>

                            <span class="footer-bottom-dot"></span>

                            <span>
                                Digital · Social · Performance
                            </span>

                        </div>

                    </div>

                </div>
            </footer>
        `;
    }

    const menuToggle = document.getElementById("siteMenuToggle");
    const mainNavbar = document.getElementById("mainNavbar");

    if (menuToggle && mainNavbar) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNavbar.classList.toggle("is-open");

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
})();