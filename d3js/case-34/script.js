window.addEventListener( 'load', function () {
    //
    const width = 500;
    const height = 500;
    const data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let maxValue = d3.max( data );
    //
    let svg = d3.select('body').append('svg')
        .classed( 'axis', true )
        .attr({
            width: width,
            height: height
        });
    //
    let value = d3.scale.linear()
        .domain([ 0, maxValue ])
        .range([ 0, width ]);
    //
    let axisGroup = svg.append( 'g' )
        .classed( 'axis-group', true )
        .attr( 'transform', 'translate(0,50)' ); // move to down
    //
    let axis = d3.svg
        .axis()
        .orient('right')
        .scale( value );
    //
    let axisNodes = axisGroup.call( axis );
    //
    let domain = axisNodes.selectAll('.domain');
    //
    domain.attr({
        'fill': 'none',
        'stroke-width': 1,
        'stroke': 'black'
    });
    //
    let ticks = axisNodes.selectAll('.tick line');
    ticks.attr({
        'fill': 'none',
        'stroke-width': 1,
        'stroke': 'black'
    });
}, false );
