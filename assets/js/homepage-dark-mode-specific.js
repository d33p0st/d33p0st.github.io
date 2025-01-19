function homepageSpecific(str) {
    if (typeof str !== "string") {
        throw new TypeError("str param must be a string.");
    }

    const nameImageElement = document.getElementById('homepage-name-pic');

    if (str === "added") {
        if (nameImageElement !== null) {
            nameImageElement.src = '/assets/images/name-dark.gif';
        }
    }  else {
        if (nameImageElement !== null) {
            nameImageElement.src = '/assets/images/name-light.gif';
        }
    }
}

// export default homepageSpecific;