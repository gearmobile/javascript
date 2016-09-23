window.addEventListener( 'load', function () {
    const width = 200;
    const height = 20;
    // создать array чисел из диапазона 0-9
    let data = d3.range( 0, 9 );
    let colorScale = d3.scale.category10();
    //
    let svg = d3.select('body')
        .append('svg')
        .attr({ 'width': width, 'height': height });
    //
    let rects = svg.selectAll('rect')
        .data( data )
        .enter()
        .append('rect')
        .attr({
            fill: function (d) { return colorScale(d) },
            x: function ( d, i ) { return i * 20 },
            width: 20,
            height: 20
        });
}, false );
