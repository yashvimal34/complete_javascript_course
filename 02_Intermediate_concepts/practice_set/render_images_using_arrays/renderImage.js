const renderImage = document.getElementById("render-image")

const images3 = [
    "images/IMG_4475.JPG",
    "images/IMG_4476.JPG",
    "images/IMG_4477.JPG",
]

function renderImages(allimage) {
    let imgsDOM = ""
    for(let i = 0; i < allimage.length; i++) {
        imgsDOM += `THe Family images : <img class = "team-img" src=${allimage[i]} width='100%' height=100%>`
    }

    renderImage.innerHTML = imgsDOM
}

renderImages(images3)
