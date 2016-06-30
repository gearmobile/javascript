window.addEventListener('DOMContentLoaded', function () {

    var leader = {
        name: 'Aaron Smith',
        age: 35
    };

    var leaderStr = JSON.stringify( leader );

    var leaderFromStr = JSON.parse( leaderStr );

    console.log( leaderFromStr );
    
}, false);