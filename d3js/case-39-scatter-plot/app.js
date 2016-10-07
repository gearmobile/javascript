window.addEventListener( 'load', function () {
    //
    let urlCSV = '../library/cor.csv';
    d3.csv( urlCSV, function ( error, rawData ) {
        let data = rawData.map(function ( d ) {
            return {
                x: +d.AAPL,
                y: +d.MSFT
            }
        });
        // создать диапазон x-значений объекта data
        let xExt = d3.extent( data, function ( d ) {
            return d.x;
        });
        // создать диапазон y-значений объекта data
        let yExt = d3.extent( data, function( d ) {
            return d.y;
        });
        // получить максимальное абсолютное значение объекта data
        let maxDataValue = d3.max( xExt.concat( yExt ), function ( d ) {
            return Math.abs( d );
        });
        // размеры холста - ширина, высота и радиус круга
        const canvasWidth = 400;
        const canvasHeight = 400;
        const circleRadius = 5;
        // функция масштабирования по оси X и Y
        // входной диапазон значений - от максимального до -максимального
        // выходной диапазон значений - от 0 до ширины холста
        let scale = d3.scale.linear()
            .domain([ -maxDataValue, maxDataValue ])
            .range([ 0, canvasWidth ]);
        // создаем холст
        let canvas = d3.select('body')
            .append('svg')
            .attr( 'class', 'canvas' )
            .attr( 'width', canvasWidth )
            .attr( 'height', canvasHeight );
        // круги для отображения информации
        let canvasCircles = canvas.selectAll('circle')
            .data( data )
            .enter()
            .append('circle')
            .attr( 'class', 'canvas-circle' )
            .attr( 'cx', function ( d ) {
                return scale( d.x );
            })
            .attr( 'cy', function ( d ) {
                return scale( d.y );
            })
            .attr( 'r', circleRadius )
            // две последние строки - для правильной визуализации scatter plot
            .attr( 'fill', 'none' )
            .attr( 'stroke', 'steelblue' );
    }); // конец вызова функции d3.csv
}, false );































