window.addEventListener( 'load', function () {
    let button = document.querySelector('#render');
    button.style.cursor = 'pointer';
    let array1 = [ 10, 20, 30 ];
    let array2 = [ 10, 20, 30, 40 ];
    function render( param ) {
        let selection = d3.select('body').selectAll('div').data( param );
        let entering = selection.enter();
        entering.append('div').text( function ( d ) {
            return d;
        });
    }
    render( array1 );
    button.addEventListener( 'click', function () {
        render( array2 );
    }, false );
}, false );

