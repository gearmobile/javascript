window.addEventListener( 'DOMContentLoaded', function () {

    var listItemFirst = document.querySelector( '.list' ).children[0];
    var listItemSecond = document.querySelector( '.list' ).children[1];
    var listItemLast = document.querySelector('.list').lastElementChild;

    // METHOD TO(), METHOD FROMTO(), METHOD SET()
    // -------------------------------------------------------------
    //TweenLite.to( listItemLast, 4, { x: -300, opacity: .5 } );
    //TweenLite.from( listItemLast, 4, { x: -300, opacity: .5 } );
    //TweenLite.fromTo( listItemLast, 4, { x: -200 }, { x: 200, backgroundColor: 'green' } );
    //TweenLite.set( listItemLast, { x: 200 } );

    // DELAY AND AUTOALPHA
    // -------------------------------------------------------------
    //TweenLite.to( listItemLast, 1, { autoAlpha: 0, delay: 3 } );

}, false );
