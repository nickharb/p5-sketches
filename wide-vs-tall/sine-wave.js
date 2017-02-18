var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 200; // Height of wave
var period = 700;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
    // createCanvas(710, 400);
    var canvas = createCanvas(windowWidth, windowHeight); // Set canvas dimensions to window height, width
    canvas.parent("p5canvas");
    w = width+16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(floor(w/xspacing));
}

function draw() {
    background(0);
    calcWave();
    renderWave();
}

function calcWave() {
    // Increment theta (try different values for 
    // 'angular velocity' here
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
        yvalues[i] = sin(x)*amplitude;
        x+=dx;
    }
}

function renderWave() {
    noStroke();

    fill(200, 200, 255);
    if (keyIsPressed === true) {
        fill(255, 0, 255);
    }
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
        ellipse(x*xspacing+100, height/2+yvalues[x], 20, 20);
    }
    
    fill(0, 0, 255);
    if (keyIsPressed === true) {
        fill(255, 0, 0);
    }
    for (var x = 0; x < yvalues.length; x++) {
        ellipse(x*xspacing, (height/2+yvalues[x])+100, 20, 20);
    }
    
    fill(50, 50, 255);
    if (keyIsPressed === true) {
        fill(255, 255, 0);
    }
    for (var x = 0; x < yvalues.length; x++) {
        ellipse(x*xspacing+50, (height/2+yvalues[x])-100, 20, 20);
    }
}