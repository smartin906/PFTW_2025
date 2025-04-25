var pos;
var slider;
var slider2;

function setup() {
  createCanvas(windowHeight, windowWidth);
  angleMode(DEGREES);
  background(random(255), random(255), random(255)); // Set a random background color

  slider = createSlider(0, 15, 5); // Create a slider for the angle
  textSize(27);
  text("Angle", 10, 45); // Label for the first slider
  slider.position(10, 50); // Position the first slider
  slider2 = createSlider(0, 15, 5); // Create a second slider for the angle
  textSize(27);
  text("Angle2", 10, 115); // Label for the second slider
  slider2.position(10, 120); // Position the second slider

  pos = 0.0; 
  inc = 3;

  pos2 = 0.0; 
  inc2 = 15;
  

}

function draw() {

// clear();

translate(width / 2, height / 2); // Move the origin to the center of the canvas

var mySinVal = sin(pos)
var mySinVal2 = sin(pos2)


amplified = mySinVal * 50;
amplified2 = mySinVal2 * 50;

fill(random(255), random(255), random(255)); // Set a random fill color
strokeWeight(random(1, 5)); // Set a random stroke weight

for (x = 0; x <= 360; x = x + 5) {

ellipse(amplified + 50, amplified2 - 100, 500, amplified * 10); // Draw a circle at the center of the canvas
}


pos = pos + slider.value(); // Increment the variable pos by the value of inc
pos2 = pos2 + slider2.value()


}