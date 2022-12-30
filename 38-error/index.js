/**
 * error
 * Also, users can throw user-defined errors 
 * with the key word throw
 */

//Example of error "TypeError"
try{
    console.lag();
} catch(error){
    console.log('error caught ' + error);
}

//Using throw key word "user-defined errors"
try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasnt't a number!";
    if(x == '') throw "That was empty!";
    
    console.log(`${x} is a number`);
} catch (error) {
    console.log('error: 1 - ' + error);
} finally{
    console.log("This always executes");
}