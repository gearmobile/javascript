window.addEventListener('DOMContentLoaded', function () {

    var result = document.createElement('div');
    result.classList.add('result');
    document.body.appendChild(result);

    function eventsShow(event) {

        result.innerHTML =
            'x: ' + event.x + '<br>' +
            'y: ' + event.y + '<br>' +
            'clientX: ' + event.clientX + '<br>' +
            'clientY: ' + event.clientY + '<br>' +
            'offsetX: ' + event.offsetX + '<br>' +
            'offsetY: ' + event.offsetY + '<br>' +
            'screenX: ' + event.screenX + '<br>' +
            'screenY: ' + event.screenY + '<br>' +
            'Mouse Button: ' + event.button + '<br>' +
            'KeyCode: ' + event.keyCode + '<br>' +
            'altKey: ' + event.altKey + '<br>' +
            'ctrlKey: ' + event.ctrlKey + '<br>' +
            'shiftKey: ' + event.shiftKey + '<br>' +
            'srcElement: ' + event.srcElement.tagName;

    }

    document.documentElement.addEventListener('mousemove', eventsShow, false);
    document.documentElement.addEventListener('mousedown', eventsShow, false);
    document.documentElement.addEventListener('mouseup', eventsShow, false);
    document.documentElement.addEventListener('keydown', eventsShow, false);
    document.documentElement.addEventListener('keyup', eventsShow, false);

}, false);