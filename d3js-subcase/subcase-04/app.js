window.addEventListener( 'load', function () {
    // METHOD JSON
    let urlJSON = '../library/test.json';
    d3.json( urlJSON, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    console.log( 'Hello from D3.js!' ); // async!
    // METHOD TSV
    let urlTSV = '../library/test.tsv';
    d3.tsv( urlTSV, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    // METHOD CSV
    let urlCSV = '../library/test.csv';
    d3.csv( urlCSV, function ( error, rawData ) {
        console.log( rawData[0] );
    });
    // FILTER DATA
    d3.csv( urlCSV, function ( error, rawData ) {
        let data = rawData.map( function( d ) {
            "use strict";
            return {
                keyValue1: +d.Episode,
                keyValue2: d.Title,
                keyValue3: +d.USViewers
            };
        });
        console.log( data );
    });
    // GeoJSON
    // TopoJSON
}, false );
