const distanceTravelMiles = [236, 346, 645, 456, 187, 1]

const distanceTravledInKm = distanceTravelMiles.map((km) => Math.round(km*1.6))
console.log(distanceTravledInKm)