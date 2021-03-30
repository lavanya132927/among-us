var gem_img,gem, P1_img,P2_img,P3_img, p1,p2,p3;
 var bg_img, bg, spaceship_img, spaceship_img, spaceship,fire_img,fire;
 var game, player,form, allPlayers, players; 
 var gameState = 0; 
 var playerCount;
  var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10;
  function preload(){
     P1_img = loadImage("images/yellow.png");
      // P2_img = loadImage("images/green.png");
       // P3_img = loadImage("images/pink.png");
        gem_img = loadImage("images/jem.png"); 
        bg_img = loadImage("images/galaxy.PNG");
         spaceship_img = loadImage("images/spacecraft.jpeg");
         fire_img=loadImage("images/fire.png")
        
      }

          function setup(){
             createCanvas(displayWidth, displayHeight);
              database = firebase.database()
               bg = createSprite(0,0);
               bg.scale = 4; 
               bg.x = bg.width/2 
               bg.velocityX = -1;
                game = new Game();
                 game.getState(); 
                 game.start();
               } 
               function draw(){ 
                 background(0)
                  bg.addImage(bg_img);
                 if(bg.x < 0){
                    bg.x = bg.width/2
                   }
                  if(playerCount===1){
                     game.update(1); 
                } 
                if(gameState===1){ 
                  game.play(); 
                } 
                drawSprites() 
              }
