export default class Keyboard
{
  keydown(player, game, STATE)
  {
    addEventListener('keydown', (event) => {
      switch (event.key) 
      {
        case 'w':
        case 'ArrowUp':
          player.up();  
          break;
        case 's':
        case 'ArrowDown':
          player.down();          
          break;
        case 'Escape':
          if (game.state == STATE.PLAY) 
          {
            game.pause();
          }
          else
          {
            game.unpause();
          }
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
        case 'ArrowUp':
          player.stop();
          break;
        case 's':
        case 'ArrowDown':
          player.stop();         
          break;
      }
    });
  }
}