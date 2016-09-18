window.addEventListener( 'load', function () {
    d3.select('div').style( 'font-weight0', '700' );
    d3.selectAll('div').style( 'text-transform', 'uppercase' );
    d3.select('#div2').style( 'color', 'salmon' );
    d3.selectAll('div').style( 'background-color', function ( d, i ) {
        return i % 2 === 0 ? 'coral' : 'pink';
    });
}, false );
