function Bar(id) {  
    this.display = function () {
      noStroke();
      fill(clr[id]);
      rect(xBar[id], 50, windowWidth / numBars, windowHeight);
      let label = keyMap[id];
      fill(255);
      stroke(0);
      strokeWeight(2);
      textSize(32);
      text(label, xBar[id] + windowWidth / numBars / 2 - 10, 100);
      textAlign(CENTER);
    };
  
    this.played = function () {
      if (
        mouseY > 50 &&
        mouseX > xBar[id] &&
        mouseX < xBar[id] + windowWidth / numBars
      ) {
        polySynth.play(notes[id], 0.5, 0, 0.2);
      }
    };
  }
  