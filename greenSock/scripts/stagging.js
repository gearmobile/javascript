window.addEventListener( 'DOMContentLoaded', function () {


    // VARIABLES
    // --------------------------------------

    var offset = 300;
    var offsetStagger = 200;
    var offsetStaggerFromTo = 250;
    var time = 1;
    var easing = SlowMo.ease.config( 0.5, 0.4, false );
    var easingStagger = Power1.easeInOut;
    var delayStagger = 0.1;

    // INIT ELEMENTS
    // --------------------------------------

    var stagging = document.querySelector( '.stagging' );
    var staggerItems = document.querySelectorAll('.stagger__item');
    var staggerItemsTo = document.querySelectorAll('.stagger__item--to');
    var staggerItemsFromTo = document.querySelectorAll('.stagger__item--fromto');
    var staggerItemsCycle = document.querySelectorAll('.stagger__item--cycle');
    var tl = new TimelineLite();


    // TIMELINE
    // --------------------------------------

    tl
        .from( stagging.children[0], time, { x: offset, ease: easing } )
        .from( stagging.children[1], time, { x: offset, ease: easing } )
        .from( stagging.children[2], time, { x: offset, ease: easing } )
        .staggerFrom( staggerItems, 0.4, { x: offsetStagger, ease: easingStagger }, delayStagger )
        .staggerTo( staggerItemsTo, 0.4, { x: -offsetStagger, ease: easingStagger }, delayStagger )
        .staggerFromTo( staggerItemsFromTo, 0.6, {
            autoAlpha: 0,
            x: -offsetStaggerFromTo,
            ease: easingStagger
        }, {
            autoAlpha: 1,
            x: offsetStaggerFromTo,
            ease: easingStagger
        }, delayStagger )
        .staggerFrom( staggerItemsCycle, 0.8, { cycle: { x: [ 50, -50 ] }, ease: easingStagger }, delayStagger );



}, false);