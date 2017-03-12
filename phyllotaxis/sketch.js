var fibAngle = 137.5;
var n = 1;
var s = 10;
var radius;
var angle;
var numSeeds = 1000;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
}

function draw() {
    background(0);
    noStroke();

    // fibAngle = fibAngle + parseInt($('.fib-slider').html());

    translate(width/2, height/2);

    for (var i = 0; i < numSeeds; i++) {

        var redVal = map(i, 0, numSeeds, 0, 50);
        var greenVal = map(i, 0, numSeeds, 0, 255);
        fill(redVal, greenVal, 250);

        angle = i * fibAngle;
        radius = s * sqrt(i);

        var x = radius * cos(angle);
        var y = radius * sin(angle);

        ellipse(x, y, 10);
    }

    fibAngle += 0.00001;
}


