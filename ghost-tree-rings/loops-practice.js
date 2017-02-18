console.log('hello loops-practice!');

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    noStroke();
}

function draw() {
    background(255);
    var fillVal = 255;
    // var diameter = 100;
    // ellipse(windowWidth/2, windowHeight/2, 100, 100);

    for (var i = 25; i > 0; i--) {
        fill(fillVal);
        ellipse(windowWidth/2, windowHeight/2, i*25, i*25);
        fillVal -= 10;
    };

    // from starting at 60; down to 0; decrementing 2 each time
    // - using a blue stroke
    // - draw a circle that goes from the top left to the bottom right

    // from starting at 0; go up to 60; incrementing 2 each time
    // - using a red stroke
    // - draw a circle that goes from the top right to the bottom left

}
