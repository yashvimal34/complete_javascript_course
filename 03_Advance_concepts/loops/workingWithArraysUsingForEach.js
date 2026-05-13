let users = [
    {name: "Yash Vimal", age: 20},
    {name: "Krishna Chaudhary", age: 20},
    {name: "Kartikeya Kanaujia", age: 21},
    {name: "Utkarsh Kumar", age: 18},
    {name: "Naman", age: 17}
]

users.forEach((user) => {
    if(user.age > 18){
        console.log(user)
    }
})