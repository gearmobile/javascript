/**
 * Created by zencoder on 4/14/16.
 */

document.addEventListener('DOMContentLoaded', function () {
  var block = document.querySelector('.first');
  console.log(block.childNodes);
  console.log(block.childNodes[3]);
  console.log(block.childNodes[3].firstChild.firstChild.nodeValue);
  console.log(block.childNodes[3].firstChild.firstChild.nextSibling.nodeType);
});
