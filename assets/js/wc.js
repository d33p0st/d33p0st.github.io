document.addEventListener('DOMContentLoaded', function() {
    const wordCloudContainer = document.querySelector('.word-cloud');
    const links = document.querySelectorAll('.word-cloud a');
    
    const centerX = wordCloudContainer.offsetWidth / 2;
    const centerY = wordCloudContainer.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8;  // Radius of the circle

    links.forEach(link => {
        // Randomly assign weight between 1 and 3 (most weights are smaller)
        const weight = Math.floor(Math.random() * 3) + 1; // Random weight between 1 and 3
        link.setAttribute('data-weight', weight); // Set the randomly generated weight as the data attribute

        const fontSize = Math.min(30, Math.max(10, weight * 10)); // Adjust this logic to scale font size
        link.style.fontSize = fontSize + 'px';

        // Random position within the circle
        const angle = Math.random() * 2 * Math.PI;  // Random angle in radians
        const x = centerX + radius * Math.cos(angle) - link.offsetWidth / 2;  // X position
        const y = centerY + radius * Math.sin(angle) - link.offsetHeight / 2;  // Y position

        link.style.left = x + 'px';
        link.style.top = y + 'px';

        // Now, check the link's position relative to the container and update the "position" attribute.
        const linkCenterX = x + link.offsetWidth / 2;  // Get the horizontal center of the link

        if (linkCenterX < centerX) {
            // Link is on the left half of the container
            link.setAttribute('position', 'right-side');
        } else {
            // Link is on the right half of the container
            link.setAttribute('position', 'left-side');
        }
    });
});