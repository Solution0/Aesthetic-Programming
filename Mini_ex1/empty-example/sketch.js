var img;
var img1;
var a = 0

function preload() {
  img = loadImage('Assets/loading.jpg');
  img1 = loadImage('Assets/Error2.png');
  img2 = loadImage('Assets/Error3.png');
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
  if (a == 0) {
    image(img1, mouseX-126, mouseY-41);
    a = a+1
  } else {
    image(img2, mouseX-130, mouseY-40)
  }
}
