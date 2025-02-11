// let rotateBy = 3;
// let angle = 0;

// function setup() {
//   createCanvas(1000, 1000);
//   background(0);
//   angleMode(degrees);
//   textSize(24);
//   fill('white');
//   text('press any key to stop', 385, 500);
//   //create buttons
//   let button = createButton('change background');
//   button.position(0, 0);  
//   button.mousePressed(repaint);
// }

// // change bg color
// function repaint() {
//   let g = random(255);
//   background(g);
// }

// function makeArm(rotateBy) {
//   let alt = Math.round(rotateBy * -90);
//   console.log(alt);
//   // triangle values here
//   noFill();
//   stroke('yellow');
//   alpha(5);
//   strokeWeight(1);
//   triangle(500, 100, 100, 200, 800, 750);
// }
// // ellipse values here
// function makeEllipse(rotateBy) {
//   let alt = Math.round(rotateBy / 360);
//   console.log(alt);
//   noFill();
//   stroke('green');
//   strokeWeight(1);
//   ellipse( 200 / alt, 200 / alt, 200);
// }
// // square values here
// function makeSquare(rotateBy) {
//   let alt = Math.round(rotateBy / 180);
//   console.log(alt);
//   noFill();
//   stroke('pink');
//   strokeWeight(1);
//   rect(300 - alt, 200 - alt, 550, 550);
// }
// function draw() {
//   translate(500, 500);
//   rotate(rotateBy); // to be named later
//   makeEllipse(rotateBy);
//   makeTriangle(rotateBy);
//   makeSquare(rotateBy);
//   rotateBy += 5;
// }

// // //create buttons
// // let button = createButton('change background');  
// // button.mousePressed(repaint);

// // let buttonStop = createButton('stop');
// // button.position(500, 500);
// // button.mousePressed(stop); 

// function keyPressed() {
//   noLoop();
// }


// // // function createButton() {
// // //  text('click here to stop', 500, 500, 250, 250);
// // // }
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