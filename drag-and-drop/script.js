/**
 * Created by zencoder on 5/1/16.
 */

// dragstart : fires when the user starts dragging the element
// dragend: fires when the user releases the mouse while dragging the object

// dragenter : fires when the draggable element is first dragged over the target element.
// dragover: fires when the mouse is moved over an element when the drag is occurring.
// dragleave: fired if the user’s cursor leaves an element when dragging.
// drag: fires every time we move the mouse during the dragging of our element.
// drop: fired when the actual drop is performed.

var dropStatus = document.querySelector('#dropStatus');
var dropTitle = document.querySelector('#dropTitle');
var dropZone = document.querySelector('#dropZone');
var objects = document.querySelectorAll('#objectsZone > .objects');
var dropButton = document.querySelector('#readDropZone');
