function findCar( param ) {
    for ( let i = 0; i < lot.length; i++ ) {
        if ( param === lot[i] ) {
            return i;
        }
    }
    return -1;
}

let chevy = {
    make: 'Chevy',
    model: 'Bel Air'
};

let taxi = {
    make: 'Webville Motors',
    model: 'Taxi'
};

let fiat1 = {
    make: 'Fiat',
    model: '500'
};

let fiat2 = {
    make: 'Fiat',
    model: '500'
};

let lot = [ chevy, taxi, fiat1, fiat2 ];

console.log( findCar( chevy ) );
console.log( findCar( taxi ) );
console.log( findCar( fiat1 ) );
console.log( findCar( fiat2 ) );
