function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  ellipse(200, 200, 100, 100);
  if (mouseX > 200) {
    fill(0);
    ellipse(200, 200, 100, 100);
  }
}