window.addEventListener( 'DOMContentLoaded', function () {

    var block = document.querySelector('#block');
    var circle = document.querySelector('#circle');

    // CHANGE CIRCLE BACKGROUND-COLOR
    // ---------------------------------------------------
    block.addEventListener( 'click', function ( event ) {
        if ( event.target.id !== circle.id ) {
            circle.classList.add('is-active');
        }
    }, false );

    // RETURN CIRCLE ORIGIN BACKGROUND-COLOR
    // ----------------------------------------------------
    document.addEventListener( 'click', function ( event ) {
        if ( event.target.id !== block.id && event.target.id !== circle.id && circle.classList.contains('is-active') ) {
            circle.classList.remove('is-active');
        }
    }, false );

}, false );