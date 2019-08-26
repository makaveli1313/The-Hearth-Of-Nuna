class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    
    this.enemies = [];
    this.rockets = [];

  }

  setup() {
  this.background.setup();
  this.player.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.rockets.forEach((bullet, i) => {
      bullet.draw()
      // bullet.checkCollision()
      // if (bullet.hit) {
      //   this.rockets.splice(i, 1)
      // }
      })
  }
}

