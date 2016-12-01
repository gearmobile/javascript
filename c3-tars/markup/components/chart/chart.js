// INCLUDE LIBRARIES
// ----------------------------------
const d3 = require( 'd3' );
const c3 = require( 'c3' );

const plot = document.querySelector( '#chart' );
const plotPie = document.querySelector( '#pie' );
const plotDonut = document.querySelector( '#donut' );

const lineChart = c3.generate({
    bindto: plot,
    data: {
        columns: [
            [ 'data1', 30, 200, 100, 400, 150, 250 ],
            [ 'data2', 50, 20, 10, 40, 15, 25 ]
        ]
    }
});

const pieChart = c3.generate({
    bindto: plotPie,
    data: {
        columns: [
            [ 'data1', 30 ],
            [ 'data2', 120 ]
        ],
        type: 'pie',
        onclick: function ( d, i ) {
            console.log( 'onclick', d, i );
        },
        onmouseover: function ( d, i ) {
            console.log( 'onmouseover', d, i );
        },
        onmouseout: function ( d, i ) {
            console.log( 'onmouseout', d, i );
        }
    }
});

const donutChart = c3.generate({
    bindto: plotDonut,
    data: {
        columns: [
            [ 'data1', 60 ],
            [ 'data2', 100 - 60 ]
        ],
        type: 'donut'
    },
    donut: {
        title: 'Title'
    }
});
