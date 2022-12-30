/**
 * Date object: Dates & times
 */

let date = new Date();

console.log(date);

dateReadable = date.toLocaleString();
console.log(dateReadable);

document.getElementById("myLabel1").innerHTML = dateReadable;

//Giving parameters
let date_zero = new Date(0);
document.getElementById("myLabel2").innerHTML = date_zero.toLocaleString();

//This means 10000000 milliseconds after date(0)
let date_ran_milli = new Date(10000000);
document.getElementById("myLabel3").innerHTML = date_ran_milli.toLocaleString();

//year, month, day, hour, minute, second, millisecond
let date_num_arg = new Date(2023, 0, 1, 2, 3, 4, 5);
document.getElementById("myLabel4").innerHTML = date_num_arg.toLocaleString();

//Passing a string representation of the date
let date_string_arg = new Date('January 1, 2023 00:00:00');
document.getElementById("myLabel5").innerHTML = date_string_arg.toLocaleString();


let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let saconds = date.getSeconds();
let ms = date.getMilliseconds();

document.getElementById("myYear").innerHTML = "year: " + year;
document.getElementById("dayOfMonth").innerHTML = "dayOfMonth: " + dayOfMonth;
document.getElementById("dayOfWeek").innerHTML = "dayOfWeek: " + dayOfWeek;
document.getElementById("month").innerHTML = "month: " + month;
document.getElementById("hour").innerHTML = "hour: " + hour;
document.getElementById("minutes").innerHTML = "minutes: " + minutes;
document.getElementById("saconds").innerHTML = "saconds: " + saconds;
document.getElementById("ms").innerHTML = "ms: " + ms;

//set the date
let set_date = new Date();
set_date.setFullYear(2024);
set_date.setMonth(10);
set_date.setDate(30);
set_date.setHours(23);
set_date.setMinutes(1);
set_date.setSeconds(30);
set_date.setMilliseconds(0);
document.getElementById("myLabel6").innerHTML = 'set: ' + set_date.toLocaleString();

//Format the date
let date_format = new Date();
document.getElementById("myLabel7").innerHTML = 'format: ' + formatDate(date_format);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

let date_format_time = new Date();
document.getElementById("myLabel8").innerHTML = 'format time: ' + formatTime(date_format_time);

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    //Changing the time from military time to standard time
    let amOrPm = hours >= 12 ? "pm" : "am";
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds}`;
}