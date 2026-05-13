var username = "Yash Vimal";
console.log(username);
var username = "Sarthak Vimal";
console.log(username);

// Another example
var totalPrice = 500;
totalPrice = totalPrice + 100;
console.log(totalPrice);

// though it is function scoped let's see another example
function test1() {
    var message = "Welcome";
    console.log(message);
};
test1();

// var loop example
for(var i = 0; i <= 10; i++){
    console.log(i); // Here it will itereate because this is inside in block scope.
};
console.log(i);  // It is will not iterate all values from 0 to 10 it will count how many numbers are there.

for (var i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log(i);
};