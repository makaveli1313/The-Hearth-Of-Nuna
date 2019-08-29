class Boss {
  constructor() {}
  setup() {
    this.health = 3;
    this.x = WIDTH / 2;
    this.y = -100;
    this.sprite = createSprite(this.x, this.y);
    this.sprite.addAnimation("idle", animationBoss);
    this.sprite.scale = 4;
    this.direction = "down";
    this.bulletsInBoss = new Group();
    this.bulletsInBoss2 = new Group();
    this.bulletsInBoss3 = new Group();
    this.bulletsInBoss4 = new Group();
    this.rocketsInBoss = new Group();
  }
  draw() {
   
    if (this.direction === "down") {
      this.sprite.position.y += 0.5;
      if (frameCount % 30 === 0 && this.sprite.position.y > 50 && !game.bossDead) {
        this.fire();
      }
      if (this.sprite.position.y === HEIGHT / 2) {
        this.direction = "up";
      }
    }
    if (this.direction === "up") {
      this.sprite.position.y -= 0.5;
      if (frameCount % 120 === 0 && !game.bossDead) {
        this.fire();
      }
      if (this.sprite.position.y === 0) {
        this.sprite.position.y -= 0.5;
        this.direction = "down";
      }
     
    }
    this.bulletsInBoss.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.bulletsInBoss2.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.bulletsInBoss3.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.bulletsInBoss4.forEach(pulse => {
      if (pulse.position.y > HEIGHT) pulse.remove();
    });
    this.bulletsInBoss.forEach(pulse => (pulse.position.y += 3 ,pulse.position.x -=2));
    this.bulletsInBoss2.forEach(pulse => (pulse.position.y += 3 ,pulse.position.x +=2));
    this.bulletsInBoss3.forEach(pulse => (pulse.position.y += 3 ,pulse.position.x +=5));
    this.bulletsInBoss4.forEach(pulse => (pulse.position.y += 3 ,pulse.position.x -=5));
    this.rocketsInBoss.forEach(rocket => (rocket.position.y += 3 ));
  }
  fire() {
    let newBossPulse = createSprite(
      this.sprite.position.x,
      this.sprite.position.y
    );
    let newBossPulse2 = createSprite(
      this.sprite.position.x,
      this.sprite.position.y
    );
    let newBossPulse3 = createSprite(
      this.sprite.position.x,
      this.sprite.position.y
    );
    let newBossPulse4 = createSprite(
      this.sprite.position.x,
      this.sprite.position.y
    );
    let newBossRocket= createSprite(
      this.sprite.position.x,
      this.sprite.position.y
    );
    
    newBossPulse.addAnimation("pulseboss", animationPulse);
    this.bulletsInBoss.add(newBossPulse);
    newBossPulse.scale = 4;
    newBossPulse2.addAnimation("pulseBoss01", animationPulse);
    this.bulletsInBoss2.add(newBossPulse2);
    newBossPulse2.scale = 4;
    newBossPulse3.addAnimation("pulseBoss01", animationPulse);
    this.bulletsInBoss3.add(newBossPulse3);
    newBossPulse3.scale = 4;
    newBossPulse4.addAnimation("pulseBoss01", animationPulse);
    this.bulletsInBoss4.add(newBossPulse4);
    newBossPulse4.scale = 4;
    newBossRocket.addAnimation("rocket",animationRocketInverted);
    this.rocketsInBoss.add(newBossRocket);
    newBossRocket.scale = 4;
  }
}
