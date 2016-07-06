window.addEventListener('DOMContentLoaded', function () {

    var header = document.querySelector('#header');
    var subHeader = document.querySelector('#subheader');
    var listItemFirst = document.querySelector('.list').firstElementChild;
    var listItemSecond = document.querySelector('.list').children[1];
    var listItemThird = document.querySelector('.list').children[2];
    var listItemFourth = document.querySelector('.list').children[3];
    var listItemFifth = document.querySelector('.list').children[4];
    var listItemSixth = document.querySelector('.list').children[5];
    var listItemLast = document.querySelector('.list').lastElementChild;
    var image = document.querySelector('#image');

    // basic overview
    // ------------------------------------------------------------
    TweenLite.to( header, 1, { opacity: 0, y: 50 } );
    TweenLite.to( subHeader, 1, { opacity: 0 } );
    TweenLite.to( listItemFirst, 1, { opacity: 0, x: 100 } );
    TweenLite.to( listItemSecond, 1, { opacity: 0, x: -100 } );
    TweenLite.from( listItemThird, 1, { x: -300 } );
    TweenLite.to( listItemLast, 1, { opacity: 0, x: 100 } );

    // method to(), method fromTo(), method set()
    // -------------------------------------------------------------
    TweenLite.to( image, 1, { width: 600, height: 200 } );
    TweenLite.fromTo( listItemFourth, 3, { x: -200 }, { x: 200 } );
    TweenLite.set( listItemFifth, { x: 200 } );

    // delay and autoAlpha
    // -------------------------------------------------------------
    TweenLite.to( listItemSixth, 1, { autoAlpha: 0, delay: 3 } );


}, false);