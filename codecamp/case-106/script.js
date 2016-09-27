window.addEventListener( 'load', function () {
    // тестовая строка
    let testString = 'Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.';
    // переменная для удобства, в которую помещается искомый шаблон
    let expressionSoftware = /software/gi;
    // возвращается массив всех вхождений шаблона, так как использован флаг g - найти все вхождения
    console.log( testString.match( expressionSoftware ) );
    // так как возвращается массив, то можно узнать его длину - число вхождений шаблона
    console.log( testString.match( expressionSoftware ).length );
    let expression = /and/gi;
    console.log( testString.match( expression ).length );
    // -------------------------------------------------------
}, false );