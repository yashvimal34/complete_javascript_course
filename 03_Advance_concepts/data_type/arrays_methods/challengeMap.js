const distanceTravelMiles = [236, 346, 645, 456, 187, 1]

const distanceTravelKm = distanceTravelMiles.map(function(distance) {
    return Math.round(distance * 1.6)
})

console.log(distanceTravelKm)

// const distanceTravledInKm = distanceTravelMiles.map((km) => Math.round(km*1.6))
// console.log(distanceTravledInKm)


// Challenge part
// 1. Refactor this .map method so the inline function is an arrow function
// 2. write the least amount of code.