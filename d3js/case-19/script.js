window.addEventListener( 'load', function () {
    const min = 0;
    const maxX = 800;
    const maxY = 400;
    const maxR = 100;
    let data = [];
    const count = 10;
    //
    function getRandom( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    //
    function Circle( x, y, r ) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    //
    for ( let i = 0; i < count; i++ ) {
        let item = new Circle( getRandom( min + maxR, maxX - maxR ), getRandom( min + maxR, maxY - maxR ), getRandom( min, maxR ) );
        data.push( item );
    }
    //
    let diagram = d3.select( 'body' ).append( 'svg' ).classed( 'blob', true );
    //
    let circles = diagram.selectAll( '.blob-item' )
        .data( data );
    //
    circles.exit().remove();
    //
    circles.enter()
        .append( 'circle' )
        .classed( 'blob-item', true );
    //
    circles
        .attr( 'cx', function ( d ) {
            return d.x;
        })
        .attr( 'cy', function ( d ) {
            return d.y;
        })
        .attr( 'r', function ( d ) {
            return d.r;
        });
}, false );
