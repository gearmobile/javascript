window.addEventListener( 'load', function () {
    //
    var RANDOM_MIN = 0;
    var RANDOM_MAX = 100;
    function iRand( lo, up ) {
        return Math.floor( Math.random() * ( up - lo + 1 ) + lo );
    }
    var dataSet = [];
    for ( let i = 0; i < 10; i++ ) {
        dataSet.push( iRand( RANDOM_MIN, RANDOM_MAX ) );
    }
    //
    var DATASET_MIN = d3.min( dataSet, function ( d, i ) { return d; });
    var DATASET_MAX = d3.max( dataSet, function ( d, i ) { return d; });
    var CHART_WIDTH = 500;
    var CHART_HEIGHT = 300;
    var MARGINS = {
        TOP: 30,
        RIGHT: 30,
        BOTTOM: 30,
        LEFT: 30
    };
    var PADDING = 5;
    //
    var PLOT_WIDTH = CHART_WIDTH - ( MARGINS.LEFT + PADDING * 2 + MARGINS.RIGHT );
    var PLOT_HEIGHT = CHART_HEIGHT - ( MARGINS.TOP + PADDING * 2 + MARGINS.BOTTOM );
    var BAR_HEIGHT_AVAIL = PLOT_HEIGHT / dataSet.length;
    var BAR_SPACING_TOP = 1;
    var BAR_SPACING_BOTTOM = BAR_SPACING_TOP;
    var BAR_HEIGHT = BAR_HEIGHT_AVAIL - BAR_SPACING_TOP - BAR_SPACING_BOTTOM;
    //
    var ARC_RADIUS_INNER = 25;
    var ARC_RADIUS_OUTER = 25;
    var ARC_SHIFT = 20;
    var ARC_ANIM_DELAY_1 = 400;
    var ARC_ANIM_DELAY_2 = 50;
    var colors = d3.scale.category20c();
    //
    var chart = d3.select( 'body' )
        .append( 'svg' )
        .classed( 'chart', true )
        .attr( 'width', CHART_WIDTH )
        .attr( 'height', CHART_HEIGHT );
    //
    var xScale = d3.scale.linear()
            .domain([ DATASET_MIN, DATASET_MAX ])
            .range([ 0, PLOT_WIDTH ])
            .nice();
    //
    var chartBars = chart.selectAll('rect')
        .data( dataSet )
        .enter()
        .append('rect')
        .classed( 'chart-bar', true )
        .attr( 'x', MARGINS.LEFT + PADDING )
        .attr( 'y', function ( d, i ) {
            return ( MARGINS.TOP + PADDING ) + i * BAR_HEIGHT_AVAIL + BAR_SPACING_TOP;
        })
        .attr( 'height', BAR_HEIGHT )
        .attr( 'width', function ( d, i ) {
            return xScale( d );
        })
        .attr( 'fill', function ( d, i ) {
            return 'hsl( 240, 50%, ' + ( 75-d/4 ) + '%)';
        });
    //
    var horTopAxis = d3.svg.axis()
        .scale( xScale )
        .orient( 'top' );
    var horBottomAxis = d3.svg.axis()
        .scale( xScale )
        .orient( 'bottom' );
    //
    var horTopAxis_AREA = chart.append('g')
        .classed( 'axis', true )
        .attr( 'transform', 'translate(' + ( MARGINS.LEFT + PADDING ) + ',' + MARGINS.TOP + ')' )
        .call( horTopAxis );
    var horBottomAxis_AREA = chart.append('g')
        .classed( 'axis', true )
        .attr( 'transform', 'translate(' + ( MARGINS.LEFT + PADDING ) + ',' + ( MARGINS.TOP + PADDING + PLOT_HEIGHT + PADDING ) + ')' )
        .call( horBottomAxis );
    //
    var arc = d3.svg.arc()
        .innerRadius( ARC_RADIUS_INNER )
        .outerRadius( ARC_RADIUS_OUTER )
        .startAngle( 0 )
        .endAngle( Math.PI / 4 );
    var chartPie = chart.append('g')
        .attr( 'transform', 'translate('+ ( CHART_WIDTH / 2 ) + ',' + ( CHART_HEIGHT / 2 ) +')' )
        .attr( 'chart-pie', true );
    //
    var pie = d3.layout.pie()
        .value( function ( d ) {
            return d;
        });
    //
    chart.append('path')
        .attr( 'd', arc )
        .attr( 'transform', 'translate( 100, 100 )' );
}, false );





































