window.addEventListener( 'load', function () {
    //
    let startBtn = document.querySelector( '#start' );
    let pauseBtn = document.querySelector( '#pause' );
    let stopBtn = document.querySelector( '#stop' );
    let reverseBtn = document.querySelector( '#reverse' );
    //
    let boxItemOne = document.querySelector( '#box-item-one' );
    let boxItemTwo = document.querySelector( '#box-item-two' );
    let boxItemThree = document.querySelector( '#box-item-three' );
    let boxItemFour = document.querySelector( '#box-item-four' );
    //
    let tl = new TimelineMax({ paused: true });
    let delay = 2;
    let distanceX = 1000;
    //
    tl.to( boxItemOne, delay, { x: distanceX, ease: Power1.easeOut } );
    tl.to( boxItemTwo, delay, { x: distanceX, ease: Back.easeOut.config( 1.7 ) } );
    tl.to( boxItemThree, delay, { x: distanceX, ease: Elastic.easeOut.config( 1, 0.3 ) } );
    tl.to( boxItemFour, delay, { x: distanceX, ease: Bounce.easeOut } );
    //
    startBtn.addEventListener( 'click', function () {
        tl.play();
    });
    //
    pauseBtn.addEventListener( 'click', function () {
        tl.pause();
    });
    //
    stopBtn.addEventListener( 'click', function () {
        tl.stop();
    });
    //
    reverseBtn.addEventListener( 'click', function () {
        tl.reverse();
    });
}, false );


