/**
 * Created by zencoder on 4/6/16.
 */

window.onload = function () {

  var text = document.querySelector('#text');

  if ( text && text.getContext ) {

    text.width = 900;
    text.height = 300;

    var textCtx = text.getContext('2d');

    if ( textCtx ) {

      var theString = 'Drawing Text on a Canvas';

      textCtx.fillStyle = 'green';
      textCtx.strokeStyle = 'blue';
      textCtx.save();

      // DRAW SIMPLE TEXT
      textCtx.fillText(theString,20,20);

      // DRAW TEXT WITH SOME FONT SETTINGS
      textCtx.fillStyle = 'sienna';
      textCtx.font = 'bold 2rem Arial, sans-serif';
      textCtx.fillText(theString,20,60);
      textCtx.save();

      // draw text with stroke and fill
      textCtx.lineWidth = 3;
      textCtx.font = '3rem Verdana';
      textCtx.fillStyle = 'yellow';
      textCtx.strokeStyle = 'rgba(0,255,0,.8)';
      textCtx.textBaseline = 'middle';
      textCtx.strokeText(theString,20,160);
      textCtx.fillText(theString,20,160);
      textCtx.save();

      // draw text with measureText
      textCtx.fillStyle = 'blue';
      textCtx.beginPath();
      textCtx.stroke();

    }

  }

};