// async function getSuggestion() {
//     const response = await fetch('https://bored-api.appbrewery.com/random')
//     const data = await response.json()
//     console.log(data)
// }
// getSuggestion()

try {
    const response = await fetch('https://bored-api.appbrewery.com/random')
    if(!response.ok){
        throw new Error("There is an network problem")
    }
    // const data = await response.json()
    // console.log(data)
} catch (err) {
    console.log(err)
} finally {
    console.log("The data is fetched")
}