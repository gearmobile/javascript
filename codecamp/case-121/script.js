window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let oneArray = [ 1,2,3,4 ];
    let twoArray = [ 5,6,7,8 ];
    console.log( oneArray.concat( twoArray ) );
    // -------------------------------------------------------
    var oldArray = [1,2,3];
    var newArray = [];
    var concatMe = [4,5,6];
    newArray = oldArray.concat( concatMe );
    console.log( newArray );
}, false );