var branches = [];
var fillColor = 255, backgroundColor = 0, maxSize = 20;
var doOnce = true;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    stroke(0, 150, 255, 65);
    for(var i = 0; i < maxSize; i++) {
        branches.push(new Branch());
    }

}

function draw() {
    background(backgroundColor);
    for(var i = 0; i < branches.length; i++){
        var b = branches[i];
        push();
        translate(mouseX, mouseY);
        rotate(radians(b.startAngle));
        b.branch(b.segments);
        pop();
    }
}

function Branch() {
    var self = this;
    var theta = 0;
    var num = 0;

    this.segments = random(60, 120);
    this.startAngle = random(-360, 360);
    this.angle = map(self.startAngle, -360, 360, -10, 10);
  
    this.branch = function(len) {
        len *= 0.75;
        var t = map(len, 1, 70, 1, 10);
        theta = self.angle + sin(len+num) * 5;
        strokeWeight(t);
        fill(0, 150, 255, 30);
        bezier(0, 0, 0, t, -len/2, t, 0, -len);
        bezier(0, 0, 0, t, len/2, t, 0, -len);
        fill(fillColor);
        ellipse(0, 0, t, t);
        translate(0, -len);
        if (len > 5) {
            push();
            rotate(radians(-theta));
            this.branch(len);
            pop();
        }
        num += 0.005;
    }
}


