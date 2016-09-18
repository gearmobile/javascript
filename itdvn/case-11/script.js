window.addEventListener( 'DOMContentLoaded', function () {
    //
    function Human() {
        this.name = name;
    }
    //
    let human = new Human( 'Andrew' );
    if ( human.hasOwnProperty( 'name' ) ) {
        console.log( true );
    } else {
        console.log( false );
    }
}, false);
