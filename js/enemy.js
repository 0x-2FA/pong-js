import Paddle from "./paddle.js"
export default class Enemy extends Paddle
{
  super(){};

  update(dt, ball)
  {
    this.y = ball.y;
    if (this.y < 0) 
    {
      this.y = 0;  
    }

    if (this.y + this.height > this.game_height) 
    {
      this.y = this.game_height - this.height;
    }

  }

  up()
  {
    this.velocity = -this.speed;
  }

  down()
  {
    this.velocity = this.speed;
  }

  stop()
  {
    this.velocity = 0;
  }
}
