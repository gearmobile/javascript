/**
 * Created by gearmoile on 8/31/16.
 */

var balance = 10500;
var cameraOn = true;

function steal ( balance, amount ) {
    cameraOn = false;
    if ( amount > 0 && amount < balance ) {
        balance -= amount;
        console.log( 'Yes! Your stole ' + amount + ' dollars!' );
        console.log( 'Now balance is ' + balance + ' dollars.' );
        cameraOn = true;
        return balance;
    } else {
        cameraOn = true;
        console.log( 'Nothing to steal. Balance is zero or too small.' );
    }
}

balance = steal( balance, 11500 );
console.log( cameraOn );