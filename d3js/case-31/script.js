window.addEventListener( 'load', function () {
    let bands = d3.scale.ordinal()
        .domain( [ 0, 1, 2 ] )
        .rangeBands( [ 0, 100 ] ); // задается общая ширина, на кторую нужно равномерно разложить величины из domain
    console.log( bands.range() ); // возвращает высчитанный диапазон
    console.log( bands.rangeBand() ); // возвращает величину одного диапазона
    let diapasone = d3.scale.ordinal()
        .domain([0,1,2])
        .rangeBands( [0,100], 0.1 );
    console.log( diapasone.range() );
    let round = d3.scale.ordinal()
        .domain([0,1,2])
        .rangeRoundBands([0,100]);
    console.log( round.rangeBand() );
    let roundPadding = d3.scale.ordinal()
        .domain([0,1,2])
        .rangeRoundBands( [ 0, 100 ], 0.2 );
    console.log( roundPadding.range() );
    console.log( roundPadding.rangeBand() );
}, false );
