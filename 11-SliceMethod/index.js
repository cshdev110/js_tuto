// slice() method extracts a section of a string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);
console.log(firstName);

lastName = fullName.slice(4);
console.log(lastName);

// other way
firstName = fullName.slice(0, fullName.indexOf(" "));
// It starts since the first space plus one more character
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
