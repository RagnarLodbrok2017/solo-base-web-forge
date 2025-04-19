// Disable all links and buttons except for Home page
document.addEventListener('DOMContentLoaded', function() {
    // Get all links and buttons
    const allLinks = document.querySelectorAll('a');
    const allButtons = document.querySelectorAll('button:not([type="submit"])');
    
    // Process all links
    allLinks.forEach(link => {
        // Skip home page links
        if (link.href.includes('index.html') || link.href.endsWith('/') || link.classList.contains('navbar-brand')) {
            // Keep home links active
            return;
        }
        
        // Add disabled styling
        link.classList.add('disabled-link');
        
        // Prevent default behavior
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Optional: Show a message that only the home page is active
            const message = document.createElement('div');
            message.className = 'temporary-message';
            message.textContent = 'Only the home page is currently active';
            document.body.appendChild(message);
            
            // Remove the message after 2 seconds
            setTimeout(() => {
                message.classList.add('fade-out');
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 500);
            }, 2000);
        });
    });
    
    // Process all buttons
    allButtons.forEach(button => {
        // Skip navigation toggle button
        if (button.classList.contains('navbar-toggler')) {
            return;
        }
        
        // Add disabled styling
        button.classList.add('disabled-button');
        
        // Prevent default behavior
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Optional: Show a message that only the home page is active
            const message = document.createElement('div');
            message.className = 'temporary-message';
            message.textContent = 'Only the home page is currently active';
            document.body.appendChild(message);
            
            // Remove the message after 2 seconds
            setTimeout(() => {
                message.classList.add('fade-out');
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 500);
            }, 2000);
        });
    });
});
