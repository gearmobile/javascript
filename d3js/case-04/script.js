window.addEventListener( 'load', function () {
    let array = [ 10, 20, 30, 40 ];
    let selector = d3.select( 'body' ).selectAll( 'div' ).data( array );
}, false );
