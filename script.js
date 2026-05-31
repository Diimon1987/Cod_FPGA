// ==================== ПЛАВНАЯ ПРОКРУТКА ====================
// На случай, если CSS scroll-behavior не поддерживается
document.addEventListener('DOMContentLoaded', function () {
    // Находим все якорные ссылки в навигации
    const navLinks = document.querySelectorAll('.main-nav a, .logo, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Обрабатываем только якорные ссылки (#section)
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Плавная прокрутка
                    });
                    // Закрываем мобильное меню, если оно открыто
                    document.querySelector('.main-nav').classList.remove('active');
                }
            }
        });
    });

    // ==================== МОБИЛЬНОЕ МЕНЮ ====================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });

        // Закрытие меню при клике вне его
        document.addEventListener('click', function (e) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
            }
        });
    }

    // ==================== АКТИВНЫЙ ПУНКТ МЕНЮ ПРИ ПРОКРУТКЕ ====================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
});