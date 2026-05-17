/* 
BaseURL: "https://jsonplaceholder.typicode.com/posts"
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts
    Remember to handle all errors!
*/

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'Holiday Nighmares',
            body: 'When I was kinapped in Scotland',
            userId: 10,
        }),
    })
   if(!response.ok){
    throw new Error("There is an API problem")
   }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
}

// Now in this challenge we have learned how try catch block works.
// If you break the BASE URL the automatically moves to catch block.
// If you break the Endpoint of BASE URL the error will move to if block.