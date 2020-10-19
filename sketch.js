var fixedRect, movingRect;
var gameobj1, gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameobj1=createSprite(200,100,50,50);
gameobj2=createSprite(900,100,30,30)
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobj1.velocityX=4;
  gameobj2.velocityX=-4;
}

function draw() {
  background(0,0,0);  
bounce(gameobj1,gameobj2);
  bounce(movingRect,fixedRect);
  drawSprites();
}