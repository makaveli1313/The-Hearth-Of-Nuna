class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.explosion = [];
    this.fired = false;
    this.points = 0;
  }

  setup() {
    this.enemiesIn = new Group();
    this.rocketsIn = new Group();
    this.background.setup();
    this.player.setup();
  }

  draw() {
    this.rocketsIn.collide(this.enemiesIn, (a, b) => {
      if (b.health > 0) {
        b.health -= 1;
        a.remove();
        let explode = new Explosion(b.position.x, b.position.y,2);
        explode.setup();
      } else if (b.health === 0) {
        a.remove();
        b.remove();
        let explode = new Explosion(b.position.x, b.position.y,3);
        explode.setup();
      }
    });
    if (frameCount % 240 == 0) {
      this.createEnemy();
    }
    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => (enemy.position.y += Math.random()));
    this.enemiesIn.forEach(enemy => {
      if (enemy.position.y > HEIGHT) {
        enemy.remove();
        this.points -= 200;
      }
    });
    this.rocketsIn.forEach(pulse => {
      if (pulse.position.y < 0) pulse.remove();
    });
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
    let ship = shipsArr[randomIndex];
    if (ship === animationSmall) {
      newEnemy.health = 0;
    } else if (ship === animationMed) {
      newEnemy.health = 1;
    } else if (ship === animationBig) {
      newEnemy.health = 2;
    }
    newEnemy.scale = 3;
    newEnemy.addAnimation("props", ship);
    this.enemiesIn.add(newEnemy);
  }
}
