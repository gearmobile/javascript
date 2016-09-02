/**
 * Created by gearmoile on 9/2/16.
 */

const taxi = {
    make: 'GM',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: true,
    mileage: 28934
};

const cadi = {
    make: 'Chevy',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892
};

const fiat = {
    make: 'FIAT',
    model: '500',
    year: 1957,
    color: 'blue',
    passengers: 2,
    convertible: false,
    mileage: 88000
};

const merc = {
    make: 'Mercedec',
    model: 'Benz',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: true,
    mileage: 1021
};

function checkCar( param ) {
    if ( param.mileage > 10000 ) {
        return false;
    } else if ( param.year > 1960 ) {
        return false;
    }
    return true;
}

function whatToDo( param ) {
    if ( checkCar( param ) ) {
        console.log( 'Check this ' + param.make + ' ' + param.model );
    } else {
        console.log( 'Do not check this ' + param.make + ' ' + param.model );
    }
}

whatToDo( taxi );
whatToDo( cadi );
whatToDo( fiat );
whatToDo( merc );
