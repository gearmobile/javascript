window.addEventListener('DOMContentLoaded', function () {

    var list = document.querySelector('.multiple');

    TweenLite.from( list.children[0], 2, { x: 100, ease: Power1.easeOut, delay: 0.2 } );
    TweenLite.from( list.children[1], 2, { x: 100, ease: Power1.easeOut, delay: 0.4 } );
    TweenLite.from( list.children[2], 2, { x: 100, ease: Power1.easeOut, delay: 0.6 } );
    TweenLite.from( list.children[3], 2, { x: 100, ease: Power1.easeOut, delay: 0.8 } );
    TweenLite.from( list.children[4], 2, { x: 100, ease: Power1.easeOut, delay: 1.0 } );
    TweenLite.from( list.children[5], 2, { x: 100, ease: Power1.easeOut, delay: 1.2 } );


}, false);