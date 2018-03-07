/*Welcome to Mini_ex4. This weeks exercise is about
data capturing, a very controversial thing in modern time.
Start by 'fold all', Go to Edit/Folding/Fold all (Top left)*/

var Momondo;
  //Creates the variable for our background, screenshot from Mamanda.
var button;
  var button1;
  var button2;
  var button3;
  var button4;
  var button5;
  //creates the variable for our buttons.
var Popup;
  //Creates the variable for the Popup picture.
var value;
  //Creates the value of the price on the flight.
var Likeness = 1;
  //Creates the variable for declaring 'How much you wanna go on this vacation'

function windowResized() {
  setup();
  //If window is resized: run setup once more to accomodate new screen size
  }

function preload() {
  Momondo = loadImage('Assets/Momondo.JPG');
    //Loads the background Mamanda image.
  Popup = loadImage('Assets/popup.PNG');
    //Loads the popup image.
 }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
    /*Here I setup the canvas size. Its depended on the
    size of the window of the browser in which it is
    ran. Minus 5 so the scrollbars doesnt trigger*/
  imageMode(CORNER);
    //Sets the imagemode to start from upper left corner.
  image(Momondo,0,0,windowWidth-5, windowHeight-5);
    //Places the background image. Makes it as big as the canvas.
  button = createButton('Go to site');
    button.position(windowWidth/1.67, windowHeight/1.45);
    button.mousePressed(popup);
    //Creates a button that says 'Go to site' and triggers the popup function.
  button = createButton('Go to site');
    button.position(windowWidth/1.67, windowHeight/1.06);
    button.mousePressed(popup);
    //Creates a button that says 'Go to site' and triggers the popup function.
  value = 25 * Likeness
    //Sets the value to be based on the 'Likeness' variable.
  text(value + '$', windowWidth/1.67, windowHeight/1.5);
    //Places the value with a dollar sign at the end.
  text(value + '$', windowWidth/1.67, windowHeight/1.09);
    //Places the value with a dollar sign at the end.
}

function popup() {
  imageMode(CENTER);
    //Sets the reference point on the center of the image.
  image(Popup, windowWidth/2, windowHeight/2.2);
    //Places the Popup image at given coordinates.
  button1 = createButton('1');
    button1.position(windowWidth/2.6, windowHeight/1.95);
    button1.mousePressed(buttonPressed1);
  button2 = createButton('2');
    button2.position(windowWidth/2.3, windowHeight/1.95);
    button2.mousePressed(buttonPressed2);
  button3 = createButton('3');
    button3.position(windowWidth/2.05, windowHeight/1.95);
    button3.mousePressed(buttonPressed3);
  button4 = createButton('4');
    button4.position(windowWidth/1.85, windowHeight/1.95);
    button4.mousePressed(buttonPressed4);
  button5 = createButton('5');
    button5.position(windowWidth/1.68, windowHeight/1.95);
    button5.mousePressed(buttonPressed5);
  }
  //Creates buttons to rate 'How much you wanna go',
  //directs you to functions based on the value of the button.

function buttonPressed1() {
  Likeness += 0.1
    //Increases the likeness variable.
  reset();
    //Runs the reset function.
  }
  function buttonPressed2() {
    Likeness += 0.15
    reset();
  }
  function buttonPressed3() {
    Likeness += 0.25
    reset();
  }
  function buttonPressed4() {
    Likeness += 0.40
    reset();
  }
  function buttonPressed5() {
    Likeness += 0.55
    reset();
  }

function reset() {
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  //Hides all of the Popup buttons
  setup();
  //Runs the setup function. And therefore loops the program.
}
