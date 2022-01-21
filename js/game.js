import Paddle from "./paddle.js";

const canvas = document.getElementById("canvas");

canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

const color_whitish = "#F0EBD8";

const player = new Paddle(20, canvas.height / 2, 12, 75, color_whitish);


function loop() 
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.update(context);
  requestAnimationFrame(loop);
}

loop();
