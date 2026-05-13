function logAnswer() {
    console.log("My name is Yash ")
}

const log = setTimeout(logAnswer, 3000)

document.getElementById("stop").addEventListener('click', function() {
    clearTimeout(log)
    console.log("Canelled.")
})


// function stockPriceTime() {
//     console.log(Math.random().toFixed(2))
// }

// stockPriceTime()