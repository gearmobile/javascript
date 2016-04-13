/**
 * Created by zencoder on 4/13/16.
 */

// clientX, clientY - координаты мыши относительно левого вехнего угла окна браузера
// скроллинг страницы в окне браузера не учитывается (как будто его нет)

// pageX, pageY - координаты мыши относительно левого верхнего угла окна браузера
// учитывается скроллинг страницы в окне браузера

// screenX, screenY - координаты мыши относительно левого верхнего угла монитора (screen)

function canvasFunc () {

  var ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 400;
    ctx.canvas.height = 400;

    ctx.canvas.addEventListener('mousemove', function (event) {
      var canvasX = event.clientX - ctx.canvas.offsetLeft;
      var canvasY = event.clientY - ctx.canvas.offsetTop;
      var report = 'Canvas mouse position is ' + canvasX + ' and ' + canvasY;
      document.querySelector('.canvas').innerHTML = report;
    });

    ctx.canvas.addEventListener('click', function (event) {
      var color = 'rgb(255,' + Math.ceil(Math.random()*100) + ',255)';
      var radius = 10;
      var canvasX = event.clientX - ctx.canvas.offsetLeft;
      var canvasY = event.clientY - ctx.canvas.offsetTop;
      var report = 'Canvas mouse click position is ' + canvasX + ' and ' + canvasY;
      document.querySelector('.click').innerHTML = report;
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(canvasX, canvasY, radius, 0, 360*Math.PI/180);
      ctx.closePath();
      ctx.fill();
    });

    ctx.canvas.addEventListener('mouseenter', function () {
      ctx.fillStyle = '#00f';
      ctx.globalAlpha = .3;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.save();
      ctx.fillStyle = '#000';
      ctx.font = 'bold 1rem Helvetica, serif';
      ctx.fillText('Click mouse on Canvas', 20, 60);
    });

    ctx.canvas.addEventListener('mouseleave', function () {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    });
  }

}

function windowMouseCoords () {

  window.addEventListener('mousemove', function (event) {
    var windowX = event.clientX;
    var windowY = event.clientY;
    var report = 'Window mouse position is ' + windowX + ' and ' + windowY;
    document.querySelector('.window').innerHTML = report;
  })

}

function screenMouse () {

  window.addEventListener('mousemove', function (event) {
    var screenX = event.screenX;
    var screenY = event.screenY;
    var report = 'Screen mouse position is ' + screenX + ' and ' + screenY;
    document.querySelector('.screen').innerHTML = report;
  })

}

window.addEventListener('load', function () {
  canvasFunc();
});

window.addEventListener('load', function () {
  windowMouseCoords();
});

window.addEventListener('load', function () {
  screenMouse();
});