const game = new Game();

function setup() {
  let canvas = createCanvas(800, 600);

  game.setup();
}

function draw() {
  game.draw();
  drawSprites();
}

function keyPressed() {
  game.keyPressed();
}
