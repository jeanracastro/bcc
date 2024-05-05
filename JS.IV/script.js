var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x1 = 0;
var x2 = 200;
var y3 = 300;
var incrementorX = 2;
var incrementorY = 1;

function drawRect(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(x1, 10, "#F7B2B7");
  drawRect(x2, 10, "#F7717D");
  drawRect(canvas.width / 2, y3, "#7F2982");

  // boundaries for the first rectangle
  if (x1 + incrementorX > canvas.width || x1 + incrementorX < 0) {
    incrementorX = -incrementorX;
  }
  x1 += incrementorX;

  // boundaries for the second rectangle
  if (x2 + incrementorX > canvas.width || x2 + incrementorX < 0) {
    incrementorX = -incrementorX;
  }
  x2 += incrementorX;

  // boundaries for the third rectangle
  if (y3 + incrementorY > canvas.height || y3 + incrementorY < 0) {
    incrementorY = -incrementorY;
  }
  y3 += incrementorY;
}

setInterval(drawBoxxy, 10);
