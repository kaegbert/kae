function setup() {
  createCanvas(500,500);
}

functrion draw(){
  background(0);
  fill(255);
  textSize(50);

m = month();
d = day();
y = year();

text(m + '.' + d + ',' + y, 100, 250);
}