window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    var collection = {
        2548: {
            album: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ]
        },
        2468: {
            album: '1999',
            artist: 'Prince',
            tracks: [ '1999', 'Little Red Corvette' ]
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            album: 'ABBA Gold'
        }
    };
    //
    function getData() {
        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', 'collection.json', true );
        xhr.onreadystatechange = function () {
            "use strict";
            if ( xhr.readyState === 4 && xhr.status === 200 ) {
                return xhr.responseText;
            }
        };
        xhr.send();
    }
    document.getElementById('get').addEventListener( 'click', function () {
        getData();
    }, false );
    //
    let collectionCopy = JSON.parse( JSON.stringify( collection ) );
    //
    function updateRecords ( key, prop, value ) {
        // if value is empty
        if ( !value ) {
            delete collection[key][prop];
        }
        //
        if ( prop === 'tracks' && !collection[key][prop] && value ) {
            collection[key][prop] = [];
        }
        // if key is tracks and value is not empty
        if ( prop === 'tracks' && value ) {
            collection[key][prop].push( value );
        }
        //
        if ( prop !== 'tracks' && value ) {
            collection[key][prop] = value;
        }
        return collection;
    }
    console.log( updateRecords( '5439', 'album', 'The Doors' ) );
    console.log( updateRecords( '5439', 'tracks', 'Addicted to Love' ) );
    console.log( updateRecords( '2548', 'tracks', '' ) );
}, false );