function Spiral(x,y) {
  this.n = 0;
  var c = 4;
  var step = 1;
  var growing = true;
  var i = 0;
  var c_offset = random(0,300);
  var threshold = 250;

  this.originX = x;
  this.originY = y;

  this.x;
  this.y;
  this.r;
  this.a;

  this.draw = function() {
    noStroke();
    fill(this.n % 50 + c_offset,360,360);
    ellipse(this.x, this.y, 4, 4);
  }

  this.run = function(){
    this.a = this.n * 137.5
    this.r = c * sqrt(this.n);
    this.x = this.r * cos(this.a) + this.originX;
    this.y = this.r * sin(this.a) + this.originY;

    this.draw();

    if (this.r > threshold){
      growing = false;
      step *= -1
      c_offset = random(50,360);
    }

    // if (!growing) {
    //   c_offset = random(50,360);
    // }

    if (this.n < 0){
      growing = true;
      step *= -1
      c_offset = random(50,360);
    }
    this.n += step;
  }

}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    // var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
    background('black');
    angleMode(DEGREES);
    colorMode(HSB,360);
}

var spirals = [];
// for (var i = 0; i < 3; i++) {
//   var sp = new Spiral(i*1000);
//   spirals.push(sp)
// }

function draw() {
  background('rgba(0,0,0, 0.05)')
  for (var i = 0; i < 20; i++) {
    spirals.forEach(spiral => {
      spiral.run();
    })
  }

  if (key == 'j'){
    spirals.push(new Spiral(width/2, height/2));
    spirals.push(new Spiral(width/2 + 100, height/2));
    spirals.push(new Spiral(width/2 - 100, height/2));
    spirals.push(new Spiral(width/2, height/2 - 100));
    spirals.push(new Spiral(width/2, height/2 + 100));
  }

  if (key == 'k'){
    for (var i = 0; i < 360; i+=36) {
      var x = 100 * cos(i) + width/2
      var y = 100 * sin(i) + height/2
      spirals.push(new Spiral(x,y))
    }
  }

  if (key == 'l'){
    for (var i = 0; i < 25; i++) {
      var x = random(0, width);
      var y = random(0, width);
      spirals.push(new Spiral(x,y))
    }
  }

  if (key == 'z'){
    spirals = [];
  }
}

function mouseClicked(){
  var sp = new Spiral(mouseX, mouseY);
  spirals.push(sp);
}
