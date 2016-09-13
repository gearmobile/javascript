window.addEventListener( 'load', function () {
    // -------------------------------------------------------
    let ourStorage = {
        // first key
        desk: {
            drawer: 'stapler'
        },
        // second key
        cabinet: {
            // first subkey
            'top drawer': {
                folder1: 'a file',
                folder2: 'secrets'
            },
            // second subkey
            'bottom drawer': 'soda'
        }
    };
    console.log( ourStorage.cabinet['top drawer'].folder2 ); // => 'secrets'
    console.log( ourStorage.desk.drawer ); // => 'stapler'
    // -------------------------------------------------------
    let myStorage = {
        car: {
            inside: {
                'glove box': 'maps',
                'passenger seat': 'crumbs'
            },
            outside: {
                trunk: 'jack'
            }
        }
    };
    console.log( myStorage.car.inside['glove box'] );
    // -------------------------------------------------------
}, false );