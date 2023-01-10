/**
 * synchronous code
 * * Step-by-step lienar instructions
 * 
 * asynchronous code
 * * Out of sequence
 * * e.g.: Access a DB, Fetch a file, long tasks.
 */

console.log("START");
console.log("This step is synchronous");
console.log("END\n");


console.log("\nSTART 2");
setTimeout(() => console.log("This step is asynchronous"), 5000);
console.log("END 2");