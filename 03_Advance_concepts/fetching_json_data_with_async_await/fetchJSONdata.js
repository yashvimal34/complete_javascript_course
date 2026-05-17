// fetch('https://bored-api.appbrewery.com/random')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.price)
// })

try {
const response = await fetch('https://bored-api.appbrewery.com/random')
const data = await response.json()
console.log(data)
} catch (err) {
    console.log(err)
} finally {
    console.log('The operation is fetched')
}
