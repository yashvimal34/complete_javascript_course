// import { stockDetailsData } from "./fakeStock.js"

// setInterval(function() {
//     const stockData = stockDetailsData()
//     stockWholeData(stockData)
// }, 1500)

// function stockWholeData(stockData) {
//     const stockName = document.getElementById("stock-name")
//     const symbol = document.getElementById("symbol")
//     const price = document.getElementById("price")
//     const time = document.getElementById("time")

//     const {name, sym, price, time} = stockData

//     stockName.innerText = name
//     symbol.innerText = sym
//     price.innerText = price
//     time.innerText = time
// }


const stockName = document.getElementById("stock-name")
const symbol = document.getElementById("symbol")
const price = document.getElementById("price")
const time = document.getElementById("time")

setInterval(function() {
    getFullStockDetails()
}, 1500)

function stockTicker() {
    stockName.textContent = "QStockAI"
    symbol.textContent = "QTA"
}

let prevPrice = null

function stockPrice() {
    const randomPrice = Number(Math.random().toFixed(2))

    price.textContent = randomPrice > prevPrice ? `${randomPrice} ⬆️` : randomPrice < prevPrice ? `${randomPrice} ⬇️` : `${randomPrice} 🟰`
    prevPrice = randomPrice
}

function stockTime() {
    const timeZone = new Date().toLocaleTimeString()
    time.textContent = timeZone.toString()
}

function getFullStockDetails() {
    stockTicker()
    stockPrice()
    stockTime()
}

getFullStockDetails()