window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var oldArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var newArray = oldArray.filter( function ( item ) {
        return item < 6;
    });
    console.log( newArray );
    // -------------------------------------------------------
}, false );
