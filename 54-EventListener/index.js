/**
 * .addEventListener(event, function, useCapture)
 * One element can handler multipler events
 * even same event but with different functions
 */


const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeLightBlue);

function changeRed(){
    innerDiv.style.backgroundColor = "red";
}
function changeLightBlue(){
    innerDiv.style.backgroundColor = "blue";
}

//Same event for different elements
innerDiv.addEventListener("click", changeBlue);

/**
 * Without the last argument "useCapture", which is a sort of preference,
 * the first on displaying the event is innerDiv. In the other hand,
 * if the useCapture is place and true, in this case, outerDiv is
 * displaying the event first.
 */
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "blue";
}