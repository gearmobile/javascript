window.addEventListener( 'load', function () {
    //
    let box = document.querySelector( '.box' );
    //
    Draggable.create( '.box-item', {
        bounds: box,
        edgeResistance: 0.65
    } );
}, false );


