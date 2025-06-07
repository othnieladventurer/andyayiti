tailwind.config = {
    theme: {
        extend: {
            colors: {
                'charcoal': '#171717',
                'mono-500': '#444444',
                'mono-400': '#777777',
                'mono-300': '#999999',
                'mono-200': '#D0D0D0',
                'mono-100': '#F5F5F5',
                'mono-50': '#F8F8F8',
                'accent-light': '#E0E0E0',
                'accent-dark': '#222222'
            },
            height: {
                'screen-90': '90vh',
            }
        }
    }
}




// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    const icon = this.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 7000);
    
    // Button controls
    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 7000);
    });
    
    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 7000);
    });
    
    // Initialize first slide
    showSlide(currentSlide);
    
    // Video Play Button
    const videoButtons = document.querySelectorAll('.play-icon').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Video playback would start here. This is a placeholder functionality.');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 90,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll animation effect for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.post-card, .video-thumb, .category-card, .gallery-item').forEach(card => {
        card.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(card);
    });
});