class Explosion {
  constructor(x, y,scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y,);
    this.sprite.addAnimation("explode", explosionAnimation);
    this.sprite.scale = this.scale;
    this.frameCount = frameCount;

    setTimeout(() => {
      this.sprite.remove();
    }, 1000);
  }
}
