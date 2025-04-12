// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initMovingText();
    initSectionAnimations();
    initNavbarScroll();
    initMobileMenu();
    initTypingAnimation();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const crossIcon = document.querySelector('.cross-icon');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            
            // Toggle menu state
            mobileMenu.classList.toggle('active');
            
            // Animate icons
            if (isActive) {
                // Menu is closing
                hamburgerIcon.style.transform = 'scale(1)';
                crossIcon.style.transform = 'scale(0)';
            } else {
                // Menu is opening
                hamburgerIcon.style.transform = 'scale(0)';
                crossIcon.style.transform = 'scale(1)';
            }
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.remove('active');
                // Reset icons
                hamburgerIcon.style.transform = 'scale(1)';
                crossIcon.style.transform = 'scale(0)';
            }
        });
    }
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add background when scrolling down
        if (currentScroll > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Moving Text Animation
function initMovingText() {
    const movingText1 = document.querySelector('.moving-text-1');
    const movingText2 = document.querySelector('.moving-text-2');

    // Animation for first line
    gsap.to(movingText1, {
        x: '-50%',
        duration: 30,
        repeat: -1,
        ease: 'none',
        paused: false
    });

    // Animation for second line
    gsap.to(movingText2, {
        x: '50%',
        duration: 30,
        repeat: -1,
        ease: 'none',
        paused: false
    });

    // Pause on hover
    const containers = document.querySelectorAll('.moving-text-container');
    containers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            gsap.to([movingText1, movingText2], {
                timeScale: 0,
                duration: 0.5
            });
        });

        container.addEventListener('mouseleave', () => {
            gsap.to([movingText1, movingText2], {
                timeScale: 1,
                duration: 0.5
            });
        });
    });
}

// Initialize typing animation
function initTypingAnimation() {
    const text = "Muhammad Ramzan";
    const typingText = document.querySelector('.typing-text');
    
    function typeWriter() {
        let i = 0;
        typingText.textContent = ''; // Clear the text initially
        
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                // Add a small delay before starting again
                setTimeout(typeWriter, 1000);
            }
        }, 100); // Adjust speed by changing the interval (lower = faster)
    }
    
    // Start the typing animation
    typeWriter();
}

// Hero Section Animations
function initHeroAnimations() {
    // Set initial states
    gsap.set('.animate-hero-title, .animate-hero-name, .animate-hero-subtitle, .animate-hero-description, .animate-hero-buttons, .animate-hero-social', {
        opacity: 0,
        y: 50
    });

    gsap.set('.animate-hero-image', {
        opacity: 0,
        x: 100
    });

    // Create timeline for hero animations
    const heroTimeline = gsap.timeline();
    heroTimeline
        .to('.animate-hero-image', {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out'
        })
        .to('.animate-hero-title', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.animate-hero-name', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.animate-hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.animate-hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.animate-hero-buttons', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        .to('.animate-hero-social', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
}

// Section Animations
function initSectionAnimations() {
    // Set initial states for all sections
    gsap.set('.section-title, .project-card, .moving-text-container', {
        opacity: 0,
        y: 50
    });

    // Create ScrollTrigger for section title
    gsap.to('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Create ScrollTrigger for project cards
    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Create ScrollTrigger for moving text containers
    gsap.to('.moving-text-container', {
        scrollTrigger: {
            trigger: '.moving-text-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
} 