// Method Chaining

//without method chaining
let userName = "bro";

let letter = userName.charAt(0);
letter = letter.toUpperCase();

console.log(letter);

//Using method chaining
let letter2 = userName.charAt(1).toUpperCase().trim();
console.log(letter2);
