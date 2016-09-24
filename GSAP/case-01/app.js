window.addEventListener( 'load', function () {
    //
    let delay = 1;
    let imageOne = document.querySelector( '#image-one' );
    let imageTwo = document.querySelector( '#image-two' );
    //
    function imageFuncReverse( object ) {
        if ( object ) {
            TweenLite.to( object, 2, { delay: delay * 1.4, x: 0, y: 0, scale: 1 } );
        }
    }
    //
    function imageOneFunc() {
        TweenLite.to( imageOne, 1, { delay: delay, x: 200, y: 200, scale: 1.4, onComplete: imageFuncReverse, onCompleteParams: [ imageOne ] } );
    }
    //
    function imageTwoFunc() {
        TweenLite.to( imageTwo, 2, { delay: delay, x: 400, y: 200, rotation: 180, alpha: 0.6 } );
    }
    //
    imageOneFunc();
    // imageTwoFunc();
}, false );


