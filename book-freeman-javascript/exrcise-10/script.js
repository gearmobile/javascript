let chevy = {
    make: 'Chevrolet',
    model: 'Aveo',
    year: 2015,
    color: 'Silver Dark',
    passengers: 4,
    convertible: false,
    mileage: 2000,
    started: false,
    start: function () {
        this.started = true;
        console.log( 'The engine started!' );
    },
    stop: function () {
        this.started = false;
        console.log( 'The engine stoped!' );
    },
    drive: function () {
        if ( this.started ) {
            console.log( 'Zoom zoom' );
        } else {
            console.log( 'You need to start the engine first' );
        }
    }
};

// chevy.drive();
chevy.start();
chevy.drive();
chevy.stop();

// --------------------------------------------------------------------------------------

let song = {
    name: '\"Walk This Way\"',
    artist: '\"The Doors\"',
    minutes: 4,
    seconds: 3,
    genre: 'Rock',
    playing: false,
    play: function () {
        if ( !this.playing ) {
            this.playing = true;
            console.log( ['Playing', this.name, 'by', this.artist, '.'].join(' ') );
        }
    },
    pause: function () {
        if ( this.playing ) {
            this.playing = false;
            console.log( [ 'Stop playing', this.name, 'by', this.artist, '.' ].join(' ') );
        }
    }
};

song.play();
song.pause();

// -------------------------------------------------------------------------------------

let eightBall = {
    index: 0,
    advice: [ 'yes', 'no', 'maybe', 'not a chance' ],
    shake: function () {
        this.index = this.index + 1;
        if ( this.index >= this.advice.length ) {
            this.index = 0;
        }
    },
    look: function () {
        console.log( this.advice[ this.index ] );
    }
};

window.addEventListener( 'load', function () {
    document.querySelector( '#shake' ).addEventListener( 'click', function () {
        eightBall.shake();
    }, false );
    document.querySelector( '#look' ).addEventListener( 'click', function () {
        eightBall.look();
    }, false );
}, false );

// -------------------------------------------------------------------------------------




















