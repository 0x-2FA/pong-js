export default class Paddle
{
  
  constructor(x, y, width, height, ch, color = "#F0EBD8", speed = 8)
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
}
