export default class Paddle
{
  
  constructor(x, y, width, height, color, speed = 4)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed
  }
  
  draw(context)
  {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(dt)
  {
    if (!dt) {return;}
    this.y -= this.speed;
  }

  reset(context)
  {
    context.fillStyle = this.color;
    context.fillRect(this.x, 250 - (this.height / 2), this.width, this.height);
  }
}
