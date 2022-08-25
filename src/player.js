class Player {
  constructor() {
    this.playerImage;
    this.width = 130;
    this.height = 130;
    this.x = 150;
    this.y = 300 - this.height;
    // this.gravity = 0.5
    this.velocity = 0;
  }

  preload() {
    this.playerImage = loadImage("./assets/player/AW4205695_11.gif");
  }

  draw() {
    // this.velocity += this.gravity
    // this.y += this.velocity
    if (this.y >= 600 - this.height) {
      this.y = 600 - this.height;
    }

    // limitation of player jump top

    if (this.y <= 0) {
      this.y = 0;
    }

    // limitation of player jump side (left)
    if (this.x <= 0) {
      this.x = 0;
    }

    // limitation of player jump side (rigth)
    if (this.x >= 600 - this.width) {
      this.x = 600 - this.width;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += 10;
    }

    image(this.playerImage, this.x, this.y, this.width, this.height);
  }

  jump() {
    // if (this.y  === height- this.height)
    this.velocity = -10;
  }
}
