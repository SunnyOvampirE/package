var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.velocityX = speed;
}


function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var de = 0.5*weight*speed*speed/22509;
    console.log(de);
    if (de > 180)
    {
      car.shapeColor=color(255,0,0);
    }
    if (de<180 && de>100)
    {
      car.shapeColor= color(230,230,0);
    }
    if (de<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }

}
