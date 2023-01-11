/**
 * DOM: Document Object Model
 * Technically an API "Application Programming Interface"
 * Interface for changing the content of a page.
 */

console.log(document);

console.dir(document);

console.log(document.title);
console.log(document.URL);

// document.location = "https://www.debian.org"

document.body.style.background = "skyblue url('DOM.png') no-repeat left top";

document.getElementById("myDiv").innerHTML = "Hello div - position absolute";
document.getElementById("myDiv").style.position = "absolute";
document.getElementById("myDiv").style.bottom = "0px";

