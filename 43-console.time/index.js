/**
 * console.time()
 * Starts a time with the capable of tracking how long
 * an oparation takes.
 * Each timer created can get a unique name
 */

//Start
console.time("Response time");

// alert("CLICK THE OK BUTTON!");
setTimeout(() => console.log("HELLO"), 3000);

//End
console.timeEnd("Response time");