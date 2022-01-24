export default class Ball
{
  constructor(x, y, r, s, e, cw, ch, color = "#F0EBD8", speed = 8) 
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.e = e;
    this.cw = cw;
    this.ch = ch;
    this.color = color;
    this.speed = speed;
  }

  reset()
  {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2 - this.r;
  }

  draw(context)
  {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.s, this.e);
    context.fill();
  }

  update(dt)
  {
    this.y += this.speed;

    if (this.y > this.ch - this.r) 
    {
      this.speed = -this.speed;
    }
    
    if (this.y < 0 + this.r) 
    {
      console.log(this.y);
      this.speed = -this.speed;
    }

  }
}