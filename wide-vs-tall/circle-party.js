console.log('hello color-color!');

var randXVals = [];
var randYVals = [];
var oceanCircleCount = 100;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight); // Set canvas dimensions to window height, width
    canvas.parent("p5canvas");

    for (var i = 0; i < oceanCircleCount; i++) {
        randXVals.push(random(0, windowWidth));
        randYVals.push(random(windowHeight/2, windowHeight));
    };

}

// function drawtest() {

//     var randX = random(0, windowWidth);
//     var randY = random(0, windowHeight);

//     var redValue = map(randX, 0, windowWidth*3/4, 0, 255);
//     var greenValue = map(randY, 0, windowHeight*3/4, 0, 255);

//     stroke(redValue, greenValue, 110);
//     fill(redValue, greenValue, 100);

//     if (mouseIsPressed === true) {
//         ellipse(randX, randY, 100, 100);
//     }
// }

function draw() {
    // background(255)
    var oceanCircleCount = 1000;
    noStroke();

    // Party circles
    fill(255,0,255);
    var x1 = windowWidth/2;
    var y1 = 1;
    ellipse(x1, y1, 100, 100);

    // Ocean circles
    fill(0,0,255);
    for (var i = 0; i < oceanCircleCount; i++) {
        var x2 = randXVals[i];
        var y2 = randYVals[i];
        ellipse(x2, y2, 50, 50);
    };
    
}
