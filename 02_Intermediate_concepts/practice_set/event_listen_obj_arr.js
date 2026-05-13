let data = [
    {
        player : "Yash",
        score : 50,
    },

    {
        player : "jane",
        score : 80
    }
]

const clickBtn = document.getElementById("click-btn")

clickBtn.addEventListener("click", function() {
    // Arrays of objects of two objects:
    console.log(data)
    // first objects
    console.log(data[0])
    // from that object find score
    console.log(data[0].score)

    
    clickBtn.textContent += ` => Yash Score is : ${data[1].score}`
})