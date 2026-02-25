export function initEvents(loadMore, clear, removeLast, reverse) {

    document.getElementById("loadMore").addEventListener("click", loadMore);

    document.getElementById("clearGallery").addEventListener("click", clear);

    document.getElementById("removeLast").addEventListener("click", removeLast);

    document.getElementById("reverse").addEventListener("click", reverse);

}