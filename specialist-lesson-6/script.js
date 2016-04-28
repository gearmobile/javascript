/**
 * Created by zencoder on 4/27/16.
 */

// document.createElement
// document.createTextNode
// appendChild
// insertBefore(x,y)
// cloneNode(false|true)
// replaceChild(x,y)

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

  var clonedParagraph = someParagraph.cloneNode(true);

  paragraph.insertBefore(firstParagraph, paragraph.firstChild);
  paragraph.insertBefore(someParagraph, document.querySelector('#duo'));
  paragraph.appendChild(lastParagraph);
  paragraph.insertBefore(clonedParagraph, document.querySelector('#tre'));

  document.querySelector('#controls').appendChild(document.querySelector('#firstBtn').cloneNode(true));


  var list = document.querySelector('#list');
  var listItems = list.getElementsByTagName('li');
  var removedListItem = list.removeChild(listItems[4]);
  list.insertBefore(removedListItem, listItems[0]);

  var replacedListItem = list.replaceChild(listItems[2], listItems[3]);

}, false);








































