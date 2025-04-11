function setup() {
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
  background(0);
  
  let spacing = 100;
  let time = millis() * 0.001;
  // rotate(radians(360 * time));

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      let d = dist(x, y, width / 2, height / 2);
      let offset = map(d, 0, width / 2, 0, PI);
      let size = 15 + 75 * sin(time + offset);
      fill(50 + 255 * sin(time + offset), 100, 200);
      // ellipse(x, y, size, size);
      square(x, y, size);
      // line(x, y, width / 2, height / 2);
    }
  }
}
