window.addEventListener( 'DOMContentLoaded', function () {

    // ELEMENTS
    // ------------------------------------------------------------

    var header = document.querySelector( '#header' );
    var listItemFirst = document.querySelector( '.list' ).children[0];
    var listItemSecond = document.querySelector( '.list' ).children[1];
    var image = document.querySelector( '#image' );
    var subHeader = document.querySelector( '#subheader' );

    // BASIC ANIMATION
    // ------------------------------------------------------------

    TweenLite.to( header, 3, { opacity: 0, y: 100 } );
    TweenLite.to( listItemFirst, 2, { x: 100, backgroundColor: 'red' } );
    TweenLite.to( listItemSecond, 2, { x: -100, backgroundColor: 'green' } );
    TweenLite.to( image, 2, { width: 600, height: 200, opacity: .5 } );
    TweenLite.to( subHeader, 3, {
        y: -50,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        color: 'white',
        delay: 2
    });

}, false );
