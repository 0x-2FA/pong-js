export default class Paddle
{
  
  constructor(x, y, width, height, color, speed = 4, ch)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = 0;
    this.speed = speed
    this.ch = ch
  }
  
  draw(context)
  {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(dt)
  {
    if (!dt) {return;}
    
    this.y += this.velocity;

    if (this.y < 0) 
    {
      this.y = 0;  
    }

    if (this.y + this.height > this.ch) 
    {
      this.y = this.ch - this.height;
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

  reset()
  {
    this.y = 250 - (this.height / 2);
  }

}
