window.addEventListener( 'load', function () {
    let colorScale = d3.scale.ordinal()
        .domain([ 'red', 'green', 'blue' ])
        .range([ '#ff0000', '#00ff00', '#0000ff' ]);
    console.log( colorScale( 'red' ), colorScale('green'), colorScale('blue') );
}, false );
