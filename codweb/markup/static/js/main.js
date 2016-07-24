'use strict';

let param = {
    x: 0,
    y: 0,
    radius: 1
};

let mouse = {
    x: 0,
    y: 0
};

let m = {};

let circles = [];

//let m = new Object( param, 0 );

let canvasCtx = null;
const radius = 5;
const angle = 360;

// FUNCTION RANDOMVALUE
// ----------------------------------------
function randomValue( value ) {
    return Math.floor( Math.random() * value );
}

// FUNCTION ANIMATE RENDERING
// -----------------------------------------
function animate( canvasContext ) {
    setInterval( function () {
        canvasContext.clearRect( 0, 0, canvasContext.canvas.width, canvasContext.canvas.height );
        m.x = mouse.x;
        m.y = mouse.y;
        for ( var i = 0; i < circles.length; i++ ) {
            //circles[i].move();
            //circles[i].outScreen();
        }
    }, 20 );
}

// FUNCTION INIT
// -----------------------------------------
function init() {

    canvasCtx = document.getElementById( 'canvas' ).getContext( '2d' );
    canvasCtx.canvas.width = screen.availWidth;
    canvasCtx.canvas.height = screen.availHeight;

    for ( var i = 0; i <= angle; i++ ) {
        circles.push({
            x: randomValue( screen.availWidth ),
            y: randomValue( screen.availHeight ),
            radius: randomValue( radius ),
            angle: randomValue( angle )
        });
    }

    animate( canvasCtx );
}

window.addEventListener( 'load', function () {
    init();
    var buffer = new Array(8);
    console.log(buffer);
    buffer[0] = 1;
    buffer[1] = 2;
    buffer[2] = 3;
    console.log(buffer);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
    buffer.copyWithin( 3, 0, 3 );
    console.log(buffer);
}, false);


