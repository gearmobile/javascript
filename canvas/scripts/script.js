/**
 * Created by zencoder on 3/27/16.
 */
var drawing = document.querySelector('#drawing');
var canvas = document.querySelector('#canvas');
var stroke = document.querySelector('#stroke');
var clear = document.querySelector('#clear');
var clock = document.querySelector('#clock');
var save = document.querySelector('#save');

var image = document.querySelector('#image');
var imageCanvas = document.querySelector('#imageCanvas');


if ( drawing.getContext ) {
  drawing.width = 200;
  drawing.height = 200;
  var drawingContext = drawing.getContext('2d');
  drawingContext.strokeStyle = 'red';
  drawingContext.fillStyle = '#00ff00';
}


if ( canvas.getContext ) {
  canvas.width = 200;
  canvas.height = 200;
  var canvasContext = canvas.getContext('2d');
  canvasContext.fillStyle = '#ff0000';
  canvasContext.fillRect(10, 10, 50, 50);

  canvasContext.fillStyle = 'rgba(0, 0, 255, 0.5)';
  canvasContext.fillRect(30, 30, 50, 50);
}

if ( stroke.getContext ) {
  stroke.width = 200;
  stroke.height = 200;
  var strokeContext = stroke.getContext('2d');
  strokeContext.strokeStyle = '#ff0000';
  strokeContext.strokeRect(10, 10, 50 , 50);

  strokeContext.strokeStyle = 'rgba(0, 0, 255, 0.5)';
  strokeContext.strokeRect(30, 30, 50, 50);
}

if ( clear.getContext ) {
  clear.width = 200;
  clear.height = 200;
  var clearContext = clear.getContext('2d');

  clearContext.fillStyle = '#ff0000';
  clearContext.fillRect(10, 10, 50, 50);

  clearContext.fillStyle = '#0000ff';
  clearContext.fillRect(30, 30, 50, 50);
  clearContext.clearRect(40, 40, 10, 10);
}

if ( clock.getContext ) {

  clock.width = 200;
  clock.height = 200;

  var clockContext = clock.getContext('2d');

  // начинаем рисовать
  clockContext.beginPath();

  clockContext.arc(100, 100, 99, 0, 2*Math.PI, false);

  clockContext.moveTo( 194, 100 );
  clockContext.arc(100, 100, 94, 0, 2 * Math.PI, false);

  clockContext.translate(100, 100);

  clockContext.rotate(1);

  clockContext.moveTo(0, 0);
  clockContext.lineTo(0, -85);

  clockContext.moveTo(0, 0);
  clockContext.lineTo(-65, 0);

  clockContext.font = 'bold 14px Arial, sans-serif';
  clockContext.textAlign = 'center';
  clockContext.textBaseline = 'middle';
  clockContext.fillText('12', 100, 15);

  // заканчиваем рисовать
  clockContext.stroke();

}


if ( save.getContext ) {

  save.width = 200;
  save.height = 200;

  var saveContext = save.getContext('2d');

  saveContext.fillStyle = '#ff0000';
  saveContext.save(); // save state 1

  saveContext.fillStyle = '#00ff00';
  saveContext.translate(100, 100);
  saveContext.save(); // save state 2

  saveContext.fillStyle = '#0000ff';
  saveContext.fillRect(0, 0, 100, 100);

  saveContext.restore(); // return to state 2
  saveContext.fillRect(10, 10, 80, 80);

  saveContext.restore(); // return to state 1
  saveContext.fillRect(10, 10, 100, 100);

}


if ( imageCanvas.getContext ) {
  imageCanvas.width = 200;
  imageCanvas.height = 200;

  var imageContext = imageCanvas.getContext('2d');
  imageContext.drawImage(image, 10, 10);
}