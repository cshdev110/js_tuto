// Variables
// 1. Declaration (var, "let", const)
// "let" more common

let firstName = "Bro";
let age = 21;
let student = false;

age++

console.log("Hello" + firstName);
console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
