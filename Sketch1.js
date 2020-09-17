var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 50, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 3;
  movingRect = createSprite(200, 600, 80, 50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -3;

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);  
  console.log(movingRect.x - fixedRect.x)
  if(isTouching(movingRect, fixedRect)){
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";

  }
  
  bounceOff(fixedRect, movingRect); 
  
  drawSprites();
}

