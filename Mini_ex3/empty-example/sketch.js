/*Welcome to Mini_ex3. This exercises theme is Throbbers.
For an easier reading experience. Start by folding everything.
Edit/folding/fold all (Upper left)*/

var rotationSpeed = 0;
  //Rotation speed of the throbber.
  //Is defined more in function draw()
var n = 0;
  //Pulse direction: 0 outwards, 1 inwards
var s = 30;
  //Placement of circles that is off x and y axis
var b = 60;
  //Placement of circles on x and y axis
var bmax = 100;
  //max pulse distance
var bmin = 60;
  //minimum pulse distance; same as b.
var speed = 0.7;
  //Pulse speed

function windowResized() {
  setup();
  //If window is resized: run setup once more
  //to accomodate new screen size
  }

function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  /*Here I setup the canvas size. Its depended on the
  size of the window of the browser in which it is
  ran. Minus 5 so the scrollbars doesnt trigger*/
  }

function draw() {
  background(0);
    //background color black
  translate(windowWidth/2, windowHeight/2)
    //Set the reference point to the middle of the window.
  rotationSpeed += 0.015
    //0.015 is added to the rotationSpeed every frame
  rotate(rotationSpeed);
    //rotate every circle
  circle(0,-b,185,95,210); //1
  circle(s,-s,255,68,58); //2
  circle(b,0,254,293,2); //3
  circle(s,s,255,208,2); //4
  circle(0,b,80,204,38); //5
  circle(-s,s,19,254,244); //6
  circle(-b,0,35,288,285); //7
  circle(-s,-s,55,43,228); //8
  circle(-s,s,19,254,244); //6
  //All circles with the respective color codes and placements

  if(n == 0) {
    s+=speed
    b+=speed
    //If pulse direction = 0, add to distance
  } else if (n==1) {
    s-=speed
    b-=speed
    //If pulse direction = 1, decrease distance
    }

    if (b>=bmax) {
      n=1
      //Change pulse direction when bmax is hit
    } else if(b<=bmin) {
      n=0
      //Change pulse direction when bmin is hit
}

}
function circle(x,y,r,g,b){
  noStroke();
  fill(r,g,b,150);
  ellipse(x,y,75,75);
  /* function 'circle' with x,y as placements
  and rgb as the chosen colors for the circle.
  150 is given as the transparency value.
  75 as the radius*/
}
