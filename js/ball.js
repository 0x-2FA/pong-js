export default class Ball
{
  constructor(x, y, r, s, e, game, color = "#F0EBD8", speed = 6) 
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.e = e;
    this.game_width = game.width;
    this.game_height = game.height;
    this.color = color;
    this.speed = speed;
    this.dir = {
      x: this.radnom_dir_x(),
      y: this.radnom_dir_y()
    }
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

  update(dt, player, enemy)
  {
    this.x += this.speed * this.dir.x;
    this.y += this.speed * this.dir.y;

    if (this.y > this.game_height - this.r) 
    {
      this.dir.y = -this.dir.y;
    }
    
    if (this.y < 0 + this.r) 
    {
      this.dir.y = -this.dir.y;
    }

    if (this.x - this.r <= player.x + player.width && this.y > player.y && this.y < player.y + player.height)
    {
      this.dir.x = -this.dir.x
    }

    // collision with the enemy
    if (this.x - this.r >= enemy.x - enemy.width && this.y > enemy.y && this.y < enemy.y + enemy.height)
    {
      this.dir.x = -this.dir.x
    }
    
  }

  radnom_dir_x()
  {
    let rand = Math.floor(Math.random() * 9) + 2;
    let dir = 1;

    if (rand == 9 || dir == 6 || rand == 3) 
    {
      dir = -dir;
    }

    return dir;
  }

  radnom_dir_y()
  {
    let rand = Math.floor(Math.random() * 9) + 2;
    let dir = 1;

    if (rand == 9 || rand == 6 || rand == 3) 
    {
      dir = -dir;
    }

    return dir;
  }
}
