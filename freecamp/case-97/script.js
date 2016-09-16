window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var collection = {
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [ "Let It Rock", "You Give Love a Bad Name" ]
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [ "1999", "Little Red Corvette" ]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": []
        },
        "5439": {
            "album": "ABBA Gold"
        }
    };

    function updateRecords ( id, prop, value ) {

        let key = collection[id];

        if ( value === false ) {
            delete collection[id][prop];
        }

        if ( key[prop] === undefined ) {
            key[prop] = [];
        }

        if ( key[prop].length === 0 && value !== false ) {
            key[prop].push( value );
        }


        return collection;

    }
    // -------------------------------------------------------
    let colToString = JSON.stringify( collection );
    let colToObject = JSON.parse( colToString );
    // -------------------------------------------------------
    console.log( updateRecords( 5439, 'artist', 'ABBA' ) );
}, false );