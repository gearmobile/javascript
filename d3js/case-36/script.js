window.addEventListener( 'load', function () {
    let data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let maxValue = d3.max( data );
    //
    let width = 500;
    //
    let svg = d3.select('body')
        .append('svg')
        .classed( 'axis', true )
        .attr( 'width', width )
        .attr( 'height', maxValue );
    //
    let scale = d3.scale
        .linear()
        .domain([ maxValue, 0 ]) // invert labels on the axis
        .range([ 0, maxValue ]);
    //
    let axisGroup = svg.append('g')
        .classed( 'axis-group', true )
        .attr( 'transform', 'translate( 50,0 )' );
    //
    let axis = d3.svg.axis()
        .orient('left')
        .scale( scale );
    //
    let axisNodes = axisGroup.call( axis );
    //
    let domain = axisNodes.select('.domain')
        .attr( 'fill', 'none' )
        .attr( 'stroke', 'black' )
        .attr( 'stroke-width', 1 );
    let ticks = axisNodes.selectAll('.tick line')
        .attr( 'fill', 'none' )
        .attr( 'stroke', 'black' )
        .attr( 'stroke-width', 1 );
    //
}, false );
