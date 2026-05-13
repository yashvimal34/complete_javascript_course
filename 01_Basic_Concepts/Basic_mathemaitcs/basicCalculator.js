let num1 = 8
let num2 = 2
document.getElementById("num-1").textContent = num1
document.getElementById("num-2").textContent = num2

let ansEl = document.getElementById("ans-el")

function add() {
   let addi = num1 + num2
   ansEl.textContent = "Answer: " + addi
}

function sub() {
    let subt = num1 - num2
    ansEl.textContent = "Answer: " + subt
}

function mul() {
    let mult = num1 * num2
    ansEl.textContent = "Answer: " + mult
}

function divide() {
    let divids = num1 / num2
    ansEl.textContent = "Answer: " + divids
}