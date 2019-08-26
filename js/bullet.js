class Rocket {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.hit = false
  }

  draw() {
    push()
    fill('lightblue')
    circle(this.x, this.y, 10)
    this.y -= 3;
    pop()
    // this.checkCollision()
  }

  // checkCollision() {

  //   this.bulletRect = {
  //     left: this.x,
  //     right: this.x + 10,
  //     top: this.y,
  //     bottom: this.y + 10,
  //   }


    // game.monsters.forEach((monster, i) => {
    //   if (intersectRect(this.bulletRect, monster.monsterRect)) {
    //     this.hit = true
    //     game.monsters.splice(i, 1)
    //   }

    // })

    // function intersectRect(r1, r2) {
    //   return !(
    //     r2.left > r1.right ||
    //     r2.right < r1.left ||
    //     r2.top > r1.bottom ||
    //     r2.bottom < r1.top
    //   )
    }
//   }
// }