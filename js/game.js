import Player from "./player.js"
import Ball from "./ball.js"
import Keyboard from "./keyboard.js"

const canvas = document.getElementById("canvas");

let STATE = {
  OVER: 0,
  PLAY: 1,
  PAUSE: 2,
  MAIN_MENU: 3
};

canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

let game = {
  create: function (canvas_width, canvas_height){
    this.width = canvas_width;
    this.height = canvas_height;

    let ball = new Ball(canvas.width / 2, canvas.height / 2, 8, 0, Math.PI * 2, this);
    let player = new Player(20, canvas.height / 2, 12, 75, this);

  },

};

player.reset();
ball.reset();

let last_frame = 0;

let keyboard = new Keyboard();

keyboard.keydown(player);
keyboard.keyup(player);

function loop(timestamp) 
{
  let dt = timestamp - last_frame;
  last_frame = timestamp
  context.clearRect(0, 0, canvas.width, canvas.height);

  player.draw(context);
  player.update(dt);
  ball.draw(context);
  ball.update(dt, player);
  requestAnimationFrame(loop);
}

loop();