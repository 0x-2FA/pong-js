import Paddle from "./paddle.js"
export default class Enemy extends Paddle
{
  super(){};

  update(dt, ball)
  {
    this.y = ball.y;    
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
