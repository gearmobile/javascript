window.addEventListener( 'load', function () {
    let urlSource = '../library/corr_aapl_msft.csv';
    // get data
    d3.csv( urlSource, function ( error, rawData ) {
        let data = rawData.map( function ( d ) {
            return {
                x: +d.AAPL,
                y: +d.MSFT
            };
        });
        let xExtents = d3.extent( data, function ( d ) {
            return d.x;
        });
        let yExtents = d3.extent( data, function ( d ) {
            return d.y;
        });
        let maxExtent = d3.max( xExtents.concat( yExtents ), function ( d ) {
            return Math.abs( d );
        });
        let graphWidth = 400;
        let graphHeight = 400;
        let radius = 5;
        //
        let scale = d3.scale.linear()
            .domain([ -maxExtent, maxExtent ])
            .range([ 0, graphWidth ]);
        //
        let svg = d3.select('body').append('svg')
            .attr( 'width', graphWidth )
            .attr( 'height', graphHeight );
        //
        let dots = svg.selectAll('circle')
            .data( data )
            .enter()
            .append('circle')
            .attr({
                cx: function ( d ) { return scale( d.x ); },
                cy: function ( d ) { return scale( d.y ); },
                r: radius,
                fill: 'none',
                stroke: 'steelblue',
                'stroke-width': 1
            });
    });
}, false );
