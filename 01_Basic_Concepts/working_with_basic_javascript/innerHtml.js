// adding a Buy! button in html in using javascript innerHtml concept.

let cont = document.getElementById("cont")

cont.innerHTML = "<button onClick='buy()'> Buy! </button>"

function buy() {
    cont.innerHTML += "<p>Thank You for buying this product!!</p>"
}