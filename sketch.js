
var bg , bgImg
var snow , snowImg;
var snow1 , snowImg1;
var snowGroup ,snow1Group

function preload(){

  snowImg = loadImage("snow5.webp");
  snowImg1 = loadImage("snow4.webp");
  bgImg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(1000,580);

  bg = createSprite(502, 240);
  bg.addImage(bgImg);
  bg.scale = 1;

  snowGroup = new Group();
  snow1Group = new Group();
}

function draw() {
  background(0);  

  createSnow();
  createSnow_1();

  drawSprites();
}

function createSnow(){
  if (World.frameCount % 30 == 0) {
  var snow = createSprite(Math.round(random(10, 990),-10, 10, 10));
      snow.addImage(snowImg);
      snow.scale = 0.07;
      snow.velocityY = 7;
      snowGroup.add(snow);
   if (snow.y >570){
    snow.velocityY = 0;
   }
   snow.lifetime = 180;
      }
}
function createSnow_1(){
  if (World.frameCount % 20 == 0) {
  var snow1 = createSprite(Math.round(random(10, 990),-10, 10, 10));
      snow1.addImage(snowImg1);
      snow1.scale = 0.05;
      snow1.velocityY = 5;
      snow1Group.add(snow1);
   if (snow1.y >570){
    snow1.velocityY = 0;
   }
   snow1.lifetime = 180;
      }
}