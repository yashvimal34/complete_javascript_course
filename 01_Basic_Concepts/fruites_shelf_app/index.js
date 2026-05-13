let appleShelf = document.getElementById("apple_shelf")
let orangeShelf = document.getElementById("orange_shelf")
let mangoShelf = document.getElementById("mango_shelf")
let grapesShelf = document.getElementById("grapes_shelf")
let allFruits = document.getElementById("all_fruits")
let noFruits = document.getElementById("no-fruits")

let fruit = ["🍎", "🍊", "🍎", "🥭", "🍎", "🍊", "🥭", "🍇", "🍎", "🍇", "🍇", "🍊", "🍊", "🍇", "🍇", "🥭", "🥭"]

for(let i = 0; i < fruit.length; i++){
    allFruits.textContent += fruit[i]
}

function fruitShelf() {

    for(let i = 0; i < fruit.length; i++) {

        if(fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        } else if(fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        }else if(fruit[i] === "🥭"){
            mangoShelf.textContent += "🥭"
        }else if(fruit[i] === "🍇"){
            grapesShelf.textContent += "🍇"
        }else {
            noFruits.textContent = "No Fruits available"
        }

    }

}
