const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);

  game.setup();
}

function draw() {
  game.draw();
  drawSprites();
}

function keyPressed() {
  game.keyPressed();
}
