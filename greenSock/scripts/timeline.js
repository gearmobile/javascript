window.addEventListener( 'DOMContentLoaded', function () {

    var timeline = document.querySelector('.timeline');
    var tl = new TimelineLite();


    tl
        .from( timeline.children[0], 1, { x: 100, ease: Power1.easeOut } )
        .add('label-1')
        .from( timeline.children[1], 1, { x: 100, ease: Power1.easeOut } )
        .from( timeline.children[2], 1, { x: 100, ease: Power1.easeOut } )
        .from( timeline.children[3], 1, { x: 100, ease: Power1.easeOut }, 'label-1+=2' )
        .from( timeline.children[4], 1, { x: 100, ease: Power1.easeOut } )
        .from( timeline.children[5], 1, { x: 100, ease: Power1.easeOut }, 'label-1' );


}, false);