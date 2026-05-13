// 1. convert all string to uppercase()
let names = ["yash", "rahul", "krishna", "anurag"]

names.forEach((name) => {
    console.log(name.toUpperCase())
})

// 2. counting total sum using forEach()
let countNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
countNumbers.forEach((countNum, index, arr) => {
    sum = sum + countNum
})
console.log(sum)