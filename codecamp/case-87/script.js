window.addEventListener( 'load', function () {
    let testObj = {
        'an entree': 'hamburger',
        'my side': 'veggies',
        'the drink': 'water'
    };
    let entreeValue = testObj['an entree'];
    let drinkValue = testObj['the drink'];
    console.log( entreeValue );
    console.log( drinkValue );
}, false );