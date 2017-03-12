var xPos = 0;
var yPos = 0;
var xSpeed = 5;
var ySpeed = 5;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    noStroke();
    frameRate(60);
    colorMode(HSB, 100);
    background(10);
}

function draw() {
    if (keyIsPressed === true) {
        background(10);
    }
    ellipse(xPos, yPos, 100, 100);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    // xSpeed += 1;
    // ySpeed += 1;

    // fill(random(255),random(255),255);
    var hueVal = map(xPos, 0, windowWidth, 0, 100);
    fill(hueVal, 100, 100);

    if (xPos >= windowWidth || xPos < 0) {
        xSpeed = xSpeed * -1;
        // fill(255,random(255),random(255));
    }

    if (yPos >= windowHeight || yPos < 0) {
        ySpeed = ySpeed * -1;
        // fill(random(255),255,random(255));
    }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
