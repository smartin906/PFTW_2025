let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 10;
const distance = 2;
let blockColor = 255;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function drawBlock(x, y, color) {
  fill(color || 255);
  rect(x, y, 75, 75);
}

function keyTyped() {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
}

window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    console.log('drawTimer');
    if (blockY - 75 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 75;
    }
    if (blockY - 75 > height && blockX - 75 > width) {
      window.clearInterval(drawTimer);
      alert('Done');
    }
  }, speed);
}, 1000);