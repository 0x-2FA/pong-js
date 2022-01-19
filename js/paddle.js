export default class Paddle
{
  
  constructor(x, y, width, height, color)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  create(context)
  {
    context.strokeStyle = this.color;
    context.lineWidth = 10;
    
    context.rect(this.x, this.y - this.height, this.width, this.height);
    context.stroke();
  }
}
