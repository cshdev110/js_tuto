/**
 * promise
 * It is an object which encapsulates the result of
 * an asynchronous operation.
 * Also, let asyncrhonous methods return values
 * like they were synchronous methods. "I promise to return something
 * in the future"
 * 
 * Promase has a STATE. It is 'pending' then, it is 'fulfilled' or 'rejected'
 * The RESULT is what can be returned
 * Promise has two parts: the 'producing' code which is coding up the promise.
 * The second part is the 'consuming' which is when it is resolve so what
 * we want it to do after so.
 */

//Producing
const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

//Consuming
promise.then(value => console.log(value))
        .catch(error => console.log(error));


/*Other example:
* time is the argument of wait as if it is a function. "wait(time)"
* In the example bellow, resolve is doing nothing. Basically, it is
* resolving without arguments.
*/
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));