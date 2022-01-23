import Paddle from "./paddle.js";
import Keyboard from "./keyboard.js"

const canvas = document.getElementById("canvas");

canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

const color_whitish = "#F0EBD8";

const player = new Paddle(20, canvas.height / 2, 12, 75, color_whitish, 4, canvas.height);

player.reset();

let last_frame = 0;

function loop(timestamp) 
{
  let dt = timestamp - last_frame;
  last_frame = timestamp
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  player.draw(context);
  player.update(dt);
  
  requestAnimationFrame(loop);
}

loop();