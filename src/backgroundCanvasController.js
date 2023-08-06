function runCanvasAnimation(width, height) {
  var dots = [];
  var numDots = 100;

  var speedScale = 1;
  var repulsionForce = 20;
  var mouseCaptureDistance = 45;
  var mouseHoldDistance = 35;
  var repulsionRange = 30;
  var drawLineRange = 70;
  var mouseAttractionForce = 1;

  function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  class Dot {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      
      //this.xspeed = Math.random() * (speedScale) - speedScale/2;
      //this.yspeed = Math.random() * (speedScale) - speedScale/2;
      
      this.xspeed = Math.random()*2-1;
      this.yspeed = Math.random()*2-1;
      var mag = Math.sqrt(this.xspeed * this.xspeed + this.yspeed *   this.yspeed) / speedScale;
      this.xspeed /= mag;
      this.yspeed /= mag;
    }

    update(mousex, mousey, canvasWidth, canvasHeight) {

      if (this.x <= 0 || this.x >= canvasWidth) {
        this.xspeed *= -1;
      }

      if (this.y <= 0 || this.y >= canvasHeight) {
        this.yspeed *= -1;
      }

      var xspeedVal = this.xspeed;
      var yspeedVal = this.yspeed;

      if (dist(mousex, mousey, this.x, this.y) < mouseCaptureDistance) {
        var theDist = dist(mousex, mousey, this.x, this.y);
        var xdiff = this.x - mousex;
        var ydiff = this.y - mousey;
        var angle = Math.atan2(ydiff, xdiff);
        xspeedVal = -mouseAttractionForce * (theDist-mouseHoldDistance) * Math.cos(angle);
        yspeedVal = -mouseAttractionForce * (theDist-mouseHoldDistance) * Math.sin(angle);
      

        for (var i = 0; i < dots.length; i++) {
          if (dots[i] !== this) {
            var d = dist(this.x, this.y, dots[i].x, dots[i].y);
            if (d < repulsionRange) { // Adjust the repulsion range as needed
              var angle2 = Math.atan2(this.y - dots[i].y, this.x - dots[i].x);
              xspeedVal += repulsionForce * Math.cos(angle2) / (d + 1);
              yspeedVal += repulsionForce * Math.sin(angle2) / (d + 1);
            }
          }
        }
      }

      this.x += xspeedVal;
      this.y += yspeedVal;
    }

    display(canvasInput) {
      canvasInput.strokeStyle = 'black';
      canvasInput.fillStyle = 'lightgray';
      canvasInput.beginPath();
      canvasInput.arc(this.x, this.y, 2, 0, Math.PI * 2);
      canvasInput.stroke();
      canvasInput.fill();
      canvasInput.closePath();
    }
  }

  function onUpdate(dots, mousex, mousey, canvasInput) {
    var canvasWidth = canvasInput.canvas.width;
    var canvasHeight = canvasInput.canvas.height;

    canvasInput.clearRect(0, 0, canvasWidth, canvasHeight);

    for (var i = 0; i < dots.length; i++) {
      dots[i].update(mousex, mousey, canvasWidth, canvasHeight);
      dots[i].display(canvasInput);
    }
    displayLines(dots, canvasInput);
  }

  function displayLines(dots, canvasInput) {
    for (var i = 0; i < dots.length; i++) {
      for (var j = i + 1; j < dots.length; j++) {
        if (dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) < drawLineRange) {
          canvasInput.strokeStyle = `rgba(0, 0, 0, ${
            1 - dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y) / drawLineRange
          })`;
          canvasInput.beginPath();
          canvasInput.moveTo(dots[i].x, dots[i].y);
          canvasInput.lineTo(dots[j].x, dots[j].y);
          canvasInput.stroke();
          canvasInput.closePath();
        }
      }
    }
  }

  var mouseX = 0;
  var mouseY = 0;

  var canvas = document.getElementById('background-canvas');
  var ctx = canvas.getContext('2d');

  canvas.addEventListener('mousemove', function (e) {
    var cRect = canvas.getBoundingClientRect();
    var scale = 1
    mouseX = Math.round(e.clientX - cRect.left)/scale;
    mouseY = Math.round(e.clientY - cRect.top)/scale;
    console.log(mouseX);
    
  });

  function draw() {
    onUpdate(dots, mouseX, mouseY, ctx);
    requestAnimationFrame(draw);
  }

  function setup() {
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    for (var i = 0; i < numDots; i++) {
      dots[i] = new Dot(canvas.width, canvas.height);
    }

    draw();
  }

  setup();

}

export default runCanvasAnimation;