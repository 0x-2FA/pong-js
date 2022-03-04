import Paddle from "./paddle.js"
export default class Enemy extends Paddle
{
  super();

  update(dt)
  {

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
