/* Title: Survivability

Welcome to Mini_ex6. This weeks exercise is about
generativity. A program running bound only by certain rules.
With this comes some amount of uncertainty in the result.*/

var lifeform = [];
  //The essential class of the program.

function windowResized() {
  setup();
  //If window is resized: run setup once more to accomodate new screen size
  }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  /*Here I setup the canvas size. Its depended on the windows width and height*/
  for (let i=0; i<100; i++) {
    lifeform[i] = new lifeforms();
    //Draw 100 lifeforms on the canvas
   }
}

function draw() {
  background(0);
    //draw the black background
  for (let i=0; i<100; i++) {
    lifeform[i].display();
    lifeform[i].grow();
    //For every lifeform(1-100) run the .display and .grow.
    for (let j=0; j<100; j++){
      if (lifeform[i] != lifeform[j] && lifeform[i].intersects(lifeform[j])) {
        //check if lifeform[i] is intersecting with lifeform[j], as long as
        //these are not the same. (if not, result: constant flashing)
        if(lifeform[i].radius > lifeform[j].radius) {
        //compare [i].radius with [j].radius.
          lifeform[j].r = lifeform[i].r;
          lifeform[j].g = lifeform[i].g;
          lifeform[j].b = lifeform[i].b;
          // [i] wins and dictates [j]'s color
        } else {
          lifeform[i].r = lifeform[j].r;
          lifeform[i].g = lifeform[j].g;
          lifeform[i].b = lifeform[j].b;
          // [j] wins and dictates [i]'s color
        }
      }
    }
  }
}

function lifeforms() {
  this.x = random(width);
    //assign a random x coordinate
  this.y = random(height);
    //assign a random y coordinates
  this.radius = random(10, 15);
    //assign a random radius between 10 and 15
  this.r = random(255);
    //assign a random red value
  this.g = random(255);
    //assign a random green value
  this.b = random(255);
    //assign a random blue value

  this.display = function() {
    noStroke();
      //remove the stroke
    fill(this.r, this.g, this.b,200);
      //fill it with the random r,g and b values. add 200 alpha (transparency)
    ellipse(this.x, this.y, this.radius * 2);
      //draw ellipse with random x and y coordinates as well as the random radius
  };

  this.grow = function() {
    this.radius += random(0.02,0.05);
    //grow the radius by a random amount between 0.02 and 0.05.
    //making it random makes it a little unpredictable to see what color 'wins'
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
      //declare the variable d as the distance between one lifeforms center and anothers.
    if (d < this.radius + other.radius) {
      return true;
      //if d is less than the two lifeforms radii added, return true
    } else {
      return false;
      //else return false
    }
  };
}
