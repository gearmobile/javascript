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
    let mainTitle = document.querySelector( '.slogan-title' );
    let introTitle = document.querySelector( '.intro-title' );
    //
    let tl = new TimelineMax({ paused: true });
    let tlTwo = new TimelineMax();
    let delay = 0.9;
    let duration = 1;
    let distanceX = 200;
    //
    tl.to( boxItemOne, duration, { x: distanceX, ease: Power1.easeOut } );
    tl.to( boxItemTwo, duration, { x: distanceX, ease: Back.easeOut.config( 1.7 ) } );
    tl.to( boxItemThree, duration, { x: distanceX, ease: Elastic.easeOut.config( 1, 0.3 ) } );
    tl.to( boxItemFour, duration, { x: distanceX, ease: Bounce.easeOut } );
    //
    tlTwo.from( mainTitle, duration, { opacity: 0, scale: 25, ease: Linear.easeInOut } );
    tlTwo.from( introTitle, duration, { opacity: 0, scale: 20, ease: Linear.easeInOut }, delay );
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


