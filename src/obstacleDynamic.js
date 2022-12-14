class ObstacleDynamic {
  constructor(image, speedLevelObstacle, obstacleInterval) {
    this.x = 600;
    this.y = Math.random() * 500;
    this.width = 50;
    this.height = 50;
    this.image = image;
    this.speedLevelObstacle = speedLevelObstacle;
    this.obstacleInterval = this.obstacleInterval;
  }

  draw() {
    // this increases the speed of the coins
    this.x = this.x - this.speedLevelObstacle;

    image(this.image, this.x, this.y, 100, 100);
  }

  collision(playerInfo) {

    // get the middle of the obstacle
    let obstacleDX = this.x + this.width / 2;
    let obstacleDY = this.y + this.height / 2;

    // get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    //  measure the distance between obstacle and player
    if (dist(obstacleDX, obstacleDY, playerX, playerY) > 50) {
      // this is not a collision
      return false;
    } else {
      return true;
    }
  }
}
