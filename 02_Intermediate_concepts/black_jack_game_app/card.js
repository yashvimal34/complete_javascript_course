let player = {
    name : "Yash Vimal",
    chipsLeft: "$" + 145
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " : " + player.chipsLeft

console.log(cards)

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // create a for loop to render all cards
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }

    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card?"
        messageEl.className = "game-message"
    }else if(sum === 21){
        message = "You've got blackjack!"
        messageEl.className = "game-message win"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        messageEl.className = "game-message lose"
        isAlive = false
    }
    messageEl.textContent = message

    // Update button states
    document.getElementById("new-btn").disabled = !isAlive || hasBlackJack
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}