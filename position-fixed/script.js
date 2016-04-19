/**
 * Created by zencoder on 4/19/16.
 */

window.addEventListener('DOMContentLoaded', function () {

  function createMessage(element, text) {
    var coords = element.getBoundingClientRect();
    var message = document.createElement('div');
    message.classList.add('fixed');
    message.style.left = coords.right + 'px';
    message.style.top = coords.top + 'px';
    message.innerHTML = text;
    return message;
  }

  document.querySelector('#baloon').addEventListener('click', function () {
    var greeting = createMessage(this, 'Hello from World');
    document.body.appendChild(greeting);
    setTimeout( function () {
      document.body.removeChild(greeting);
    }, 2000);
  });

});
