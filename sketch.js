var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,15);

  wall = createSprite(900,200,thickness,height/2);


  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
}

function draw() {
  background(255,255,255);
  
 bullet.velocityX = speed;
 
 if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;

  var damage = 0.5* weight* speed* speed/ (thickness* thickness* thickness);
  if(damage>10){

    bullet.shapeColor = ("green");
  }

 else if(damage<10){

  bullet.shapeColor = ("red");
 }
}
  drawSprites();
}

function hasCollided(lbullet,lwall){
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x
 if(bulletRightEdge >= wallLeftEdge){
   return true;
 }

 return false;
}