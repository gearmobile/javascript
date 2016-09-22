window.addEventListener( 'load', function () {
    let urlCSV = '../library/walking_dead_s5.csv';
    d3.csv( urlCSV, function ( error, data ) {
        let result = data.map( function ( d ) {
            return {
                Episode: +d.Episode,
                USViewers: +d.USViewers,
                Title: d.Title
            };
        });
        let viewership = result.map( function ( d ) {
            return d.USViewers;
        });
        let minViewership = d3.min( viewership );
        let maxViewership = d3.max( viewership );
        let minBarHeight = 100;
        let maxBarHeight = 400;
        let yScale = d3.scale.linear()
            .domain( [ minViewership, maxViewership ] )
            .range( [ minBarHeight, maxBarHeight ] );
        console.log( minViewership + ' -> ' + yScale( minViewership ) );
        console.log( maxViewership + ' -> ' + yScale( maxViewership ) );
    });
}, false );
