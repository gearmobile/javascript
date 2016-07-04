window.addEventListener('DOMContentLoaded', function () {

    var header = document.querySelector('#header');
    var subHeader = document.querySelector('#subheader');
    var listItemFirst = document.querySelector('.list').firstElementChild;
    var listItemSecond = document.querySelector('.list').children[1];
    var listItemLast = document.querySelector('.list').lastElementChild;
    var image = document.querySelector('#image');

    TweenLite.to( header, 1, { opacity: 0, y: 50 } );
    TweenLite.to( subHeader, 1, { opacity: 0 } );
    TweenLite.to( listItemFirst, 1, { opacity: 0, x: 100 } );
    TweenLite.to( listItemSecond, 1, { opacity: 0, x: -100 } );
    TweenLite.to( listItemLast, 1, { opacity: 0, x: 100 } );

    TweenLite.to( image, 1, { width: 600, height: 200 } );


}, false);