window.addEventListener( 'load', function () {

    // INITIAL SLIDESHOW
    // -----------------------------------------

    var slideItems = document.querySelectorAll( '.slide .slide__item' );
    var slideItemsCurrent = 0;
    var slideTimeout = 3000;

    function showSlide() {
        slideItems[ slideItemsCurrent ].classList.remove( 'slide__item--active' );
        slideItemsCurrent = ( slideItemsCurrent + 1 ) % slideItems.length;
        slideItems[ slideItemsCurrent ].classList.add( 'slide__item--active' );
    }

    var startSlideShow = setInterval( showSlide, slideTimeout );

    // PLAY \ PAUSE BUTTON
    // -----------------------------------------

    var playing = true;
    var slideButtonPause = document.querySelector( '.slide__button--play' );

    function pauseSlideShow() {
        playing = false;
        clearInterval( startSlideShow );
        slideButtonPause.innerHTML = 'play';
    }

    function playSlideShow() {
        playing = true;
        startSlideShow = setInterval( showSlide, 2000 );
        slideButtonPause.innerHTML = 'pause';
    }

    slideButtonPause.addEventListener( 'click', function () {

        if ( playing ) {
            pauseSlideShow();
        } else {
            playSlideShow();
        }

    }, false );

    // PREV \ NEXT BUTTONS
    // -----------------------------------------
    
    var slideButtonPrev = document.querySelector( '.slide__button--next' );
    var slideButtonNext = document.querySelector( '.slide__button--prev' );

    function goToSlide( n ) {
        slideItems[ slideItemsCurrent ].classList.remove( 'slide__item--active' );
        slideItemsCurrent = ( n + slideItems.length ) % slideItems.length;
        slideItems[ slideItemsCurrent ].classList.add( 'slide__item--active' );
    }

    function previousSlideShow() {
        goToSlide( slideItemsCurrent - 1 );
    }

    function nextSlideShow() {
        goToSlide( slideItemsCurrent + 1 );
    }

    slideButtonPrev.addEventListener( 'click', function () {
        pauseSlideShow();
        previousSlideShow();
    }, false );

    slideButtonNext.addEventListener( 'click', function () {
        pauseSlideShow();
        nextSlideShow();
    }, false );

    // WHEN JAVASCRIPT ISN’T AVAILABLE
    // -----------------------------------------------------

    document.querySelector( '.slide__control' ).style.display = 'flex';

    for( var i = 0; i < slideItems.length; i++ ) {
        slideItems[i].style.position = 'absolute';
    }

}, false );
