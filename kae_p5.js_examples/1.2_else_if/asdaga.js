function setup() {
  createCanvas(400, 400)
  frameRate(10)
}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < width; i += random(100, 120)) {
    for (var t = 0; t < height; t += random(100, 120)) {
      fill(random(0, 250), random(0, 250), random(0, 250)) 
      ellipse(i - t / 5, t - i / 5, 5 - i / random(1, 100), 4 - i / random(1, 100))
    }
  }
}