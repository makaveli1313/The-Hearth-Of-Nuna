class Player {
  constructor() {}
  preload() {}
  setup() {
    this.x = 100;
    this.y = 100;
    this.velocity = 2;
    this.sprite = createSprite(this.x, this.y);
    this.sprite.addAnimation("idle", animationIdle);
    this.sprite.addAnimation("left", animationLeft);
    this.sprite.addAnimation("right", animationRight);
    this.sprite.addAnimation("shiftLeft", animationTurboLeft);
    this.sprite.addAnimation("shiftRight", animationTurboRight);
    this.sprite.scale = 3;
    this.fired = false;
  }
  draw() {
    this.sprite.changeAnimation("idle");
    this.keyIsDown();
  }
  keyIsDown() {
    if (keyIsDown(37)) {
      this.sprite.changeAnimation("left");
      if (this.sprite.position.x > 2) this.sprite.position.x -= this.velocity;
    }
    if (keyIsDown(39)) {
      this.sprite.changeAnimation("right");
      if (this.sprite.position.x < width - 32)
        this.sprite.position.x += this.velocity;
    }
    if (keyIsDown(40)) {
      if (this.sprite.position.y < height - 48)
        this.sprite.position.y += this.velocity;
    }
    if (keyIsDown(38)) {
      if (this.sprite.position.y > 2) this.sprite.position.y -= this.velocity;
    }
    if (keyIsDown(16)) {
      this.velocity = 4;
    } else {
      this.velocity = 2;
    }
  }
  keyPressed() {
    if (keyCode === 32) {
      if (!this.fired) {
        game.rockets.push(
          new Rocket(this.sprite.position.x, this.sprite.position.y)
        );
        this.fired = true;
        setTimeout(() => {
          this.fired = false;
        }, 500);
      }
    }
  }
}
