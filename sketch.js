var thickness,wall;
var bullet, speed,weight


function setup() {
  createCanvas(800,800);
  
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,20);
  wall = createSprite(750,200,thickness,height);
  thickness = random(22,63);
}

function draw() {
  background(100,100,100);  
 
  damage = (0.5*speed*speed*weight)/thickness**3;
  
  bullet.velocityX = speed/10;
  bullet.shapeColor = (rgb(250,250,250));
  wall.shapeColor = (rgb(80,80,80));


  if(wall.x - bullet.x <= (bullet.width/2 + wall.width/2) && damage <= 10   )
  {
    wall.shapeColor = (rgb(1,150,1)); 
    bullet.x = wall.x - wall.width;
    
  }


  if ((wall.x - bullet.x <= (bullet.width/2 + wall.width/2) && damage>10))
  {
    wall.shapeColor = ("blue"); 
    bullet.x = wall.x - wall.width;
  }




  
  
  drawSprites();
}