 
var result;

function preload() {
  result = loadStrings('assets/beforesleep.txt');

}

function setup() {
  background(200);
  createCanvas(500, 500)
  txt = join(result, '\n');
}

function draw() {
  textSize(20)
  textFont("Georgia");
  fill(0);
  var list = splitTokens(txt, 'a','e','u','o','i')
 
  for (i = 0; i < list.length; i += 1) {
    text(i + list[i], 10, i * 50, 800, 940);
  }

}