let hands = ["paper", "rock", "scissor"]

function getRandomGame() {
    let randomGame = Math.floor(Math.random() * 3)
    return hands[randomGame]
}

let res = getRandomGame()
console.log(res)