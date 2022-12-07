//

document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){

    }
    else if(document.getElementById("cButton").checked){
        document.getElementById("tempLable").innerHTML = "select a unit";
    }
}

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}

