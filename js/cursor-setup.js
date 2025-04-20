// Function to create a custom cursor
document.addEventListener('DOMContentLoaded', function() {
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Track mouse movement across the entire page
    document.addEventListener('mousemove', function(e) {
        cursor.style.display = 'block';
        
        // Add a slight delay for a smoother following effect
        setTimeout(function() {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }, 10);
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderColor = 'var(--color-gold)';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = 'rgba(0, 0, 0, 0.5)';
        });
    });
    
    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        cursor.style.display = 'none';
    });
    
    // Show cursor when mouse enters the window
    document.addEventListener('mouseenter', function() {
        cursor.style.display = 'block';
    });
});
