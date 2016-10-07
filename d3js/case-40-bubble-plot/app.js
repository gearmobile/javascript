window.addEventListener( 'load', function () {
    //
    const url = '../library/pop.csv';
    d3.csv( url, function ( error, rawData ) {
        let data = rawData.map( function ( d ) {
            return {
                CountryCode: d.CountryCode,
                CountryName: d.CountryName,
                LifeExp: d.LifeExp,
                FertRate: d.FertRate,
                Population: d.Population,
                Region: d.Region
            };
        });
        //
        const minBubbleSize = 5;
        const maxBubbleSize = 50;
        let margins = {
            top: maxBubbleSize / 2,
            right: maxBubbleSize / 2,
            bottom: maxBubbleSize / 2,
            left: maxBubbleSize / 2
        };
        //
        let rangeExpectancy = data.map( function (d) { return d.LifeExp });
        let rangeRate = data.map( function (d) { return d.FertRate });
        let rangePopulation = data.map( function (d) { return d.Population });
        let rangeRegions = data.map( function (d) { return d.Region });
    });
}, false );
