var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  // Cargar la imagen del camino
  pathImg = loadImage("path.png");
  // Cargar la animación del niño
  boyImg = loadAnimation("boy1.png", "boy2.png");
}

function setup(){
  createCanvas(400,400);

  // Crear sprite del camino y agregar la imagen
  path = createSprite(200, 200);
  path.addImage(pathImg);
  // Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.velocityY = 4;
  path.scale = 1.2;

  // Crear sprite del niño y agregar la animación
  boy = createSprite(200, 300, 30, 30);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.08;

  // Crear límite izquierdo y hacerlo invisible
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  // Crear límite derecho y hacerlo invisible
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // El niño se mueve en el eje X con el mouse
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);

  // Colisión del niño con los límites derecho e izquierdo invisibles
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Código para reiniciar el fondo
  if (path.y > 400) {
    path.y = height/2;
  }
  
  drawSprites();
}