var spaceship,spaceshipImage;
var backGround,backgroundImage;
var stone,stoneImage;
var score;
function preload(){
  
spaceshipImage=loadImage("spaceship.jpg")
backgroundImage= loadImage("background.jfif") 
stoneImage=loadImage("stone.jpg")  
  
}

function setup(){
createCanvas(600,600)  

backGround= createSprite(300,300);
backGround.addImage("building",backgroundImage);
backGround.velocityY=1;  
}

function draw(){
  
drawSprites();
}

