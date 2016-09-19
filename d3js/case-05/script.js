window.addEventListener( 'load', function () {
    let array = [ 10, 20, 30 ];
    let selector = d3.select('.wrapper').selectAll('article').data( array );
    let entering = selector.enter();
    entering.append('article').text( function ( d ) { return d });
}, false );
