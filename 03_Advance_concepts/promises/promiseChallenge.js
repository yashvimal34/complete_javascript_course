function preLoadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url
        img.alt = "A beautiful Beach"
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject('Image not found'))
    })
}

try{
    const results = await preLoadImage('./beach.webp')
    console.log(results)
    document.getElementById("container").appendChild(results)
} catch (err) {
    console.error(err)
}