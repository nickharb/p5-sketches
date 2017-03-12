var circleCount = 259;
var startPos = 100;
var xPos = startPos;
var yPos = startPos;
var interval = 50;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    background(240, 240, 235);
    strokeWeight(3);
    stroke(50);
    noFill();

    for (var i = 0; i < circleCount; i++) {
        ellipse(xPos, yPos, 100, 100);
        if (yPos < windowHeight-startPos) {
            yPos += interval;
        } else {
            yPos = startPos;
            xPos += interval;
        }
    };
}

function draw() {
    // 
}
