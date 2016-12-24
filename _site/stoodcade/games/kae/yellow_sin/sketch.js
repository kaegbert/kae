var diameter; 
var angle = 0;

function setup() {
  createCanvas(1920, 1080);
  diameter = height - 10;
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background(0);

  var d1 = 10 + (sin(angle) * diameter/2) + diameter/2;
  var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
  var d3 = 10 + (sin(angle + PI) * diameter/2) + diameter/2;
  
  ellipse(0, height/2, d1, d1);
  ellipse(width/2, height/2, d2, d2);
  ellipse(width, height/2, d3, d3);
  
  angle += 0.02;
}

function keyPressed(){
  if(keyCode === ESCAPE){
    window.location.href="../../../index.html";
    return false;
  }
}