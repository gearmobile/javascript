window.addEventListener( 'load', function () {
    // METHOD JSON
    let urlJSON = '../library/test.json';
    d3.json( urlJSON, function ( error, data ) {
        console.log( data[0] );
    });
    console.log( 'Hello from D3.js' );
    // METHOD TSV
    let urlTSV = '../library/test.tsv';
    d3.tsv( urlTSV, function ( error, data ) {
        console.log( data[0] );
    });
    // METHOD CSV
    let urlCSV = '../library/test.csv';
    d3.csv( urlCSV, function ( error, data ) {
        console.log( data[0] );
    });
    //
    d3.csv( urlCSV, function ( error, data ) {
        let datum = data.map( function ( d ) {
            return {
                Episode: +d.Episode,
                Title: d.Title,
                Viewers: +d.USViewers
            }
        });
        console.log( datum );
    });
}, false );
