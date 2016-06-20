function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(0)
  fill(255)
  textSize(50)

  m = month()
  d = day()
  y = year()
  text(m + '.' + d + ',' + y, 100, 250)

  // This code makes a clock
  //  h = hour()
  //  mi = minute()
  //  se = second()
  //  textSize(30)
  //  text(h + 'q' + mi + ':' + se, 100, 350)
}