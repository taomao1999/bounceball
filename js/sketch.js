let ballX;
let ballY;
let bg;
let ballXspeed = 10;
let ballYspeed = 10;

function setup() {
createCanvas (windowWidth,windowHeight);

ballX = random(windowWidth);
ballY = random(windowHeight);
rectMode(CENTER);
imageMode(CENTER);
}
function draw(){
  background(80,80,180);
  rect(mouseX,mouseY,20,70);
strokeWeight(random(0,10))
  stroke(random(255),random(255),random(255));
  ellipse(ballX,ballY,50,50);
  ballX = ballX + ballXspeed;
  ballY = ballY + ballYspeed;
  if (ballX >= windowWidth || ballX <= 0) {
    ballXspeed = ballXspeed * -1;
    }
  if (ballY >= windowHeight || ballY <= 0) {
    ballYspeed = ballYspeed * -1;
  }
    if(dist(mouseX,mouseY,ballX,ballY) < 50){
    ballYspeed = ballYspeed * -1;
    ballXspeed = ballXspeed * -1;
  }



}
