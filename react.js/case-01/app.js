window.addEventListener( 'load', function () {
    const wrapper = document.querySelector( '#wrapper' );
    // ---------------------------------------------------
    const title = React.createElement( 'h1', { className: 'holder-title' }, 'Hello from React!' );
    const subtitle = React.createElement( 'h2', { className: 'holder-subtitle' }, 'A javascript library for building user interfaces' );
    const logo = React.createElement( 'img', { src: '../library/images/logo-react.svg', className: 'holder-image' } );
    const holder = React.createElement( 'main', { className: 'holder' }, title,logo,subtitle );
    // ---------------------------------------------------
    ReactDOM.render( holder, wrapper );
    // ---------------------------------------------------
}, false);