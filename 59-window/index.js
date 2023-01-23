/**
 * window
 * Interface to talk to the web browser.
 * The DOM is a property of the window.
 */

// console.dir(window);
console.log(`innerHeight: ${window.innerHeight}`);
console.log(`innerWidth: ${window.innerWidth}`);

console.log(`outerHeight: ${window.outerHeight}`);
console.log(`outerWidth: ${window.outerWidth}`);

//Scrollbar
console.log(`scrollX: ${window.scrollX}`);
console.log(`scrollY: ${window.scrollY}`)

//Usefull methods
console.log(window.location.href);
// window.location.href = "https://www.debian.org";
console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");

// myButton.addEventListener("click", () => window.open("https://www.debian.org"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("Hello!");
// window.confirm("Press OK to continue!");

let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be over 18+ to visit this site.");
    window.close();
}
