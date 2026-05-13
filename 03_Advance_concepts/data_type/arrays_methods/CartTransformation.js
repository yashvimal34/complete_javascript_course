let carts = [
    {item: "Phone", originalPrice: 10000},
    {item: "Laptop", originalPrice: 50000}
]

carts.map((cart) => {
    let addTax = cart.originalPrice*0.10 + cart.originalPrice
    console.log(addTax)
})