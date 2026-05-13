function logAnswer(ans, points) {
    console.log(`The answer is ${ans} of course! If you get that right, give yourself ${points} points`)
}

console.log("What is capital of India?")

setTimeout(logAnswer, 3000, "Delhi", 10)