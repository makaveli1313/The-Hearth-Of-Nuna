class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y,);
    this.sprite.addAnimation("explode", explosionAnimation);
    this.sprite.scale = 3;
    this.frameCount = frameCount;

    setTimeout(() => {
      this.sprite.remove();
    }, 1000);
  }
}
