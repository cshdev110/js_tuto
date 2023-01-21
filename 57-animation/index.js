

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 360 || y >= 360){
            clearInterval(timerId);
        }
        else{
            x+=1;
            myAnimation.style.left = x + "px";
            y+=1;
            myAnimation.style.top = y + "px";
            degrees += 4;
            myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
        }
    }
}

//scale
function begin_s(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 2 || scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale(" + scaleX + ", " + scaleY + ")";
        }
    }
}