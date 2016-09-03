/**
 * Created by gearmoile on 9/2/16.
 */

let fido = {
    name: 'Fido',
    weight: 48,
    breed: 'mixed',
    loves: 'walks'
};

function loseWeight( param1, param2 ) {
    param1.weight -= param2;
}

loseWeight( fido, 10 );

console.log( fido.name + ' now weights ' + fido.weight );

