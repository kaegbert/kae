var w;
var x;
var y; 
var q;
var r;
function setup(){
  background(255);
  createCanvas(1920,1080);
  frameRate(20);
  
  
}

function draw(){
 // background(255);
  r=random(25,200);
  x=random(0,width);
  y=random(0,height);
  q=random(2,100);
  w=random(50,100);
  fill(r,100,0);
    rect(x,y,q,w);
    fill(255);
  rect(x,y,30,30);
  rect(x+40,y+40,25,5);
  fill(0);
  stroke(1);
  line(x, y, x+30, y+30);
 
}

function keyPressed(){
  if(keyCode === ESCAPE){
    window.location.href="../../../index.html";
    return false;
  }
}