window.addEventListener( 'DOMContentLoaded', function () {

    var header = document.querySelector( '#header' );
    var subHeader = document.querySelector( '#subheader' );
    var listItemFirst = document.querySelector('.list').firstElementChild;
    var listItemSecond = document.querySelector('.list').children[1];
    //var listItemLast = document.querySelector('.list').lastElementChild;
    var image = document.querySelector('#image');

    // BASIC OVERVIEW
    // ------------------------------------------------------------
    TweenLite.to( header, 3, { opacity: 0, y: 100 } );
    TweenLite.to( subHeader, 3, { y: -50, borderTopLeftRadius: 0, borderBottomRightRadius: 0, borderTopRightRadius: 40, borderBottomLeftRadius: 40, color: 'white', delay: 2 } );
    TweenLite.to( listItemFirst, 2, { x: 100, backgroundColor: 'red' } );
    TweenLite.to( listItemSecond, 2, { x: -100, backgroundColor: 'green' } );
    TweenLite.to( image, 2, { width: 600, height: 200, opacity: .5 } );

    // METHOD TO(), METHOD FROMTO(), METHOD SET()
    // -------------------------------------------------------------
    //TweenLite.from( listItemLast, 4, { x: -300, opacity: .5 } );
    //TweenLite.fromTo( listItemFirst, 4, { x: -200 }, { x: 200, backgroundColor: 'green' } );
    //TweenLite.set( listItemFirst, { x: 200 } );

    // DELAY AND AUTOALPHA
    // -------------------------------------------------------------
    //TweenLite.to( listItemLast, 1, { autoAlpha: 0, delay: 3 } );


}, false);