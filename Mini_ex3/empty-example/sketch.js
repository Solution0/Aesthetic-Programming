/*Welcome to Mini_ex3. This exercises theme is Throbbers.*/

var rotationSpeed = 0;
var n = 0;
var s = 30;
var b = 60;
var bmax = 100;
var bmin = 60;
var speed = 0.7;

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
  rotationSpeed += 0.015
  rotate(i);
  cirkel(0,-b,185,95,210); //1
  cirkel(0,b,80,204,38); //5 255,68,58);
  cirkel(-b,0,35,288,285); //7 254,193,2);
  cirkel(b,0,254,293,2); //3 255,208,2);
  cirkel(-s,-s,55,43,228); //8 80,204,38);
  cirkel(s,s,255,208,2); //4 19,154,244);
  cirkel(-s,s,19,254,244); //6 35,188,185);
  cirkel(s,-s,255,68,58); //2 55,43,228);

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
  ellipse(x,y,75,75);

}
