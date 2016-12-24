// global variables pertaining to the entities

var PREY_SIZE = 10;
var PREDATOR_SIZE = 50;
var PREDATOR_MAX_SIZE = 105;
var PREY_COLOR = "#fff";
var PREDATOR_COLOR = "orange";
var NUM_PREY = 70;
var NUM_PREDATORS = 1;
// var ACCELERATION = 0.01;

// array of organisms...
var entities = [];

function setup() {
  createCanvas(700, 700);

  // spawn prey
  // for loop adds to array
  for (var i = 0; i < NUM_PREY; i++) {
    var pos = createVector(random(0, width), random(0, height));
    var vel = createVector(0,0);
    var acc = createVector(random(-0.002, .02), random(-.002, .02));
    // var acc = createVector(-0.001,0.01);

    // add a new prey to the entity array
    entities.push(new Entity(pos, vel, acc, true));
  }

  // spawn predators
  for (var i = 0; i < NUM_PREDATORS; i++) {
    var pos = createVector(random(0, width), random(0, height));
    var vel = createVector(1,2);
    // var acc = createVector(random(-0.002, .02), random(-.002, .007));

    var acc = createVector(.001,0.001);

    // add a new predator to the entity array
    // new Entity is a declaration/initilization of object, placing in array
    entities.push(new Entity(pos, vel, acc, false));
  }

}
// drawing the array of predators and prey.
// nested for loop. j referencing the same array.
// If entities are colliding
// && one is prey and other is predator
// predator grows
// remove prey from array.

function draw() {
  background(50,100,170,80);
  for (var i = 0; i < entities.length; i++) {
    entities[i].move();
    entities[i].display();
    for(var j = 0; j < entities.length; j++){
      if(entities[i].isPrey && !entities[j].isPrey) {
        if(collide(entities[i], entities[j])){
            entities[j].grow(entities[i].size/2);
            entities.splice(i, 1);
        } else if(within(entities[i], entities[j])) {
          ellipse(60, 60, 69, 69);

          // make small balls run away here
        }
      }
    }
  // if it is a predator...
    if(!entities[i].isPrey) {
  // size slowly decays
      entities[i].size -= 0.05;
  // If predator size = zero, remove predator from array.
      if(entities[i].size < 0) {
        entities.splice(i, 1);
      }
    }
  }
}

// passing position, velocity, and predator/prey status
// reprsents an individual organism
function Entity(pos, vel, acc, isPrey) {
  this.isPrey = isPrey;
  this.pos = pos;
  this.vel = vel;
  // this.acc = acc;
  this.size;
  this.color;
  if(isPrey) {
    this.size = PREY_SIZE;
    this.color = PREY_COLOR;
  }
  else {
    this.size = PREDATOR_SIZE;
    this.color = PREDATOR_COLOR;
  }

  this.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  this.move = function() {
    // check edges
    if ((this.pos.x > width) || (this.pos.x < 0)) {
      this.vel.x = this.vel.x * -1;
    }
    if ((this.pos.y > height) || (this.pos.y < 0)) {
      this.vel.y = this.vel.y * -1;
    }
    // pos.x = pos.x + vel.x;
    // pos.y = pos.y + vel.x;
    pos.add(vel);
    vel.add(acc);
    // println(vel);

  }

  this.grow = function(howMuch) {
    this.size += howMuch;
    if(this.size > PREDATOR_MAX_SIZE)
      this.size = PREDATOR_MAX_SIZE;
  }
}

function collide(e1, e2){
  var dist = e1.pos.copy();
  dist.sub(e2.pos);
  if(dist.mag() <= e1.size/2+e2.size/2) {
    return true;
  }
  return false;
}

function within(e1, e2){
  var dist = e1.pos.copy();
  dist.sub(e2.pos);
  if(dist.mag() <= (e1.size/2+e2.size/2)*2) {
    return true;
  }
  return false;
}


// function keyPressed() {
// 	  if (key == 'A') {
//       var pos = createVector(random(0, width), random(0, height));
//       var vel = createVector(1,2);
//       entities.push(new Entity(pos, vel, true));
// 	  }
//   }
