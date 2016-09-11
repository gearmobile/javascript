window.addEventListener( 'load', function () {
    //
    function Person( name ){
        this.name = name;
    }
    //
    Person.prototype.greet = function ( otherName ) {
        return 'Hi ' + otherName + ', my name is ' + this.name;
    };
    //
    let mio = new Person('John');
    //
    console.log( mio.greet('Valery') );
}, false );
