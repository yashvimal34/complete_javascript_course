/* ------------- This is long method and manually updting name and permission ------------- 

function setPermissionUsers(permission, name1, name2, name3){
    console.log(`The name is ${name1} and he is now ${permission}.`)
    console.log(`The name is ${name2} and he is now ${permission}.`)
    console.log(`The name is ${name3} and he is now ${permission}.`)
}
setPermissionUsers("admin", "Yash", "Asmit", "Rahul")

/* ------------- This is long method and manually updting name and permission -------------- */



/* ---------------- Now Rest parameter comes into the action --------------- */
function setPermissionToAllUsers(permission, ...names){
    // Now we use forEach because the answer is in Array form
    names.forEach((name) => {
        console.log(`The name is ${name} and he now ${permission}`)
    })
}
setPermissionToAllUsers("admin", "Yash", "Asmit", "Rahul")
