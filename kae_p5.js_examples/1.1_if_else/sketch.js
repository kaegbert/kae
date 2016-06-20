function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  if (mouseX > 200) {
    ellipse(200, 200, 100, 100);
  } else {
    rect(150, 150, 100, 100);
  }
}