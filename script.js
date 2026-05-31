document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.main-nav a, .logo, .btn');
    const siteHeader = document.querySelector('.site-header');
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.menu-toggle');

    // Закрытие мобильного меню
    function closeMobileMenu() {
        if (mainNav) mainNav.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Плавная прокрутка
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
                    const currentScroll = window.scrollY || window.pageYOffset;
                    const targetPosition = target.getBoundingClientRect().top + currentScroll - headerHeight;

                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    closeMobileMenu();
                }
            }
        });
    });

    // Мобильное меню
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.addEventListener('click', function (e) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        document.addEventListener('keydown', function (e) {
            if ((e.key === 'Escape' || e.keyCode === 27) && mainNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // Активный пункт меню при скролле (с throttle)
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.main-nav a');

    function updateActiveNavItem() {
        const currentScroll = (window.scrollY || window.pageYOffset) + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });

        if ((window.scrollY || window.pageYOffset) < 100) {
            navItems.forEach(item => item.classList.remove('active'));
            const homeLink = document.querySelector('.main-nav a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(function () {
            updateActiveNavItem();
            scrollTimeout = null;
        }, 50);
    }, { passive: true });

    updateActiveNavItem();
});
