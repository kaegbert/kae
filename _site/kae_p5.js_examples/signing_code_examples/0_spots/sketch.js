var weather;
var x = 0;
function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,UK'+
   '&APPID=7bbbb47522848e8b9c26ba35c226c734';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(700,700);
  noLoop();
}

function draw() {
  background(200);
  // get the humidity value out of the loaded JSON
  var humidity = weather.main.humidity;
  fill(humidity,0,0); // use the humidity value to set the alpha
  ellipse(width/2, height/2, 50, 50);
  println(humidity);
   if (x < 255) {
      x = x + 1;
   }
}