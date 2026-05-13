const welcomeEL = document.getElementById("welcome-el")

function greetUser(greet, name, emoji) {
    welcomeEL.textContent = `${greet}, ${name}, ${emoji}`
}

greetUser("Hello", "Yash", "🔥")