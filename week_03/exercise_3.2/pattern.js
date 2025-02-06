function setup() {
  createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, strokeColor, fillColor) {
  // noLoop();
  translate(originX, originY);
  stroke('yellow');
  strokeWeight(2);
  fill(primaryColor);
  rect(0, 0, 200, 200);
  stroke(strokeColor);
  strokeWeight(10);
  fill(fillColor);
  circle(100, 100, 190);
  circle(100, 100, 150);
  circle(100, 100, 100);
  circle(100, 100, 50);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

}
function draw () {
  createTile(0, 0, 'yellow', 'blue', 'red');
  createTile(0, 200, 'blue', 'pink', 'tan');
  createTile(0, 200, 'black', 'gray', 'orange');
  createTile(200, 0, 'brown', 'blue', 'tan');
  createTile(0, -200, 'green', 'blue', 'yellow');
  createTile(0, -200, 'magenta', 'white', 'yellow');
  createTile(200, 0, 'blue', 'red', 'blue');
  createTile(0, 200, 'yellow', 'cyan', 'magenta');
  createTile(0, 200, 'white', 'black', 'tan');

}