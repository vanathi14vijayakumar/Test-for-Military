var bullet,wall;
var speed, weight;
var thickness;


function setup() {
  createCanvas(1200,400);

  speed=random(223 , 321.);
  weight=random(30 , 52)
  thickness = random(22 , 83)
  
	bullet=createSprite(50, 200, 50,7);   
	 bullet.velocityX = speed;
	bullet.shapeColor="white";


  
  	wall=createSprite(1100,200, thickness, height/2)
  	wall.shapeColor="black"

}

function draw() {
  background("grey")
  

  if(isCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness* thickness* thickness)

    if(damage >10){
      wall.shapeColor = "red";
    }

    if(damage < 10){
      wall.shapeColor = "green";
    }

  }
  bullet.collide(wall);
  drawSprites();
}

function isCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;

  if(bulletRightEdge > wallLeftEdge){
    return true;
  }
  return false;
}