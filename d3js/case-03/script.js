window.addEventListener( 'load', function () {
    // ---------------------------------------------------------------------------
    d3.selectAll( '.wrapper .wrapper__item' )
        .style( 'width', function ( d, i ) {
            return ( 10 + 10 + i * 100 ) + 'px';
        })
        .style( 'background-color', function ( d, i ) {
            return ( i % 2 === 0 ) ? 'lightgreen' : 'lightblue' ;
        });
    // ---------------------------------------------------------------------------
    d3.select( '.holder' ).selectAll( '.holder__item' )
        .style(
        {
            'width': function ( d, i ) {
                return ( 10 + 10 + i * 150 ) + 'px';
            },
            'background-color': function ( d, i ) {
                return ( i % 2 === 0 ) ? 'salmon' : 'forestgreen';
            }
        }
    );
    // ---------------------------------------------------------------------------
}, false );
