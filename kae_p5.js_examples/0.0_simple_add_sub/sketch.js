function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(0, 255, 0);
  line(100, 100, 300, 300);

  stroke(255, 0, 200);
  line(300 + 50, 100 + 50, 100 - 50, 100 - 50);
}