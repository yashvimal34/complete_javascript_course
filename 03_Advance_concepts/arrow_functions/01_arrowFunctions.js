// function speedWarning(speed) {
//     return `You are going at speed of ${speed} kmph`
// }

// console.log(speedWarning(50))

// 1. Convert above function to Arrow Function

const speedWarning = (speedlimit, driverSpeed) => {
    if(driverSpeed > speedlimit){
        return `Hey, Driver you are going at speed of ${driverSpeed} kmph, You have to give a fine of $100. If you want to avoid fine in future, better to have speed limit of only ${speedlimit} kmph`
    }
}

console.log(speedWarning(30, 40))