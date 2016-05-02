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

window.addEventListener('DOMContentLoaded', function () {

    if ( !Modernizr.draganddrop ) {
        alert('Your browser don\'t support Drag\'n\'Drop function');
    } else {

        var dropStatus = document.querySelector('#dropStatus');
        var dropTitle = document.querySelector('#dropTitle');
        var dropZone = document.querySelector('#dropZone');
        var objects = document.querySelectorAll('#objectsZone > .objects');
        var dropButton = document.querySelector('#readDropZone');
        var droppedIN = false;

        // BUTTON FUNCTION

        function readZone () {
            var dropZoneChild = dropZone.children;
            for ( var i = 0; i < dropZoneChild.length; i++ ) {
                alert('Object ' + dropZoneChild[i].getAttribute('id') + ' is in ' + dropZone.getAttribute('id'));
            }
        }

        // OBJECTS FUNCTIONS

        function dragStart (event) {
            dropStatus.innerHTML = 'Dragging the ' + event.target.getAttribute('id');
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.setData('text', event.target.getAttribute('id'));
        }

        function dragEnd() {
            if ( droppedIN === false ) {
                dropStatus.innerHTML = 'You let the ' + event.target.getAttribute('id') + ' to go!';
            }
            droppedIN = false;
        }

        // DROP ZONE FUNCTIONS

        function dragEnter (event) {
            dropStatus.innerHTML = 'You are dragging over ' + event.target.getAttribute('id');
            this.classList.add('over');
        }

        function dragLeave (event) {
            dropStatus.innerHTML = 'You left the ' + event.target.getAttribute('id');
            this.classList.remove('over');
            this.removeAttribute('class');
        }

        function dragOver (event) {
            event.preventDefault();
        }

        function dragDrop (event) {
            event.preventDefault();
            var elementID = event.dataTransfer.getData('text');
            var element = document.getElementById(elementID);
            event.target.appendChild(element);
            element.removeAttribute('draggable');
            element.classList.add('dragged');
            element.style.cursor = 'default';
            droppedIN = true;
            dropStatus.innerHTML = 'Element ' + elementID + ' dropped into the ' + event.target.getAttribute('id');
        }

        // LISTENERS

        if ( objects ) {
            [].forEach.call(objects, function (el) {
                el.setAttribute('draggable', 'true');
                el.addEventListener('dragstart', dragStart, false);
                el.addEventListener('dragend', dragEnd, false);
            });
        }

        if ( dropZone ) {
            dropZone.addEventListener('dragenter', dragEnter, false);
            dropZone.addEventListener('dragleave', dragLeave, false);
            dropZone.addEventListener('dragover', dragOver, false);
            dropZone.addEventListener('drop', dragDrop, false);
        }

        if ( dropButton ) {
            dropButton.addEventListener('click', readZone, false);
        }

    }

},false);

