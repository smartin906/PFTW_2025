let grid;
let w = 10;
let cols, rows;

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

function setup() {
  createCanvas(800, 800);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0;
    }
  }

}

function mouseDragged() {
  let mouseCol = floor(mouseX / w);
  let mouseRow = floor(mouseY / w);

// snowflake flurries big and small!
  let matrix = 5;
  let extent = floor(matrix / 2);
  for (let i = -extent; i <= extent; i++) {
    for (let j = -extent; j <= extent; j++) {
      if (random(1) < 0.5) {
      let col = mouseCol + i;
      let row = mouseRow + j;
      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        grid[col][row] = 1;
      }
    }
    } 
  
  }
}

function draw() {
  background(255);
  

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(grid[i][j] * (255));
      stroke(0);
      rect(i * w, j * w, w, w);
    }
  }
  
  let nextGrid = make2DArray(cols, rows);   // Calculate the next generation

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      if (state === 1) {
        if (j < rows - 1) {
          let below = grid[i][j + 1];
          let belowR = (i < cols - 1) ? grid[i + 1][j + 1] : 1; 
          let belowL = (i > 0) ? grid[i - 1][j + 1] : 1;

          if (below === 0) {
            nextGrid[i][j + 1] = 1;
          } else if (belowR === 0) {
            nextGrid[i + 1][j + 1] = 1;
          } else if (belowL === 0) {
            nextGrid[i - 1][j + 1] = 1;
          } else {
            nextGrid[i][j] = 1;
          }
        } else {
          nextGrid[i][j] = 1;
        }
      }
    }
  }

  grid = nextGrid;
}
