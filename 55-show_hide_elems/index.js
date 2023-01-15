/**
 * An interesting issue in this section happens.
 * What is wanted: Show and hide an image, but the first
 * laod of the page, the image needs to be hide.
 * If the approach to hide the image starts hidding it from the css file,
 * it's required to type twice the button to make the picture show up.
 * So, to fix this, it is better to hide the picture from the html file,
 * placing the property to hide into the tag.
 */

const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");
const myButtonD = document.querySelector("#myButtonD");
const myImgD = document.querySelector("#myImgD");

myButton.addEventListener("click", () => {
    if(myImg.style.display == "none"){
        myImg.style.display = "block";
    }
    else{
        myImg.style.display = "none";
    }
});

//Using visibility reserve the space for that image
if(myImgD.style.visibility == "hidden"){
    document.querySelector("#pDoom").innerHTML = "Press to bring up Doom";
} else{
    document.querySelector("#pDoom").innerHTML = "Press to bring down Doom";
}
myButtonD.addEventListener("click", () => {
    if(myImgD.style.visibility == "hidden"){
        myImgD.style.visibility = "visible";
    }
    else{
        myImgD.style.visibility = "hidden";
    }
});