/**
 * Created by zencoder on 4/27/16.
 */


function showChildNodes(node, doc) {}

function showDOM() {
  var newWindow = window.open();
  newWindow.document.write('<html>');
  newWindow.document.write('<body>');
  showChildNodes(document.body, newWindow.document);
  newWindow.document.write('</body>');
  newWindow.document.write('</html>');
}

document.querySelector('#start').addEventListener('click', function () {
  showDOM();
}, false);