window.addEventListener( 'DOMContentLoaded', function () {

    // VARIABLES
    // --------------------------------------

    var offset = 300;
    var time = 3;
    var easing = SlowMo.ease.config( 0.5, 0.4, false );

    // INIT ELEMENTS
    // --------------------------------------

    var playback = document.querySelector( '.playback' );
    var tl = new TimelineLite();

    // TIMELINE
    // --------------------------------------

    tl
        .from( playback.children[0], time, { x: offset, ease: easing } )
        .from( playback.children[1], time, { x: offset, ease: easing } )
        .from( playback.children[2], time, { x: offset, ease: easing } )
        .from( playback.children[3], time, { x: offset, ease: easing } )
        .from( playback.children[4], time, { x: offset, ease: easing } )
        .from( playback.children[5], time, { x: offset, ease: easing } );


    // PAUSE PLAYBACK TIMELINE
    // ---------------------------------------
    tl.pause();


    // ----------------------------------------------------------------------------------------
    // CONTROL PALY TIMELINE
    // ----------------------------------------------------------------------------------------

    // PLAY TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackPlay').addEventListener( 'click', function () {
        tl.play();
    }, false );

    // PAUSE TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackPause').addEventListener( 'click', function () {
        tl.pause();
    }, false );

    // RESUME TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackResume').addEventListener( 'click', function () {
        tl.resume();
    }, false );

    // REVERSE TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackReverse').addEventListener( 'click', function () {
        tl.reverse();
    }, false );

    // SPEEDUP TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackSpeedUp').addEventListener( 'click', function () {
        tl.timeScale( 4 );
    }, false );

    // SLOWDOWN TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackSlowDown').addEventListener( 'click', function () {
        tl.timeScale( 0.5 );
    }, false );

    // SEEK TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackSeek').addEventListener( 'click', function () {
        tl.seek( 2 );
    }, false );

    // GOTO TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackGoTo').addEventListener( 'click', function () {
        tl.progress( 0.5 );
    }, false );

    // RESTART TIMELINE
    // ------------------------------------------
    document.querySelector('#playbackRestart').addEventListener( 'click', function () {
        tl.restart();
    }, false );


}, false);