window.addEventListener( 'load', function () {
    //
    let urlJSON = '../library/test.json';
    d3.json( urlJSON, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    //
    let urlTSV = '../library/test.tsv';
    d3.tsv( urlTSV, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    //
    let urlCSV = '../library/test.csv';
    d3.csv( urlCSV, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    //
    d3.csv( urlCSV, function ( error, rawData ) {
        let data = rawData.map( function ( d ) {
            return {
                keyValue1: +d.Episode,
                keyValue2: d.Title,
                keyValue3: +d.USViewers
            }
        });
        console.log( data );
    });
}, false );
