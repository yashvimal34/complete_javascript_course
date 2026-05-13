let largeCountries = ["Tuvala", "India", "USA", "Indonesia", "Monoca"]

// for(let i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i])
// }

largeCountries.pop()

let anotherPopulated = "Russia"
largeCountries.push(anotherPopulated)

largeCountries.shift()

let oneMoreCountry = "China"
largeCountries.unshift(oneMoreCountry)

for(let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i])
}


