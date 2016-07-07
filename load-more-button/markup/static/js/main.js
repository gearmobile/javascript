'use strict';

var $ = require('jquery');
var Isotope = require('isotope-layout');

$( document ).ready( function () {

    // CLEAN JQUERY
    // ---------------------------------------

    var gallery = $( '.gallery' );
    var galleryItems = gallery.find( '.gallery__item' );
    var galleryButton = gallery.find( '.gallery__button' );
    var galleryItemsToShow = 6;

    // show first n items when document loaded
    galleryItems.slice( 0, galleryItemsToShow ).show();

    galleryButton.on( 'click', function ( event ) {
        event.preventDefault();
        // show next n items
        galleryItems.filter( ':hidden' ).slice( 0, galleryItemsToShow ).show();
        // destroy button if nothing to show
        if ( galleryItems.filter( ':hidden' ).length === 0 ) {
            galleryButton.css( 'display', 'none' );
        }
    });


    // ISOTOPE - CLEAN JAVASCRIPT
    // --------------------------------------------------

    var iso = new Isotope( '.isotope-grid', {
        itemSelector: '.isotope-grid__item',
        percentPosition: true,
        masonry: {
            columnWidth: '.isotope-grid__sizer'
        }
    });

    // BIND FILTER BUTTON CLICK ----------------------------------
    document.querySelector( '.isotope-control' ).addEventListener( 'click', function ( event ) {
        iso.arrange({ filter: event.target.getAttribute( 'data-filter' ) });
    });

    // ISOTOPE BUTTON
    // -----------------------------------------------------
    var isoBtn = document.querySelector( '.isotope-button' );
    var elementsNumber = 3;
    var numberRows = 0;
    var classes = [ 'uno', 'duo', 'tre', 'quattro', 'cinque' ];

    isoBtn.addEventListener( 'click', function () {

        var elems = [];

        for ( var i = 0; i < elementsNumber; i++ ) {
            var randomClass = classes[ Math.floor( Math.random() * classes.length ) ];
            var item = document.createElement( 'div' );
            item.classList.add( 'isotope-grid__item' );
            item.classList.add( randomClass );
            item.innerHTML = randomClass;
            elems.push( item );
        }

        iso.insert( elems );
        ++numberRows;

        if ( numberRows >= 6 ) {
            document.querySelector( '.isotope-grid' ).style.marginBottom = 0;
            isoBtn.style.display = 'none';
        }

    }, false );


});

































