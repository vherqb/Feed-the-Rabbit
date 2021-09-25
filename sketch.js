var garden, rabbit;
var gardenImg, rabbitImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges);
  creatApples()

  drawSprites();
}

function creatApples() {
  if (frameCount % 100 === 0) {
    food = createSprite(random(10, 350), 0, 10, 10)
    rand = Math.round(random(1, 2))
    if (rand === 1) {
      food.addImage(appleImg)

    }
    else {
      food.addImage(leafImg)
    }
    food.velocityY = 2
    food.scale = 0.1

  }
}