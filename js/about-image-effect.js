// Interactive about image effect with enhanced dynamics
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const aboutImage = document.querySelector('.about-image');
    const aboutImageCol = document.querySelector('.about-image-col');
    
    if (!aboutSection || !aboutImage) return;
    
    // Add interactive class
    aboutImage.classList.add('about-image-interactive');
    
    // Configuration for dynamic effects
    const config = {
        baseScale: 1.05,
        maxExtraScale: 0.1,      // Additional scale on interaction
        movementIntensity: 20,   // Increased from 20 to 40
        rotationIntensity: 2,    // Degrees of rotation
        perspective: 1000,       // 3D perspective
        transitionSpeed: 0.2     // Seconds for transition
    };
    
    // Apply initial perspective to container
    aboutImageCol.style.perspective = `${config.perspective}px`;
    
    // Variables for smooth animation
    let currentX = 0;
    let currentY = 0;
    let currentScale = config.baseScale;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let animationFrameId = null;
    
    // Animation function for smooth transitions
    function animateImage() {
        // Apply transforms with easing
        aboutImage.style.transform = `
            scale(${currentScale}) 
            translate(${currentX}px, ${currentY}px) 
            rotateX(${currentRotateX}deg) 
            rotateY(${currentRotateY}deg)
        `;
        
        animationFrameId = null;
    }
    
    // Schedule animation frame for smooth updates
    function scheduleAnimation() {
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(animateImage);
        }
    }
    
    // Update image transform values with easing
    function updateImageTransform(targetX, targetY, targetScale, targetRotateX, targetRotateY) {
        // Easing factor (lower = smoother but slower)
        const ease = 0.15;
        
        // Apply easing to all properties
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        currentScale += (targetScale - currentScale) * ease;
        currentRotateX += (targetRotateX - currentRotateX) * ease;
        currentRotateY += (targetRotateY - currentRotateY) * ease;
        
        scheduleAnimation();
    }
    
    // Track mouse movement over the about section
    aboutSection.addEventListener('mousemove', function(e) {
        // Get position of the cursor relative to the section
        const rect = aboutSection.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Convert to percentages (-1 to 1 range, centered at middle)
        const xPercent = (mouseX / rect.width) * 2 - 1;
        const yPercent = (mouseY / rect.height) * 2 - 1;
        
        // Calculate movement (opposite to cursor direction)
        const moveX = -xPercent * config.movementIntensity;
        const moveY = -yPercent * config.movementIntensity;
        
        // Calculate rotation (follows cursor direction)
        const rotateY = xPercent * config.rotationIntensity;
        const rotateX = -yPercent * config.rotationIntensity;
        
        // Calculate dynamic scale based on cursor position
        // Scale more when cursor is near the center
        const distanceFromCenter = Math.sqrt(xPercent * xPercent + yPercent * yPercent);
        const normalizedDistance = Math.min(1, distanceFromCenter);
        const dynamicScale = config.baseScale + config.maxExtraScale * (1 - normalizedDistance);
        
        // Update transform with easing
        updateImageTransform(moveX, moveY, dynamicScale, rotateX, rotateY);
    });
    
    // Reset transform when mouse leaves the section
    aboutSection.addEventListener('mouseleave', function() {
        // Smoothly animate back to default state
        const resetInterval = setInterval(() => {
            updateImageTransform(0, 0, config.baseScale, 0, 0);
            
            // Check if we're close enough to stop the animation
            if (
                Math.abs(currentX) < 0.1 && 
                Math.abs(currentY) < 0.1 && 
                Math.abs(currentScale - config.baseScale) < 0.001 &&
                Math.abs(currentRotateX) < 0.1 &&
                Math.abs(currentRotateY) < 0.1
            ) {
                clearInterval(resetInterval);
                currentX = 0;
                currentY = 0;
                currentScale = config.baseScale;
                currentRotateX = 0;
                currentRotateY = 0;
                scheduleAnimation();
            }
        }, 60); // ~60fps
    });
});
