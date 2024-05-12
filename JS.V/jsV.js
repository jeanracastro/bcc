var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "#E2A3C7";
  ctx.fillRect(x, y, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Adding Strings

  ctx.font = "50px Georgia";
  ctx.fillStyle = "#60435F";
  ctx.fillText("JUMP!", 50, y);
  ctx.fillText("Strettttcchy!", 300, 200, x);

  //  Passing a variable with text
  let announcement = "Hello World!";
  ctx.fillText(announcement, x, 400);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
