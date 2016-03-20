var photo = new Image();

var canvas = document.querySelector('#canvas');
var ctxCanvas = canvas.getContext('2d');

function render () {

  var width = window.innerWidth;
  var scale = window.innerWidth / photo.naturalWidth;
  var height = photo.naturalHeight * scale;
  canvas.width = width;
  canvas.height = height;
  ctxCanvas.drawImage(photo, 0, 0);

}

photo.onload = render;
photo.crossOrigin = 'Anonymous';
photo.src = 'https://s3.amazonaws.com/share.viget.com/images/viget-works.jpg';



console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(photo.constructor);
