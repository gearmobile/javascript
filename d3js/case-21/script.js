window.addEventListener( 'load', function () {
    //
    let data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let barWidth = 20;
    let barPadding = 3;
    let maxValue = d3.max( data );
    //
    function yLocation( d ) {
        return maxValue - d;
    }
    //
    function xLocation( d, i ) {
        return ( barWidth + barPadding ) * i;
    }
    //
    function translate( d, i ) {
        return 'translate(' + xLocation( d, i ) + ',' + yLocation( d ) + ')';
    }
    //
    let textTranslate = 'translate(' + barWidth / 2 + ',0)';
    // add common svg container
    let graph = d3.select( 'body' )
            .append( 'svg' )
            .classed( 'graph', true )
            .attr( 'width', 800 )
            .attr( 'height', 400 );
    // add groups
    let groups = graph.selectAll( '.graph-item' )
        .data( data )
        .enter()
        .append( 'g' )
        .classed( 'graph-item', true )
        .attr( 'transform', translate );
    // add rectangle
    groups
        .append( 'rect' )
        .classed( 'graph-bar', true )
        .attr( 'width', barWidth )
        .attr( 'height', function ( d ) {
            return d;
        });
    // add text
    groups
        .append( 'text' )
        .text( function ( d ) {
            return d;
        })
        .classed( 'graph-text', true )
        .attr( 'transform', textTranslate );
}, false );
