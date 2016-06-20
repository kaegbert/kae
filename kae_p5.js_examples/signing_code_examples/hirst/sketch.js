function setup() {
  createCanvas(400, 400);
  // noLoop();
}

function draw() {
  noStroke();
  for (var i = 0; i < width; i += 20) {
    for (var j = 0; j < height; j += 20) {
      fill(random(0, 255), random(0, 255), 
       random(0, 255));
      ellipse(i, j, 10, 10)
    }
  }
}