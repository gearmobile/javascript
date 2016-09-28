window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let array = [ 1, 2, 3 ];
    let timesFour = array.map( function( item ) {
        return item * 4;
    });
    console.log( timesFour ); // => [ 4, 8, 12 ]
    console.log( array ); // => [ 1, 2, 3 ]
    // -------------------------------------------------------
    let oldArray = [ 1, 2, 3, 4, 5 ];
    let newArray = oldArray.map( function ( item ) {
        return item + 3;
    });
    console.log( newArray ); // => [ 4, 5, 6, 7, 8 ]
    console.log( oldArray ); // => [ 1, 2, 3, 4, 5 ]
}, false );