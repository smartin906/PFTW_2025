function setup() {
  createCanvas(200, 200);
}

function createTile() {
  noLoop();
  translate(0, 0);
  stroke('yellow');
  strokeWeight(2);
  fill('orange');
  rect(0, 0, 200, 200);
  stroke('blue');
  strokeWeight(10);
  fill('red');
  circle(100, 100, 190);
  circle(100, 100, 150);
  circle(100, 100, 100);
  circle(100, 100, 50);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

}
function draw () {
  createTile();
}