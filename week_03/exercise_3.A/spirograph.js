let rotateBy = 20;

function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
  let button = createButton('change the background color');
    button.position(0, 600);
    button.mousePressed(repaint);
}

function makeArm(largeEllipse, smallEllipse, outTriangle, midTriangle, intTriangle) {
  let alt = Math.round(rotateBy / 360);
  console.log(alt);
  //large ellipse info variables
  noFill();
  stroke(largeEllipse);
  strokeWeight(1);
  ellipse(150, 150 + alt, 100 - alt);
  rotateBy += 30;
  //small ellipse info variables
  noFill();
  stroke(smallEllipse);
  strokeWeight(1);
  ellipse(75, 75 + alt, 50);
  rotateBy += 10;
  // outer triangle variables
  strokeWeight(.5);
  stroke(outTriangle);
  triangle(45 + alt, 90 + alt, 35 + alt, 10 + alt, 90 + alt, 80 + alt);
  rotateBy += 30;
  // mid triangle variables
  strokeWeight(.25);
  stroke(midTriangle);
  triangle(30 + alt, 75 + alt, 58 + alt, 20 + alt, 86 + alt, 75 + alt);
  rotateBy += 25 - alt;
  // inner triangle variables
  strokeWeight(1);
  stroke(intTriangle);
  triangle(100 - alt, 75 - alt, 30, 75, 58 + alt, 20 + alt);
  rotateBy += 30 - alt;
}

function draw() {
  translate(300, 300);
  rotate(rotateBy);
  makeArm('pink', 'orange', 'maroon', 'brown', 'gray');
}

function keyPressed() {
  noLoop();
}
// background change button


// change background color
function repaint() {
  let g = random(255);
  background(g);
}