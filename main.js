const game = new Game ()

let sound 
let button 
let soundGameOver 
let mode 
let buttonImg


function preload() {
	game.preload();
    sound = loadSound("assets/sound/AnemoiaPilot.mp3");
    soundGameOver = loadSound("assets/sound/mixkit-retro-arcade-game-over-470.wav");
    soundCoin = loadSound("assets/sound/mixkit-arcade-game-jump-coin-216.wav")
    soundNextLevel = loadSound("assets/sound/mixkit-arcade-game-complete-or-approved-mission-205.wav")
    startBackground = loadImage("assets/startBackground/startBackground.png")
    buttonImg = loadImage("assets/background/NebulaRed.png")

}

function setup (){
    button = createButton("play music") 
    button.center('horizontal')
    button.position(button.center, 150)
    createCanvas(600, 600)
	mode = 0 
    sound.play();
    button.mousePressed(togglePlaying)
    // slider = create.slider(0,1,0.5)
    // slider.position(10, 10);
    // slider.style('width', '80px')
	preventScrolling ();

}




function togglePlaying() {
    if(!sound.isPlaying ()){
        sound.play();
        button.html("stop music")
        // sound.setVoulme(0.3)
    }  else  {
        sound.pause()
        button.html("play music")
    }
 
}



function preventScrolling() {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                break;
        }
    })
}

function draw() {
    clear ()
    if (mode == 0) {
        background(232, 214, 239)
        textSize(50);  
        text('Click SHIFT to start! 🎢 ', 330, 270)
        fill(156, 40, 156)
        textAlign(CENTER);
        textSize(20);  
        text('Your goal is to collect as many 🌈 as possible!', 300, 340)
        text('But watch out for cyclones!', 300, 400)
       
    }

    if (mode == 1) {
        game.draw()
    
    }

    // let val = slider.value()
    // sound.setVoulme(slider.value)		
}





function keyPressed() {
	if (keyCode === 38) {
		game.player.jump()
	}

    if (keyCode === 32) {
     // game reset
        location.reload();
    }

    if (keyCode === 16) {
        mode = 1
    }  
    
}





// function mouseClicked() {
// 	if (!game.gameStarted) {
// 		game.audio.play();
// 	  };
// 	  game.gameStarted = true;
// 	};




// function toggleGameOver() {
//     if(game.this.obstacleDynamicImageArray){
//         soundGameOver.play()
//         // soundGameOver.isPlaying 
//         // sound.play();
//         // button.html("stop music")
//         // sound.setVoulme(0.3)
//     }  else  {
//         soundGameOver.pause()
//         // sound.pause()
//         // button.html("play music")
//     }
 
// }