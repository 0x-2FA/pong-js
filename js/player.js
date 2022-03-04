import Paddle from "./paddle.js"
export default class Player extends Paddle 
{
  super(){}

  update(dt)
  {
    if (!dt) {return;}
    
    this.y += this.velocity;

    if (this.y < 0) 
    {
      this.y = 0;  
    }

    if (this.y + this.height > this.game_height) 
    {
      this.y = this.game_height - this.height;
    }
  }

  reset()
  {
    this.y = 250 - (this.height / 2);
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