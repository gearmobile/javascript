window.addEventListener( 'load', function () {
    //
    function isIsogram( str ) {
        let pattern = 'isogram'.toLowerCase();
        if ( !str ) {
            str = pattern;
        } else {
            str = str.toLowerCase().split('');
            let test = {};
            for ( let i = 0; i < str.length; i++ ) {
                test[ str[i] ] = true;
            }
            for ( let j = 0; j < pattern.length; j++ ) {
                if ( !test[pattern[j]] ) {
                    return false;
                }
            }
            return true;
        }
    }
    console.log( isIsogram('Dermatoglyphics') );
    console.log( isIsogram('isogram') );
    console.log( isIsogram('aba') );
    console.log( isIsogram('moOse') );
    console.log( isIsogram('isIsogram') );
    console.log( isIsogram('') );
    //
}, false );


