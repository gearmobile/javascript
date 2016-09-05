let fiat = {
    make: 'Fiat',
    model: '500',
    started: false,
    fuel: 0,
    start: function () {
        if ( this.fuel > 0 ) {
            this.started = true;
            console.log( this.make + ' started' );
        } else {
            console.log( this.make + ' need to add fuel' );
        }
    },
    stop: function () {
        this.started = false;
        console.log( this.make + ' stoped. The rest value of fuel is ' + this.fuel );
    },
    drive: function () {
        if ( this.started && this.fuel > 0 ) {
            console.log( this.make + ' ' + this.model + ' goes zoom zoom!' );
            this.fuel -= 1;
        } else {
            console.log( 'You need to start the engine firts or you need to add fuel!' );
            this.stop();
        }
    },
    addFuel: function ( amount ) {
        this.fuel += amount;
        console.log( this.make + ' was added ' + amount + ' litres of fuel. Total value of fuel is ' + this.fuel );
    }
};

window.addEventListener( 'load', function () {
    fiat.addFuel(3);
    fiat.start();
    fiat.drive();
    fiat.addFuel(2);
    fiat.start();
    fiat.drive();
    fiat.drive();
    fiat.drive();
    fiat.stop();
}, false );