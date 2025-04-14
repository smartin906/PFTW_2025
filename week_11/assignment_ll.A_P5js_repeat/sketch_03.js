let trail = [];
let moonY;

function setup() {
  createCanvas(800, 800);
  noStroke();
  moonY = height / 2;
}

function draw() {
  background(255);

  // Add a new moon phase to the trail every few frames
  if (frameCount % 1 === 0) {
    let moonX = frameCount % width;
    let shadowX = moonX - 75 + sin(frameCount * 0.02) * 75;
    trail.push({ moonX, shadowX });
  }

  // Draw all previous moon phases
  for (let i = 0; i < trail.length; i++) {
    let { moonX, shadowX } = trail[i];

    // Draw moon
    fill(255);
    ellipse(moonX, moonY, 250, 250);

    // Draw moving shadow
    fill(100, 50); // same as background
    ellipse(shadowX, moonY, 250, 250);
  }

  // Optional: limit trail length
  if (trail.length > width) {
    trail.shift(); // remove oldest to prevent lag
  }
}
