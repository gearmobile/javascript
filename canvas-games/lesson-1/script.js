/**
 * Created by zencoder on 15/04/16.
 */

document.addEventListener('DOMContentLoaded', function () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    var startX = 75;
    var startY = 50;
    var ballSpeedX = 5;
    var ballSpeedY = 7;
    var framesPreSecond = 30;

    var paddle_width = 100;
    var paddle_height = 10;

    ctx.canvas.width = 800;
    ctx.canvas.height = 600;

    function updateMousePosition(event) {
      var mouseX = event.clientX;
      console.log(mouseX);
    }

    // MOVE BALL
    function moveAll() {
      startX += ballSpeedX;
      startY += ballSpeedY;
      if ( startX > ctx.canvas.width || startX < 0 ) {
        ballSpeedX *= -1;
      }
      if ( startY > ctx.canvas.height || startY < 0 ) {
        ballSpeedY *= -1;
      }
    }

    // DRAW CANVAS
    function drawCanvas(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
    }

    // DRAW BALL
    function drawBall(centerX, centerY, fillColor, ballRadius) {
      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.arc(centerX, centerY, ballRadius, 0, 360*Math.PI/180, true);
      ctx.fill();
      ctx.closePath();
      ctx.save();
    }

    // DRAW CANVAS AND DRAW BALL
    function drawAll() {
      drawCanvas(0, 0, ctx.canvas.width, ctx.canvas.height, 'black');
      drawBall(startX, startY, 'firebrick', 10);
    }

    function updateAll() {
      moveAll();
      drawAll();
    }

    setInterval(updateAll, 1000 / framesPreSecond);
    ctx.canvas.addEventListener('mousemove', updateMousePosition);

  }


}, false);