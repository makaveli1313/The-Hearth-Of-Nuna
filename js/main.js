const game = new Game();
let playerAnimation;
let playerFrames = [
  { name: "player_walk01", frame: { x: 32, y: 0, width: 16, height: 24 } },
  { name: "player_walk02", frame: { x: 32, y: 24, width: 16, height: 24 } }
];

function preload() {
  playerAnimation = loadSpriteSheet(
    "/assets/spritesheets/ship.png",
    playerFrames
  );
}

function setup() {
  let canvas = createCanvas(800, 600);

  game.setup();
}

function draw() {
  game.draw();
  drawSprites();
}

function keyPressed() {
  game.player.keyPressed();
}
