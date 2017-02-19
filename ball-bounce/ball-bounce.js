var ballXList = [];
var ballListLength = 50;
var colorList = [];
var speed = 3;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");

    for (var i = 0; i < ballListLength; i++) {
        ballXList[i] = int(random(100));
        
    }
    // console.log(ballXList);
}

function draw() {
    background(0);
    noStroke();

    for (var i = 0; i < ballListLength; i++) {
        colorList[i] = color(random(255), random(255), random(255));
        fill(colorList[i]);
        ellipse(ballXList[i], height/2, 100, 100);
        ballXList[i] = ballXList[i] + speed;
        if (ballXList[i] > width || ballXList[i] < 0) {
            speed = speed * -1;
        }
    }
}
