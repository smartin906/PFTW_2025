//variables start here
let rectX = 0;
let rectWidth = 75;
let rectY = 0;
let rectHeight = 75;
let clickCount = 0;
let speed;

function setup() {
  createCanvas(500, 500);
  alert('click on the square!');
  rectY = random(height - rectHeight);
  // rectX = random(width - rectWidth);
  speed = random(1, 5);
}

function draw() {
  background(155);
  // textAlign(CENTER);
  // textSize(32);
  // fill('white');
  // text('click on the square!', 250, 50);
  drawShape();
  rectX += speed;
  if(rectX > 500 - rectWidth) { //wasn't able to use 'width' here//
    noLoop();
    textSize(32);
    textAlign(CENTER);
    text('your score was ' + clickCount, 250, 250);
  }
}

function mousePressed() {
  if ((mouseX >= 0 && rectX <= rectX + rectWidth) && (mouseY >= 0 && rectY + rectHeight)) 
    {clickCount++;}

}

function drawShape() {
  fill('orange');
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight);
}