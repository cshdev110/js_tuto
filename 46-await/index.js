/**
 * await
 * Makes an asyn funtion to wait for retrieving a promise
 */

async function loadFile(){
    
    let fileLoad = false;

    if(fileLoad){
        return "File loaded";
    }
    else{
        throw "File NOT leaded";
    }
}

async function startProcess(){

    try{
        let message = await loadFile();
        console.log(message);
    } catch(error){
        console.log(error );
    }

}

startProcess();

/* Bellow line of code's not necessary as this time 'await' is handled */
// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error));