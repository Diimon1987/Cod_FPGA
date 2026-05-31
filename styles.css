/* ==================== CSS-ПЕРЕМЕННЫЕ ==================== */
:root {
    --color-bg:          #fafaf7;
    --color-bg-alt:      #f4f1ea;
    --color-text:        #333333;
    --color-text-muted:  #666666;
    --color-accent:      #2c3e50;
    --color-accent-hover:#1a252f;
    --color-border:      #e0ddd4;

    --font-heading: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    --font-body:    'Source Sans Pro', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

    --container-max: 1100px;
    --radius: 12px;
    --shadow: 0 4px 20px rgba(44, 62, 80, 0.08);
    --transition: all 0.3s ease;
}

/* ==================== СБРОС И БАЗА ==================== */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html { scroll-behavior: smooth; }

body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-bg);
    line-height: 1.7;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
}

body.menu-open { overflow: hidden; }

.container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 20px;
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: var(--transition);
}
a:hover { color: var(--color-accent-hover); }

ul { list-style: none; }
img { max-width: 100%; display: block; }
.accent { color: var(--color-accent); font-weight: 700; }

/* ==================== ШАПКА ==================== */
.site-header {
    background-color: rgba(250, 250, 247, 0.95);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-accent);
    font-weight: 700;
    font-size: 1.2rem;
}
.logo-icon { color: var(--color-accent); }
.logo-text { font-family: var(--font-heading); letter-spacing: 0.5px; }

.main-nav ul { display: flex; gap: 32px; }

.main-nav a {
    color: var(--color-text);
    font-weight: 500;
    position: relative;
    padding: 4px 0;
}

.main-nav a::after {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 0; height: 2px;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
}
.main-nav a:hover::after { width: 100%; }

/* Активный пункт меню */
.main-nav a.active {
    color: var(--color-accent);
    font-weight: 700;
}
.main-nav a.active::after { width: 100%; }

/* Гамбургер */
.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    -webkit-tap-highlight-color: transparent;
}
.menu-toggle span {
    width: 24px; height: 2px;
    background-color: var(--color-accent);
    transition: var(--transition);
    transform-origin: center;
}

/* Анимация крестика */
.menu-toggle.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ==================== HERO ==================== */
.hero {
    padding: 120px 0 100px;
    background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
    text-align: center;
}
.hero-content { max-width: 720px; margin: 0 auto; }

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--color-accent);
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-text-muted);
    margin-bottom: 36px;
}
.hero-subtitle strong { color: var(--color-accent); font-weight: 600; }

/* ==================== КНОПКИ ==================== */
.btn {
    display: inline-block;
    padding: 14px 32px;
    border-radius: var(--radius);
    font-weight: 600;
    font-family: var(--font-heading);
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    -webkit-tap-highlight-color: transparent;
}
.btn-primary {
    background-color: var(--color-accent);
    color: #ffffff;
}
.btn-primary:hover {
    background-color: var(--color-accent-hover);
    color: #ffffff;
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(44, 62, 80, 0.25);
}

/* ==================== СЕКЦИИ ==================== */
.section { padding: 80px 0; }
.section-alt { background-color: var(--color-bg-alt); }

.section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: 16px;
    color: var(--color-accent);
}
.section-subtitle {
    text-align: center;
    color: var(--color-text-muted);
    margin-bottom: 48px;
    font-size: 1.1rem;
}

/* О себе */
.about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-top: 48px;
}
.about-card {
    background-color: #ffffff;
    padding: 32px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid var(--color-border);
    transition: var(--transition);
}
.about-card:hover {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(44, 62, 80, 0.12);
}
.about-card h3 {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    margin-bottom: 16px;
    color: var(--color-accent);
}

.skills-list li {
    padding: 8px 0 8px 24px;
    position: relative;
    border-bottom: 1px dashed var(--color-border);
}
.skills-list li:last-child { border-bottom: none; }
.skills-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
}

/* Проекты */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
    margin-top: 48px;
}
.project-card {
    background-color: #ffffff;
    padding: 32px 24px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid var(--color-border);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
}
.project-card:hover {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(44, 62, 80, 0.15);
}
.project-icon { font-size: 2.5rem; margin-bottom: 12px; }
.project-card h3 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--color-accent);
    margin-bottom: 12px;
}
.project-goal, .project-tech {
    color: var(--color-text-muted);
    margin-bottom: 14px;
    font-size: 0.95rem;
}
.project-link {
    margin-top: auto;
    font-weight: 600;
    color: var(--color-accent);
}
.project-link:hover { text-decoration: underline; }

/* Контакты */
.contacts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    margin-top: 48px;
}
.contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: #ffffff;
    padding: 20px 24px;
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow);
    transition: var(--transition);
    color: var(--color-text);
    -webkit-tap-highlight-color: transparent;
}
.contact-item:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(44, 62, 80, 0.12);
    color: var(--color-accent);
}
.contact-icon { font-size: 1.8rem; flex-shrink: 0; }
.contact-item h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-text-muted);
    font-weight: 500;
    margin-bottom: 4px;
}
.contact-item p {
    font-weight: 600;
    font-size: 0.95rem;
    word-break: break-word;
}

/* Футер */
.site-footer {
    background-color: var(--color-accent);
    color: #ffffff;
    padding: 32px 0;
    margin-top: 60px;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.footer-left { display: flex; align-items: center; gap: 14px; }
.cpp-icon { color: #ffffff; }
.footer-tagline { font-style: italic; font-size: 0.95rem; opacity: 0.95; }
.copyright { font-size: 0.9rem; opacity: 0.85; }

/* ==================== АДАПТИВНОСТЬ ==================== */
@media (max-width: 768px) {
    .section { padding: 60px 0; }
    .hero { padding: 80px 0 60px; }
    .about-grid { grid-template-columns: 1fr; }

    .main-nav {
        position: absolute;
        top: 70px; left: 0; right: 0;
        background-color: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        -webkit-box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
    .main-nav.active { max-height: 300px; }
    .main-nav ul { flex-direction: column; gap: 0; padding: 10px 20px; }
    .main-nav li { border-bottom: 1px solid var(--color-border); }
    .main-nav li:last-child { border-bottom: none; }
    .main-nav a { display: block; padding: 14px 0; }
    .menu-toggle { display: flex; }
    .footer-content { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
    body { font-size: 15px; }
    .hero-title { font-size: 1.8rem; }
    .section-title { font-size: 1.6rem; }
    .btn { padding: 12px 24px; }
    .about-card, .project-card { padding: 24px 18px; }
}

@media (prefers-reduced-motion: reduce) {
    * { transition: none !important; animation: none !important; }
    html { scroll-behavior: auto; }
}
