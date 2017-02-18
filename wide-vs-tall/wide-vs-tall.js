
function setup() {
    var canvas = createCanvas(windowWidth, windowHeight); // Set canvas dimensions to window height, width
    canvas.parent("p5canvas");
    noStroke();
    rectMode(CENTER);
    // colorMode(HSB, height, height, height);
}

function draw() {
    var redValue = map(mouseX, 0, windowWidth*0.75, 0, 255);
    var blueValue = map(mouseY, 0, windowHeight*0.75, 0, 255);
    // fill(redValue, 0, blueValue);
    fill(mouseY, 0, blueValue);
    // fill(mouseY, height, height);
    rect(windowWidth/2, windowHeight/2, mouseX, mouseY);
}

