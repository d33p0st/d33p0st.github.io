document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(tooltip => {
        const content = tooltip.getAttribute('content');
        const tooltipContent = document.createElement('div');
        tooltipContent.className = 'tooltip-content';
        let speed = tooltip.getAttribute('speed');

        if (speed === null) {
            speed = 10;
        } else {
            speed = Number(speed)
        }
        
        // Create a hidden element to measure the full text width
        const measureElement = document.createElement('div');
        measureElement.className = 'tooltip-content';
        measureElement.style.visibility = 'hidden';
        measureElement.style.position = 'absolute';
        measureElement.textContent = content;
        document.body.appendChild(measureElement);
        
        // Set the width of the tooltip content to match the full text
        const textColor = tooltip.getAttribute('tcolor') || "#000000";
        tooltipContent.style.color = textColor;
        tooltipContent.style.width = measureElement.offsetWidth + 'px';
        document.body.removeChild(measureElement);
        
        tooltip.appendChild(tooltipContent);
        
        let typingTimeout;
        let currentTimeout;
        
        tooltip.addEventListener('mouseenter', () => {
            if (currentTimeout) clearTimeout(currentTimeout);
            if (typingTimeout) clearTimeout(typingTimeout);
            
            tooltipContent.textContent = '';
            tooltipContent.classList.add('active');
            
            let i = 0;
            function typeWriter() {
                if (i < content.length) {
                    tooltipContent.textContent += content.charAt(i);
                    i++;
                    typingTimeout = setTimeout(typeWriter, speed); // speed
                }
            }
            
            typeWriter();
        });
        
        tooltip.addEventListener('mouseleave', () => {
            if (typingTimeout) clearTimeout(typingTimeout);
            tooltipContent.classList.remove('active');
            
            currentTimeout = setTimeout(() => {
                tooltipContent.textContent = '';
            }, 300); //timeout
        });
    });
});

