
var monkey , monkeyRun;
var banana,bananaImg, obs, obsImg;
var ground,grnd;
//var FoodGroup, obstacleGroup;
//var score;

function preload(){
  
  
  monkeyRun =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImg = loadImage("banana.png");
  obsImg = loadImage("obstacle.png");
 
  grnd=loadImage("ground2.png")
}



function setup() {
createCanvas(500,200);
  
ground=createSprite(400,170,800,10);  
ground.addImage(grnd);
ground.shapeColor="lightGreen";
ground.velocityX=-4;
ground.x=ground.width/2;
  
monkey=createSprite(50,170,50,75);
monkey.addAnimation("running",monkeyRun);
monkey.scale=0.1;
  
survive=0;
}


function draw() {
background(World.mouseY);
monkey.collide(ground);
  
if (ground.x < 0){
  ground.x = ground.width/2;
}
  
//console.log(ground.x);
  
if(keyDown("space")&&monkey.y>=125){
  monkey.velocityY=-11;
}
  monkey.velocityY=monkey.velocityY+0.5;
drawSprites();
  
survive=survive+Math.round(getFrameRate()/60);
fill("lightGreen")
text("Survival Time = "+survive,370,25);
  
createObs();
createBananas(); 
}

function createObs(){
  if(frameCount%120===0){
  obs=createSprite(600,150);
  obs.addImage(obsImg);
  obs.scale=0.12;
  obs.velocityX=-3;
  }
}

function createBananas(){
  if(frameCount%70===0){
  banana=createSprite(500,80);
  banana.addImage(bananaImg);
  banana.scale=0.13;
  banana.velocityX=-5;
  banana.y=Math.round(random(50,90))
  }
}




