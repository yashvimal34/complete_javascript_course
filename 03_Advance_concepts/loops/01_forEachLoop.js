// 1. This is the way to render all elements of array using forEach loop, and also this is the first way to change elements of an array.

let names = ["Yash Vimal", "Sarthak Vimal", "Krishna Vimal", "Rahul Vimal"]

names.forEach((name, index, arr) => {
    if(name === "Rahul Vimal"){  // change with direct names
        arr[index] = "Anurag Vimal"
    }
})

console.log(names)


// The second way to change the elements using index value

names.forEach((name, index, arr) => {
    if(index === 3){ // change using index value
        arr[index] = "Anurag Vimal"
    }
})

console.log(names)