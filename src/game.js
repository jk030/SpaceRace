class Game {
  constructor() {
    this.background = new Background();
    this.backgroundImages = [];
    this.player = new Player();
    this.coinArray = [];
    this.rainbowImage;
    this.obstacleDynamic = new ObstacleDynamic();
    this.obstacleDynamicImageArray = [];
    this.level = 1;
    this.points = 0;
    this.speedLevel = 1;
    this.frameCount = undefined;
    this.speedLevelObstacle = 1;
    this.obstacleInterval = 200;
  }

  preload() {
    this.backgroundImage = [
      {
        src: loadImage("./assets/background/NebulaAqua-Pink.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("./assets/background/StarsSmall_1.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("./assets/background/StarsSmall_2.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("./assets/background/Stars-Big_1_1_PC.png"),
        x: 0,
        speed: 3,
      },
    ];

    this.player.preload();
    (this.obstacleDynamic.image = loadImage(
      "./assets/obstacal/obstacalDynamic.png"
    )),
      (this.rainbowImage = loadImage("./assets/coins/rainbow-cloud-icon.png"));
  }

  draw() {
    clear();

    this.background.draw();
    this.player.draw();
    this.obstacleDynamic.draw();

    if (this.level >= 1) {
      if (frameCount % this.obstacleInterval === 0) {
        let newObstacleDynamic = new ObstacleDynamic(
          this.obstacleDynamic.image,
          this.speedLevelObstacle
        );

        this.obstacleDynamicImageArray.push(newObstacleDynamic);
      } 
      console.log(this.level);
    }

    this.obstacleDynamicImageArray.forEach(function (obstacle) {
      obstacle.draw();
    });

    if (frameCount % 80 === 0) {
      let newCoin = new Coin(this.rainbowImage, this.speedLevel);

      this.coinArray.push(newCoin);
    }

    this.coinArray.forEach(function (coin) {
      coin.draw();
    });

    this.coinArray = this.coinArray.filter((coin) => {
      if (coin.collision(this.player)) {
        this.points++;

        let rainbowScore = document.querySelector(".rainbow_score");

        rainbowScore.innerText = this.points;
        soundCoin.play();

        if (this.points % 10 === 0) {
          this.level++;
          soundNextLevel.play();
          this.speedLevel = this.speedLevel + 2;
          this.frameCount = frameCount;
          this.speedLevelObstacle = this.speedLevelObstacle + 1;
          this.obstacleInterval = 200;
          if (this.points === 10) {
            this.obstacleInterval = 100;
          }
          if (this.points === 20) {
            this.obstacleInterval = 40;
          }
          if (this.points === 30) {
            this.obstacleInterval = 20;
          }

          if (this.points === 40) {
            this.obstacleInterval = 10;
          }

          let level = document.querySelector(".level_score");

          level.innerText = this.level;
        }
        return false;
      } else if (coin.x < -100) {
        return false;
      } else {
        return true;
      }
    });

    if (this.points % 10 === 0 && this.points != 0) {
      if (frameCount - this.frameCount < 100) {
        fill(156, 40, 156);
        textAlign(CENTER);
        text("Next Space Level ", 300, 300);
        textSize(50);
      }
    }

    if (this.points == 50) {
      this.gameWon();
    }

    this.obstacleDynamicImageArray = this.obstacleDynamicImageArray.filter(
      (obstacle) => {
        if (obstacle.collision(this.player)) {
          this.gameOver();

          return false;
        } else {
          return true;
        }
      }
    );
  }

  gameOver() {
    fill(75, 0, 130);
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(40);
    fill(178, 38, 217);
    text("GAME OVER !", width / 2, height / 2 );
    text("press 'ENTER' to replay", 300, 360);
    noLoop(); // game is over, stop game
    sound.pause();
    soundGameOver.play();
  }

  gameWon() {
    fill(75, 0, 130);
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(40);
    fill(255);
    text("you WON !", width / 2, height / 2 - 60);
    text("press 'ENTER' to replay", 300, 300);
    noLoop();
  }

  jump() {
    this.player;
  }
}
