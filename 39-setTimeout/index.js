/**
 * setTimeout()
 * Invokes a funtion after a time (mi)
 * asynchronous function, so means it doesn't pause the execution
 */

let itme = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(){
    alert(`Buy this ${itme} course for $${price}!`);
}

function secondMessage(){
    alert(`This is not a scam!`);
}

function thirdMessage(){
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying!`)
}