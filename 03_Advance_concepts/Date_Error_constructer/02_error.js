function uesrName(name) {
    if(name){
        console.log(name)
    } else{
        throw new Error("Username is not provided")
        // using throw keyword it stops the execution after it.
    }
}

uesrName()