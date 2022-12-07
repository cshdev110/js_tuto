// How to accept user input

// Easy way

// let username = window.prompt("What's your name?")
// console.log(username);

// Difficutl way via HTML "input"

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}