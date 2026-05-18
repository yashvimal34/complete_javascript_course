function preLoadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.alt = 'a beautifull image'
        img.addEventListener('load', () => resolve(img))
        img.addEventListener('error', () => reject('Image is not loaded'))
    })
}

try{
const result = await preLoadImg('./beach.webp')
document.getElementById('container').appendChild(result)
} catch (err) {
    console.log(err)
} 