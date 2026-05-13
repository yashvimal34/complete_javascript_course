// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function increment() {
//     let add = lap1 + lap2 + lap3
//     console.log(add)
// }

// increment()

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    addPulseAnimation()
}

function decrement() {
    count -= 1
    countEl.textContent = count
    addPulseAnimation()
}

function save(){
    let countStr =  count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    addPulseAnimation()
}


// this is for only design not a part of logic for increment and decrement 
function addPulseAnimation() {
    countEl.classList.add('count-pulse')
    setTimeout(() => {
        countEl.classList.remove('count-pulse')
    }, 600)
}

