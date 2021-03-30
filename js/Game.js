class Game 
{
constructor()
{ 
 }
getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
 gameState = data.val();
})
 } 

 update(state){
database.ref('/').update({
 gameState: state 
 });
} 
 async start()
 { 
if(gameState === 0)
{
 player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
 if(playerCountRef.exists()){ 
 playerCount = playerCountRef.val();
  player.getCount();
 } 
form = new Form()
form.display();
text("Start Mission" ,15,15)
}


spaceship=createSprite(800,450); 
spaceship.addImage(spaceship_img);
spaceship.scale=0.9; 
p1 = createSprite(1000,300);
p1.addImage(P1_img);
p1.scale=0.05;
 
w1=createSprite(800,750,1300,10) 
w1.shapeColor="blue" 
w1.visible=false
 w2=createSprite(800,150,1300,10)
w2.shapeColor="blue"
w2.visible=false
 w3=createSprite(1380,510,10,700) 
 w3.shapeColor="blue"
 w3.visible=false
w4=createSprite(215,510,10,700) 
w4.shapeColor="blue"
w4.visible=false
w5=createSprite(600,350,500,10)
w5.shapeColor="blue"
w5.visible=false
w6=createSprite(600,660,500,10)
w6.shapeColor="blue"
w6.visible=false
w7=createSprite(350,250,10,200)
w7.shapeColor="blue"
w7.visible=false
w8=createSprite(840,250,10,200)
w8.shapeColor="blue"
w8.visible=false

fire=createSprite(500,380,20,20)

fire.scale=0.09
fire.addImage(fire_img)
gem=createSprite(295,200,20,20)
gem.addImage(gem_img)
gem.scale=0.2
}

play(){
 form.hide();
  Player.getPlayerInfo(); 
  if(allPlayers !== undefined)
{
//image(spaceship_img, 0,0,200,200);
 

 if(keyDown(UP_ARROW)){
 p1.y=p1.y+10
 fire.velocityY=-4
 
 }if(keyDown(RIGHT_ARROW)){
 p1.x=p1.x+10
 fire.velocityY=-4

  }
if(keyDown(LEFT_ARROW)){
 p1.x=p1.x-10
 fire.velocityY=-4

}
 if(keyDown(DOWN_ARROW)){
 p1.y=p1.y-10
 fire.velocityY=-4
 
 }
  p1.collide(w1)
  p1.collide(w2)
  p1.collide(w3)
  p1.collide(w4)
  p1.collide(w5)
  p1.collide(w6)
  p1.collide(w7)
  p1.collide(w8)

 // fire.bounceOff(w5)
  fire.bounceOff(w6)
  fire.bounceOff(w4)
  fire.bounceOff(w7)
  fire.bounceOff(w3)
  fire.bounceOff(w2)
  fire.bounceOff(w1)
  fire.bounceOff(w8)

  if(p1.collide(gem)){
    gem.destroy()
    p1.velocityX=0
    p1.velocityY=0
  }
  if(p1.collide(fire)){
  p1.destroy()
 }

 //p1.collide(w1)
 //  p1.setCollider
    //p1.collide(w2)
//p1.collide(w3)
//p1.collide(w4)
//p2 = createSprite(1000,200); 
//p2.addImage(P2_img); 
//p2.scale=0.05;
//p3 = createSprite(1000,400); 
 //p3.addImage(P3_img); 
  //p3.scale=0.
   //players = [p1, p2, p3];
 
 }
  drawSprites()
 }
  }                  
                                
