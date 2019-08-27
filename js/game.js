class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.rockets = [];
  }

  setup() {
    this.enemiesIn = new Group();
    this.background.setup();
    this.player.setup();
  }

  draw() {
    if (frameCount % 240 == 0) {
      this.createEnemy();
    }
    this.background.draw();
    this.player.draw();
    this.enemiesIn.forEach(enemy => enemy.position.y += Math.random());

    this.rockets.forEach((bullet, i) => {
      bullet.draw();
      // bullet.checkCollision()
      // if (bullet.hit) {
      //   this.rockets.splice(i, 1)
      // }
    });
  }

  createEnemy() {
    let randomIndex = Math.floor(Math.random() * shipsArr.length);
    let x = random(32, width - 32);
    let y = -50;
    let newEnemy = createSprite(x, y);
    newEnemy.scale = 3;

    newEnemy.addAnimation("props", shipsArr[randomIndex]);
    this.enemiesIn.add(newEnemy);
  }
}
