window.addEventListener( 'load', function () {
    let button = document.querySelector('#render');
    button.style.cursor = 'pointer';
    let array1 = [ 10, 20, 30 ];
    let array2 = [ 10, 20, 30, 40 ];
    let array3 = [ 20, 30, 50 ];
    let array4 = [ 5, 10 ];
    function render( param ) {
        let selection = d3.select('body').selectAll('div').data( param );
        // create new items
        let entering = selection.enter();
        entering.append('div').text( function ( d ) {
            return d;
        });
        // update items
        selection.text( function ( d ) {
            return d;
        });
        // remove items
        let exiting = selection.exit();
        exiting.remove();
    }
    render( array1 );
    button.addEventListener( 'click', function () {
        render( array4 );
    }, false );
}, false );

