// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

// Adapted from noc examples from Chp 1_10 and Chp 2_01 from noc_master_p5js

// 3/6/16 2:17pm - Added top "wall" to checkedges function
var BUBBLE_SIZE = 14;

var bubbles = [];
// var mites = [];
var m;
// var m2;

function setup() {
  createCanvas(700, 700);
  //m = new Mover(createVector(350,350));
  // m2 = new Mover(createVector(400,40));
  for (var i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(false);
  }
  // for (var i = 0; i < 100; i++) {
  //   mites[i] = new Mite();
  // }
}

function draw() {
  background(101,100,0);
  //
  // var wind = createVector(1, 0);
  // var gravity = createVector(0, 20);
  // m.applyForce(wind);
  // m.applyForce(gravity);
println(bubbles[4]);

  //m.update();
  //m.display();
  //m.checkEdges();

// bubble movement/draw
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }

  // for (var i = 0; i < mites.length; i++) {
  //   mites[i].move();
  //   mites[i].display();
  // }

  // second mover object
  // m2.applyForce(wind);
  // m2.applyForce(gravity);
  //
  // m2.update();
  // m2.display();
  // m2.checkEdges();

}

/*function Mover(pos) {
  this.mass = 2;
  // this.position = createVector(width / 2, height / 2);
  this.position = pos;
  this.velocity = createVector();
  this.acceleration = createVector(0, 0);
  this.topspeed = 1;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(2);

    // this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    // this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };
// predator draw
  this.display = function() {
    // stroke(0);
    noStroke();
    // strokeWeight(2);

    fill(170, 700, 100);
    ellipse(this.position.x, this.position.y, 40, 40);
    fill(250, 40, 0);
  };
// check edges of green predator
  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
    if (this.position.y < 0) {
      this.velocity.y *= -1;
    }
  };
}*/



// bubble function
function Bubble(follow) {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    // stroke(255);
    fill(255);
    if(follow){

  ellipse(m.position.x, m.position.y, BUBBLE_SIZE, BUBBLE_SIZE);

    }
  else {
    ellipse(this.x, this.y, BUBBLE_SIZE, BUBBLE_SIZE);


  }
    // ellipse(m.position.x, this.y, BUBBLE_SIZE, BUBBLE_SIZE);
  }

  this.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);

  }

  this.check = function(){
    return this.x;
    return this.y;
  }
}

// // mite function
// function Mite() {
//   this.x = random(0, width);
//   this.y = random(0, height);
//
//   this.display = function() {
//     stroke(255);
//     // fill(0);
//     rect(this.x, this.y, 4, 4);
//   }
//
//   this.move = function() {
//     this.x = this.x + random(-2, 2);
//     this.y = this.y + random(-2, 2);
//
//   }
//
// }
