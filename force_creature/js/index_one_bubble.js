// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of the basics of motion with vector.
// A "Mover" object stores position, velocity, and acceleration as vectors
// The motion is controlled by affecting the acceleration (in this case towards the mouse)

// Adapted from noc examples from Chp 1_10 and Chp 2_01 from noc_master_p5js

// 3/6/16 2:17pm - Added top "wall" to checkedges function
var bubble = {
  x: 300,
  y: 200,

  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 4, 4);
  },
  move: function() {
    this.x = this.x + random(-7, 7);
    this.y = this.y + random(-7, 7);
  },

  checkEdges: function() {
    if (this.x > width) {
      this.x = width;
      this.x *= -1;
    } else if (this.x < 0) {
      this.x *= -1;
      this.x = 0;
    }
    if (this.y > height) {
      this.y *= -1;
      this.y = height;
    }
    if (this.y < 0) {
      this.y *= -1;
    }
  },
};

var m;
// var m2;

function setup() {
  createCanvas(700, 700);
  m = new Mover(createVector(350,350));
  // m2 = new Mover(createVector(400,40));
}

function draw() {
  background(201);
  bubble.move();
  bubble.display();
  bubble.checkEdges();
  //
  // var wind = createVector(1, 0);
  // var gravity = createVector(0, 20);
  // m.applyForce(wind);
  // m.applyForce(gravity);

  m.update();
  m.display();
  m.checkEdges();

  // second mover object
  // m2.applyForce(wind);
  // m2.applyForce(gravity);
  //
  // m2.update();
  // m2.display();
  // m2.checkEdges();

}

function Mover(pos) {
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

  this.display = function() {
    // stroke(0);
    noStroke();
    // strokeWeight(2);

    fill(170, 700, 100);
    ellipse(this.position.x, this.position.y, 40, 40);
    fill(250, 40, 0);
  };

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
}
