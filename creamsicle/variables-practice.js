var xPos = 0;
var yPos = 0;
var xSpeed = 1;
var ySpeed = 1;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    noStroke();
}

function draw() {
    // background(20);
    ellipse(xPos, yPos, 100, 100);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    xSpeed += 1;
    ySpeed += 1;

    fill(255,random(255),random(255));

    if (xPos >= windowWidth || xPos < 0) {
        // xSpeed = xSpeed * -0.9;
        xSpeed = xSpeed * -1;
        ySpeed = 1;

    }

    if (yPos >= windowHeight || yPos < 0) {
        // ySpeed = ySpeed * -0.9;
        xSpeed = 1;
        ySpeed = ySpeed * -1;

    }
}
