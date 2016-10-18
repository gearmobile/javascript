window.addEventListener( 'DOMContentLoaded', function () {
    // -----------------------------------------------------
    let heightChart = 400;
    let widthChart = 900;
    let colorTemp;
    // -----------------------------------------------------
    let data = [];
    let count = 30;
    let value = 20;
    for ( let i = 0; i < count; i++ ) {
        data.push( Math.random() * value + 2 );
    }
    // -----------------------------------------------------
    let colors = d3.scaleLinear()
        .domain([ 0, data.length * 0.33, data.length * 0.66, data.length ])
        .range([ '#b5899', '#ffb832', '#c61c6f', '#85992c' ]);
    // -----------------------------------------------------
    let xScale = d3.scaleBand()
        .domain( d3.range( 0, data.length ) )
        .range([ 0, widthChart ])
        .padding( 0.1 );
    // -----------------------------------------------------
    let yScale = d3.scaleLinear()
        .domain([ 0, d3.max( data ) ])
        .range([ 0, heightChart ]);
    // -----------------------------------------------------
    let chart = d3.select('#chart')
        .append('svg')
        .attr( 'width', widthChart )
        .attr( 'height', heightChart )
        .style( 'background', '#c9d7d6' );
    // -----------------------------------------------------
    let chartBars = chart.selectAll('rect')
        .data( data )
        .enter()
        .append( 'rect' )
        .classed( 'chart-item', true )
        .attr( 'width', xScale.bandwidth() )
        .attr( 'height', function ( d, i ) {
            return yScale( d );
        })
        .attr( 'x', function ( d, i ) {
            return xScale(i);
        })
        .attr( 'y', function ( d, i ) {
            return heightChart - yScale( d );
        })
        .style( 'fill', function ( d, i ) {
            return colors( i );
        });
    // ------------------------------------------
    chartBars
        .on( 'mouseover', function ( d ) {
            colorTemp = this.style.fill;
            d3.select( this )
                .transition().delay(100).duration(60)
                .style( 'opacity', 0.2 )
                .style( 'fill', 'yellow' );
        })
        .on( 'mouseout', function ( d ) {
            d3.select( this )
                .transition() // best way
                .style( 'opacity', 1 )
                .style( 'fill', colorTemp );
        });
    // ------------------------------------------
}, false);