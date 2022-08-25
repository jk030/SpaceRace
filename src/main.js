const game = new Game();

let sound;
let button;
let soundGameOver;
let mode; // https://www.youtube.com/watch?v=TgHhEzKlLb4
let buttonImg;
let fontRegular

function preload() {
  sound = loadSound("assets/sound/AnemoiaPilot.mp3");
  game.preload();
  fontRegular = loadFont('font/Montserrat/Montserrat-Regular.ttf') 
  soundGameOver = loadSound("assets/sound/mixkit-retro-arcade-game-over-470.wav" );
  soundCoin = loadSound("assets/sound/mixkit-arcade-game-jump-coin-216.wav");
  soundNextLevel = loadSound( "assets/sound/mixkit-arcade-game-complete-or-approved-mission-205.wav" );
  buttonImg = loadImage("assets/background/NebulaRed.png");
  
  
}

function setup() {
  button = createButton("stop music");
  button.center("horizontal");
  button.position(button.center, 150);
  textFont(fontRegular)
  createCanvas(600, 600);
  mode = 0;
  sound.play();
  button.mousePressed(togglePlaying);
  preventScrolling();
 
 
}

function togglePlaying() {
  if (!sound.isPlaying()) {
    sound.play();
    button.html("stop music");
  } else {
    sound.pause();
    button.html("play music");
  }
}

function preventScrolling() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
    }
  });
}

function draw() {
  clear();
  
  if (mode == 0) {
    background(232, 214, 239);
    textSize(30);
    text("Ready for your magical SpaceRace? ", 300, 280);
    fill(153, 50, 204);
    textAlign(CENTER);
    textSize(20);
    text("Your goal is to collect as many RAINBOWS as possible! \n But watch out for CYCLONES! \n Once you click SHIFT, control the unicorn  \n using up, right, down and left.", 300, 340);
    fill(156, 40, 156);
    // text("Your goal is to collect as many 🌈 as possible!", 300, 340);
    // text("But watch out for cyclones!", 300, 400);
    // text("Once you click SHIFT, control the unicorn  \n using up, right, down and left.", 300, 500);
  }
  if (mode == 1) {
    game.draw();
  }

}

function keyPressed() {
  if (keyCode === 38) {
    game.player.jump();
  }

  if (keyCode === 32) {
    // game reset
    location.reload();
  }

  if (keyCode === 16) {
    mode = 1;
  }
}
