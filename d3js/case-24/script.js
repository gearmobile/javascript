window.addEventListener( 'load', function () {
    let urlCSV = '../library/walking_dead_s5.csv';
    let callback = function ( error, data ) {
        let result = data.map( function ( d ) {
            return {
                Episode: +d.Episode,
                USViewers: +d.USViewers,
                Title: d.Title
            };
        });
    };
    console.log( result );
}, false );
