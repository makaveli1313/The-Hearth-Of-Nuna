class Background {
  constructor() {
    this.yDesert = 0;
    this.yCloud = 0;
    this.yCloudTrans = 0;
  }

  setup() {
    this.bgDesert = loadImage("../assets/backgrounds/desert-backgorund.png"); // p5 function

    this.bgCloud = loadImage("../assets/backgrounds/clouds-transparent.png");
  }
  draw() {
    this.yCloud = this.yCloud + 1;
    if (this.yCloud >= height) {
      this.yCloud = -103;
    }
    image(this.bgDesert, 0, this.yDesert, width, height);
    image(this.bgCloud, 0, this.yCloud, width, 206);
  }
}
