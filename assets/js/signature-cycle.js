// assets/js/signature-cycle.js
const images = [
    '/assets/images/sign.gif',
    '/assets/images/sign3.gif',
    // '/assets/images/sign4.gif'
];

// preload the images
const preloadedImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
})

let currentImageIndex = 1;

function changeImage() {


    let imageElement = document.getElementById('cycle-image-sign')

    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = preloadedImages[currentImageIndex].src;
}

setInterval(changeImage, 5000);