// Initialize SmoothScroll
document.addEventListener('DOMContentLoaded', function() {
    // Initialize SmoothScroll with custom options
    SmoothScroll({
        // Scrolling Core
        frameRate: 150, // [Hz]
        animationTime: 800, // [ms] - Increased for smoother effect
        stepSize: 80, // [px]

        // Pulse (less tweakable)
        pulseAlgorithm: true,
        pulseScale: 8, // Increased for more pronounced smooth effect
        pulseNormalize: 1,

        // Acceleration
        accelerationDelta: 20,
        accelerationMax: 2,

        // Keyboard Settings
        keyboardSupport: true,
        arrowScroll: 50, // [px]

        // Other
        touchpadSupport: true,
        fixedBackground: true
    });

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get the target's position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // ms
                let start = null;
                
                // Smooth scroll animation
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                // Easing function
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
});
