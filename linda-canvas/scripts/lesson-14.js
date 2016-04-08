/**
 * Created by zencoder on 4/8/16.
 */


function canvasInit() {
  var ctx = document.querySelector('#canvas').getContext('2d');
  if ( ctx ) {
    ctx.canvas.width = 900;
    ctx.canvas.height = 400;
  }
}




window.addEventListener('load', function () {
  canvasInit();
});