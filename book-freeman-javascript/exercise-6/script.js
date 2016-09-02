/**
 * Created by gearmoile on 9/2/16.
 */

var cadi = {
    color: 'tan',
    year: 1955,
    miliage: 12892,
    passengers: 5,
    comfortable: false
};

var dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
};
var bark;
if ( dog.weight > 20 ) {
    bark = 'WOOF WOOF';
} else {
    bark = 'woof woof';
}
var speak = dog.name + ' says ' + bark + ' when he wants to ' + dog.activity + '.' ;
console.log( speak );