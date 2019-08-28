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
    this.bulletsIn = new Group();
    this.bulletsEnIn = new Group();
    this.background.setup();
    this.player.setup();
  }

  draw() {
    this.bulletsIn.collide(this.enemiesIn, (a, b) => {
      if (b.health > 0) {
        b.health -= 1;
        a.remove();
        let explode = new Explosion(b.position.x, b.position.y, 2);
        explode.setup();
      } else if (b.health === 0) {
        a.remove();
        b.remove();
        let explode = new Explosion(b.position.x, b.position.y, 3);
        explode.setup();
      }
    });
    this.bulletsEnIn.collide(this.player.sprite, (a, b) => {
      a.remove();
      b.remove();
      let explode = new Explosion(b.position.x, b.position.y, 3);
        explode.setup();
    });
    if(frameCount % (Math.floor((Math.random() * 10)) * 120) == 0 ){
      this.createEnemy();
   }

    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => (enemy.position.y += Math.random()));
    this.enemiesIn.forEach(enemy => {
      if (frameCount % (Math.floor((Math.random() * 10)) * 60) == 0 ) {
        this.createBulletEn(enemy);
      }
    });
    this.enemiesIn.forEach(enemy => {
      if (enemy.position.y > HEIGHT) {
        enemy.remove();
        this.points -= 200;
      }
    });
    this.bulletsIn.forEach(pulse => {
      if (pulse.position.y < 0) pulse.remove();
    });
    this.bulletsIn.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.bulletsIn.forEach(pulse => (pulse.position.y -= 3));
    this.bulletsEnIn.forEach(pulse => (pulse.position.y += 2));
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
    this.bulletsIn.add(newPulse);
    newPulse.scale = 3;
  }
  createBulletEn(enemy) {
    let x = enemy.position.x;
    let y = enemy.position.y;
    let newEnPulse = createSprite(x, y);
    newEnPulse.addAnimation("pulseEn", animationPulse);
    this.bulletsEnIn.add(newEnPulse);
    newEnPulse.scale = 3;
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
      // this.createBulletEn();
    }

    newEnemy.scale = 3;
    newEnemy.addAnimation("props", ship);
    this.enemiesIn.add(newEnemy);
  }
}
