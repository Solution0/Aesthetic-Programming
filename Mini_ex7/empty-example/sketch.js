//CODE IS LAW
var move, drop, broll, rotation, cold, cl, dropst, movedst;

function setup() {
  var spacing = 36.36363636363636;
  createCanvas(400,400);
  Paragraph = createP('The ten commandments:');
    Paragraph.position(450,-10);
  resetbut = createButton('Reset');         //Creates button to run Setup
    resetbut.position(450,spacing);
    resetbut.mousePressed(setup);
  movebut = createButton('Move');           //Creates button to run txtmove
    movebut.position(450,2*spacing);
    movebut.mousePressed(txtmove);
  colbut = createButton('Change Color');    //Creates button to run txtcol
    colbut.position(450,3*spacing);
    colbut.mousePressed(txtcol);
  growbut = createButton('Grow');           //Creates button to run txtgrow
    growbut.position(450,4*spacing);
    growbut.mousePressed(txtgrow);
  dropbut = createButton('Drop');           //Creates button to run txtdrop
    dropbut.position(450,5*spacing);
    dropbut.mousePressed(txtdrop);
  rollbut = createButton('Do a barrelroll');//Creates button to run txtroll
    rollbut.position(450,6*spacing);
    rollbut.mousePressed(txtroll);
  greetbut = createButton('Greet me');      //Creates button to run txtgreet
   greetbut.position(450,7*spacing);
   greetbut.mousePressed(txtgreet);
  moodbut = createButton('Change mood');    //Creates button to run txtmood
    moodbut.position(450,8*spacing);
    moodbut.mousePressed(txtmood);
  coldbut = createButton('Get cold');       //Creates button to run txtcold
    coldbut.position(450,9*spacing);
    coldbut.mousePressed(txtcold);
  fontbut = createButton('Change font');    //Creates button to run txtfont
    fontbut.position(450,10*spacing);
    fontbut.mousePressed(txtfont);
  txt = new Text(color(255),32,5,width/2,height/2,'txt.cmd','Courier'); // See class Text in line 180
  // These following variables are set to 0 to get the Reset button to work
  rotation=0;
    move=0;
    drop=0;
    broll=0;
    cold=0;
    cl=0;
    dropst=0;
    movedst=0;
}

function draw() {
  background(0);
  txt.display();

  //Move
  if (move == 1) {
    txt.xpos+=txt.speed;
    txt.text='Moving';
    if (txt.xpos > width){
      txt.speed*=-1;
    } else if(txt.xpos<0){
      txt.speed*=-1;
    }
  }

  //Drop
  if (drop == 1) {
    if (txt.ypos < height) {
      txt.ypos+=10;
      txt.text='Dropping'
    } else if (txt.ypos = height) {
      drop = 0;
      if (cl == 1 && drop == 1){
        txt.text='Hurt but Pretty';
      } else {
        txt.text='Hurt';
      }
    }
  }

  //Barrel roll
  if (broll == 1 ){
    push();
    txt.xpos=0;
    txt.ypos=0;
    txt.rotation += 50;
    pop();
  } else if (broll == 2) {
    txt.xpos=width/2;
    txt.ypos=height/2;
    broll=0;
  }

  // Get cold
  if(cold ==1){
    txt.xpos += random(-2,+2);
    txt.ypos += random(-2,+2);
    txt.getcolor = color(0,191,255);
    txt.text='Freezing'
  }
}

function txtmove(){ //Moves the text based on var move, changes var movedst
  if (move == 0){
    move = 1;
    movedst=0;
  } else{
    txt.text = 'Stopped';
    move = 0;
  }
}

function txtcol(){ //Changes the text color, changes var cl
  push()
  colorMode(HSB)
  txt.getcolor = color(random(360),155,150);
  cl = 1;
  pop()
  if (dropst == 1) {
    txt.text='Hurt but Pretty';
  } else {
    txt.text='Pretty';
  }
}

function txtgrow(){ //Changes the text size
  txt.size += 6;
  txt.text='Big';
}

function txtdrop(){ //Drops the text until y position = height. Changes var dropst
  if (drop == 0){
    drop = 1;
    dropst = 1;
  } else{
    drop = 0;
  }
}

function txtroll(){ //Rotates text, until second button press
  if (broll == 0){
    broll = 1;
  } else{
    broll = 2;
    txt.rotation = 0;
    txt.text='Dizzy';
  }
}

function txtgreet(){ //Changes text to various greetings for each button press
  var greeting=['Hi','Hello','Hejsa','你好','Bonjour','Hola','G\'day','こんにちは','여보세요','Yo'];
  txt.text = greeting[floor(random(0,9.99))];
}

function txtmood() { //Displays different emoji's showing different moods
  var moodarray = ['≧◡≦','ಥ_ಥ','(ノಠ益ಠ)ノ彡┻━┻','☉▵☉凸','(●´ω｀●)','(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧','(◕︵◕)','(￣。￣)～ｚｚｚ ','(▰˘◡˘▰)','♪┏ ( ･o･) ┛♪\n♪┗ (･o･ ) ┓♪'];
  txt.text = moodarray[floor(random(0,9.99))];
}

function txtcold(){ //Text "jiggles" until second button press
  if (cold == 0){
    cold = 1;
  } else{
  cold = 0;
  txt.text='Frozen';
}
}

function txtfont(){ //Changes through different text fonts
  var font = ['Impact','Helvetica','Comic Sans MS','Papyrus','Calibri','Times New Roman','Webdings','Verdana','Avant Garde','Wingdings'];
  txt.font = font[floor(random(0,9.99))];
}

class Text{
  constructor(getcolor,size,speed,xpos,ypos,text,font){
    this.getcolor = getcolor;
    this.size = size;
    this.speed = speed;
    this.xpos = xpos;
    this.ypos = ypos;
    this.text = text;
    this.rotation = 0;
    this.font = font;
  }
  display(){
    if(broll==1) {
      translate(height/2,width/2);
    }
    rotate(this.rotation);
    fill(this.getcolor);
    textFont(this.font);
    textSize(this.size);
    textAlign(CENTER);
    text(this.text,this.xpos,this.ypos);
  }

}
