var bow, arrow, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score = 0;
var blueGroup, redGroup, pinkGroup, greenGroup, arrowGroup;



function preload() {

  backgroundImage = loadImage("background0.png");

  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();

}

function setup() {
  createCanvas(600, 500);

  //creating background
  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImage);
  background.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;




}

function draw() {

  // moving ground
  background.velocityX = -3

  if (background.x < 0) {
    background.x = background.width / 2;
  }



  //moving bow
  bow.y = World.mouseY



  var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon)

  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  // release arrow when space key is pressed
  if (keyWentDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
  }

  if (arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }
  if (arrowGroup.isTouching(blueGroup)) {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }
  if (arrowGroup.isTouching(greenGroup)) {
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }
  if (arrowGroup.isTouching(pinkGroup)) {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1
  }



  drawSprites();
  text("Score: " + score, 270, 30);
}


function redBalloon() {

  var redB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.lifetime = 150;
  redB.scale = 0.1
  redGroup.visible = true;
  redGroup.add(redB)

}

function blueBalloon() {
  var blueB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.lifetime = 150;
  blueB.scale = 0.1;
  blueGroup.visible = true;
  blueGroup.add(blueB)

}

function greenBalloon() {
  var greenB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.lifetime = 150;
  greenB.scale = 0.1;
  greenGroup.visible = true;
  greenGroup.add(greenB);

}

function pinkBalloon() {
  var pinkB = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.lifetime = 150;
  pinkB.scale = 1;
  pinkGroup.visible = true;
  pinkGroup.add(pinkB);

}


// Creating  arrows for bow
function createArrow() {
  arrow = createSprite(480, 100, 5, 10);
  arrow.velocityX = -15;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}