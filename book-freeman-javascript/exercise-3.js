/**
 * Created by gearmoile on 8/31/16.
 */

let balance = 10500;
let cameraOn = true;

function steal( parameter, amount ) {
    cameraOn = false;
    if ( amount > 0 && amount < parameter ) {
        parameter -= amount;
        console.log( 'Yes! Your stole ' + amount + ' dollars!' );
        console.log( 'Now balance is ' + parameter + ' dollars.' );
        cameraOn = true;
        return parameter;
    } else {
        cameraOn = true;
        console.log( 'Nothing to steal. Balance is zero or too small.' );
    }
}

balance = steal( balance, 11500 );
console.log( cameraOn );
