function createParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position around the title
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            container.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }, i * 100);
    }
}
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Reveal animation on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));
// Hero particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}
createParticles();
// Projects filter functionality
const filterButtons = document.querySelectorAll('.btn-filter');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('btn-glow');
            btn.classList.add('btn-outline-custom');
            btn.classList.remove('active');
        });
        this.classList.add('btn-glow');
        this.classList.remove('btn-outline-custom');
        this.classList.add('active');
        // Filter projects
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
// Mobile menu handling
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
document.addEventListener('click', function(e) {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        navbarCollapse.classList.remove('show');
    }
});
// Add click handlers for nav links to close mobile menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
    });
});
// Initialize all reveal elements on page load
setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 100);
    });
}, 500);
function init() {
    createParticles();            
    // Recreate particles periodically
    setInterval(createParticles, 8000);
}
document.addEventListener('DOMContentLoaded', init);

console.log('ARC#6014 website loaded successfully! 🤖');