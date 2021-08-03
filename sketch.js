var backgroundImg

function preload(){
  backgroundImg = loadAnimation("snow1.jpg","snow2.jpg", "snow3.jpg" )
}

function setup() {
  createCanvas(800,800);
  bg = createSprite(255, 200, 800, 800);
bg.addAnimation("snow", backgroundImg)
  
}

function draw() {
  background("white");  
  drawSprites();
}