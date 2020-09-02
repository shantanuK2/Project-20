var car,wall,speed,weight,deformation,teext

function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(100, 200, 50, 30);
  wall = createSprite(1550,200,10,500)
  car.velocityX = speed
  deformation = 0
  teext = "blank"
}

function draw() {
  background(255,255,255);  
  if (car.collide(wall)) {
    car.velocityX = 0
    deformation = 0.5*weight*speed*speed/22509
  }
  if (deformation<80){
    car.shapeColor = color(0,255,0)
    teext = "(" + "good" + ")"
  }
  if (deformation<180 && deformation>80) {
    car.shapeColor = color(230,230,0)
    teext = "(" + "average" + ")"
  }
  
  if (deformation>180) {
    car.shapeColor = color(255,0,0)
    teext = "(" + "lethal" + ")"
  }
  if (deformation>0) {
  text ("Deformation :" + round(deformation) + teext,200,200)
  }
  car.collide(wall)
  drawSprites();
}