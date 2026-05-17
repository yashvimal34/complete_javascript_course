const imageButton = document.getElementById("upload-image")

function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image();
            img.src = url
            img.alt = "a beautiful image"
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('load', () => reject('Image not uploaded'))
        }, 1000)
    })
}

const images = [
    'images/london.webp',
    'images/lucknow.webp',
    'images/wirral.webp',
]

async function preLoadImage(imagesUrlArr) {
    const imgContainer = document.getElementById("upload-conatainer")
    
    const promises = imagesUrlArr.map((url) => getImagePromise(url))

        try {
            const results = await Promise.all(promises)
            results.forEach((img) => {
            imgContainer.appendChild(img)
            })
        } catch(err) {
            console.log(err)
    }
}

imageButton.addEventListener('click', () => {
    preLoadImage(images)
})