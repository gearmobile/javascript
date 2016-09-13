window.addEventListener( 'load', function () {
    function Point( x, y ) {
        this.coordsX = x;
        this.coordsY = y;
    }
    function Human( name ) {
        this.firstName = name;
        this.sayHello = function ( othername ) {
            console.log( 'Hello! ' + othername + ' My name is ' + this.firstName );
        };
    }
    let point = new Point( 20, 10 );
    console.log('----------------------------');
    console.log( point.coordsX );
    console.log( point.coordsY );
    let mashroom = new Point( 50, 60 );
    console.log('----------------------------');
    console.log( mashroom.coordsX );
    console.log( mashroom.coordsY );
    console.log('----------------------------');
    let hi = new Human( 'John' );
    console.log( hi.firstName );
    console.log( hi.sayHello( 'Mary' ));
    console.log('----------------------------');
    let Friend = function ( mood ) {
        this.mood = mood;
        // mood is nice
        if ( mood === 'nice' ) {
            this.talk = function () {
                console.log( 'Hello! What\'s up!' );
            };
        // mood is bad
        } else if ( mood === 'bad' ) {
            this.talk = function () {
                console.log( 'Sorry! I do not want to talk with you' );
            };
        // mood is undefined
        } else {
            this.talk = function () {
                console.log( 'Hi' );
            };
        }
    };
    let whatIsMood = prompt( 'Type your mood (nice\\bad):', 'nice' );
    let newMood = new Friend( whatIsMood );
    console.log( newMood.talk() );
    console.log('----------------------------');
}, false );
