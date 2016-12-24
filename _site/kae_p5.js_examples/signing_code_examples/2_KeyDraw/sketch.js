var x = 0;
var y = 0;

function setup() {
  createCanvas(1000, 800);
  background(200);
}

function draw() {

  noStroke();
// stroke(10)
  fill(x / 2, y / 2, x + y / 2);
  ellipse(x, y, 100, 100);
  keydraw();
}

function keydraw (){
    if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x = x - 1;
    } else if (keyCode == RIGHT_ARROW) {
      x = x + 1;
    } else if (keyCode == UP_ARROW) {
      y = y - 1; 
    } else if (keyCode == DOWN_ARROW) {
      y = y + 1;
    }
  }
}

