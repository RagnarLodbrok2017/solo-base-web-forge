// Navigation scroll effect with jQuery
$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').addClass('preloader-hidden');
            setTimeout(function() {
                $('#preloader').hide();
            }, 500);
        }, 2000); // Wait for 2 seconds before hiding preloader
    });

    // Trigger load event if it hasn't fired yet (for cached pages)
    setTimeout(function() {
        if (!$('#preloader').hasClass('preloader-hidden')) {
            $(window).trigger('load');
        }
    }, 2500);

    // Handle scroll effect for navigation
    function handleScroll() {
        if ($(window).scrollTop() > 20) {
            $('#navigation').addClass('scrolled');
            $('#navigation').removeClass('transparent');
        } else {
            $('#navigation').removeClass('scrolled');
            $('#navigation').addClass('transparent');
        }
    }

    // Add transparent class to navbar on page load if at top
    if ($(window).scrollTop() <= 20) {
        $('#navigation').addClass('transparent');
    }

    // Handle scroll event
    $(window).scroll(handleScroll);

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Initialize popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // Initialize scroll state
    handleScroll();

    // Animate elements when they come into view
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            var elementPosition = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();
            
            if (scrollPosition > elementPosition - windowHeight + 100) {
                $(this).addClass('visible');
            }
        });
    }

    // Run animation check on scroll
    $(window).scroll(animateOnScroll);
    
    // Run initial animation check
    animateOnScroll();
    
    // Add smooth scrolling to all links
    $('a[href*="#"]').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Animate elements when they come into view
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
