/* ---------------------- Older and Traditinol way to fetch json data ------------------------ */

// fetch('https://bored-api.appbrewery.com/random')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.price)
// })

/* ---------------------- Older and Traditinol way to fetch json data ------------------------ */

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         const imageEle = document.createElement('img')
//         imageEle.src = data.message
//         imageEle.alt = "random dog"
//         document.getElementById('dog').appendChild(imageEle)
//     })

/* ---------------------- Older and Traditinol way to fetch json data ------------------------ */




/* ---------------------- fetching with async await ------------------------ */
// try {
// const response = await fetch('https://bored-api.appbrewery.com/random')
// const data = await response.json()
// console.log(data)
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log('The operation is fetched')
// }



/* ---------------------- fetching with async await ------------------------ */
const response = fetch('https://bored-api.appbrewery.com/random')
// const data = await response.json()
console.log(response)
/* ---------------------- fetching with async await ------------------------ */
