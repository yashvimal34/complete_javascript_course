let arr = [1, 2, 3, 4, 5, 6]

let newSum = arr.reduce((firstNum, secNum) => {
    return firstNum + secNum
}, 0)

console.log(newSum)