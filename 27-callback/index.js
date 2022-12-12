/**
 * callback
 * A funciton pass an argument to anothe function
 * Assure a task is ended to process the next one
 * avoiding issues such as not waiting for a file to load
 * It creates asynchronous code
 */

let total = sum(4, 4);
displayConsole(total);
displayDOM(total);

function sum(x,y){
    let result = x + y;
    return result;
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output;
}

/**
 * Using callback
 * It's not necessary to call callback 'callback'
 * It can be whatever
 */

sum2(1, 1, displayConsole);

function sum2(w, v, my_callback){
    let result = w + v;
    my_callback(result);
}