var i = 10;

function setup() {
  createCanvas(400, 400);
  i = i * 10;
  println(i);
  println(width / 2);
}

function draw() {
  ellipse(i, width / 2, 10, 10);
}