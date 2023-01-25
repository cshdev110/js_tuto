/**
 * cookie
 * Small text file stored on the PC.
 * It is used to remind information about a user visiting a web page.
 * It is save in name=value pairs.
 */

console.log(navigator.cookieEnabled);

// Managing cookies manually
// document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
// console.log(document.cookie);

//Deleting cookies
// deleteCookie("firstName");
// deleteCookie("email");

setCookie("first_Name", "Sponge Bob", 365);
setCookie("last_Name", "Square Pants", 365);

console.log(document.cookie);

console.log(getCookie("first_Name"));
console.log(getCookie("last_Name"));

/**
 * Using tag on html file
 */
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // Conversion on miliseconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Strict; secure`;
}

function deleteCookie(name){
    setCookie(name, null, null);
}

//Get the value of a cookie by its name
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");

    result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            //From the index given to the end is the substring
            result = element.substring(name.length + 1);
        }
    });
    
    return result;
}