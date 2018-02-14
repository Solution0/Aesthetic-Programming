var level;
  //Level bagground
var isaac;
  //Isaac character
var x = 0;
  //movement in x-axis
var y = 0;
  //movement in y-axis
var movementSpeed = 5;
  //Variable that controls the movement speed of Isaac
var FramesPS = 100;
  //The amount of frames shown per second


function preload() {
level = loadImage('Assets/level.png')
isaac = loadImage('Assets/Isaac.png')
  }

function windowResized() {
  setup();
  //Run setup once more, to accomodate new screen size
  }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  //Here I setup the canvas size. Its depended on the
  //size of the window of the browser in which it is
  //ran. Minus 5 so the scrollbars doesnt trigger
  frameRate(FramesPS)
  imageMode(CORNER)
  background(level);

  }


function draw() {
  imageMode(CORNER)
  background(level);
  imageMode(CENTER)
  image(isaac, width/2 + x, height/2 + y, 150, 150 );

  if (keyIsDown(DOWN_ARROW)) {
    y += movementSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= movementSpeed;
      }
    if (keyIsDown(LEFT_ARROW)) {
      x -= movementSpeed;
      }
    if (keyIsDown(RIGHT_ARROW)) {
      x += movementSpeed;
      }


}


function mousePressed() {

  }
