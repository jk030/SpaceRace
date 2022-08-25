class Coin {
   constructor (rainbowImage,speedLevel) {
    this.rainbowImage = rainbowImage
    this.x = width
    this.y = (Math.random() * height) / 1.5 
    this.width = 50
	this.height = 50
	this.speedLevel = speedLevel	

   }

   preload (){
    this.rainbowImage = loadImage('./assets/coins/rainbow-cloud-icon.png')
	
	}



   draw(){
  	this.x = this.x - this.speedLevel
    image(this.rainbowImage, this.x, this.y, this.width, this.height);

	}



	collision(playerInfo) {
		let coinX = this.x + this.width / 2
		let coinY = this.y + this.height / 2
	
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2

		if (dist(coinX, coinY, playerX, playerY) > 50) {


			return false

		} else {

		  return true
		}
		
	}
	

	



}

// 	rainbowScore = document.getElementsByClassName('.rainbow_score')

	// console.log()
	// if (rainbowScore >= 1) return 