function setup() {
  createCanvas(500, 500);
  background(200);
  image = loadImage("Dog.gif");
}

function draw() {
  fill(20, 20, 255);
  rect(325,400,150,50,20);
  //Rect.x-coordinates, y-coordinates, lenght, height, corners

  fill(255, 255, 255);
  textSize(32);
  text('Upgrade', 335, 435);

  image(img, 50, 50);
}
