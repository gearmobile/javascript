window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#button').addEventListener('click', function () {
    var pos = this.getBoundingClientRect();
    alert('Top: '+pos.top+'; Left: '+pos.left+'; Bottom: '+pos.bottom+'; Right: '+pos.right);
  });
});