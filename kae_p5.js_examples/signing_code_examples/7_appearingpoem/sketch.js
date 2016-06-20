var i = 0
var delimiter = /(\;+)/
var poem = "we clipped your wings, no surprise this bird will sing"

function setup() {

  createCanvas(800, 400)
  frameRate(30);
}

function draw() {
  background(5)
  var splitString = split(poem, delimiter)
  textSize(30)
  if (i < 255) {

    fill(i)
    text((splitString[0] + splitString[1]), 10, height/2)
    text((splitString[2]), 10, height/2+30)
    i = i + 1
  } else {
    i = 0
  }
}