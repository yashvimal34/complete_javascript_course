// ------------------ Coverted Values ------------------------ //
// 1 meter = 3.281 feet / 1 feet = 0.3048 meter
// 1 liter = 0.264 gallon / 1 gallon = 3.7854 liter
// 1 kilogram = 2.204 pound / 1 pound = 0.4535924 kilogram
// ---------------------- Coverted Values ------------------- //

// -------------- below InputDOM and ButtonDOM ------------------- //
const inputConvert = document.getElementById("input-to-covert")
const convertBtn = document.getElementById("convert-btn")
// ------------------ above InputDOM and ButtonDOM ---------------- //

// ------------------- below conversion units ------------------//
const meterFeet = document.getElementById("meter-feet")
const literGallon = document.getElementById("liter-gallon")
const kiloPound = document.getElementById("kilos-pounds")
// ----------------- above conversion units -------------------//


// ------------------------- first way clean and simple ---------------------------- //
let inputValue;

function MeterToFeetAndFeetToMeter() {
    meterFeet.textContent = `
    ${inputValue} meters = ${inputValue*3.281} feet 
    | 
    ${inputValue} feet = ${inputValue*0.3048} meters `
}

function literToGallonAndGallonToLiter() {
    literGallon.textContent = `
    ${inputValue} liter = ${inputValue*0.264} gallon
    | 
    ${inputValue} gallon = ${inputValue*3.7854} liter `
}

function kiloToPoundAndPoundToKilo() {
    kiloPound.textContent = `
    ${inputValue} kilogram = ${inputValue*2.204} pound 
    | 
    ${inputValue} pound = ${inputValue*0.4535924} kilogram`
}

convertBtn.addEventListener("click", function() {
    inputValue = Number(inputConvert.value)
    inputConvert.value = ""
    MeterToFeetAndFeetToMeter()
    literToGallonAndGallonToLiter()
    kiloToPoundAndPoundToKilo()
})
// --------------------------------- first way clean and simple -------------------------- //



// ---------------------------- second way with arrays but complex ------------------------------ //
// let conversionValue = []
// function convertUnits(){
//     let values = conversionValue[conversionValue.length-1]
//     meterFeet.textContent = `${values} meters = ${values*3.281} feet | ${values} feet = ${values*0.3048} meters`
//     }

// convertBtn.addEventListener("click", function() {
//     conversionValue = [Number(inputConvert.value)]
//     convertUnits()
// })
// ----------------------------- second way with arrays but complex -------------------------- //