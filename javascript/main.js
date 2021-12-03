// jshint esversion:8


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  
    context.beginPath();
    context.lineWidth = 2;
    context.lineTo(0, 0);
    context.lineTo(0, height);
    context.lineTo(width, height);
    context.lineTo(width, 0);
    context.lineTo(0, 0);
    context.stroke();
    context.closePath();

    // vertical lines
    context.beginPath();
    context.moveTo(50, 0);
    context.lineTo(50, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(150, 0);
    context.lineTo(150, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(200, 0);
    context.lineTo(200, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(250, 0);
    context.lineTo(250, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(350, 0);
    context.lineTo(350, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(450, 0);
    context.lineTo(450, height);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();


    // horizontal lines
    context.beginPath();
    context.moveTo(0, 50);
    context.lineTo(width, 50);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 100);
    context.lineTo(width, 100);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 150);
    context.lineTo(width, 150);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 200);
    context.lineTo(width, 200);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 250);
    context.lineTo(width, 250);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 300);
    context.lineTo(width, 300);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 350);
    context.lineTo(width, 350);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(width, 400);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 450);
    context.lineTo(width, 450);
    context.lineWidth = 3;
    context.stroke();
    context.closePath();

}



function drawEverything() {
  drawGrid();
  //drawPlayer();
  //drawTreasure();
}

drawEverything();

class Character {

    constructor(col, row){
        this.col = col;
        this.row = row;
        const img = new Image();
        img.addEventListener('load', ()=>{
            this.img = img;
            this.drawPlayer();
        });
        img.src = "images/character-down.png";
    }
    moveUp(){
        this.row--;

    }
    moveDown(){
        this.row++;
    }
    moveRight(){
        this.col++;
    }
    moveLeft() {
        this.col--;
    }
    drawPlayer(){
        context.drawImage(this.img, this.col, this.row);
    }
}

class Treasure {
    
    constructor(){
        this.col = 0;
        this.row = 0;
        const img = new Image();
        img.addEventListener('load', ()=>{
            this.img = img;
            this.setRandomPosition();
            this.drawTreasure();
        });
        img.src = "images/treasure.png";

    }
    setRandomPosition(){
        this.col = Math.floor(Math.random() * 10 )* 50;
        this.row = Math.floor(Math.random() * 10 )* 50;
        console.log(this.col, this.row);
    }
    drawTreasure(){
        context.drawImage(this.img, this.col, this.row, 50,50);
    }
}

window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        player.moveLeft(); console.log('left');
        break;
      case 38:
        player.moveUp(); console.log('up');
        break;
      case 39:
        player.moveRight();console.log('right');
        break;
      case 40:
        player.moveDown(); console.log('down');
        break;
    }
});

const player = new Character(0, 0);
const treasure = new Treasure();


player.moveDown();
player.moveDown();
player.moveRight();

console.log(player.col, player.row); 