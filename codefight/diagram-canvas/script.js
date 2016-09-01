var diagram;
var lineWidth = 20;
var progressValue = 6;
var progressTotal = 10;
var colorMain = '#234';
var colorProgress = 'firebrick';

Math.radians = function( degrees ) {
    "use strict";
    return degrees * Math.PI / 180;
};

Math.percent = function ( a, b ) {
    "use strict";
    return ( a * 360 ) / b;
};

function diagramSetup() {
    "use strict";
    diagram.lineWidth = lineWidth;
    diagram.lineCap = 'round';
}

function diagramMain( param ) {
    "use strict";
    diagram.strokeStyle = param;
    diagram.beginPath();
    diagram.arc( diagram.canvas.width / 2, diagram.canvas.height / 2, diagram.canvas.width / 2 - diagram.lineWidth, 0, Math.radians( 360 ) );
    diagram.stroke();
}

function diagramProgress( param ) {
    "use strict";
    diagram.strokeStyle = param;
    diagram.beginPath();
    diagram.arc( diagram.canvas.width / 2, diagram.canvas.height / 2, diagram.canvas.width / 2 - diagram.lineWidth, 0, Math.radians( Math.percent( progressValue, progressTotal ) ) );
    diagram.stroke();
}

function diagramText( param1, param2 ) {
    "use strict";
    document.querySelector( '.text__value' ).innerHTML = param1.toString();
    document.querySelector( '.text__total' ).innerHTML = param2.toString();
}

window.addEventListener( 'DOMContentLoaded', function () {
    "use strict";
    diagram = document.querySelector( '.diagram' ).getContext( '2d' );
    if ( diagram ) {
        diagram.canvas.width = 200;
        diagram.canvas.height = 200;
        diagramSetup();
        diagramMain( colorMain );
        diagramProgress( colorProgress );
        diagramText( progressValue, progressTotal );
    } else {
        alert( 'Browser dosn\'t support canvas' );
    }
}, false);