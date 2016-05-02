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

//var object1 = document.querySelector('#object1');
//var object2 = document.querySelector('#object2');
//var object3 = document.querySelector('#object3');
var objects = document.querySelectorAll('#objectsZone > .objects');
var dropZone = document.querySelector('#dropZone');
var button = document.querySelector('#button');

function dragStart(event) {
    this.style.opacity = '.5';
}

function dragEnd(event) {
    this.style.opacity = '1.0';
}

function dragEnter(event) {}

function dragOver(event) {}

function dragLeave(event) {}

function dragDrop(event) {}

function readDropZone() {}

[].forEach.call(objects, function (el) {
    el.addEventListener('dragstart', dragStart, false);
});

[].forEach.call(objects, function (el) {
    el.addEventListener('dragend', dragEnd, false);
});

//object1.addEventListener('dragstart', dragStart, false);
//object2.addEventListener('dragstart', dragStart, false);
//object3.addEventListener('dragstart', dragStart, false);

//dropZone.addEventListener('dragenter', dragEnter, false);
//dropZone.addEventListener('dragover', dragOver, false);
//dropZone.addEventListener('dragleave', dragLeave, false);
//dropZone.addEventListener('drop', dragDrop, false);
//
//button.addEventListener('click', readDropZone, false);