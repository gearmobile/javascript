window.addEventListener( 'DOMContentLoaded', function () {
    // preload images
    function preLoad() {
        let images = [];
        for ( let i = 0; i < preLoad.arguments.length; i++ ) {
            images[i] = new Image();
            images[i].src = preLoad.arguments[i];
        }
        return images;
    }
    // create gallery images
    function gallery( array ) {
        let ul = document.createElement( 'ul' );
        document.body.appendChild(ul);
        for ( let i = 0; i < array.length; i++ ) {
            let li = document.createElement( 'li' );
            li.appendChild( array[i] );
            ul.appendChild(li);
        }
    }
    gallery( preLoad( 'images/heart.png', 'images/heart-o.png' ) );
    //
}, false);
