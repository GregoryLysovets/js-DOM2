import { fetchImages } from "./modules/api.js";
import { appendImages, clearGallery, removeLastImage, reverseGallery } from "./modules/gallery.js";
import { initEvents } from "./modules/events.js";

const gallery = document.getElementById("gallery");

async function loadImages(count = 4) {
    const images = await fetchImages(count);
    appendImages(gallery, images);
}

// перше завантаження
loadImages(4);

initEvents(
    () => loadImages(4),
    () => clearGallery(gallery),
    () => removeLastImage(gallery),
    () => reverseGallery(gallery)
);