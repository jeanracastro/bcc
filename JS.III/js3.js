let canvas;
let ctx;

let incrementor = 0;
let decrementor = 700;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  ctx.fillStyle = "#ffd3b6";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "#a8e6cf";
  ctx.fillRect(incrementor++, incrementor++, 50, 200, 200);
  ctx.fillStyle = "#dcedc1";
  ctx.fillRect(decrementor--, decrementor--, 250, incrementor++);
  ctx.fillStyle = "#ff8b94";
  ctx.fillRect(incrementor++, decrementor--, 200, incrementor++);
}

if (incrementor >= window.innerWidth || decrementor <= 0) {
  incrementor = 0;
  decrementor = 500;
}

const circle = document.getElementById("circle");

let posX = 0;

function moveCircle() {
  posX += 1;
  circle.style.left = posX + "px";

  if (posX >= window.innerWidth) {
    posX = 0;
  }
  requestAnimationFrame(moveCircle);
}
moveCircle();
