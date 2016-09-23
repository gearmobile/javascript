window.addEventListener( 'load', function () {
    let urlJSON = '../library/walking_dead_s5.json';
    let urlTSV = '../library/walking_dead_s5.tsv';
    let urlCSV = '../library/walking_dead_s5.csv';
    //
    let callback = function ( error, data ) {
        console.log( data[0] );
    };
    //
    // load json file via d3.json method
    d3.json( urlJSON, callback );
    //
    // load tsv file via d3.tsv method
    d3.tsv( urlTSV, callback );
    //
    d3.csv( urlCSV, callback );
}, false );
