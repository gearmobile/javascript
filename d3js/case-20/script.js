window.addEventListener( 'load', function () {
    //
    const width = 400;
    const height = 400;
    const radius = 200;
    let color = d3.scale.category10();
    //
    function PetLover ( label, value ) {
        this.label = label;
        this.value = value;
    }
    let catLovers = new PetLover( 'Cat Lovers', 55 );
    let dogLovers = new PetLover( 'Dog Lovers', 30 );
    let nobodyLovers = new PetLover( 'Nobody Lovers', 15 );
    let data = [ catLovers, dogLovers, nobodyLovers ];
    //
    let visual = d3.select( 'body' ).append( 'svg' ).classed( 'pets-lovers', true );
    visual.data( data )
        .attr( 'width', width )
        .attr( 'height', height )
        .append( 'g' )
        .attr( 'transform', 'translate(' + radius + ',' + radius + ')' );
    let arc = d3.svg.arc().innerRadius( radius/2 ).outerRadius( radius );
}, false );
