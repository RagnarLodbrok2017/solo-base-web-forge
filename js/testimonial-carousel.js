// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.testimonial-carousel');
    
    let currentIndex = 2; // Start with the middle slide active (0-indexed)
    let isScrolling = false;
    let autoRotate;
    let animationFrame;
    
    // Initialize carousel
    updateCarousel();
    
    // Event listeners for controls
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });
    }
    
    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Optimize scroll performance
    window.addEventListener('scroll', function() {
        isScrolling = true;
        
        // If we're already waiting for an animation frame, don't request another one
        if (!animationFrame) {
            animationFrame = window.requestAnimationFrame(function() {
                // Check if carousel is in viewport before updating
                if (carousel && isElementInViewport(carousel)) {
                    startAutoRotate();
                } else {
                    stopAutoRotate();
                }
                
                isScrolling = false;
                animationFrame = null;
            });
        }
    }, { passive: true });
    
    // Start auto-rotation when page loads
    startAutoRotate();
    
    // Pause auto rotation when hovering over carousel
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            stopAutoRotate();
        });
        
        carousel.addEventListener('mouseleave', function() {
            startAutoRotate();
        });
    }
    
    // Function to start auto rotation
    function startAutoRotate() {
        if (!autoRotate) {
            autoRotate = setInterval(function() {
                if (!isScrolling) {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }
            }, 5000);
        }
    }
    
    // Function to stop auto rotation
    function stopAutoRotate() {
        if (autoRotate) {
            clearInterval(autoRotate);
            autoRotate = null;
        }
    }
    
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }
    
    // Function to update carousel state
    function updateCarousel() {
        // Don't update if we're scrolling
        if (isScrolling) return;
        
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            // Calculate position relative to current slide
            const position = (index - currentIndex + slides.length) % slides.length;
            
            // Use CSS classes instead of inline styles for better performance
            slide.classList.remove('slide-center', 'slide-left', 'slide-right', 'slide-hidden');
            
            if (position === 0) {
                // Current slide (center)
                slide.classList.add('active', 'slide-center');
            } else if (position === 1) {
                // Right side slide
                slide.classList.add('slide-right');
            } else if (position === (slides.length - 1)) {
                // Left side slide
                slide.classList.add('slide-left');
            } else {
                // Hidden slides
                slide.classList.add('slide-hidden');
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
});
