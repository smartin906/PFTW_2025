let hexagons = [];

function setup() {
  createCanvas(600, 600);
  fill(50, 50);
  stroke(175, 10)
  strokeWeight(0);
}

function draw() {
  background(0);
  translate(width / 2, height / 2); // Center of canvas

  // Add a new hexagon every few frames
  if (frameCount % 20 === 0) {
    hexagons.push({ radius: 0, alpha: 255 });
  }

  // Draw and update each hexagon
  for (let i = hexagons.length - 1; i >= 0; i--) {
    let h = hexagons[i];
    stroke(255, h.alpha);
    drawHexagon(0, 0, h.radius);
    h.radius += 2;
    h.alpha -= 2;
    rotate(10);
    

    // Remove it when it's faded out
    if (h.alpha <= 0) {
      hexagons.splice(i, 1);
    }
  }
}

function drawHexagon(x, y, r) {
  beginShape();
  for (let a = 0; a < TWO_PI; a += TWO_PI / 6) {
    let sx = x + cos(a) * r;
    let sy = y + sin(a) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
