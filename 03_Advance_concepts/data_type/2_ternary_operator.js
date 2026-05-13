const playerGuess = 7
const correctAnswer = 6

const guess = (playerGuess === correctAnswer) ? "Exactly Correct" : playerGuess > 6 ? "too high" : "too low"
console.log(guess)
