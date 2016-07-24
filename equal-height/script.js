
function equalHeight( items ) {

    // max height value
    var maxHeight = 0;

    // get all list items
    var listItems = document.querySelectorAll( items );

    // get tallest list item value
    for ( var i = 0; i < listItems.length; i++ ) {
        var listItemHeight = listItems[i].offsetHeight;
        maxHeight = maxHeight < listItemHeight ? listItemHeight : maxHeight;
    }

    // set height for all list items
    for ( var j = 0; j < listItems.length; j++ ) {
        listItems[j].style.height = maxHeight + 'px';
    }

}

window.addEventListener( 'load', equalHeight( '.list__item' ), false );
window.addEventListener( 'resize', equalHeight( '.list__item' ), false );