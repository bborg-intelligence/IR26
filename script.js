// Smooth scroll behavior
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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 26, 51, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 168, 255, 0.3)';
    } else {
        header.style.backgroundColor = 'rgba(0, 26, 51, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 168, 255, 0.2)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.benefit-card, .audience-card, .ecosystem-item, .combo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// WhatsApp link handler
function openWhatsApp(message = '') {
    const phoneNumber = '5511945689816';
    const text = message || 'Olá Manus_io! Gostaria de saber mais sobre o pacote IR26 Blindado';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Track button clicks for analytics
document.querySelectorAll('.btn-primary, .btn-payment, .contact-btn, .social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent);
        // You can add analytics tracking here
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    console.log('BBORG Intelligence site loaded successfully');
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Create WhatsApp message with form data
            const whatsappMessage = `*Novo Contato do Site BBORG Intelligence*\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
            
            // Send to WhatsApp
            const phoneNumber = '5511945689816';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Open WhatsApp
            window.open(url, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Mensagem enviada! Você será redirecionado para o WhatsApp.');
        });
    }
});

// Parallax effect on hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Add animation to price highlights
document.addEventListener('DOMContentLoaded', function() {
    const priceHighlights = document.querySelectorAll('.price-highlight');
    priceHighlights.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.9)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
