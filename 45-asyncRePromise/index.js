/**
 * async returning a promise
 */

/**
 * It's not necessary this part of the code for this example, 
 * it's a good example to have in mind how it works 
 * with the async funciton, though.
 */
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }
// });

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File loaded\n\n";
    }
    else{
        throw "File NOT loaded\n\n"; // rise an error to catch it
    }
}

loadFile().then(value => console.log(value))
        .catch(error => console.log(error));

/**
 * In the other hand, returning a promise.
 * Same result but more syntaxes
 */
function loadFile_Re_Promise(){
    let fileLoaded2 = true;

    if(fileLoaded2){
        return Promise.resolve("File loaded v2");
    }
    else{
        return Promise.reject("File NOT loaded v2"); // rise an error to catch it
    }
}

loadFile_Re_Promise().then(value => console.log(value))
        .catch(error => console.log(error));