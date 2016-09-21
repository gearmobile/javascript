window.addEventListener( 'load', function () {
    let data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let barWidth = 20;
    let barPadding = 3;
    let maxValue = d3.max( data );
    //
    let mainGroup = d3.select( 'body' )
        .append( 'svg' )
        .attr({ width: 1000, height: 250 })
        .append( 'g' );
    //
    function xloc( d, i ) {
        return i * ( barWidth + barPadding );
    }
    //
    function yloc( d ) {
        return maxValue - d;
    }
    //
    function translator( d, i ) {
        return 'translate(' + xloc( d, i ) + ',' + yloc( d ) + ')';
    }
    //
    mainGroup
        .selectAll( 'rect' )
        .data( data )
        .enter()
        .append( 'rect' ).attr({
            fill: 'steelblue',
            transform: translator,
            width: barWidth,
            height: function ( d ) {
                return d;
            }
    });
}, false );


