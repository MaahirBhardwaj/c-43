class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  start(){
      if(gameState===0){
          player=new Player();
          player.getCount();
          form=new Form();
          form.display();
      }
      player1=createSprite(100,200);
      player1.addImage(player1image);
      player2=createSprite(600,200);
      player2.addImage(player2image);
      players=[player1,player2];
    
    }
  play(){
  form.hide();
  drawSprites()
  }
  
}