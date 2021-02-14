var movingRect,fixedRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(500, 200, 50, 50);
  movingRect.shapeColor="red";

  rect1=createSprite(100, 100, 50, 50);
  rect1.shapeColor="red";
  rect2=createSprite(200, 100, 50, 50);
  rect2.shapeColor="red";
  rect3=createSprite(300, 100, 50, 50);
  rect3.shapeColor="red";
  rect4=createSprite(400, 100, 50, 50);
  rect4.shapeColor="red";

  //movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2
  //__450____ -400===25+25
  //50===50
}

function draw() {
  background("cyan"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(rect4,movingRect)){
    movingRect.shapeColor="blue";
    rect4.shapeColor="blue";
  }else{
    movingRect.shapeColor="red";
    rect4.shapeColor="red";
  }

  drawSprites();
}


