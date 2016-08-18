window.addEventListener( 'load', function () {

    var primo = document.querySelector( '.primo' );
    var secondo = document.querySelector( '.secondo__clone' );
    var cloneButton = document.querySelector( '.clone-button' );

    cloneButton.style.cursor = 'pointer';
    cloneButton.style.textTransform = 'capitalize';
    secondo.style.color = '#f00';
    secondo.style.textTransform = 'capitalize';

    cloneButton.addEventListener( 'click', function () {
        primo.appendChild( secondo.cloneNode( true ) );
        secondo.parentNode.removeChild( secondo );
    }, false );

}, false );
