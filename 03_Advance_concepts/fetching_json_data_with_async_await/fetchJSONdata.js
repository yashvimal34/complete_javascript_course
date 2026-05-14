fetch('https://bored-api.appbrewery.com/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.price)
    })