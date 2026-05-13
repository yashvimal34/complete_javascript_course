let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let totalRuns = document.getElementById("total-runs")

let one = 0
let two = 0
let three = 0
let four = 0
let six = 0

let totalScore = 0

// First Innings
function o1() {
    one += 1
    totalScore += 1
    score1.textContent = one
    update()
}

function t2() {
    two += 2
    totalScore += 2
    score1.textContent = two
    update()
}

function t3() {
    three += 3
    totalScore += 3
    score1.textContent = three
    update()
}

function f4() {
    four += 4
    totalScore += 4
    score1.textContent = four
    update()
}

function s6() {
    six += 6
    totalScore += 6
    score1.textContent = six
    update()
}

function update() {
    totalRuns.textContent = totalScore
}


// Now Second Innings
function first() {
    one += 1
    score2.textContent = one
    score1.textContent = one
    update()
}

function sec() {
    two += 2
    score2.textContent = two
        score1.textContent = two
    update()
}

function thr() {
    three += 3
    score2.textContent = three
        score1.textContent = three
    update()
}

function fur() {
    four += 4
    score2.textContent = four
        score1.textContent = four
    update()
}

function sxi() {
    six += 6
    score2.textContent = six
        score1.textContent = six
    update()
}

function update() {
    totalRuns.textContent = totalScore
}