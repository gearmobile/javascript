    window.addEventListener( 'load', function () {
    let data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let svg = d3.select('body')
                .append('svg')
                .attr( 'width', '600' )
                .attr( 'height', '400' )
                .classed( 'graph', true );
    let maxValue = d3.max( data );
    const barWidth = 20;
    const barSpace = 3;
    svg.selectAll('.graph-item')
        .data( data )
        .enter()
        .append( 'rect' )
        .classed( 'graph-item', true )
        .attr( 'height', function ( d ) {
            return d;
        })
        .attr( 'y', function ( d ) {
            return maxValue - d;
        })
        .attr( 'x', function ( d, i ) {
            return ( barWidth + barSpace ) * i;
        })
        .attr( 'height', function ( d ) {
            return d;
        });
}, false );
