window.addEventListener( 'load', function () {
    const width = 500;
    const data = [ 10, 30, 12, 43, 78, 45, 83, 32, 87, 99 ];
    let maxValue = d3.max( data );
    let value = d3.scale.linear()
        .domain([ 0, maxValue ])
        .range([ 0, width ]);
    //
    let axis = d3.svg.axis().scale( value );
    svg.call( axis );
}, false );
