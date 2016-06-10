
var a1 = [ 1, 2, 3 ];

var a2 = [
    { name: 'John', spec: 'Ruby', sal: 2000 },
    { name: 'Mary', spec: 'Python', sal: 3000 },
    { name: 'Peter', spec: 'JvaScript', sal: 4000 },
    { name: 'Jeferson', spec: 'HTML', sal: 1000 },
    { name: 'Abdulla', spec: 'C++', sal: 10000 }
];

var a3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

var a4 = [ 11, 12, 13, [ 21, 22, 23, [ 31, 32, 33, [ 41, 42, 43, [ 51, 52, 53, [ 61 ] ] ] ] ] ];


// МЕТОДЫ ДЛЯ РАБОТЫ С КОЛЛЕКЦИЯМИ
// =======================================================================================

// ПРОСТОЙ ПРИМЕР МЕТОДА .EACH
// ----------------------------------------------------------------------------------------
_.each( a1, function (el) { console.log(el) });


// СОКРВЩЕННЫЙ ВАРИАНТ ДВОЙНОГО ЦИКЛА ПРИ ПОМОЩИ МЕТОДА .EACH
// ----------------------------------------------------------------------------------------
_.each( a2, function (el) { _.each( el, function (element) { console.log(element) } ) });


// ПРИМЕР МЕТОДА .MAP
// ----------------------------------------------------------------------------------------
var a4 = _.map( a3, function (el) { return el*3 } );
_.map( a2, function (el) { el.sal += 500 } );
var specs = _.map( a2, function (el) { return el.spec } );
var names = _.map( a2, function (el) { return el.name } );
var salaries = _.map( a2, function (el) { return el.sal } );


// ПРИМЕР МЕТОДА .PARTITION
// ----------------------------------------------------------------------------------------
// создается новый массив, состоящий из двух подмассивов;
// певый подмассив - это элементы, удовлетворяющие условию;
// второй подмассив - это элементы, не удовлетворяющие условию
var splitArr = _.partition( a3, function (el) { if ( el % 2 === 0 ) { return el } } );
var splitSalary = _.partition( a2, function (el) { if ( el.sal < 4000 ) { return el } } );

// ПРИМЕР МЕТОДА .SHUFFLE
// ----------------------------------------------------------------------------------------
// при каждом запуске изменяет в случайном порядке индекс элементов существующего массива
// в результате получается новый массив на основе существующего массива
var shuffledArr = _.shuffle(a3);
var shuffledArrObj = _.shuffle(a2);



// МЕТОДЫ ДЛЯ РАБОТЫ С МАССИВАМИ
// =======================================================================================


// ПРИМЕР МЕТОДА .FIRST
// ----------------------------------------------------------------------------------------
// возвращает первый элемент массива
var firstEl = _.first(a1);


// ПРИМЕР МЕТОДА .FLATTEN
// ----------------------------------------------------------------------------------------
// превращает массив с подмассивами в один массив, без вложенностей
var fltArr = _.flatten( [ 11, 12, 13, [ 21, 22, 23, [ 31, 32, 33, [ 41, 42, 43, [ 51, 52, 53, [ 61 ] ] ] ] ] ] );


// ПРИМЕР МЕТОДА .ZIP
// ----------------------------------------------------------------------------------------
// преобразует три массива в один новый массив, состоящий из подмассивов
var r1 = [ '1-1', '1-2', '1-3' ];
var r2 = [ '2-1', '2-2', '2-3' ];
var r3 = [ '3-1', '3-2', '3-3' ];
var r4 = _.zip( r1 , r2 , r3 );

// ПРИМЕР МЕТОДА .OBJECT
// ----------------------------------------------------------------------------------------
// преобразует массивы в объект
var names = [ 'Peter', 'Mary', 'John' ];
var ages = [ 30, 20, 40 ];
var peoples = _.object( names, ages );


// МЕТОДЫ ДЛЯ РАБОТЫ С ФУНКЦИЯМИ
// =======================================================================================

// ПРИМЕР МЕТОДА .BIND
// ----------------------------------------------------------------------------------------
// подвязывает функцию к определенному объекту; вызов функции будет производиться только на этом объекте
var someObj1 = {};
someObj1.name = 'Peter';
var someObj2 = {};
someObj2.name = 'Mary';
var greeting = function (el) {
    console.log( el + ', ' + this.name );
};
var someObj3 = {};
someObj3.name = 'John';

greeting.apply( someObj1, ['Hello'] );
greeting.apply( someObj2, ['Holla'] );

var greetingBind = _.bind( greeting, someObj3 );
greetingBind('Welcome');
greetingBind('Chao');


// ПРИМЕР МЕТОДА .MEMOIZE
// ----------------------------------------------------------------------------------------
//
var calcSum = function (num) {
    var result = 0;
    for ( var i = 0; i < num; i++ ) {
        result += i;
    }
    console.log( result );
};
var memSum = _.memoize(calcSum);

// debounce
// once
// delay
// after
// before


// МЕТОДЫ ДЛЯ РАБОТЫ С ОБЪЕКТАМИ
// =======================================================================================

// _.keys()
// преобразует ключи объекта в массив
var fruits = { apple: 10, melon: 20, potato: 30, tomato: 50 };
var fruitSorts = _.keys( fruits );

// _.values()
// преобразует значения ключей объекта в массив
var fruitsvalues = _.values( fruits );


// _.pairs()
// преобразует пары ключ-значение объекта в массив, состоящий из подмассивов
var fruitsPairs = _.pairs( fruits );

// _.invert()
// инвертирует пару ключ:значение в объекте
var fruitsInvert = _.invert( fruits );

// _.pick()
// вернет новый объект, в котором будут только указанные ключи
var fruitsPicked = _.pick( fruits, [ 'melon', 'tomato' ] );

// _.clone()
// возвращает полную копию оригинального объекта
var man = { weight: 80, age: 30, height: 180, gender: 'male' };
var manDouble = _.clone( man );
man.age = 32;
manDouble.gender = 'female';
console.log( man );
console.log( manDouble );


// УТИЛИТЫ
// =======================================================================================

// _.random()
// возращает случайное число из диапазона min - max ( включительно нижнюю и верхнюю границы )
var rnd = _.random( 0, 255 );

// _.now()
// возвращает текущее время
var currTime = _.now();
console.log( currTime );



// TEMPLATE
// =======================================================================================

var users = [ 'Peter', 'Mary', 'John', 'Josef' ];
var messages = [ 'Hello', 'Holla', 'Welcome', 'Greeting' ];
var block;
var compiled = _.template( "<dl class='info'><dt><%= name %></dt><dd><%= message %></dd></dl>" );

function insertBlock () {
    block = compiled({ name: users[ _.random( 0, users.length-1 ) ], message: messages[ _.random( 0, messages.length-1 ) ] });
    document.querySelector('.canvas').innerHTML += block;
}

document.querySelector('#add').addEventListener('click', insertBlock, false);




















