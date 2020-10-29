function preload() {
  console.log("PRELOAD");
}

function setup() {
  console.log("RUNNING SETUP");
  createCanvas(300, 300);
}

const game = new Game();

function draw() {
  clear();
  background("cyan");
  game.draw();
}

// function keyPressed() {
//   if (keyCode === 37) {
//     if (x === 0) {
//       return;
//     }
//     x -= 10;
//   }
//   if (keyCode === 38 || keyCode === 87) {
//     if (y === 0) {
//       return;
//     }
//     y -= 10;
//   }

//   if (keyCode === 39) {
//     //   NOT OFF CANVAS
//     if (x + 10 >= 289) {
//       return;
//     }
//     x += 10;
//   }
//   if (keyCode === 40) {
//     if (y === 270) {
//       return;
//     }
//     y += 10;
//   }
// }

// setTimeout(() => {
//   x = 100;
// }, 1000);

// if(typeof draw === "function") {

// }
