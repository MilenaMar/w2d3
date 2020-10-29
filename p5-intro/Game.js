class Game {
  constructor() {
    this.player1 = new Player(250, 250);
    this.player2 = new Player(100, 200);
  }

  draw() {
    this.player1.draw();
    // this.player2.draw();
    if (keyIsDown(37)) {
      this.player1.moveLeft(1);
    }
    if (keyIsDown(38)) {
      this.player1.moveUp(1);
    }
    if (keyIsDown(39)) {
      this.player1.moveRight(1);
    }
    if (keyIsDown(40)) {
      this.player1.moveDown(5);
    }

    if (keyIsDown(87)) {
      this.player2.moveUp(7);
    }
    if (keyIsDown(65)) {
      this.player2.moveLeft(5);
    }

    if (keyIsDown(83)) {
      this.player2.moveDown(7);
    }
    if (keyIsDown(68)) {
      this.player2.moveRight(5);
    }
  }
}
