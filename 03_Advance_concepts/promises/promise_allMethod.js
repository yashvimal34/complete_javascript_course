function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if(success) {
            resolve('operation successfull !!')
        } else{
            reject('operation failed')
        }
    })
}

try{
const promise1 = createPromise()
const promise2 = createPromise()
const promise3 = createPromise()

const result = await Promise.all([promise1, promise2, promise3])
console.log(result)
} catch (err) {
    console.log(err)
}

// Here what happend if you promies.all method you will get result one by one like somtimes it will "operation failed", and sometimes "operation successfull"

// By this method promise.all how many times you want same answer in a row you will get. Like above i want answer 3 times.

// One more thing that promise.all method is a resolved only an Array.