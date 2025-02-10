let rotateBy = 3;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(degrees);
  textSize(24);
  fill('white');
  text('press any key to stop', 385, 500);
  //create buttons
  let button = createButton('change background');
  button.position(0, 0);  
  button.mousePressed(repaint);
}

// change bg color
function repaint() {
  let g = random(255);
  background(g);
}

function makeTriangle(rotateBy) {
  let alt = Math.round(rotateBy * -90);
  console.log(alt);
  noFill();
  stroke('yellow');
  alpha(5);
  strokeWeight(1);
  triangle(500, 100, 100, 200, 800, 750);
}
function makeEllipse(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  console.log(alt);
  noFill();
  stroke('green');
  strokeWeight(1);
  ellipse( 200 / alt, 200 / alt, 200);
}

function makeSquare(rotateBy) {
  let alt = Math.round(rotateBy / 180);
  console.log(alt);
  noFill();
  stroke('pink');
  strokeWeight(1);
  rect(300 - alt, 200 - alt, 550, 550);
}
function draw() {
  translate(500, 500);
  rotate(rotateBy); // to be named later
  makeEllipse(rotateBy);
  makeTriangle(rotateBy);
  makeSquare(rotateBy);
  rotateBy += 5;
}

// //create buttons
// let button = createButton('change background');  
// button.mousePressed(repaint);

// let buttonStop = createButton('stop');
// button.position(500, 500);
// button.mousePressed(stop); 

function keyPressed() {
  noLoop();
}


// // function createButton() {
// //  text('click here to stop', 500, 500, 250, 250);
// // }