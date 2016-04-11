/**
 * Created by zencoder on 4/11/16.
 */

function funcCanvas () {

  let ctx = document.querySelector('#canvas').getContext('2d');

  if ( ctx ) {

    ctx.canvas.width = 900;
    ctx.canvas.height = 300;

    ctx.fillStyle = '#00f';
    ctx.fillRect(150,30,100,50);

    ctx.rotate(45*Math.PI/180);
    ctx.fillRect(150,30,100,50);
    ctx.save();

    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
    const angle = 20*Math.PI/180;
    for ( degree = 0; degree < 360; degree += 20 ) {
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(-100,0);
      ctx.lineTo(100,0);
      ctx.stroke();
    }

  }

}





window.addEventListener('load', function () {
  funcCanvas();
});