/**
 * Created by zencoder on 15/04/16.
 */


document.addEventListener('DOMContentLoaded', function () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    var startX = 75;
    var ballSpeedX = 5;
    var framesPreSecond = 30;

    ctx.canvas.width = 800;
    ctx.canvas.height = 600;

    setInterval(updateAll, 1000/framesPreSecond);

    function updateAll () {
      startX += ballSpeedX;

      if ( startX > ctx.canvas.width ) {
        ballSpeedX *= -1;
        console.log(ballSpeedX + ' and ' + startX);
      }

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.save();

      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(startX, 100, 10, 0, 360*Math.PI/180, true);
      ctx.fill();
      ctx.closePath();
      ctx.save();
    }


  }


});