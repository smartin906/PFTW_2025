// let x = 0; // starting position of the shape

// function setup() {
//   createCanvas(600, 400);
//   noStroke();
// }

//   function draw() {
//     background(random(255), random(255), random(255));
//     // Draw a rectangle that moves across the screen
//     fill(0, 0, 255); // Blue rectangle
//     rect(x, height / 2 - 25, 50, 50); // Draw rectangle at position (x, height / 2 - 25)

//   // Update the position of the circle
//   x += 2; // Move the circle to the right

//   // Reset the circle when it moves off-screen
//   if (x > width) {
//     x = 0; // Start the movement from the left side again
//   }
// }

function setup() {
  createCanvas(800, 800);
  stroke(255); // White lines
  strokeWeight(random(1, 5)); // Random stroke weight
}

function draw() {
    background(random(255), random(255), random(255));

  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2); // Draw a line from one random point to another
  }
}
