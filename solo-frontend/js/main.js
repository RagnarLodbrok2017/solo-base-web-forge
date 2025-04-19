// Navigation scroll effect with jQuery
$(document).ready(function() {
    // Add preloader-active class to body
    $('body').addClass('preloader-active');
    
    // Initialize preloader animations immediately
    initPreloaderAnimations();
    
    // Preloader - hide after shorter time
    setTimeout(function() {
        $('#preloader').addClass('preloader-hidden');
        $('body').removeClass('preloader-active');
        setTimeout(function() {
            $('#preloader').hide();
        }, 500);
    }, 3000); // Reduced from 5000 to 3000 ms
    
    // Function to initialize preloader animations
    function initPreloaderAnimations() {
        // Typewriter effect
        const text = "SOLID BASE CONSTRUCTION & DEVELOPMENT";
        const typewriterElement = document.querySelector('.typewriter-text');
        
        // Clear any existing text and make sure element exists
        if (typewriterElement) {
            typewriterElement.innerHTML = '';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    typewriterElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50); // Faster typing (50ms instead of 100ms)
                }
            }
            
            // Start typewriter effect immediately
            typeWriter();
        }
        
        // Architecture canvas animation
        const canvas = document.getElementById('architectureCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            
            // Building properties
            const buildings = [];
            const buildingCount = 5;
            const buildingWidth = 40;
            const maxHeight = 150;
            const spacing = 20;
            
            // Initialize buildings
            for (let i = 0; i < buildingCount; i++) {
                buildings.push({
                    x: i * (buildingWidth + spacing) + 30,
                    y: canvas.height,
                    width: buildingWidth,
                    targetHeight: Math.random() * (maxHeight - 50) + 50,
                    currentHeight: 0,
                    speed: Math.random() * 1.5 + 1, // Even faster speed
                    color: i === 2 ? '#ca8c56' : '#293547' // Middle building is gold
                });
            }
            
            // Animation function
            function animateBuildings() {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw and update buildings
                let allComplete = true;
                
                buildings.forEach(building => {
                    // Update height
                    if (building.currentHeight < building.targetHeight) {
                        building.currentHeight += building.speed;
                        allComplete = false;
                    } else {
                        building.currentHeight = building.targetHeight; // Ensure it stops exactly at target
                    }
                    
                    // Draw building
                    ctx.fillStyle = building.color;
                    ctx.fillRect(
                        building.x, 
                        canvas.height - building.currentHeight, 
                        building.width, 
                        building.currentHeight
                    );
                    
                    // Draw windows
                    ctx.fillStyle = '#FDF9F2';
                    const windowSize = 5;
                    const windowSpacing = 10;
                    const windowsPerRow = Math.floor(building.width / (windowSize + windowSpacing));
                    
                    for (let row = 0; row < Math.floor(building.currentHeight / 15); row++) {
                        for (let col = 0; col < windowsPerRow; col++) {
                            if (Math.random() > 0.3) { // Some windows are dark
                                ctx.fillRect(
                                    building.x + col * (windowSize + windowSpacing) + windowSpacing,
                                    canvas.height - building.currentHeight + row * 15 + 5,
                                    windowSize,
                                    windowSize
                                );
                            }
                        }
                    }
                });
                
                // Continue animation if not all buildings are complete
                if (!allComplete) {
                    requestAnimationFrame(animateBuildings);
                }
            }
            
            // Start animation immediately
            animateBuildings();
        }
    }

    // Hero Slideshow
    function initHeroSlideshow() {
        const images = $('.hero-image');
        let currentIndex = 0;
        
        // Show the first image initially
        $(images[currentIndex]).addClass('active');
        
        // Change image every 2 seconds
        setInterval(function() {
            // Hide current image
            $(images[currentIndex]).removeClass('active');
            
            // Move to next image or back to first
            currentIndex = (currentIndex + 1) % images.length;
            
            // Show new image
            $(images[currentIndex]).addClass('active');
        }, 5000);
    }
    
    // Initialize hero slideshow
    initHeroSlideshow();

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
