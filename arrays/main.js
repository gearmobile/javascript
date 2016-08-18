window.addEventListener( 'load', function () {

    var main = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];

    // old school

    for ( var i = 0; i < main.length; i++ ) {
        console.log( main[i] );
    }

    // new school

    main.forEach( function ( element ) {
        console.log( element );
    });

    // new recommended school

    function mainItems( el ) {
        console.log( el );
    }

    main.forEach( mainItems );


    // filter

    var firstPattern = [0,2,4,5,6];

    // map

    function upperCase( el ) {
        return el.toUpperCase();
    }

    var mapped = main.map( upperCase );
    console.log( mapped );

    // reduce

    var reduced = main.reduce( function ( arrayReduced, item ) {
        if ( item.toString().indexOf( 'e' ) === -1 ) {
            arrayReduced.push( item );
        }
        return arrayReduced;
    }, [] );

    console.log( reduced );



}, false );
