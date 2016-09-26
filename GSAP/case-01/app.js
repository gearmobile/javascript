window.addEventListener( 'load', function () {
    //
    let delay = 1;
    let imageOne = document.querySelector( '#box-item-one' );
    let imageTwo = document.querySelector( '#box-item-two' );
    //
    function imageFuncReverse( object ) {
        if ( object ) {
            TweenLite.to( object, 2, { delay: ( delay * 1.4 ), x: 0, y: 0, scale: 1 } );
        }
    }
    //
    function imageOneFunc() {
        TweenLite.to( imageOne, 1, {
            delay: ( delay - 0.8 ),
            x: 1000,
            y: -100,
            scale: 1.4,
            onComplete: imageFuncReverse,
            onCompleteParams: [ imageOne ]
        });
    }
    //
    function imageTwoFunc() {
        TweenLite.to( imageTwo, 2, { delay: ( delay - 0.2 ), x: 1000, y: 200, rotation: 180, alpha: 0.6 } );
    }
    //
    imageOne.addEventListener( 'mouseenter', function () {
        imageOneFunc();
    }, false );
    //
    imageTwo.addEventListener( 'mouseover', function () {
        imageTwoFunc();
    }, false );
    //
}, false );


