window.addEventListener( 'load', function () {
    //
    let chartWidth = 800;
    let chartHeight = 400;
    let chartPadding = 60;
    let dataSet = [
        {
            x: 5,
            y: 20,
            r: 10
        },
        {
            x: 480,
            y: 90,
            r: 34
        },
        {
            x: 250,
            y: 50,
            r: 12
        },
        {
            x: 140,
            y: 33,
            r: 5
        },
        {
            x: 330,
            y: 95,
            r: 20
        },
        {
            x: 410,
            y: 12,
            r: 8
        },
        {
            x: 475,
            y: 44,
            r: 12
        },
        {
            x: 25,
            y: 67,
            r: 10
        },
        {
            x: 85,
            y: 21,
            r: 22
        },
        {
            x: 220,
            y: 88,
            r: 21
        }
    ];
    // COLORS
    let colors = d3.scaleOrdinal( d3.schemeCategory10 );
    // ------------------------------------------------
    // SCALE X AXIS
    // ------------------------------------------------
    let xScale = d3.scaleLinear()
        .domain([ 0, d3.max( dataSet, function ( d ) { return d.x; } ) ])
        .range([ chartPadding, chartWidth - chartPadding ]);
    // ------------------------------------------------
    // SCALE Y AXIS
    // ------------------------------------------------
    let yScale = d3.scaleLinear()
        .domain([ 0, d3.max( dataSet, function (d) { return d.y; } ) ])
        .range([ chartHeight - chartPadding, chartPadding ]);
    // ------------------------------------------------
    // SCALE RADIUS
    // ------------------------------------------------
    let rScale = d3.scaleLinear()
        .domain([
            d3.min( dataSet, function ( d ) { return d.r; }),
            d3.max( dataSet, function ( d ) { return d.r; })
        ])
        .range([ 10, 50 ]);
    // ------------------------------------------------
    // CHART
    // ------------------------------------------------
    let chart = d3.select('body')
        .append('svg')
        .attr( 'width', chartWidth )
        .attr( 'height', chartHeight )
        .attr( 'class', 'chart' );
    // ------------------------------------------------
    // CIRCLES
    // ------------------------------------------------
    let chartCircle = chart.selectAll('circle')
        .data( dataSet )
        .enter()
        .append('circle')
        .attr( 'class', 'chart-item' )
        .attr( 'fill', function ( d, i ) {
            return colors(i);
        })
        .attr( 'cx', function ( d, i ) {
            return xScale( d.x ) + 'px';
        })
        .attr( 'cy', function ( d, i ) {
            return yScale( d.y ) + 'px';
        })
        .attr( 'r', function ( d ) {
            return rScale( d.r ) + 'px';
        });
    // ------------------------------------------------
    // TEXT
    // ------------------------------------------------
    let chartlabels = chart.selectAll('text')
        .data( dataSet )
        .enter()
        .append('text')
        .text( function ( d ) { return d.x + ',' + d.y; })
        .attr( 'class', 'chart-label' )
        .attr( 'x', function ( d, i ) { return xScale( d.x ) + 'px'; })
        .attr( 'y', function ( d, i ) { return yScale( d.y ) + 'px'; });
}, false );
















































