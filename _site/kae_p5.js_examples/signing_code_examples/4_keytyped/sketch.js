
var value = 0
var lastkey = 0

function setup() {
  createCanvas(500, 500)
}

function draw() {
  fill(200)
  noStroke()
  rect(25, 25, width, height)
  fill(value)
  textSize(300)
  text(lastkey, width / 2.9, height / 1.5)
}

function keyTyped() {
  if (key == 'a') {
    value = 255
  } else if (key === 'b') {
    value = 245
  } else if (key === 'c') {
    // value = 235
  } else if (key === 'd') {
    //  value = 225
  } else if (key === 'e') {
    //  value = 215
  } else if (key === 'f') {
    //  value = 205
  } else if (key === 'g') {
    //  value = 195
  }  else {
    value = 0
  }
  
  // lastkey = key
}
