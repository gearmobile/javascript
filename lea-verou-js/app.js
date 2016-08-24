function $$( selector, context ) {
    context = context || document;
    var elements = context.querySelectorAll( selector );
    return Array.prototype.slice.call( elements );
}

$$( '.list' ).forEach( function (argument) {
    argument.style.padding = 0;
    argument.style.margin = 0;
    argument.style.listStyleType = 'none';
});


$$( '.list__link' ).forEach( function (argument) {
    argument.classList.add( 'list-link' );
});


$$( '.list__item' ).forEach( function (argument) {
    argument.style.textAlign = 'center';
    argument.style.marginBottom = '10px';
    argument.style.padding = '10px 0';
    argument.children[0].style.color = '#fff';
    argument.children[0].style.fontWeight = 700;
    if ( argument.childElementCount % 2 ) {
        argument.style.backgroundColor = '#789';
    }
    console.log( argument );
});

