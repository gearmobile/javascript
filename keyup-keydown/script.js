/**
 * Created by zencoder on 4/15/16.
 */

// keyup - событие, происходящее, когда клавиша мыши отжата
// keydown - событие, когда клавиша мыши нажата
// onkeyup - обработчик события keyup
// onkeydown - обработчик события keydown
// keyCode - событие объекта event, возвращающее нажатую клавишу

document.addEventListener('DOMContentLoaded', function () {
  var keyUp = document.querySelector('#keyup');
  var keyDown = document.querySelector('#keyup');
});

document.addEventListener('keydown', function (event) {
  var keyPress = String.fromCharCode(event.keyCode);
});

document.addEventListener('keyup', function (event) {
  //
});