/*Welcome to Mini_ex3. This exercises theme is Throbbers.*/

var i = 0;
var n = 0;
var s = 30;
var b = 60;
var bmax = 120;
var bmin = 60;
var speed = 0.5;

function preload() {
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
  background(0);
  frameRate(60)
  }

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2)
  i += 0.015
  rotate(i);
  cirkel(0,-b,185,95,210);
  cirkel(0,b,255,68,58);
  cirkel(-b,0,254,193,2);
  cirkel(b,0,255,208,2);
  cirkel(-s,-s,80,204,38);
  cirkel(s,s,19,154,244);
  cirkel(-s,s,35,188,185);
  cirkel(s,-s,55,43,228);

  if(n == 0) {
    s+=speed
    b+=speed
  } else if (n==1) {
    s=s-speed
    b=b-speed
  }

  if (b>=bmax) {
  n=1
} else if(b<=bmin) {
  n=0
}

}
function cirkel(x,y,r,g,b){
  noStroke();
  fill(r,g,b,150);
  ellipse(x,y,100,100);

}
