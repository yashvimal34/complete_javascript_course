function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // It calls the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // call the next step after 1 second
        }, 1000)
    })

}

function notifyUser(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Nofifying Users...')
        setTimeout(() => {
            resolve() // call the next step after 1 second
        }, 1000)
    })
}

try {
    // const response = await Promise
    await uploadFile()
    await processFile()
    await notifyUser()
} catch (err) {
    console.log(err)
} finally {
    console.log("All steps are completed")
}