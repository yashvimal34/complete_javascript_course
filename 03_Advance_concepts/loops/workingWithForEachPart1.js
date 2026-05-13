
// 1. Printing all elements of and array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach((num) => {
    console.log(num)
})

// 2. Now printing index and its value of an array
numbers.forEach((num, index) => {
    console.log(`The Index value of ${num} is: ${index}`)
})

// 3. Now modifying the value of an array using thrid parameter
numbers.forEach((num, index, arr) => {
    console.log(arr[index] * 5)
})