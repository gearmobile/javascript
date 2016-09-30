window.addEventListener( 'load', function () {
    //
    let dataset = [ 20, 50, 40, 12, 98, 56, 43, 67, 33, 7, 43, 59, 99, 10, 32, 45, 5, 13, 22 ];
    let chartWidth = 800;
    let chartHeight = 400;
    let barPadding = 1;
    // ----------------------------------------------------
    // CHART
    // ----------------------------------------------------
    let chart = d3.select('body')
        .append('svg')
        .attr( 'class', 'chart' )
        .attr( 'width', chartWidth )
        .attr( 'height', chartHeight );
    // ----------------------------------------------------
    // CHART BARS
    // ----------------------------------------------------
    let chartBars = chart.selectAll('rect')
        .data( dataset )
        .enter()
        .append('rect')
        .attr( 'class', 'chart-bar' )
        .attr( 'fill', 'teal' )
        .attr( 'x', function ( d, i ) {
            return i * ( chartWidth / dataset.length );
        })
        .attr( 'y', function ( d, i ) {
            return chartHeight - d * 3;
        })
        .attr( 'height', function ( d, i ) {
            return d * 3;
        })
        .attr( 'width', function () {
            return chartWidth / dataset.length - barPadding;
        });
    // ----------------------------------------------------
    // CHART BARS LABELS
    // ----------------------------------------------------
    let charLabels = chart.selectAll('text')
        .data( dataset )
        .enter()
        .append('text')
        .text( function ( d ) {
                return d;
        })
        .attr( 'x', function ( d, i ) {
            return i * ( chartWidth / dataset.length ) + ( chartWidth / dataset.length - barPadding ) / 2 ;
        })
        .attr( 'y', function ( d ) {
            return ( chartHeight - d * 3 ) + 14;
        })
        .attr( 'fill', 'white' )
        .attr( 'font-family', 'sans-serif' )
        .attr( 'font-size', '12px' )
        .attr( 'text-anchor', 'middle' );
}, false );
