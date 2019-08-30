class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.boss = new Boss();
    this.level = 1;
    this.bossDead = false;
    this.fired = false;
    this.power = false;
    this.invisible = false;
    this.points = 0;
    this.gameOver = false;
    this.gameOverSound = false;
    this.displayTextScreen = "GO!";
    this.level01 = "LEVEL 1";
    this.level02 = "LEVEL 2";
    this.levelBoss = "BOSS !!!";
    
    
  }

  setup() {
    this.enemiesIn = new Group();
    this.bulletsIn = new Group();
    this.rocketsIn = new Group();
    this.bulletsEnIn = new Group();
    this.powersIn = new Group();
    this.invisibilityIn = new Group();
    this.scoresIn = new Group();
    this.background.setup();
    this.player.setup();
    this.boss.setup();
   
    themeMusic.setVolume(0.2)
    themeMusic.play();
  }

  draw() {
    
    
    if (this.level == 3) {
      if (!bossMusic.isPlaying()) {
        themeMusic.pause();
        bossMusic.play();
      }
    }

    console.log(this.points);
    console.log(this.level);
    if (this.gameOver === true) {
      fill(255);
      this.displayTextScreen = "GAME OVER"
    }
    if(this.bossDead === true){
      fill(255);
      this.displayTextScreen = 
      `Thank you for 
      playing! 
      And once again 
      THANK YOU MIN!
      NVT!!!`
      
  }

    if (this.points > 1000 && this.level != 3) {
      this.level = 3;
      this.displayTextScreen = this.levelBoss;
    } else if (this.points > 500 && this.points < 1000 && this.level != 2) {
      this.level = 2;
      this.displayTextScreen = this.level02;
      
    } else if (this.points > 0 && this.points < 500 && this.level != 1) {
      this.level = 1;
      this.displayTextScreen = this.level01;
    }

    if (!this.invisible && !this.gameOver) {
      this.boss.bulletsInBoss.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;
        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      this.boss.bulletsInBoss2.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;
        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      this.boss.bulletsInBoss3.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;
        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      // }
      this.boss.bulletsInBoss4.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;
        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      this.boss.rocketsInBoss.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;
        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      this.boss.sprite.collide(this.player.sprite, (a, b) => {
        this.gameOver = true;
        this.gameOverSound = true;
        explosionSound.setVolume(1);
        explosionSound.play();
        b.remove();
        let explodePlayer = new Explosion(b.position.x, b.position.y, 5);
        explodePlayer.setup();
      });
    }

    this.bulletsIn.collide(this.enemiesIn, (a, b) => {
      if (b.health > 0) {
        b.health -= 1;
        a.remove();
        let explode = new Explosion(b.position.x, b.position.y, 2);
        hitSound.setVolume(0.1);
        hitSound.play();
        explode.setup();
        this.points += 10;
      } else if (b.health === 0) {
        explosionSound.setVolume(1);
        explosionSound.play();
        a.remove();
        b.remove();
        this.createScore(b);
        this.points += 100;
        let explode = new Explosion(b.position.x, b.position.y, 3);
        explode.setup();
      }
    });
    this.bulletsIn.collide(this.boss.sprite, (a, b) => {
      a.remove();
      if (this.boss.health > 0 && this.boss.sprite.position.y > 0) {
        this.boss.health -= 1;
        let explode = new Explosion(b.position.x, b.position.y, 3);
        hitSound.setVolume(0.3);
        hitSound.play();
        explode.setup();
        this.points += 50;
      } else if (this.boss.health === 0) {
        explosionSound.setVolume(1);
        explosionSound.play();
        a.remove();
        b.remove();
        this.bossDead = true;
        // this.createScore(b);
        this.points += 1000;
        let explode = new Explosion(b.position.x, b.position.y, 10);
        explode.setup();
        
      }
    });
    this.rocketsIn.collide(this.boss.sprite, (a, b) => {
      a.remove();
      if (this.boss.health > 0 && this.boss.sprite.position.y > 0) {
        this.boss.health -= 3;
        let explode = new Explosion(b.position.x, b.position.y, 3);
        hitSound.setVolume(0.3);
        hitSound.play();
        explode.setup();
        this.points += 100;
      } else if (this.boss.health === 0) {
        explosionSound.setVolume(1);
        explosionSound.play();
        a.remove();
        b.remove();
        this.bossDead = true;
        // this.createScore(b);
        this.points += 1000;
        let explode = new Explosion(b.position.x, b.position.y, 10);
        explode.setup();
      }
    });

    this.rocketsIn.collide(this.enemiesIn, (a, b) => {
      explosionSound.setVolume(1);
      explosionSound.play();
      let explode = new Explosion(b.position.x, b.position.y, 6);
      explode.setup();
      a.remove();
      b.remove();
      this.createScore(b);
      this.points += 100;
    });
    if (this.gameOverSound) {
      if (frameCount % 120 === 0) {
        gameOverSound.setVolume(0.2);
        gameOverSound.play();
        setTimeout(() => {
          this.gameOverSound = false;
        }, 1200);
      }
    }
    if (!this.invisible && !this.gameOver) {
      this.bulletsEnIn.collide(this.player.sprite, (a, b) => {
        a.remove();
        b.remove();
        explosionSound.setVolume(1);
        explosionSound.play();
        this.gameOver = true;
        this.gameOverSound = true;

        let explode = new Explosion(b.position.x, b.position.y, 5);
        explode.setup();
      });
    }
    if (!this.invisible && !this.gameOver) {
      this.enemiesIn.collide(this.player.sprite, (a, b) => {
        this.gameOver = true;
        this.gameOverSound = true;
        explosionSound.setVolume(1);
        explosionSound.play();
        a.remove();
        b.remove();
        let explodePlayer = new Explosion(b.position.x, b.position.y, 5);
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
      powerUpSound.setVolume(0.5);
      powerUpSound.play();
      this.power = true;
      setTimeout(() => {
        this.power = false;
        this.points += 100;
        this.createScore(b);
      }, 12000 / this.level);
    });
    this.invisibilityIn.collide(this.player.sprite, (a, b) => {
      powerUpSound.setVolume(0.5);
      powerUpSound.play();
      a.remove();
      this.invisible = true;
      this.points += 100;
      this.createScore(b);
      setTimeout(() => {
        this.invisible = false;
      }, 12000 / this.level);
    });

    if (frameCount % Math.floor(Math.random() * 10 * 360) === 0) {
      this.createPower();
    }
    if (frameCount % Math.floor(Math.random() * 10 * 720) === 0) {
      this.createInvisibility();
    }
    if (this.level === 3) {
      this.boss.draw();
    }

    if (
      this.level < 3 &&
      frameCount % Math.floor(Math.random() * 10 * 180) === 0
    ) {
      this.createEnemy();
    }
    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => (enemy.position.y += this.level / 2)); //speed that they come from above yet to be polished
    this.powersIn.forEach(power => (power.position.y += this.level));
    this.invisibilityIn.forEach(inv => (inv.position.y += this.level));
    this.enemiesIn.forEach(enemy => {
      if (
        frameCount %
          ((Math.floor(Math.random() * 10) * 60) / (this.level / 2)) ==
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
    this.scoresIn.forEach(score => {
      setTimeout(() => {
        score.remove();
      }, 2000);
    });
    this.bulletsIn.forEach(pulse => (pulse.position.y -= 3));
    this.rocketsIn.forEach(rocket => (rocket.position.y -= 3));
    this.bulletsEnIn.forEach(pulse => (pulse.position.y += 1 + this.level / 2));

    if (this.displayTextScreen) {
      fill(255);
      text(this.displayTextScreen, WIDTH / 2, HEIGHT / 2);
      // if(this.displayTextScreen === this.level01 || this.displayTextScreen === this.level02 || this.displayTextScreen === this.levelBoss)
      setTimeout(() => {
        this.displayTextScreen = "";
      }, 3000);
    }
    this.score();
    // this.updateScore(this.score);
  }

  keyPressed() {
    if (keyCode === 32 && !this.gameOver) {
      // When the player dies want to stop shooting;
      if (!this.fired && !this.power) {
        pulseSound.setVolume(0.4);
        pulseSound.play();
        this.createBullet();
        this.fired = true;
        setTimeout(() => {
          this.fired = false;
        }, 500);
      } else if (!this.fired && this.power) {
        rocketSound.setVolume(0.2);
        rocketSound.play();
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
      newEnemy.health = -1 + this.level;
    } else if (ship === animationMed) {
      newEnemy.health = 0 + this.level;
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
  createScore(player) {
    let x = player.position.x;
    let y = player.position.y;
    let score1 = createSprite(x, y);
    let score0 = createSprite(x + 20, y);
    let score00 = createSprite(x + 40, y);
    score0.addAnimation("score0", number0);
    score00.addAnimation("score00", number0);
    score1.addAnimation("score1", number1);
    score0.scale = 3;
    score00.scale = 3;
    score1.scale = 3;
    this.scoresIn.add(score0);
    this.scoresIn.add(score00);
    this.scoresIn.add(score1);
  }
  score(){
    fill(255);
    text(`SCORE ${this.points}`, 650,20);
    
  }
  // scoreDisplay(){
    // updateScore(value){
    //   parseInt(scoreElem.html().substring(value));
    // }
  //   score = createButton(this.points.toString());
  //   score.position(0,300)
  // }
}

