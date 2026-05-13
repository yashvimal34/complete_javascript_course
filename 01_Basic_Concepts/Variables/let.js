let username = "Yash Vimal";
console.log(username);
username = "Sarthak Vimal";  // re-assignment is allowed.
console.log(username);

// let username = "Ayansh";  // In this let Re-declaration is not allowed.

// Another example
function test1(){
    let username = "Manoj Kumar";
    console.log(username);
};
test1();

// Another exmaple.
for(let i = 0; i<=10; i++){
    console.log(i);  // It is a block scope {inside this}
};
