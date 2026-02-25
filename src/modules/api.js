export async function fetchImages(count = 4) {
    const res = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random()*100)}&limit=${count}`);
    return await res.json();
}