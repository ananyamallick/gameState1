var GAMESTATE = 1;

var playBt , playBtimg;
var s1 , s2 , s3 , s4 , s5 , s6 ,s7 , s8 , s9 , s10 , s11 , s12 ,s13 ,s14 , s15 , s16 , s17, s18 , s19 , s20 ;
var s21 , s22  , s25 , s26 , s27 , s28 , s29 , s30 , s31;
var bg , BG1 , bgimg;
var sk1 , sk1img ;
function preload(){

bg = loadImage("s6.jpeg");
playBtimg = loadImage("play.png");
//bgimg = loadImage(");
   //sk1img = loadImage("");
}

function setup() {
  createCanvas(1000 , 650);
  /*
  s1 = createSprite(50,300,20 ,450);
  s2 = createSprite(460,520,840 ,20);
  s3 = createSprite(550,80,840 ,20);
  s4 = createSprite(960,300,20 ,450);
  s5 = createSprite(100,350,100 ,20);
  s6 = createSprite(240,425,180 ,20);
  s7 = createSprite(190,175,100 ,20);
  s8 = createSprite(150,220,20 ,100);
  s9 = createSprite(280,260,250 ,20);
  s10 = createSprite(370,340,100 ,20);
  s11 = createSprite(320,380,20 ,100);
  s12 = createSprite(230,300,20 ,100);
  s13 = createSprite(325,170,20 ,180);
  s14 = createSprite(410,480,20 ,100);
  s15 = createSprite(410,300,20 ,100);
  s16 = createSprite(590,120,20 ,100);
  s17 = createSprite(460,175,100 ,20);
  s18 = createSprite(500,215,20 ,100);
  s19 = createSprite(540,260,100 ,20);
  s20 = createSprite(600,300,20 ,100);
  s21 = createSprite(690,350,200 ,20);
  s22 = createSprite(770,170,200 ,20);
  s23 = createSprite(780,260,20 ,170);
  s24 = createSprite(680,220,20 ,100);
  s25 = createSprite(510,390,20 ,90);
  s26 = createSprite(600,430,200 ,20);
  s27 = createSprite(690,400,20 ,80);
  s28 = createSprite(600,480,20 ,80);
  s29 = createSprite(870,440,200 ,20);
  s30 = createSprite(860,300,20 ,100);
  s31 = createSprite(900,250,100 ,20);
  */
  playBt = createSprite(900 , 570 , 20,20);
  playBt.addImage(playBtimg);
  playBt.scale =0.4;
  
  //sk1 = createSprite(400, 200, 50, 50);
  //sk1.addImage(sk1img);
}


function draw() {
  background(bg);  
  textSize(30);
  fill("white");
  text("DEATH_ESCAPES" , 370 , 430),
  drawSprites();
}