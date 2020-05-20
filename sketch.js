let weather;
let a = 0.0;
let s = 0.0;

let a2 = 0.0;
let s2 = 0.0;

let url =
  "http://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=b48c7729bd6c5816e8c6fb60c20264a6";

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotData);
  noStroke();
  fill(255, 204, 0);
  noFill();
  stroke(255, 204, 0);
  background(0);
}

function gotData(data) {
  weather = data;
  console.log(weather);
}

function draw() {
  background("rgba(0,0,0,0.01)");
  a = a + 0.01;
  s = cos(a) * 3;

  if (weather) {
    var temp = weather.main.temp * 50;
    var humidity = weather.main.humidity * 2;

    title = weather.name;
    tempTitle = weather.main.temp + "C";
    humidityTitle = weather.main.humidity + "%";

    // Title
    push();
    stroke(255, 0, 204);
    textSize(64);
    text(title, 400, 200);
    pop();
    // Temp Title
    push();
    textSize(32);
    text(tempTitle, 400, 250);
    pop();
    //Humidity Title
    textSize(32);
    push();
    stroke(0, 204, 250);
    text(humidityTitle, 400, 300);
    pop();

    translate(width / 2, height / 2);

    scale(s);
    // Temp ellipse
    push();
    stroke(0, 204, 250);
    ellipse(100, 0, temp, temp);
    pop();

    // Humidity ellipse
    push();
    stroke(255, 204, 0);
    ellipse(200, 0, humidity, humidity);
    pop();
  }
}
