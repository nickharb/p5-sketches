var angle = 0;
var bg = [0,20,35];
var diameter = 0;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
}

function draw() {
    background(bg[0],bg[1],bg[2]);

    angle+=0.005;

    translate(width/2, height/2);
    rotate(-HALF_PI);

    fill(bg[0],bg[1],bg[2]);
    stroke(255);
    strokeWeight(10);

    for (var i = 10; i > 0; i--) {
        diameter = i * 50;
        push();
        rotate(angle * i);
        arc(0, 0, diameter, diameter, 0, radians(220));
        pop();
    };
}
