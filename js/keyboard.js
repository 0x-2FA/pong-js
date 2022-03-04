export default class Keyboard
{
  keydown(player, game)
  {
    addEventListener('keydown', (event) => {
      switch (event.key) 
      {
        case 'w':
          player.up();  
          break;
        case 's':
          player.down();          
          break;
        case 'Escape':
          break;
      }
    });
  }

  keyup(player, game)
  {
    addEventListener('keyup', (event) => {
      switch (event.key) 
      {
        case 'w':
          player.stop();
          break;
        case 's':
          player.stop();         
          break;
      }
    });
  }
}