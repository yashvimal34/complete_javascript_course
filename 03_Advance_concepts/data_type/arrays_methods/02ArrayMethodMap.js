let users = [
    {name: "Yash Vimal", age: 20},
    {name: "Rahul", age: 10}
]

let updatedUsers = users.map((user) => {
    return {
        ...user,
        isAdult: user.age <= 18
    }
})

console.log(updatedUsers)