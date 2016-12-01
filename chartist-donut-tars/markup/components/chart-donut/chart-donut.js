
// include library Chartist
// -----------------------------------------------------
const Chartist = require( 'chartist' );

// donut skills values
// -----------------------------------------------------
const donutUnoSkill = 96;
const donutDuoSkill = 89;
const donutTreSkill = 66;
const donutQuattroSkill = 29;

// donut elements
// -----------------------------------------------------
const donutUno = document.querySelector( '#donutUno' );
const donutDuo = document.querySelector( '#donutDuo' );
const donutTre = document.querySelector( '#donutTre' );
const donutQuattro = document.querySelector( '#donutQuattro' );

// donut datas
// -----------------------------------------------------
const donutUnoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutUnoSkill, 100 - donutUnoSkill ]
};
const donutDuoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutDuoSkill, 100 - donutDuoSkill ]
};
const donutTreData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutTreSkill, 100 - donutTreSkill ]
};
const donutQuattroData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutQuattroSkill, 100 - donutQuattroSkill ]
};

// donut options
// -----------------------------------------------------
const donutOptions = {
    donut: true,
    showLabel: false,
    donutWidth: 22
};

window.addEventListener( 'load', function () {

    // draw donut charts
    // -----------------------------------------------------
    const chartUno = new Chartist.Pie( donutUno, donutUnoData, donutOptions );
    const chartDuo = new Chartist.Pie( donutDuo, donutDuoData, donutOptions );
    const chartTre = new Chartist.Pie( donutTre, donutTreData, donutOptions );
    const chartQuattro = new Chartist.Pie( donutQuattro, donutQuattroData, donutOptions );

    // add donut values
    // -----------------------------------------------------
    const chartUnoValue = document.createElement( 'div' );
    chartUnoValue.classList.add( 'holder-value' );
    chartUnoValue.innerHTML = donutUnoData.series[0];
    donutUno.appendChild( chartUnoValue );
    // -----------------------------------------------------
    const chartDuoValue = document.createElement( 'div' );
    chartDuoValue.classList.add( 'holder-value' );
    chartDuoValue.innerHTML = donutDuoData.series[0];
    donutDuo.appendChild( chartDuoValue );
    // -----------------------------------------------------
    const chartTreValue = document.createElement( 'div' );
    chartTreValue.classList.add( 'holder-value' );
    chartTreValue.innerHTML = donutTreData.series[0];
    donutTre.appendChild( chartTreValue );
    // -----------------------------------------------------
    const chartQuattroValue = document.createElement( 'div' );
    chartQuattroValue.classList.add( 'holder-value' );
    chartQuattroValue.innerHTML = donutQuattroData.series[0];
    donutQuattro.appendChild( chartQuattroValue );

}, false );


