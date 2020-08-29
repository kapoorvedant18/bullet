var wall,thickness
var bullet,weight,speed
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColour="black";
  bullet=createSprite(800,500,10,10);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(0,0,0);
  bullet.Velocity.X = 3;
  if (bullet.Collide(wall)) {
   bullet.Velocity.x=0;
  }
  drawSprites();
  }
  
