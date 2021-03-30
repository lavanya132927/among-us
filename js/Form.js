class Form {
     constructor()
     { 
         this.input = createInput("Name");
      this.button = createButton('Play'); 
      this.greeting = createElement('h2'); 
     // this.title = createElement('h2'); 
     
      this.reset = createButton('Reset');
     } 
     hide(){
          //this.greeting.hide(); 
          this.button.hide();
           this.input.hide();
           this.myDiv.hide()
           //  this.title.hide();
         }
display()
     {
          this.myDiv = createDiv('Start mission');
           this.myDiv.style('font-size', '70px');
           this. myDiv.style('color', '#ff0000');
             this.myDiv.position(600, 70);

     text("Start mISSION",20,20)
 //this.title.html("Among Us"); 
// this.title.position(500,200); 

  this.input.position(650,350);
  this.button.position(780,400);
   this.reset.position(10,10);
    this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
          player.name = this.input.value();
           playerCount+=1;
            player.index = playerCount;
             player.update(); 
             player.updateCount(playerCount); 
             //this.greeting.html("Hello " + player.name + "!, we are waiting for others") //this.greeting.position(500,200); 
            });
this.reset.mousePressed(()=>{ 
    player.updateCount(0);
     game.update(0); }); 
} 
}
