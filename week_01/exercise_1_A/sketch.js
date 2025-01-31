let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "gray");
let stroke2 = prompt("enter a stroke weight between 10-25", "10");
let fill1 = prompt("enter a basic color for the hat", "green");

function setup() {
  createCanvas(1000, 800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png")
}

function draw() {
  background(grid);
  //snowman legs
  fill("#f1f1f1");
  stroke(stroke1);
  strokeWeight(stroke2);
  ellipse(500, 600, 300);
  //torso
  ellipse(500, 400, 375);
  //noggin
  ellipse(500, 275, 225);
  //hat
  fill(fill1);
  triangle(425, 250, 575, 250, 500, 50);
  //left eye
  fill(0);
  strokeWeight(0);
  ellipse(450, 300, 25);
  //right eye
  fill(0);
  strokeWeight(0);
  ellipse(550, 300, 25);
  //mouth
  noFill();
  stroke(0)
  strokeWeight(15);
  arc(500, 335, 75, 75, 0, 1)
  //left arm
  noFill();
  stroke(0);
  strokeWeight(15);
  line(650, 400, 700, 650);
  //right arm
  noFill();
  stroke(0);
  strokeWeight(15);
  line(350, 400, 300, 650);
}
