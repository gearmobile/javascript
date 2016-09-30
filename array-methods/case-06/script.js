window.addEventListener( 'load', function () {
    //
    let name = 'openSuperMenu';
    let test = {
        className: 'open menu'
    };
    //
    // ARRAY METHOD
    //
    function addClassArray( object, value ) {
        let string = value.toString().toLowerCase();
        let list = object.className ? object.className.split(' ') : [];
        for ( let i = 0; i < list.length; i++ ) {
            if ( list[i] === string ) return;
        }
        list.push( string );
        object.className = list.join(' ');
        return object;
    }
    //
    // OBJECT METHOD
    //
    function addClassObject( obj, key ) {
        //
        let string = key.toString().toLowerCase();
        let list = obj.className ? obj.className.split(' ') : [];
        let result = {};
        //
        for ( let i = 0; i < list.length; i++ ) {
            result[ list[i] ] = true;
        }
        //
        if ( !result[ string ] ) {
            result[ string ] = true;
        }
        obj.className = Object.keys( result ).join(' ');
        return obj;
    }
    console.log( addClassArray( test, name ) );
    console.log( addClassObject( test, name ) );
}, false );