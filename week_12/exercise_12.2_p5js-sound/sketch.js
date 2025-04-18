var sound;

      var soundPlaying = false;

      function preload() {
          sound = loadSound('assets/56964217_cartoon-yay-woohoo_by_applehillstudios_preview.mp3');
      }

      function setup() {
        createCanvas(500, 500);
        background(200);
        createButton('Play Sound').mousePressed(() => {
          if (sound.isPlaying()) {
            sound.pause();
            soundPlaying = false;
          } else {
            sound.play();
            soundPlaying = true;
          }
        });
      }