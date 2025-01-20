
const nameLogos = [
    '/assets/images/name-dark.gif',
    '/assets/images/name-light.gif',
];

const preloadedNameLogos = nameLogos.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function homepageSpecific(str) {
    if (typeof str !== "string") {
        throw new TypeError("str param must be a string.");
    }

    const nameImageElement = document.getElementById('homepage-name-pic');

    if (str === "added") {
        if (nameImageElement !== null) {
            nameImageElement.src = preloadedNameLogos[0].src; // dark image is at index 0
        }
    }  else {
        if (nameImageElement !== null) {
            nameImageElement.src = preloadedNameLogos[1].src; // light image is at index 1
        }
    }
}
