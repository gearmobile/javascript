window.addEventListener( 'load', function () {
    //
    let simpleArray = [ 20, 3, 67, 12, 68, 43, 11, 4, 32, 54, 88, 65, 76, 98, 10 ];
    //
    let obj = 	{
        Season: 5,
        Episode:  1,
        SeriesNumber: 52,
        Title: 'No Sanctuary',
        FirstAirDate: '10-12-2014',
        USViewers: 17290000
    };
    //
    let complexArray = [
        { key: 'Glazed', value: 132 },
        { key: 'Jelly', value: 71 },
        { key: 'Holes', value: 337 },
        { key: 'Sprinkles', value: 93 },
        { key: 'Crumb', value: 78 },
        { key: 'Chocolate', value: 43 },
        { key: 'Coconut', value: 20 },
        { key: 'Cream', value: 16 },
        { key: 'Cruller', value: 30 },
        { key: 'Eclair', value: 8 },
        { key: 'Fritter', value: 17 },
        { key: 'Bearclaw', value: 21 }
    ];
    //
    let minArray = d3.min( simpleArray );
    console.log( minArray );
}, false);
