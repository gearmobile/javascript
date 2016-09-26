window.addEventListener( 'load', function () {
    //
    let url = '../library/walking_dead_s5.json';
    let datum = d3.json( url, function ( error, data ) {
        let viewership = data.map( function ( d ) {
            return d.USViewers;
        });
        let maxValue = d3.max( viewership );
        //
        let margins = {
            top: 10,
            right: 10,
            bottom: 260,
            left: 85
        };
        //
        let graphWidth = 500;
        let graphHeight = 300;
        let totalWidth = margins.left + graphWidth + margins.right;
        let totalHeight = margins.top + graphHeight + margins.bottom;
        let axisPadding = 3;
        //
        let graph = d3.select('body')
            .append('svg')
            .classed( 'graph', true )
            .attr( 'width', totalWidth )
            .attr( 'height', totalHeight );
        //
        let graphHolder = graph.append( 'g' )
            .classed( 'graph-holder', true )
            .attr( 'transform', 'translate(' + margins.left + ',' + margins.top + ')' );
        //
        let bands = d3.scale.ordinal()
            .domain( viewership )
            .rangeBands( [ 0, graphWidth ], 0.05 );
        //
        let yScale = d3.scale
            .linear()
            .domain([ 0, maxValue ])
            .range([ 0, graphHeight ]);
        function translator( d, i ) {
            return 'translate(' + bands.range()[i] + ',' + ( graphHeight - yScale(d) ) + ')';
        }
        //
        let graphGroup = graphHolder.selectAll('g')
            .data( viewership )
            .enter()
            .append('g')
            .classed( 'graph-group', true )
            .attr( 'transform', translator );
        //
        let graphRects = graphGroup
            .append('rect')
            .classed( 'graph-bar', true )
            .attr( 'width', bands.rangeBand() )
            .attr( 'height', function ( d ) {
                return yScale(d);
            })
            .attr( 'fill', 'steelblue' );
        //
        let graphLabels = graphGroup
            .append('text')
            .classed( 'graph-label', true )
            .text( function ( d ) {
                return d;
            })
            .attr( 'fill', 'white' )
            .attr( 'transform', 'rotate(90)' )
            .attr( 'dx', 10 )
            .attr( 'dy', -10 )
            .style( 'text-anchor', 'start' );
        //
        let leftAxisGroup = graph.append('g')
            .classed( 'graph-left', true )
            .attr( 'transform', 'translate(' + ( margins.left - axisPadding ) + ',' + margins.top + ')' );
        //
        let yAxisScale = d3.scale
            .linear()
            .domain([ maxValue, 0 ])
            .range([ 0, graphHeight ]);
        let leftAxis = d3.svg.axis()
            .orient('left')
            .scale( yAxisScale );
        let leftAxisNodes = leftAxisGroup.call( leftAxis );
        //
        function styleAxisNodes( axisNodes ) {
            axisNodes.selectAll('.domain')
                .attr( 'fill', 'none' )
                .attr( 'stroke', 'black' )
                .attr( 'stroke-width', 1 );
            axisNodes.selectAll( '.tick line' )
                .attr( 'fill', 'none' )
                .attr( 'stroke', 'black' )
                .attr( 'stroke-width', 1 );
        }
        //
        styleAxisNodes( leftAxisNodes );
        //
        let titles = data.map( function ( d ) {
            return d.Title;
        });
        //
        let xAxisScale = d3.scale
            .ordinal()
            .domain( titles )
            .rangeBands( [ axisPadding, graphWidth + axisPadding ] );
        let bottomAxis = d3.svg
            .axis()
            .scale( xAxisScale )
            .orient('bottom');
        let bottomAxisX = margins.left - axisPadding;
        let bottomAxisY = totalHeight - margins.bottom + axisPadding;
        //
        let bottomAxisGroup = graph.append('g')
            .classed( 'graph-bottom', true )
            .attr( 'transform', 'translate(' + bottomAxisX + ',' + bottomAxisY + ')' );
        let bottomAxisNodes = bottomAxisGroup.call( bottomAxis );
        styleAxisNodes( bottomAxisNodes );
        //
        bottomAxisNodes.selectAll('text')
            .attr( 'transform', 'rotate(90)' )
            .attr( 'dx', 10 )
            .attr( 'dy', -1 )
            .style( 'text-anchor', 'start' );
    });
}, false );























