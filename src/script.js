const gallery = document.getElementById("gallery");

async function loadImages(count = 4) {
    const res = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random()*100)}&limit=${count}`);
    const images = await res.json();

    images.forEach(img => {
        const imageElement = document.createElement("img");
        imageElement.src = `https://picsum.photos/id/${img.id}/300/200`;
        gallery.appendChild(imageElement);
    });
}

// При першому завантаженні — 4 картинки
loadImages(4);

// КНОПКИ
document.getElementById("loadMore").addEventListener("click", () => loadImages(4));
document.getElementById("clearGallery").addEventListener("click", () => gallery.innerHTML = "");
document.getElementById("removeLast").addEventListener("click", () => {
    if (gallery.lastChild) gallery.removeChild(gallery.lastChild);
});
document.getElementById("reverse").addEventListener("click", () => {
    const items = Array.from(gallery.children).reverse();
    gallery.innerHTML = "";
    items.forEach(item => gallery.appendChild(item));
});
