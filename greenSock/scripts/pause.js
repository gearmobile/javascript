window.addEventListener( 'DOMContentLoaded', function () {

    // VARIABLES
    // --------------------------------------

    var offset = 300;
    var duration = 2;
    var delay = 0.5;
    var easing = SlowMo.ease.config( 0.5, 0.4, false );
    var easingIn = Back.easeInOut;
    var easingNone = Power0.easeNone;


    // INIT ELEMENTS
    // --------------------------------------
    var pause = document.querySelector( '.pause' );
    var pauseItems = document.querySelectorAll( '.pause__item' );

    var loader = document.querySelector('.preloader');
    var loaderItems = document.querySelectorAll('.preloader__item');

    var tl = new TimelineMax({ paused: true }); // pause timeline
    var tlPreloader = new TimelineMax({ repeat: 2, onComplete: loadContent });


    // TIMELINE
    // --------------------------------------
    tl
        .from( pause.children[0], duration, { x: offset, ease: easing } )
        .from( pause.children[1], duration, { x: offset, ease: easing } )
        .from( pause.children[2], duration, { x: offset, ease: easing } )
        .from( pause.children[3], duration, { x: offset, ease: easing } )
        .from( pause.children[4], duration, { x: offset, ease: easing } )
        .from( pause.children[5], duration, { x: offset, ease: easing } );


    // TIMELINE PRELOADER
    // --------------------------------------
    tlPreloader
        .staggerFromTo(
            loaderItems,
            duration,
            { y: 0, autoAlpha: 0 },
            { y: 20, autoAlpha: 1, ease: easingIn },
            delay
        )
        .fromTo(
            loader,
            duration,
            { autoAplha: 1, scale: 1.3 },
            { autoAplha: 0, scale: 1, ease: easingNone },
            delay
        );

    function loadContent () {
        if ( !pause.classList.contains('is-visible') ){
            pause.classList.add('is-visible');
        }
    }

}, false);