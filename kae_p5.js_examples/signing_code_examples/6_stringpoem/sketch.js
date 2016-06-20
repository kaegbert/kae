function setup(){
  createCanvas(200,200);
  background(200);
}

function draw(){
  fill(random(250),random(250),random(250))
  rect(mouseX,mouseY,10,10);
}