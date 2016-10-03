window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let formElement = document.querySelector( '#formElement' );
    //
    function focus( event ) {
        let activeElement = formElement.querySelector( '.focused' );
        if ( activeElement ) {
            activeElement.classList.remove( 'focused' );
        }
        event.target.classList.add( 'focused' );
    }
    //
    function pocus() {
        let activeElement = formElement.querySelector( '.focused' );
        if ( activeElement ) {
            activeElement.classList.remove( 'focused' );
        }
    }
    //
    formElement.addEventListener( 'focus', function ( event ) {
        focus( event );
    }, true );
    //
    formElement.addEventListener( 'blur', function () {
        pocus();
    }, true );
    // -------------------------------------------------------
}, false );

// https://learn.javascript.ru/focus-blur#делегирование-с-focus-blur

