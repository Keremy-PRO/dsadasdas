var caja;

function setup() { // configuración
  createCanvas(600, 400);
  caja=createSprite(200,200,30,30);
}

function draw() { // dibujar
  background("black");
  drawSprites();

  if(keyIsDown(RIGHT_ARROW)){
    caja.position.x=caja.position.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    caja.position.x=caja.position.x - 5;
  }
}