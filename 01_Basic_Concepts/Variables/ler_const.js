// If possible use const, if not use let

// Which variable should be changed from let to const?

// The customer want to order some stuff. Here are the details
const basePrice = 530
const discount = 120
let shippingCost = 12
let shippingTime = 6

// Shipping cost and shipping will changed later if needed
shippingCost = 15
shippingTime = 10

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally notifying the customer
console.log("Total Cost: " + fullPrice + ". It will arrive in " + shippingTime)