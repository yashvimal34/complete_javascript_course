const welcomeEl = document.getElementById("welcome-el")

function greetYash(greet){
    welcomeEl.textContent = `${greet}, Yash Vimal`
}

greetYash("Welcome back")