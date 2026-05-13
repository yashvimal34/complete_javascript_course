
// This is .map() which creates new array without manually
let nums = [1, 2, 3, 4, 5]

let doubled = nums.map(num => num * 3)
console.log(doubled)
console.log(nums)



// this is forEach() loop which don't create new array it change the elements inside orignal array.
// If you want to create new array do it mannually.
let double = []
nums.forEach(num => {
    double.push(num * 3)
})
console.log(double)
console.log(nums)