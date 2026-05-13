let sentence = ["Hello", "my", "is", "Yash", "Vimal"]
let greetingEl = document.getElementById("greeting-el")

for(let i = 0; i < sentence.length; i++){
    // console.log(sentence[i])
    greetingEl.textContent += " " + sentence[i]
}