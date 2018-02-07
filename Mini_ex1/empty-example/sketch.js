var img;
var img1;

function preload() {
img = loadImage('Assets/loading.jpg');
img1 = loadImage('Assets/Error2.png');
}


function setup() {
  createCanvas(1920, 985);
  background(img);
  frameRate(3);
}


function draw() {
  textSize(32);
  text('Loading...', 900, 750);
  fill(0);


  textSize(32);
  text('Loading..', 900, 750);

  textSize(32);
  text('Loading.', 900, 750);


}

function mousePressed() {
    image(img1, mouseX, mouseY);
}
