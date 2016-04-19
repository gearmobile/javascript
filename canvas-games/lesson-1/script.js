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
    var framesPreSecond = 50;

    ctx.canvas.width = 800;
    ctx.canvas.height = 600;

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

    function drawCanvas(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
    }

    function drawBall(fillColor, ballRadius) {
      ctx.fillStyle = fillColor;
      ctx.beginPath();
      ctx.arc(startX, startY, ballRadius, 0, 360*Math.PI/180, true);
      ctx.fill();
      ctx.closePath();
      ctx.save();
    }

    function drawAll() {
      drawCanvas(0, 0, ctx.canvas.width, ctx.canvas.height, 'black');
      drawBall('firebrick', 10);
    }

    setInterval(updateAll, 1000/framesPreSecond);

    function updateAll () {
      moveAll();
      drawAll();
    }
  }


}, false);