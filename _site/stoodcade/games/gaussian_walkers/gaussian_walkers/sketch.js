var walkers = [],
    i,
    numberOfWalkers = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < numberOfWalkers; i++){
    walkers.push(new Walker(width / 2, height / 2));
  }
  background(255);
}

function draw() {
    walkers.forEach(function(walker){
        walker.step();
        walker.changeColor();
        walker.display();
    });
}

function Walker (x, y) {
    this.x = x;
    this.y = y;
    this.colorIndex = 0;
    this.color = color(0, 0, 0);
}

Walker.prototype.display = function() {
    stroke(this.color);
    point(this.x, this.y);
};

function colorIndexToColor_old(colorIndex){
    if (colorIndex < 255){
        return color(colorIndex, 0, 0);
    } else if (colorIndex < 255 * 2) {
        return color(255, colorIndex - 255, 0);
    } else if (colorIndex < 255 * 3){
        return color(255, 255, colorIndex - 255 * 2);
    }
}

function colorIndexToColor(colorIndex){
    colorMode(HSB, 300);
    return color(colorIndex, 300, 300);
}

Walker.prototype.changeColor = function() {
    this.colorIndex++;
    if (this.colorIndex > 300){
        this.colorIndex = 0;
    };
    this.color = colorIndexToColor(this.colorIndex);
};

Walker.prototype.step = function() {
    var direction = getDirection();
    var stepSize = getStepSize();
    this.x += direction[0] * stepSize;
    this.y += direction[1] * stepSize;
};
function getDirection () {
    var n = floor(random(9));
    switch (n){
        case 0:
            return [-1, -1];
        case 1:
            return [-1, 0];
        case 2:
            return [-1, 1];
        case 3:
            return [0, -1];
        case 4:
            return [0, 0];
        case 5:
            return [0, 1];
        case 6:
            return [1, -1];
        case 7:
            return [1, 0];
        case 8:
            return [1, 1];
    }
};
function getStepSize () {
    return randomGaussian(2, 1);
};
function keyPressed(){
  if(keyCode === ESCAPE){
    window.location.href="../../../index.html";
    return false;
  }
}