var level;
  //Level bagground
var isaac;
  //Isaac character
var knife;
  //This is Mom's knife. My temporary 'projectile'
var knifescale = 5;
  //The scaling of the knife. Lower means bigger.
var x = 0;
  //movement in x-axis
var y = 0;
  //movement in y-axis
var movementSpeed = 5;
  //Variable that controls the movement speed of Isaac
var FramesPS = 100;
  //The amount of frames shown per second
var Isaacx;
  //Isaac's x position
var Isaacy;
  //Isaac's y position
//In the above text i declare my variabels for the program

function preload() {
  level = loadImage('Assets/level.png')
  //This is the levels image running in the bagground.
  //Without doors so far.
  isaac = loadImage('Assets/Isaac.png')
  knife = loadImage('Assets/Knife.png')
  //this is the picture of Isaac, our primary
  //character. This is the pixelated version.
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
  Isaacx = width/2 + x;
    //Defining Isaac's x position in math
  Isaacy = height/2 + y;
    //Defining Isaac's y position in math

  image(isaac, Isaacx, Isaacy, 150, 150 );

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
    if (keyIsDown(65)) { //a + description
      push();
        //Isolate the next lines of code; until POP
      imageMode(CENTER)
        //Center the picture on the reference point
      translate(Isaacx, Isaacy)
        //Make the reference point to Isaacx, Isaacy
      rotate(radians(90))
        //Rotate img and axis' by 90 degrees???
        //Why it says radians, idk. But it works.
      scale(1.0,-1.0); //Moves it 424/knifescale(5)
      image(knife, 10, -80, knife.width/knifescale, knife.height/knifescale);
        //moves it to look natural and scale it by 'knifescale'(5)
      pop();
        //Stop isolation of code
      }
    if (keyIsDown(83)) { //s
      push();
      imageMode(CENTER)
      translate(Isaacx, Isaacy)
      rotate(radians(180))
      image(knife, 0, -80, knife.width/knifescale, knife.height/knifescale);
      pop();
      }
    if (keyIsDown(68)) { //d
      push();
      imageMode(CENTER)
      translate(Isaacx, Isaacy)
      rotate(radians(90))
      image(knife, 10, -80, knife.width/knifescale, knife.height/knifescale);
      pop();
      }
    if (keyIsDown(87)) { //w
      push();
      imageMode(CENTER)
      translate(Isaacx, Isaacy)
      image(knife, 0, -80, knife.width/knifescale, knife.height/knifescale);
      pop();
      }
  }
