let age = 43

if(age < 1){
    console.log("undefined")
}else if(age < 6) {
    console.log("Free")
} else if(age < 18) {
    console.log("child discount")
} else if(age < 27){
    console.log("student discount")
} else if(age < 67){
    console.log("Full Price")
} else {
    console.log("senior citizen discount")
}