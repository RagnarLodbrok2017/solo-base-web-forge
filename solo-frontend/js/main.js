// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.getElementById('navigation');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Handle scroll effect for navigation
    function handleScroll() {
        if (window.scrollY > 20) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle menu icon between hamburger and X
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Initialize scroll state
    handleScroll();

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-up');
            }
        });
    };

    // Add animation class to elements that should animate on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const headings = section.querySelectorAll('h2, h3');
        const paragraphs = section.querySelectorAll('p');
        const buttons = section.querySelectorAll('a.inline-block');
        const cards = section.querySelectorAll('.grid > div');
        
        headings.forEach(el => el.classList.add('animate-on-scroll'));
        paragraphs.forEach(el => el.classList.add('animate-on-scroll'));
        buttons.forEach(el => el.classList.add('animate-on-scroll'));
        cards.forEach(el => el.classList.add('animate-on-scroll'));
    });

    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Testimonial carousel (if needed)
    // This is a placeholder for adding a testimonial carousel functionality
    // You can implement a simple carousel using JavaScript if required
});
