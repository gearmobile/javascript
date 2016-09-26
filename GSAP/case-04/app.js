window.addEventListener( 'load', function () {
    //
    let startBtn = document.querySelector( '#start' );
    let pauseBtn = document.querySelector( '#pause' );
    let stopBtn = document.querySelector( '#stop' );
    let reverseBtn = document.querySelector( '#reverse' );
    let staggerBtn = document.querySelector( '#stagger' );
    //
    let boxItemOne = document.querySelector( '#box-item-one' );
    let boxItemTwo = document.querySelector( '#box-item-two' );
    let boxItemThree = document.querySelector( '#box-item-three' );
    let boxItemFour = document.querySelector( '#box-item-four' );
    //
    let mainTitle = document.querySelector( '.slogan-title' );
    let introTitle = document.querySelector( '.intro-title' );
    let ball = document.querySelector( '.ball' );
    //
    let tl = new TimelineMax({ paused: true });
    let tlTwo = new TimelineMax();
    let tlStagger = new TimelineMax({ paused: true });
    let delay = 0.9;
    let duration = 1;
    let distanceX = 200;
    //
    //
    tl
        .to( boxItemOne, duration, { x: distanceX, ease: Power1.easeOut } )
        .to( boxItemTwo, duration, { x: distanceX, ease: Back.easeOut.config( 1.7 ) } )
        .to( boxItemThree, duration, { x: distanceX, ease: Elastic.easeOut.config( 1, 0.3 ) } )
        .to( boxItemFour, duration, { x: distanceX, ease: Bounce.easeOut } );
    //
    // STAGGER ELEMENTS
    tlStagger
        .staggerTo( '.box-item', duration, { x: distanceX, backgroundColor: 'green', color: 'white', ease: Bounce.easeOut }, delay );
    //
    //
    tlTwo
        .from( mainTitle, duration, { opacity: 0, scale: 25, ease: Linear.easeInOut } )
        .from( introTitle, duration, { opacity: 0, scale: 20, ease: Linear.easeInOut }, delay )
        .to( ball, (duration + 0.8 ), { left: 80, rotation: 360, ease: Back.easeOut }, ( delay + 1 ) )
        .to( mainTitle, duration, { x: 100, ease: Back.easeInOut } );
    //
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
    staggerBtn.addEventListener( 'click', function () {
        tlStagger.play();
    });
}, false );


