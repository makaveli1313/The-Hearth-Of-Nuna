const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);

  game.setup();
 

}

function draw() {
  game.draw();
  drawSprites();
  
  
}

function keyPressed() {
  game.keyPressed();
}
