// Useful String Methods

let username = "Dan Dev";
let usernameToTrim = "   HACKER Dev  ";
let username2;
let phoneNumber = "123-456-7890"


console.log(username.length); // Length of the string
console.log(username.charAt(1));
console.log(username.charAt(5));
console.log(username.indexOf("D"));
console.log(username.lastIndexOf("D"));


username2 = usernameToTrim.trim();
console.log(username2)

username2 = username.toUpperCase();
console.log(username2)

username2 = username.toLowerCase();
console.log(username2)

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

phoneNumber = phoneNumber.replaceAll("/", "");
console.log(phoneNumber);