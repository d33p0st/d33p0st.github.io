function darkSwitch() {
    // time
    const now = new Date();
    const hour = now.getHours();

    
    const body = document.body;
    // home page specific
    const nameImageElement = document.getElementById('homepage-name-pic')
    // page specific
    const tooltips = document.querySelectorAll('.tooltip')

    if (hour >= 19 || hour < 7) {
        // dark mode
        body.classList.add('dark-mode');
        if (nameImageElement !== null) {
            nameImageElement.src = '/assets/images/name-dark.gif';
        }
    } else {
        body.classList.remove('dark-mode');
        if (nameImageElement !== null) {
            nameImageElement.src = '/assets/images/name-light.gif';
        }
    }

}

darkSwitch();
setInterval(darkSwitch, 60000);