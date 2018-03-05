/*Welcome to Mini_ex4*/

var Momondo;
var button;
  var button1;
  var button2;
  var button3;
  var button4;
  var button5;
var Popup;
var value;
var Likeness = 1;

function windowResized() {
  setup();
  //If window is resized: run setup once more
  //to accomodate new screen size
  }

function preload() {
  Momondo = loadImage('Assets/Momondo.JPG');
  Popup = loadImage('Assets/popup.PNG');
 }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  /*Here I setup the canvas size. Its depended on the
  size of the window of the browser in which it is
  ran. Minus 5 so the scrollbars doesnt trigger*/
  imageMode(CORNER);
  image(Momondo,0,0,windowWidth-5, windowHeight-5);
  button = createButton('Go to site');
    button.position(windowWidth/1.67, windowHeight/1.45);
    button.mousePressed(popup);
  button = createButton('Go to site');
    button.position(windowWidth/1.67, windowHeight/1.06);
    button.mousePressed(popup);
  value = 25 * Likeness
  text(value + '$', windowWidth/1.67, windowHeight/1.5);
  text(value + '$', windowWidth/1.67, windowHeight/1.09);

}

function popup() {
  imageMode(CENTER);
  image(Popup, windowWidth/2, windowHeight/2.2);
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

function buttonPressed1() {
  Likeness += 0.4
  reset();
  }
  function buttonPressed2() {
    Likeness += 0.5
    reset();
  }
  function buttonPressed3() {
    Likeness += 0.65
    reset();
  }
  function buttonPressed4() {
    Likeness += 0.8
    reset();
  }
  function buttonPressed5() {
    Likeness += 0.95
    reset();
  }

function reset() {
  button1.hide();
      button2.hide();
      button3.hide();
      button4.hide();
      button5.hide();
  setup();
}
