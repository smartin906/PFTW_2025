let numBars = 12;
let bars = [];
let xBar = [];
let clr = ['#F2F2F2','#D9D9D9','#BFBFBF','#A6A6A6','#8C8C8C','#737373','#595959','#404040', '#262626','#1A1A1A','#0D0D0D','#000000'];
let notes = [130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185, 196, 207.65, 220, 233.08, 246.94];
let volSlider;
let polySynth;
let decaySlider;
let keyMap = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'];
let noteNames = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'];
let activeKeys = {}; // tracks pressed keys





function setup() {
  createCanvas(windowWidth, windowHeight /  2);
  background(220);

  for (let i = 0; i < numBars; i++) {
    let w = windowWidth / numBars;
    let x = w * i;
    xBar.push(x);
  }

  // draw bars
  for (let i = 0; i < numBars; i++) {
    bars.push(new Bar(i));
    bars[i].display();
  }
  
// draw volume slider
  volSlider = createSlider(0, 1, 0.5, 0);
  volSlider.position(25, 25);

  textSize(16);
  fill(0);
  noStroke();
  text('volume', 25, 20);

// decay stuff
  decaySlider = createSlider(0.05, 5, 0.4, 0.01);
  decaySlider.position(windowWidth / 2, 25);
  textSize(16);
  fill(0);
  text('decay', windowWidth / 2, 20);
  
// synthesis starts here
  polySynth = new p5.PolySynth();
  polySynth.setADSR(0.1, 0.4, 0.3, 0.05);

}
function draw() {
  outputVolume(volSlider.value(), 0.025);
  polySynth.setADSR(0.1, decaySlider.value(), 0.3, 0.1);
}

// function touchStarted() {
//   userStartAudio();
//   for (let i = 0; i < numBars; i++) {
//     bars[i].played();
//   }
// }

function keyPressed() {
  let k = key.toUpperCase();
  let index = keyMap.indexOf(k);
  if (index !== -1 && !activeKeys[k]) {
    let note = notes[index];
    polySynth.noteAttack(note, 0.5);
    activeKeys[k] = true;
  }
}

function keyReleased() {
  let k = key.toUpperCase();
  let index = keyMap.indexOf(k);
  if (index !== -1 && activeKeys[k]) {
    let note = notes[index];
    polySynth.noteRelease(note);
    activeKeys[k] = false;
  }
}
