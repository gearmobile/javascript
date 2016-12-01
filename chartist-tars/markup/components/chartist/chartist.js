const Chartist = require( 'chartist' );

const chartElementUno = document.querySelector( '#chartUno' );
const chartElementDuo = document.querySelector( '#chartDuo' );
const chartElementTre = document.querySelector( '#chartTre' );
const chartElementQuattro = document.querySelector( '#chartQuattro' );
const chartElementCinque = document.querySelector( '#chartCinque' );

const dataChartUno = {
    labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ],
    series: [
        [ 5, 2, 4, 2, 0 ]
    ]
};

const dataChartDuo = {
    labels: [ 1, 2, 3, 4 ],
    series: [ [ 100, 120, 180, 200 ] ]
};

const dataChartTre = {
    labels: [ 1, 2, 3, 4 ],
    series: [ [ 5, 2, 8, 3 ] ]
};

const dataChartQuattro = {
    labels: [ 'Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6' ],
    series: [
        [ 5, 4, 3, 7, 5, 10 ],
        [ 3, 2, 9, 5, 4, 6 ],
        [ 2, 1, -3, -4, -2, 0 ]
    ]
};

const dataChartQuattroOptions = {
    showPoint: false,
    lineSmooth: false,
    axisX: {
        showGrid: false,
        showLabel: false
    },
    axisY: {
        offset: 60,
        // The label interpolation function enables you to modify the values
        // used for the labels on each axis. Here we are converting the
        // values into million pound.
        labelInterpolationFnc: function ( value ) {
            return '$' + value + 'm';
        }
    }
};

const dataChartCinque = {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    series: [
        [ 5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8 ],
        [ 3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4 ]
    ]
};

const optionsChartCinque = {
    seriesBarDistance: 15
};

const responsiveOptionsCinque = [
    [ 'screen and ( min-width: 641px ) and ( max-width: 1024px ) ', {
        seriesBarDistance: 10,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    }],
    [ 'screen and ( max-width: 640px )', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[ 0 ];
            }
        }
    }]
];


const lineChartUno = new Chartist.Line( chartElementUno, dataChartUno );
const lineChartDuo = new Chartist.Line( chartElementDuo, dataChartDuo );
const lineChartTre = new Chartist.Line( chartElementTre, dataChartTre );
const lineChartQuattro = new Chartist.Line( chartElementQuattro, dataChartQuattro, dataChartQuattroOptions );
const lineChartCinque = new Chartist.Bar( chartElementCinque, dataChartCinque, optionsChartCinque, responsiveOptionsCinque );
