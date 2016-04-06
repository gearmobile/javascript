/**
 * Created by zencoder on 4/6/16.
 */

// createPattern(pattern, repeat)
// repeat = repeat | repeat-x | repeat-y | no-repeat

window.onload = function () {

  var pattern = document.querySelector('#pattern');
  var ptrVideo = document.querySelector('#video');

  if ( pattern && pattern.getContext ) {

    pattern.width = 900;
    pattern.height = 400;

    var patternCtx = pattern.getContext('2d');


    if ( patternCtx ) {

      // CREATE SIMPLE IMAGE PATTERN
      var image = new Image();
      image.onload = function () {
        patternCtx.fillStyle = patternCtx.createPattern(image, 'repeat');
        patternCtx.fillRect(0, 0, patternCtx.canvas.width, patternCtx.canvas.height);
      };
      image.src = 'images/sample.jpg';
    }
  }

  if ( ptrVideo && ptrVideo.getContext ) {

    ptrVideo.width = 900;
    ptrVideo.height = 400;

    var ptrVideoCtx = ptrVideo.getContext('2d');

    if ( ptrVideoCtx ) {

      //

    }

  }


};
