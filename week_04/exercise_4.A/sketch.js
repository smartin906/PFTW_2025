const myRectangle = [];
let startingX = 25;
let startingY = 25;
let rectX = 25;
let rectY = 100;
let rectWidth = 100;
let rectHeight = 150;
let gap = 15;
for (let i = 0; i < 8; i++);


function setup() {
  createCanvas(1000, 500);
  }

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    console.log("mouse is pressed");
    // loop();
  }
}

function draw() {
  noLoop();
  background(125);
  //outer loop for rows
  for (j = 0; j < 2; j++) {
    //inner loop for columns
    for (let i = 0; i < 8; i++) {
      rect(rectX, rectY, rectWidth, rectHeight);
      rectX = rectX + rectWidth + gap;
    }
    rectY = rectY + rectHeight + gap;
    rectX = startingX;
  }
}
