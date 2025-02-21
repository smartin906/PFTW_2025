let bubble;
let bubbles = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  alert("Click to stop the animation.");
  for (let i = 0; i < 10; i++) {
    bubbles[i] = new Bubble();
  }
  bubble = new Bubble();
  print(bubble.x, bubble.y);
}

function draw() {
  background(0); // Clear the background each frame
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.strokeWeight = random(1, 4);
  }
  
  show() {
    stroke(255);
    strokeWeight(this.strokeWeight);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

function mousePressed() {
  noLoop();
}