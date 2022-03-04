import Player from "./player.js"
import Enemy from "./enemy.js"
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
    
    this.state = STATE.PLAY;

    this.ball = new Ball(canvas.width / 2, canvas.height / 2, 8, 0, Math.PI * 2, this);
    this.player = new Player(20, canvas.height / 2, 12, 75, this);
    this.enemy = new Enemy(canvas.width - 32, canvas.height / 2, 12, 75, this);
  },

  update: function (dt) {
    if (this.state == STATE.PLAY) 
    {
      this.player.update(dt);
      this.enemy.update(dt, this.ball);
      this.ball.update(dt, this.player, this.enemy);
    }
  },

  draw: function (context) {
    this.player.draw(context);
    this.enemy.draw(context);
    this.ball.draw(context);
  },

  pause: function () {
    game.state = STATE.PAUSE;
  },

  unpause: function () {
    game.state = STATE.PLAY;
  },

};

game.create(canvas.width, canvas.height);


let last_frame = 0;

let keyboard = new Keyboard();

keyboard.keydown(game.player, game, STATE);
keyboard.keyup(game.player, game, STATE);

function loop(timestamp) 
{
  let dt = timestamp - last_frame;
  last_frame = timestamp
  context.clearRect(0, 0, canvas.width, canvas.height);
 
  game.update(dt);
  game.draw(context);
  
  requestAnimationFrame(loop);
}

loop();