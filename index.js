// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements that will be animated on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const sectionHeaders = document.querySelectorAll('.section-header');
    const categoryCards = document.querySelectorAll('.category-card');
    const detailCards = document.querySelectorAll('.detail-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const heroContent = document.querySelector('.hero-content');
    const aboutContent = document.querySelector('.about-content');
    const nominationContent = document.querySelector('.nomination-content');
    const ctaContent = document.querySelector('.cta-content');
    
    // Animation options
    const observerOptions = {
        root: null, // viewport is the root
        rootMargin: '0px',
        threshold: 0.2 // trigger when 20% of the item is visible
    };
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.classList.add('animate');
                // Stop observing after animation is applied
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing all elements
    fadeElements.forEach(element => observer.observe(element));
    sectionHeaders.forEach(element => observer.observe(element));
    categoryCards.forEach(element => observer.observe(element));
    detailCards.forEach(element => observer.observe(element));
    timelineItems.forEach(element => observer.observe(element));
    
    // Observe specific content sections
    if (heroContent) observer.observe(heroContent);
    if (aboutContent) observer.observe(aboutContent);
    if (nominationContent) observer.observe(nominationContent);
    if (ctaContent) observer.observe(ctaContent);
    
    // Award category hover effects with subtle bounce
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
    
    // Animate trophy icons
    const trophyIcons = document.querySelectorAll('.fas.fa-trophy');
    trophyIcons.forEach(icon => {
        icon.classList.add('trophy-icon');
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
        });
    }
    
    // Header scroll effect - change style when scrolling down
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Add staggered delay to category cards
    categoryCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered delay to timeline items
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Button hover animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('btn-hover');
        });
        
        button.addEventListener('mouseleave', () => {
            button.classList.remove('btn-hover');
        });
    });
    
    // Add floating animation to star icons
    const starIcons = document.querySelectorAll('.star-icon');
    starIcons.forEach(star => {
        star.classList.add('floating');
    });

    // Counter animation for numbers (you can add data-count attributes to elements you want to animate)
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        observer.observe(counter);
        counter.addEventListener('animationstart', () => {
            const target = parseInt(counter.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // 2 seconds
            const interval = Math.floor(duration / target);
            
            const timer = setInterval(() => {
                count++;
                counter.textContent = count;
                
                if (count >= target) {
                    clearInterval(timer);
                }
            }, interval);
        });
    });
    
    // Reveal animation for timeline connection lines
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        observer.observe(timelineContainer);
        timelineContainer.addEventListener('animationstart', () => {
            timelineContainer.classList.add('connect-lines');
        });
    }
    
    // Text reveal animation for main headings
    const mainHeadings = document.querySelectorAll('h1, h2');
    mainHeadings.forEach(heading => {
        if (!heading.classList.contains('animate-text')) {
            heading.classList.add('animate-text');
            observer.observe(heading);
        }
    });
});