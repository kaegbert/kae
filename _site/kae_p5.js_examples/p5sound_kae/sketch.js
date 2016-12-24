/*
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

// Kevin Egbert
// June 15th, 2016
// Adapting load and play sound p5.js example sketch...
// This is my attempt at using many p5.js sound functions for clarity in learning to use sound p5...

// notice this variable doesn't need to be created because it is being defined in setup below...
// if you were to uncomment, everything would be the same...
var song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  // setVolume - another built in function, needs to be called after song is defined...
  song.setVolume(0.1);
  createCanvas(720, 200);
  background(255, 0, 0);
  // PRINT AUDIO'S DURATION IN CONSOLE...
  println(song.duration());

}

function draw() {

  // this needs to be figured out...
  // RETURN SAMPLE RATE OF AUDIO FILE...
  // println(song.sampleRate());

  // this needs to be figured out...
  // RETURN # OF CHANNELS IN A SOUND FILE... MONO = 1, STEREO = 2.
  // println(song.channels());

  // RETURN CURRENT POSITION OF THE SOUNDFILE PLAYHEAD...
  // println(song.currentTime());

  // CHANGE RATE OF PLAYBACK/SPEED...
  // var speed = map(mouseY, 0.1, height, 0, 2);
  // speed = constrain(speed, 0.01, 4);
  // song.rate(speed);

  // ONCE SONG IS LOADED, DO SOMETHING!
  // if (song.isLoaded()) { // .isLoaded() returns a boolean
  // song.play();
  // background(255, 0, 200);
  // }
}

function mousePressed() {
  if (song.isPlaying()) { // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function keyPressed() {
  if (key == 'A') {
    // jump(cueTime,duration)
    // IF THERE ARE NO PARAMETERS GIVEN IT WILL PLAY FROM BEGINNING TO END.
    song.jump();
  }
}
// functions that return booleans... isLoaded(), isPlaying(), isPaused()