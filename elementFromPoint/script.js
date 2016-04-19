/**
 * Created by zencoder on 4/19/16.
 */

// document.elementFromPoint(x,y)

window.addEventListener('DOMContentLoaded', function () {

  var clientX = document.documentElement.clientWidth / 2;
  var clientY = document.documentElement.clientHeight / 2;

  document.querySelector('#baloon').addEventListener('click', function () {

    var elem = document.elementFromPoint(clientX, clientY);

    if ( elem ) {
      elem.style.backgroundColor = 'yellow';
      alert(elem.tagName);
      setTimeout( function () {
        elem.style.backgroundColor = '';
      }, 500);
    } else {
      alert('Element not found!');
    }

  });

});