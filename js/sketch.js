var dots = [];
var dSize = 10;
var player,ball, ai;

var txtSize = 10;
var playerScore = 0;
var aiScore = 0;

var go = false;


function setup(){
  createCanvas(800,500);

  for(let y = dSize/2; y < height; y += dSize*2){
    dots.push(createVector(width/2 - dSize/2,y));


    player = new Player();
    ball = new Ball();
    ai = new AI();
    }
  }

function draw() {
  background(0);

if(go){
  ball.edges();
  ball.update();
  player.update();
  ai.update();
  ball.scores();
}
noStroke();
fill(255,100);
drawSquares();
  ai.show();
  player.show();
  ball.show();

  drawScores();
}
function drawScores() {
    let x1 = width/4;
    let x2 = width*3/4;
    let y = txtSize*1.5;

    noStroke();
    fill(255);
    textAlign(CENTER);
    textSize(txtSize);
    text((playerScore), x1,y);
    text((aiScore), x2, y);
}
function drawSquares(){
  for(let i = 0; i<dots.length; i++){
    let x = dots[i].x;
    let y = dots[i].y;

    rect(x,y,dSize,dSize);
  }
}
function keyPressed(){
  go = true;
  if(key == 'w' || keyCode == UP_ARROW){
    player.up();
  }
  else if(key == 's' || keyCode == DOWN_ARROW){
    player.down();
  }
}

function keyReleased(){
  if((key == 'w' || keyCode == UP_ARROW)||(key == 's' || keyCode == DOWN_ARROW)){
    player.stp();
  }
}
