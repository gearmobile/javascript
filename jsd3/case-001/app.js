window.addEventListener( 'load', function () {
    //
    let dataset = [ 20, 50, 40, 12, 98, 56, 43, 67, 33, 7, 43, 59, 99, 10, 32, 45, 5, 13, 22 ];
    let chartWidth = 800;
    let chartHeight = 400;
    let barPadding = 1;
    //
    let chart = d3.select('body')
        .append('svg')
        .attr( 'class', 'chart' )
        .attr( 'width', chartWidth )
        .attr( 'height', chartHeight );
    //
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
        })
}, false );
