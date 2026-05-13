let users = [
    {name: "Yash Vimal"},
    {name: "Rahul Vimal"},
    {name: "Krishna Chaudhary"},
    {name: "Utkarsh Kumar"},
    {name: "Vansh Vimal"}
]

users.forEach((user, index) => {
    user.active = "true"
    if(index === 3){
        user.active = false
    }
})

console.log(users)