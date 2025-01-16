// assets/js/signature-cycle.js
const images = [
    '/assets/images/sign.gif',
    '/assets/images/sign3.gif',
    // '/assets/images/sign4.gif'
];

let currentImageIndex = 1;
const imageElement = document.getElementById('cycle-image-sign')

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

setInterval(changeImage, 5000);