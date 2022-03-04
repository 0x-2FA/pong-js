export default class Ball
{
  constructor(x, y, r, s, e, game, color = "#F0EBD8", speed = 6) 
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.e = e;
    this.cw = game.width;
    this.ch = game.height;
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

  update(dt, player)
  {
    this.x += -this.speed;

    if (this.y > this.ch - this.r) 
    {
      this.speed = -this.speed;
    }
    
    if (this.y < 0 + this.r) 
    {
      this.speed = -this.speed;
    }

    if (this.x - this.r <= player.x + player.width && this.y > player.y && this.y < player.y + player.height)
    {
      this.speed = -this.speed;
    }
    
  }
}
