const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

let lastScrollTop = 0;
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si bajas más de 50px, contrae el menú
    if (scrollTop > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Opcional: Si el usuario sube un poco, volver a mostrarlo inmediatamente
    if (scrollTop < lastScrollTop) {
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// EXTRA: Si el menú está contraído y le pican al logo, que aparezca
document.querySelector('.nav-logo').addEventListener('click', () => {
    nav.classList.toggle('scrolled');
});