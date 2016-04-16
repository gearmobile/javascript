/**
 * Created by zencoder on 4/14/16.
 */

document.addEventListener('DOMContentLoaded', function () {

  var flag = false;
  var path = 'images/image2.jpg';
  var image = document.querySelector('#imageOrigin');

  document.querySelector('#changeImage').addEventListener('click', function () {
    image.src = path;
  });

  document.querySelector('#loopImage').addEventListener('click', function () {
    if ( flag ) {
      image.src = 'images/image1.jpg';
    } else {
      image.src = 'images/image2.jpg';
    }
    flag = !flag;
  });

});

function resizeImage () {
  var originImage = document.querySelector('#imageSecond');
  var normalWidth = 600;
  if ( originImage.width < normalWidth ) {
    originImage.width *= 1.1;
    originImage.height *= 1.1;
    setTimeout( 'resizeImage()', 100);
  }
}