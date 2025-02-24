// let x = 100;
// let y = 100;
// let width = 80;
// let height = 100;
// let borderRadius = 10;

let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
let cardfaceArray = [];
let cardBack;
const gameState = { 
  totalPairs: 9,
  flippedCards: [],
  numMatchedPairs: 0,
  attempts: 0,
  waiting: false
}

function preload() {
  cardBack = loadImage('img/card_back.svg');
  cardfaceArray = [
    loadImage('img/pigeon.png'),
    loadImage('img/sparrow.png'),
    loadImage('img/titmouse.png'),
    loadImage('img/robin.png'),
    loadImage('img/mourning_dove.png'),
    loadImage('img/crow.png'),
    loadImage('img/bluejay.png'),
    loadImage('img/seagull.png'),
    loadImage('img/autumn.png'),
  ];
}

function setup() {
  createCanvas(1100, 400);
  background('gainsboro');
  let selectedFaces = [];
  for (let z = 0; z < 9; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 9; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 100;
      // console.log(startingX);
    }
    startingY += 120;
    startingX = 100;
  }
}
  

function draw() {
  background(0);
  for (let card of cards) {
    card.show();
  }
  if (gameState.numMatchedPairs === gameState.totalPairs) {
    background('forestgreen');
    fill('white');
    textSize(50);
    textFont('baskerville');
    text('YOU WIN!', 400, 200);
    noLoop();
    createButton('Play Again').mousePressed(() => window.location.reload());
  }
  fill(255);
  textSize(36);
  textFont('baskerville');
  text('Attempts: ' + gameState.attempts, 100, 375);
  text('Matches: ' + gameState.numMatchedPairs, 825, 375);
}

function mousePressed() {
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, then check if the cards are flipped, then check if the cards are the same
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
      // cards match! Time to score!
      console.log('match');
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // clear the flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score!
      gameState.numMatchedPairs++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        gameState.flippedCards[0].flip();
        gameState.flippedCards[1].flip();
        gameState.flippedCards = [];
        gameState.waiting = false;
        window.clearTimeout(loopTimeout);
      }, 1000);
    }
  }
}

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 110;
    this.borderRadius = 10;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }
  show() {
    if (this.face === UP || this.isMatch) {
      fill('aliceblue');
      rect(this.x, this.y, this.width, this.height, this.borderRadius);
      image(this.cardFaceImg, this.x + 7, this.y + 10, this.width - 15, this.height - 15);
    } else {
      fill('darkturquoise');
      rect(this.x, this.y, this.width, this.height, this.borderRadius);
      image(cardBack, this.x, this.y, this.width - 10, this.height - 10);      
    }
  }

  didHit(mouseX, mouseY) {
    if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }  
}

function shuffleArray(array) {
  let counter = array.length;
  while (counter > 0) {
    // Pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
