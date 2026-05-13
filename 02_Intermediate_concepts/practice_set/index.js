// Setting the stage
const player = "Yash Vimal"
let opponent = "Nick James"
const game = "Amazing Fighter"
let points = 0
let hasWon = false

// Playing the game
points += 100
hasWon = false
opponent = "Kery Alis"

// Announcing the winner
if(hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The Winner is ${opponent} ! ${player} lost the game`)
}