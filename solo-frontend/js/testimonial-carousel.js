// Testimonial Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 2; // Start with the middle slide active (0-indexed)
    
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
    
    // Auto rotate carousel
    let autoRotate = setInterval(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);
    
    // Pause auto rotation when hovering over carousel
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            clearInterval(autoRotate);
        });
        
        carousel.addEventListener('mouseleave', function() {
            autoRotate = setInterval(function() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateCarousel();
            }, 5000);
        });
    }
    
    // Function to update carousel state
    function updateCarousel() {
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            // Calculate position relative to current slide
            const position = (index - currentIndex + slides.length) % slides.length;
            
            // Reset all transforms
            slide.style.transform = '';
            slide.style.opacity = '';
            slide.style.zIndex = '';
            
            if (position === 0) {
                // Current slide (center)
                slide.classList.add('active');
                slide.style.transform = 'scale(1.1)';
                slide.style.opacity = '1';
                slide.style.zIndex = '10';
                slide.style.filter = 'blur(0)';
            } else if (position === 1 || position === (slides.length - 1)) {
                // Side slides
                const direction = position === 1 ? 110 : -110;
                slide.style.transform = `translateX(${direction}%) scale(0.8)`;
                slide.style.opacity = '0.7';
                slide.style.zIndex = '5';
                slide.style.filter = 'blur(1px)';
            } else {
                // Hidden slides
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
});
