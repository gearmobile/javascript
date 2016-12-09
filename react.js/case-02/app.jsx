window.addEventListener( 'load', function () {
    // ---------------------------------------------------
    const wrapper = document.querySelector( '#wrapper' );
    // ---------------------------------------------------
    const example =
        <div className="holder">
            <h1 className="holder-title">Hello from React!</h1>
            <img className="holder-image" src="../library/images/logo-react.svg" alt="React Logo"/>
            <h2 className="holder-subtitle">A javascript library for building user interfaces</h2>
        </div>;
    // ---------------------------------------------------
    ReactDOM.render( example, wrapper );
    // ---------------------------------------------------
}, false);

