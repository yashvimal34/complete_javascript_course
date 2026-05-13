let combineMathMethods = Math.floor(Math.random() * 6)
// console.log(combineMathMethods)

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1
    return dice
}

let diceRoll = rollDice()
console.log(diceRoll)