window.addEventListener( 'DOMContentLoaded', function () {
    // -------------------------------------------
    let collection = {
        Season: 5,
        Episode:  1,
        SeriesNumber: 52,
        Title: 'No Sanctuary',
        FirstAirDate: '10-12-2014',
        USViewers: 17290000
    };
    // -------------------------------------------
    console.log( d3.keys( collection ) );
    console.log( d3.values( collection ) );
    console.log( d3.entries( collection ) );
    // -------------------------------------------
}, false);