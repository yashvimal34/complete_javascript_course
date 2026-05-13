// Example 1

let player1time = 102
let player2time = 107

function getFastestRaceTime() {
    if(player1time < player2time){
        return player1time
    } else if(player2time < player1time) {
        return player2time
    } else {
        return player1time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function getTotalTime() {
    totalTime = player1time + player2time
    return totalTime
}

let sumTime = getTotalTime()
console.log(sumTime)

// Example 2
let race1 = 103
let race2 = 106

function getTotalRaceTime() {
    let totalRaceTime = race1 + race2
    return totalRaceTime
}

let raceTime = getTotalRaceTime()
console.log(raceTime)