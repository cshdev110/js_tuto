/**
 * setInterval()
 * Invokes a function repeatedly after a time set
 * Asynchronous function which means it doesn't pause the execution
 */

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

//Every 1000 milliseconds it'll execute countUp function
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count++;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}