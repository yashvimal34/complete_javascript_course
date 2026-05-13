let bothEmojiEl = document.getElementById("bothEmoji-el")

// fighterButton()

let emojis = ["🐶", "🐺", "🦒", "🐯", "🦁", "🦝", "🐰", "🐭", "🐼", "🐸", "🦓"]

function fighterButton() {
    let randomEmojiOne = Math.floor(Math.random() * emojis.length)
    let randomEmojiTwo = Math.floor(Math.random() * emojis.length)
    bothEmojiEl.textContent = emojis[randomEmojiOne] + " v/s " + emojis[randomEmojiTwo]

    // Add battle animation
    bothEmojiEl.classList.add('battle-active')
    setTimeout(() => {
        bothEmojiEl.classList.remove('battle-active')
    }, 500)
}