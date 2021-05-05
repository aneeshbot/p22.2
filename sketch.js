

var fairy , star;
var fairyImage

var starImage
var background2
var backgroundImage

function preload()
{

  backgroundImage = loadImage('images/starNight.png');
  starImage = loadImage('images/star.png');
  fairyImage =loadImage('images/fairy.png');
}

function setup() {
	createCanvas(800, 800);
background2=createSprite(400,400,800,800)
background2.addImage('background', backgroundImage);

star=createSprite(700,100,20,20)
star.addImage('star1',starImage)
star.scale=0.3

fairy=createSprite(700,650,20,20)
fairy.addImage('fairy1',fairyImage)
fairy.scale=0.1
}


function draw() {
  background("black");

  if(keyCode === LEFT_ARROW){
    fairy.velocityX = -5
  
  }
  if(keyCode === RIGHT_ARROW){
    fairy.velocityX = 5
  
  }
  if(keyCode === DOWN_ARROW){
    star.velocityY = 5
  
  }


  drawSprites();
}
