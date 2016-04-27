/**
 * Created by zencoder on 4/27/16.
 */

window.addEventListener('DOMContentLoaded', function () {
  var paragraph = document.querySelector('#wrapper');
  var lastParagraph = document.createElement('p');
  var firstParagraph = document.createElement('p');
  var someParagraph = document.createElement('p');
  var someParagraphText = document.createTextNode('Some Paragraph');
  var lastParagraphText = document.createTextNode('Last paragraph');
  var firstParagraphText = document.createTextNode('First paragraph');
  lastParagraph.appendChild(lastParagraphText);
  firstParagraph.appendChild(firstParagraphText);
  someParagraph.appendChild(someParagraphText);
  paragraph.insertBefore(firstParagraph, paragraph.firstChild);
  paragraph.insertBefore(someParagraph, paragraph.childNodes[2]);
  paragraph.appendChild(lastParagraph);
}, false);