class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.rockets = [];
    this.fired = false;
  }

  setup() {
    this.enemiesIn = new Group();
    this.rocketsIn = new Group();
    this.background.setup();
    this.player.setup();
  }

  draw() {
    // this.enemiesIn.colide(this.rocketsIn);
    if (frameCount % 240 == 0) {
      this.createEnemy();
    }
    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => (enemy.position.y += Math.random()));

    this.rocketsIn.forEach(pulse => (pulse.position.y -= 3));
  }
  keyPressed() {
    if (keyCode === 32) {
      if (!this.fired) {
        this.createBullet();
        this.fired = true;
        setTimeout(() => {
          this.fired = false;
        }, 500);
      }
    }
  }
  createBullet() {
    let x = this.player.sprite.position.x;
    let y = this.player.sprite.position.y;
    let newPulse = createSprite(x, y);
    newPulse.addAnimation("pulse", animationPulse);
    this.rocketsIn.add(newPulse);
    newPulse.scale = 3;
  }
  createEnemy() {
    let randomIndex = Math.floor(Math.random() * shipsArr.length);
    let x = random(32, width - 32);
    let y = -50;
    let newEnemy = createSprite(x, y);
    newEnemy.scale = 3;
    newEnemy.addAnimation("props", shipsArr[randomIndex]);
    this.enemiesIn.add(newEnemy);
  }
}
