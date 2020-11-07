var  wall, thickness;
var speed, bullet, weight;

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 30, 10);
  bullet.shapeColor="white"
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22, 83)
  wall = createSprite(1200,200,60, thickness, height/2)
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);


  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}