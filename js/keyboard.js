export default class Keyboard
{
  keydown(player)
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

      }
    });
  }
}