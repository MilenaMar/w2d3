class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 30;
  }

  moveLeft(steps) {
    if (this.x <= 0) {
      return;
    }
    this.x -= steps;
  }

  moveRight(steps) {
    if (this.x >= 300 - this.width) {
      return;
    }
    this.x += steps;
  }

  moveUp(steps) {
    if (this.y <= 0) {
      return;
    }
    this.y -= steps;
  }

  moveDown(steps) {
    if (this.y >= 300 - this.height) {
      return;
    }
    this.y += steps;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
