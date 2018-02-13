var img;
var img1;
var img2;
var a = 0
//Here i prepare the program for incoming variables

function preload() {
  img = loadImage('Assets/loading.jpg');
  img1 = loadImage('Assets/Error2.png');
  img2 = loadImage('Assets/Error3.png');
  //Here I preload pictures before the program is ran so
  //they are ready to be displayed. I also assign each
  //of them to their own varable
  }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  //Here I setup the canvas size. Its depended on the
  //size of the window of the browser in which it is
  //ran. Minus 5 so the scrollbars doesnt trigger
  background(img);
  //The background is drawn and set to fill the screen
  //from (0,0). The size is defined by the canvas size
  textSize(32);
  textAlign(CENTER);
  text('Loading...', width/2, height/1.3);
  fill(0);
  //The text 'Loading...' is drawn. Its centered from
  //the reference point which is defined by the background
  //image size. Lastly its filled with the color black
  }

function windowResized() {
  resizeCanvas(windowWidth-5, windowHeight-5);
  //Here the program is told that whenever the window
  //is resized, resize the canvas to match. Minus 5 so
  //the scrollbars doesnt trigger
  background(img);
  textSize(32);
  textAlign(CENTER);
  text('Loading...', width/2, height/1.3);
  fill(0);
  //The text 'Loading...' is drawn. Its centered from
  //the reference point which is defined by the background
  //image size. Lastly its filled with the color black
  }

function mousePressed() {
  if (a == 0) {
    image(img1, mouseX-126, mouseY-41);
    a = a+1
    //If the mouse is pressed the first time: Place
    //image1 at the mousecoordinates - a value that
    //makes it centered. Then add 1 to the variable a.
  } else {
    image(img2, mouseX-130, mouseY-40)
    //If the mouse is pressed any other time: Place
    //image2 at the mousecoordinates - a value that
    //makes it centered.
  }
  }
