var canvas,bg;
var together;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    canvas=createSprite(375,400,20,20);
    canvas.addImage("g",bg);

    tom=createSprite(600,675,20,20);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.12;

    jerry=createSprite(200,675,20,20);
    jerry.addAnimation("cheese",jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(255);
    

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
       tom.velocityX=0;
       tom.addAnimation("tomLastImage",tomImg3);
       tom.x=250;
       tom.scale=0.12;
       tom.changeAnimation("tomLastImage");
       jerry.addAnimation("jerryLastImage",jerryImg3);
       jerry.scale=0.1;
       jerry.changeAnimation("jerryLastImage");

    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing",jerryImg2);
      jerry.frameDealy = 25;
      jerry.changeAnimation("jerryTeasing");
  }



}
