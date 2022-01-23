import Paddle from "./paddle.js";
import Keyboard from "./keyboard.js"

const canvas = document.getElementById("canvas");

canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

const player = new Paddle(20, canvas.height / 2, 12, 75, canvas.height);

player.reset();

let last_frame = 0;

let keyboard = new Keyboard();

keyboard.keydown(player);

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