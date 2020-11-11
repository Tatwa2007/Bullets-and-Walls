var bullet;
var wall;
var speed;
var weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {
  background(255,255,255);  
  if(hascollided(bullet,wall)){
bullet.velocityX = 0;
damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  bullet.shapeColor="red";
}
if(damage<10 && damage>5){
  bullet.shapeColor="green";
}

/*if(damage<100){
  bullet.shapeColor="green";
}*/

  }
  drawSprites();
}

function hascollided(p1,p2){
  bulletRightEdge = p1.x + p1.width;
  wallLeftEdge = p2.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}