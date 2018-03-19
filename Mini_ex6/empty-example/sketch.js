/*Welcome to Mini_ex4. This weeks exercise is about
data capturing, a very controversial thing in modern time.
Start by 'fold all', Go to Edit/Folding/Fold all (Top left)*/

//Title: 100:1 (the chance of survival, number will be changed)

var StartSize = 25;
var lifeform = [];

function windowResized() {
  setup();
  //If window is resized: run setup once more to accomodate new screen size
  }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  /*Here I setup the canvas size. Its depended on the windows width and height*/
  for (let i=0; i<100; i++) {
    lifeform[i] = new lifeforms();
    background(0);
   }
}

function draw() {
  background(0);
  for (let i=0; i<100; i++) {
    lifeform[i].display();
    lifeform[i].grow();
    for (let j=0; j<100; j++){
      if (lifeform[i] != lifeform[j] && lifeform[i].intersects(lifeform[j])) {
        if(lifeform[i].radius > lifeform[j].radius) {
          lifeform[j].r = lifeform[i].r;
          lifeform[j].g = lifeform[i].g;
          lifeform[j].b = lifeform[i].b;
        } else {
          lifeform[i].r = lifeform[j].r;
          lifeform[i].g = lifeform[j].g;
          lifeform[i].b = lifeform[j].b;
        }
      }
    }
  }
}

function lifeforms() {
  this.x = random(width);
  this.y = random(height);
  this.radius = random(10, 15);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.changeColor = function() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  };
  this.display = function() {
    stroke(255);
    fill(this.r, this.g, this.b,100);
    ellipse(this.x, this.y, this.radius * 2);
  };

  this.grow = function() {
    this.radius += random(0.020,0.050);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.radius + other.radius) {
      return true;
    } else {
      return false;
    }
  };
}
