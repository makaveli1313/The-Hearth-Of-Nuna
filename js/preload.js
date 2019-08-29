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
  spriteRocket,
  number0,
  number1,
  explosionSound,
  hitSound,
  pulseSound,
  rocketSound,
  gameOverSound,
  themeMusic,
  powerUpSound;

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

let powerFrames = [
  { name: "health", frame: { x: 0, y: 0, width: 16, height: 16 } },
  { name: "health_01", frame: { x: 16, y: 0, width: 16, height: 16 } },
  { name: "rocket", frame: { x: 0, y: 16, width: 16, height: 16 } },
  { name: "rocket_01", frame: { x: 16, y: 16, width: 16, height: 16 } }
];

let rocketFrames = [
  { name: "pulse", frame: { x: 0, y: 0, width: 16, height: 16 } },
  { name: "pulse_01", frame: { x: 16, y: 0, width: 16, height: 16 } },
  { name: "rocket", frame: { x: 0, y: 16, width: 16, height: 16 } },
  { name: "rocket_01", frame: { x: 16, y: 16, width: 16, height: 16 } }
];

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

  shipsArr = [animationSmall, animationMed, animationBig];

  explosionSprite = loadSpriteSheet(
    "/assets/spritesheets/explosion.png",
    16,
    16,
    5
  );
  explosionAnimation = loadAnimation(explosionSprite);

  spritePulse = loadSpriteSheet(
    "/assets/spritesheets/laser-bolts.png",
    rocketFrames.slice(0, 2)
  );
  animationPulse = loadAnimation(spritePulse);

  spriteRocket = loadSpriteSheet(
    "/assets/spritesheets/laser-bolts.png",
    rocketFrames.slice(2, 5)
  );
  animationRocket = loadAnimation(spriteRocket);

  spriteInvisibility = loadSpriteSheet(
    "/assets/spritesheets/power-up.png",
    powerFrames.slice(0, 2)
  );
  animationInvisibility = loadAnimation(spriteInvisibility);

  spritePower = loadSpriteSheet(
    "/assets/spritesheets/power-up.png",
    powerFrames.slice(2, 5)
  );
  animationPower = loadAnimation(spritePower);

  number0 = loadAnimation("/assets/Numbers 1-9 (7x10px)/Number0 7x10.png");
  number1 = loadAnimation("/assets/Numbers 1-9 (7x10px)/Number1 7x10.png");
  hitSound = loadSound("/assets/Sounds/sfx_wpn_cannon2.wav");
  explosionSound = loadSound("/assets/Sounds/sfx_exp_odd7.wav");
  pulseSound = loadSound("/assets/Sounds/sfx_wpn_laser8.wav");
  rocketSound = loadSound("/assets/Sounds/sfx_wpn_missilelaunch.wav");
  powerUpSound = loadSound("/assets/Sounds/sfx_sounds_powerup4.wav");
  gameOverSound = loadSound("/assets/Sounds/Retro-game-over-sound-effect.mp3");
  themeMusic = loadSound("/assets/Music/Intergalactic Odyssey.ogg");
}
