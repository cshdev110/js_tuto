/**
 * canvas API
 * Drawing graphics
 * Common on developing animations, games, data visualisation.
 */

/**
 * The canvas is lika the frame.
 * The context is like the paiting where we paint.
 */
let canvas = document.getElementById("myCanvas");

/**to draw in the canvas, the context needs to be handled. */
let context = canvas.getContext("2d");


//Draw lines
// context.strokeStyle = "purple";
// context.lineWidth = 3;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250)
// context.stroke();

//Draw triangle
// context.fillStyle = "yellow";
// context.strokeStyle = "green"
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// //To create a border is needed the use of .stroke() and .fill() methods.
// context.stroke();
// //To fill the shape
// context.fill();

//Draw rectangle
context.lineWidth = 2;
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.lineWidth = 2;
context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.lineWidth = 2;
context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.lineWidth = 2;
context.fillStyle = "lightblue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);

//Draw Circle
//(x, y, r, start_angle, end_angle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();


//Draw text
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width/2, canvas.height/2);