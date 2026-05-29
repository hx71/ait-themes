// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
}

// Dark Mode Logic
const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    updateIcons('dark');
} else {
    html.classList.remove('dark');
    updateIcons('light');
}

function updateIcons(theme) {
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    const mobileIcons = document.querySelectorAll('.theme-icon-mobile');

    if (theme === 'dark') {
        if (iconDark) iconDark.classList.remove('hidden');
        if (iconLight) iconLight.classList.add('hidden');
        mobileIcons.forEach(icon => { icon.setAttribute('data-lucide', 'moon'); });
    } else {
        if (iconDark) iconDark.classList.add('hidden');
        if (iconLight) iconLight.classList.remove('hidden');
        mobileIcons.forEach(icon => { icon.setAttribute('data-lucide', 'sun'); });
    }
    lucide.createIcons();
}

function toggleTheme() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        updateIcons('light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        updateIcons('dark');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
if (themeToggleMobileBtn) {
    themeToggleMobileBtn.addEventListener('click', toggleTheme);
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) { navbar.classList.add('shadow-sm'); } 
        else { navbar.classList.remove('shadow-sm'); }
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => { revealObserver.observe(el); });

// Set Active Navigation Link
function setActiveNavLink() {
    // Ambil nama file dari URL saat ini (misal: 'about.html')
    // Jika kosong (hanya '/'), asumsikan 'index.html'
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Ambil semua link dari menu desktop dan mobile
    const navLinks = document.querySelectorAll('#navbar a, #mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPath) {
            // Efek aktif untuk menu Desktop
            if (link.classList.contains('text-slate-600')) {
                link.classList.remove('text-slate-600', 'dark:text-slate-300', 'font-medium');
                link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-bold');
            }
            // Efek aktif untuk menu Mobile
            else if (link.classList.contains('text-slate-700')) {
                link.classList.remove('text-slate-700', 'dark:text-slate-200', 'font-medium');
                link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-bold', 'bg-blue-50', 'dark:bg-slate-800');
            }
        }
    });
}

// Panggil fungsi saat script dimuat
setActiveNavLink();