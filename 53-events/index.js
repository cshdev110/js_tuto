
const element = document.getElementById("myButton");
element.onclick = doSomething;

const elem_myText = document.getElementById("myText");
elem_myText.onchange = doSomething_myText_onchange;

const elem_myDiv = document.getElementById("myDiv");
elem_myDiv.onmouseover = doSomething_myDiv_onmouseover;
elem_myDiv.onmouseout = doSomething_myDiv_onmouseout;
elem_myDiv.onmousedown = doSomething_myDiv_onmousedown;
elem_myDiv.onmouseup = doSomething_myDiv_onmouseup;

document.body.onload = doSomething_body;

function doSomething(){
    alert("you did something!");
}

function doSomething_body(){
    alert("you did something, body!");
}

//having the document.body.onload with the function loaded,
//this bellow function, loaded in the script tag in the html file,
//doesn't work.
function doSomething_scriptTag(){
    alert("you did something, scriptTag!");
}

function doSomething_myText_onchange(){
    alert("you did something, myText onchange!");
}

function doSomething_myDiv_onmouseover(){
    this.style.backgroundColor = "red";
}
function doSomething_myDiv_onmouseout(){
    this.style.backgroundColor = "lightgreen";
}
function doSomething_myDiv_onmousedown(){
    this.style.width = "110px";
    this.style.height = "110px";
}
function doSomething_myDiv_onmouseup(){
    this.style.width = "100px";
    this.style.height = "100px";
}