/*Welcome to Mini_ex4. This weeks exercise is about
data capturing, a very controversial thing in modern time.
Start by 'fold all', Go to Edit/Folding/Fold all (Top left)*/

var hand;
var handImage;
var aisle;
var chips;

function preload() {
  handImage = loadImage('Assets/Hand.png');
  aisle = loadImage('Assets/Aisle.png');

}

function windowResized() {
  setup();
  //If window is resized: run setup once more to accomodate new screen size
  }

function setup() {
  createCanvas(900, 900);
  /*Here I setup the canvas size. Its depended on the windows width and height*/
  image(aisle, 0, 0)

  chips = createSprite(100,100);
  chips.addImage(loadImage('Assets/chips.png'));

  }


function draw() {
  drawSprites();
  hand = createSprite(mouseX, mouseY);
  hand.addImage(handImage);

  drawSprites();

}
