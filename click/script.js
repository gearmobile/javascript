window.addEventListener( 'DOMContentLoaded', function () {

    var block = document.querySelector('#block');
    var circle = document.querySelector('#circle');

    block.addEventListener('click', function () {
        circle.classList.add('is-active');
    });

    document.addEventListener( 'click', function ( event ) {
        if ( event.target.id !== block.id && event.target.id !== circle.id && circle.classList.contains('is-active') ) {
            circle.classList.remove('is-active');
        }
    });

}, false);