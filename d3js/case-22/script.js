window.addEventListener( 'load', function () {
    //
    let data = [ 55, 44, 30, 23, 17, 14, 16, 25, 41, 61, 85, 101, 95, 105, 114, 150, 180, 210, 125, 100, 71, 75, 72, 67 ];
    let barWidth = 20;
    let barPadding = 3;
    let maxValue = d3.max( data );
    // get actual width of a graph
    let graphWidth = ( barWidth + barPadding ) * data.length - barPadding;
    // margins of a graph
    let margins = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };
    // total width and height of visuals
    let totalWidth = margins.left + graphWidth + margins.right;
    let totalHeight = margins.top + maxValue + margins.bottom;
    // y coordinate
    function yLocation( d ) {
        return maxValue - d;
    }
    // x coordinate
    function xLocation( d, i ) {
        return ( barWidth + barPadding ) * i;
    }
    // translate bar via x-axis
    function translate( d, i ) {
        return 'translate(' + xLocation( d, i ) + ',' + yLocation( d ) + ')';
    }
    // set text in the center of the bars
    let textTranslate = 'translate(' + barWidth / 2 + ',0)';
    // translate graph
    let graphTranslate = 'translate(' + margins.left + ',' + margins.top + ')';
    //
    // ADD COMMON SVG CONTAINER
    let graph = d3.select( 'body' )
            .append( 'svg' )
            .classed( 'graph', true )
            .attr( 'width', totalWidth )
            .attr( 'height', totalHeight );
    //
    // add rectangle for visual effects to svg element
    let graphBoundaries = graph.append( 'rect' )
        .classed( 'graph-holder', true )
        .attr( 'width', totalWidth )
        .attr( 'height', totalHeight )
        .attr( 'stroke', 'black' )
        .attr( 'stroke-width', 1 )
        .attr( 'fill', 'white' );
    //
    // ADD GRAPH GROUP
    let graphGroup = graph.append( 'g' )
        .classed( 'graph-group', true )
        .attr( 'transform', graphTranslate );
    let graphGroupRect = graphGroup.append( 'rect' )
        .classed( 'graph-group-rect', true )
        .attr( 'fill', 'rgba( 0, 0, 0, 0.1 )' )
        .attr( 'width', totalWidth - margins.left - margins.right )
        .attr( 'height', totalHeight - margins.top - margins.bottom );
    // add groups
    let groups = graphGroup.selectAll( '.graph-item' )
        .data( data )
        .enter()
        .append( 'g' )
        .classed( 'graph-item', true )
        .attr( 'transform', translate );
    // add rectangle
    groups
        .append( 'rect' )
        .classed( 'graph-bar', true )
        .attr( 'fill', 'steelblue' )
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
