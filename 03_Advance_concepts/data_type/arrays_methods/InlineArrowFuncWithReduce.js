import { itemsBoughtArr } from "./itemsToBeExported.js";

let calculateTotalPrice = itemsBoughtArr.reduce((defalutItemPrice, actualItemPrice) => {
    return defalutItemPrice + actualItemPrice.price
}, 0)
console.log(calculateTotalPrice)
