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
        const canvasMargins = {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        };
        const axisPadding = 10;
        let totalWidth = canvasWidth + ( canvasMargins.left + canvasMargins.right );
        let totalHeight = canvasHeight + ( canvasMargins.top + canvasMargins.bottom );
        //
        // ФУНКЦИЯ МАСШТАБИРОВАНИЯ ПО ОСИ X И Y
        // ВХОДНОЙ ДИАПАЗОН ЗНАЧЕНИЙ - ОТ МАКСИМАЛЬНОГО ДО -МАКСИМАЛЬНОГО
        // ВЫХОДНОЙ ДИАПАЗОН ЗНАЧЕНИЙ - ОТ 0 ДО ШИРИНЫ ХОЛСТА
        //
        let scaleAxis = d3.scale.linear()
            .domain([ -maxDataValue, maxDataValue ])
            .range([ 0, canvasWidth ])
            .nice();
        // СТИЛИЗАЦИЯ ОСЕЙ ХОЛСТА
        function styleAxis( axis ) {
            axis.selectAll( '.domain' )
                .attr( 'fill', 'none' )
                .attr( 'stroke-width', 1 )
                .attr( 'stroke', 'black' );
            axis.selectAll( '.tick line' )
                .attr( 'fill', 'none' )
                .attr( 'stroke-width', 1 )
                .attr( 'stroke', 'black' );
        }
        // СТИЛИЗАЦИЯ GUIDE LINES
        function styleGridline( gridLines ) {
            gridLines.selectAll( '.domain' )
                .attr( 'fill', 'none' )
                .attr( 'stroke', 'none' );
            gridLines.selectAll( '.tick line' )
                .attr( 'fill', 'none' )
                .attr( 'stroke-width', 1 )
                .attr( 'stroke', 'lightgray' );
        }
        // СОЗДАЕМ ХОЛСТ
        let canvas = d3.select('body')
            .append('svg')
            .attr( 'class', 'canvas' )
            .attr( 'width', totalWidth )
            .attr( 'height', totalHeight );
        // CANVAS PLOT AREA
        let canvasPlot = canvas.append('g')
            .classed( 'canvas-plot', true )
            .attr( 'width', canvasWidth )
            .attr( 'height', canvasHeight )
            .attr( 'transform', 'translate( ' + canvasMargins.left + ', ' + canvasMargins.top + ' )' );
        // КРУГИ ДЛЯ ОТОБРАЖЕНИЯ ИНФОРМАЦИИ
        let canvasCircles = canvasPlot.selectAll('circle')
            .data( data )
            .enter()
            .append('circle')
            .attr( 'class', 'canvas-circle' )
            .attr( 'cx', function ( d ) {
                return scaleAxis( d.x );
            })
            .attr( 'cy', function ( d ) {
                return scaleAxis( d.y );
            })
            .attr( 'r', circleRadius )
            // ДВЕ ПОСЛЕДНИЕ СТРОКИ - ДЛЯ ПРАВИЛЬНОЙ ВИЗУАЛИЗАЦИИ SCATTER PLOT
            .attr( 'fill', 'none' )
            .attr( 'stroke', 'steelblue' );
        // СОЗДАНИЕ X-ASIX
        let xAxis = d3.svg.axis()
            .scale( scaleAxis )
            .orient('bottom');
        // СОЗДАНИЕ Y-ASIX
        let yAxis = d3.svg.axis()
            .scale( scaleAxis )
            .orient('left');
        // ГРУППА ДЛЯ ВЕРТИКАЛЬНОЙ ОСИ
        let yAxisGroup = canvas.append('g')
            .classed( 'canvas-axis-y', true )
            .attr( 'transform', 'translate(' + ( canvasMargins.left - axisPadding ) + ', ' + ( canvasMargins.top ) + ')' )
            .call( yAxis );
        // СТИЛИЗУЕМ ОСЬ Y
        styleAxis( yAxisGroup );
        // ГРУППА ДЛЯ ГОРИЗОНТАЛЬНОЙ ОСИ
        let xAxisGroup = canvas.append('g')
            .classed( 'canvas-axis-x', true )
            .attr( 'transform', 'translate(' + ( canvasMargins.left ) + ', ' + ( canvasMargins.top + canvasHeight + axisPadding ) + ')' )
            .call( xAxis );
        // СТИЛИЗУЕМ ОСЬ X
        styleAxis( xAxisGroup );
        //
        // ВЕРТИКАЛЬНЫЕ GRIDLINES
        let verGridAxis = d3.svg.axis()
            .scale( scaleAxis )
            .orient( 'bottom' )
            .tickFormat('')
            .tickSize( canvasHeight + axisPadding, 0, 0 );
        //
        let verGridAxisGroup = canvas.append('g')
                .classed( 'ver-axis-group', true )
                .attr( 'transform', 'translate(' + ( canvasMargins.left - axisPadding ) + ', ' + ( canvasMargins.top ) + ')' )
                .call( verGridAxis );
        styleGridline( verGridAxisGroup );
        //
        // ВЕРТИКАЛЬНЫЕ GRIDLINES
        let horGridAxis = d3.svg.axis()
            .scale( scaleAxis )
            .orient( 'left' )
            .tickFormat('')
            .tickSize( canvasWidth + axisPadding * 2, 0, 0 );
        //
        let horGridAxisGroup = canvas.append('g')
            .classed( 'hor-axis-group', true )
            .attr( 'transform', 'translate(' + ( canvasMargins.left + canvasWidth + axisPadding ) + ', ' + ( canvasMargins.top ) + ')' )
            .call( horGridAxis );
        styleGridline( horGridAxisGroup );
    }); // КОНЕЦ ВЫЗОВА ФУНКЦИИ D3.CSV
}, false );































