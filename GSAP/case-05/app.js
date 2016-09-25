window.addEventListener( 'load', function () {
    //
    let box = document.querySelector( '.box' );
    //
    Draggable.create( '.box-item', {
        bounds: box,
        edgeResistance: 0.65, // 0 -1
        dragResistance: 0.01, // 0 -1
        cursor: 'pointer',
        type: 'x, y'
    } );
}, false );


