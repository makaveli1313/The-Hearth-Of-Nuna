let animationBig,
  spriteBig,
  animationMed,
  spriteMed,
  animationSmall,
  spriteSmall,
  animationIdle,
  animationLeft,
  animationRight,
  animationPulse,
  explosionSprite,
  explosionAnimation,
  spriteRocket;
  const HEIGHT = 600;
  const WIDTH = 800;
let shipsArr;

let playerFrames = [
  { name: "left_01", frame: { x: 0, y: 0, width: 16, height: 24 } },
  { name: "propulsion_left01", frame: { x: 0, y: 24, width: 16, height: 24 } },
  { name: "left_02", frame: { x: 16, y: 0, width: 16, height: 24 } },
  { name: "propulsion_left02", frame: { x: 16, y: 24, width: 16, height: 24 } },
  { name: "propulsion_idle01", frame: { x: 32, y: 0, width: 16, height: 24 } },
  { name: "propulsion_idle02", frame: { x: 32, y: 24, width: 16, height: 24 } },
  { name: "right_01", frame: { x: 48, y: 0, width: 16, height: 24 } },
  {
    name: "propulsion_right01",
    frame: { x: 48, y: 24, width: 16, height: 24 }
  },
  { name: "right_02", frame: { x: 64, y: 0, width: 16, height: 24 } },
  { name: "propulsion_right02", frame: { x: 64, y: 24, width: 16, height: 24 } }
];

let rocketFrames = [
  { name: "pulse", frame: { x: 0, y: 0, width: 16, height: 16 } },
  { name: "pulse_01", frame: { x: 16, y: 0, width: 16, height: 16 } },
  { name: "rocket", frame: { x: 0, y:16, width: 16, height: 16 } },
  { name: "rocket_01", frame: { x: 16, y: 16, width: 16, height: 16 } }
]

function preload() {
  animationIdle = loadSpriteSheet(
    "/assets/spritesheets/ship.png",
    playerFrames.slice(4, 6)
  );
  animationLeft = loadSpriteSheet(
    "/assets/spritesheets/ship.png",
    playerFrames.slice(0, 2)
  );
  animationRight = loadSpriteSheet(
    "/assets/spritesheets/ship.png",
    playerFrames.slice(6, 8)
  );
  // animationTurboLeft = loadSpriteSheet(
  //   "/assets/spritesheets/ship.png",
  //   playerFrames.slice(2, 4)
  // );
  // animationTurboRight = loadSpriteSheet(
  //   "/assets/spritesheets/ship.png",
  //   playerFrames.slice(8, 10)
  // );

  spriteBig = loadSpriteSheet("/assets/spritesheets/enemy-big.png", 32, 32, 2);
  animationBig = loadAnimation(spriteBig);
  spriteMed = loadSpriteSheet(
    "/assets/spritesheets/enemy-medium.png",
    32,
    16,
    2
  );
  animationMed = loadAnimation(spriteMed);
  spriteSmall = loadSpriteSheet(
    "/assets/spritesheets/enemy-small.png",
    16,
    16,
    2
  );
  animationSmall = loadAnimation(spriteSmall);
  explosionSprite = loadSpriteSheet(
    "/assets/spritesheets/explosion.png",
    16,
    16,
    5
  );
  shipsArr = [animationSmall, animationMed, animationBig];
  explosionAnimation = loadAnimation(explosionSprite);
  spritePulse = loadSpriteSheet("/assets/spritesheets/laser-bolts.png",rocketFrames.slice(0,2));
  animationPulse = loadAnimation(spritePulse);
  
}
