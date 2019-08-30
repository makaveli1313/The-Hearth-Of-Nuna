class Player {
  constructor() {}

  setup() {
    this.x = WIDTH /2;
    this.y = HEIGHT - 50;
    this.velocity = 4;
    this.sprite = createSprite(this.x, this.y);
    this.sprite.addAnimation("idle", animationIdle);
    this.sprite.addAnimation("left", animationLeft);
    this.sprite.addAnimation("right", animationRight);
    this.sprite.scale = 3;
  };

  draw() {
    this.sprite.changeAnimation("idle");
    this.keyIsDown();
  };
 

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
   
  }
  
}
