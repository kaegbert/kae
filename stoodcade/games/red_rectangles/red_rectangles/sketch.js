

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  fill(random(0, 255), 0, 0);
  stroke(random(0, 255), 0, 0);
  rect(random(0,1920), random(0, 1080), random(0, 100), random(0,100));
}

function keyPressed(){
	if(keyCode === ESCAPE){
		window.location.href="../../../index.html";
		return false;
	}
}