export function appendImages(gallery, images) {
    images.forEach(img => {
        const imageElement = document.createElement("img");
        imageElement.src = `https://picsum.photos/id/${img.id}/300/200`;
        gallery.appendChild(imageElement);
    });
}

export function clearGallery(gallery) {
    gallery.innerHTML = "";
}

export function removeLastImage(gallery) {
    if (gallery.lastChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

export function reverseGallery(gallery) {
    const items = Array.from(gallery.children).reverse();
    gallery.innerHTML = "";
    items.forEach(item => gallery.appendChild(item));
}