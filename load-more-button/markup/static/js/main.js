'use strict';

var $ = require('jquery');

$( document ).ready( function () {

    var gallery = $( '.gallery' );
    var galleryItems = gallery.find( '.gallery__item' );
    var galleryButton = gallery.find( '.gallery__button' );
    var galleryItemsToShow = 6;

    // show first n items when document loaded
    galleryItems.slice( 0, galleryItemsToShow ).show();

    galleryButton.on( 'click', function ( event ) {
        event.preventDefault();
        // show next n items
        galleryItems.filter(':hidden').slice( 0, galleryItemsToShow ).show();
        // destroy button if nothing to show
        if ( galleryItems.filter(':hidden').length === 0 ) {
            galleryButton.css( 'display', 'none' );
        }
    });

});
