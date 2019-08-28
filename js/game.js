class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.explosion = [];
    this.fired = false;
    this.power = false;
    this.invisible = false;
    this.points = 0;
    this.level = 1; 
    this.gameOver = false;
  }

  setup() {
    this.enemiesIn = new Group();
    this.bulletsIn = new Group();
    this.rocketsIn = new Group();
    this.bulletsEnIn = new Group();
    this.powersIn = new Group();
    this.invisibilityIn = new Group();
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
        this.points += 100;
        let explode = new Explosion(b.position.x, b.position.y, 3);
        explode.setup();
      }
    });
    this.rocketsIn.collide(this.enemiesIn, (a, b) => {
      a.remove();
      b.remove();
      let explode = new Explosion(b.position.x, b.position.y, 6);
      explode.setup();
    });

    if (!this.invisible) {
      this.bulletsEnIn.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();

        let explode = new Explosion(b.position.x, b.position.y, 3);
        explode.setup();
      });
    }
    if (!this.invisible) {
      this.enemiesIn.collide(this.player.sprite, (a, b) => {
        this.gameOver = true;
        a.remove();
        b.remove();
        let explodePlayer = new Explosion(b.position.x, b.position.y, 3);
        explodePlayer.setup();
        let explodeEnemie = new Explosion(a.position.x, a.position.y, 3);
        explodeEnemie.setup();
      });
    }
    if (frameCount % 60 === 0) {
      if (this.invisible) {
        this.player.sprite.visible = false;
        setTimeout(() => {
          this.player.sprite.visible = true;
        }, 250);
      }
    }

    this.powersIn.collide(this.player.sprite, (a, b) => {
      a.remove();
      this.power = true;
      setTimeout(() => {
        this.power = false;
      }, 10000 / this.level);
    });
    this.invisibilityIn.collide(this.player.sprite, (a, b) => {
      a.remove();
      this.invisible = true;
      setTimeout(() => {
        this.invisible = false;
      }, 10000 / this.level);
    });

    if (this.powersIn < 1) {
      this.createPower();
    }
    if (this.invisibilityIn < 1) {
      this.createInvisibility();
    }
    if (this.enemiesIn.length < 2) {
      this.createEnemy();
    }
    if (frameCount % (Math.floor(Math.random() * 10) * 180 * this.level) == 0) {
      this.createEnemy();
    }

    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => (enemy.position.y += Math.random())); //speed that they come from above yet to be polished
    this.powersIn.forEach(power => (power.position.y += Math.random()));
    this.invisibilityIn.forEach(inv => (inv.position.y += Math.random()));

    this.enemiesIn.forEach(enemy => {
      if (
        frameCount % (Math.floor(Math.random() * 10) * 60 * this.level) ==
        0
      ) {
        this.createBulletEn(enemy);
      }
    });

    this.enemiesIn.forEach(enemy => {
      if (enemy.position.y > HEIGHT) {
        enemy.remove();
        this.points -= 200;
      }
    });
    this.bulletsEnIn.forEach(pulse => {
      if (pulse.position.y < 0) pulse.remove();
    });
    this.powersIn.forEach(power => {
      if (power.position.y > HEIGHT) power.remove();
    });
    this.invisibilityIn.forEach(inv => {
      if (inv.position.y > HEIGHT) inv.remove();
    });
    this.bulletsIn.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.rocketsIn.forEach(rocket => {
      if (rocket.position.y > HEIGHT) rocket.remove();
    });
    this.bulletsIn.forEach(pulse => (pulse.position.y -= 3));
    this.rocketsIn.forEach(rocket => (rocket.position.y -= 3));
    this.bulletsEnIn.forEach(pulse => (pulse.position.y += 2));
  }

  keyPressed() {
    if (keyCode === 32) {
      // When the player dies want to stop shooting;
      if (!this.fired && !this.power) {
        this.createBullet();
        this.fired = true;
        setTimeout(() => {
          this.fired = false;
        }, 500);
      } else if (!this.fired && this.power) {
        this.createRocket();
        this.fired = true;
        setTimeout(() => {
          this.fired = false;
        }, 250);
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
  createRocket() {
    let x = this.player.sprite.position.x;
    let y = this.player.sprite.position.y;
    let newRocket = createSprite(x, y);
    newRocket.addAnimation("pulse", animationRocket);
    this.rocketsIn.add(newRocket);
    newRocket.scale = 3;
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
      newEnemy.health = 1 + this.level;
    }
    newEnemy.scale = 3;
    newEnemy.addAnimation("props", ship);
    this.enemiesIn.add(newEnemy);
  }

  createPower() {
    let x = random(32, width - 32);
    let y = -50;
    let newPower = createSprite(x, y);
    newPower.scale = 3;
    newPower.addAnimation("power", animationPower);
    this.powersIn.add(newPower);
  }
  createInvisibility() {
    let x = random(32, width - 32);
    let y = -50;
    let newInv = createSprite(x, y);
    newInv.scale = 3;
    newInv.addAnimation("power", animationInvisibility);
    this.invisibilityIn.add(newInv);
  }
}
