window.addEventListener( 'DOMContentLoaded', function () {
    //
    function Human( name ) {
        this.name = name;
        this.talk = function () { // этот метод будет общим для всех объектов
            console.log( 'Hello, my name is ' + this.name );
        };
    }
    //
    function Student( name ) {
        this.name = name;
        this.school = 'CBS School';
    }
    //
    function Worker( name ) {
        this.name = name;
        this.speciality = 'Software Developer';
        this.talk = function () { // этот метод перекрывает метод talk объекта Human и выполняет полиморфизм
            console.log( 'Hello, my name is ' + this.name + ' and my speciality is ' + this.speciality );
        };
    }
    //
    let human = new Human();
    Student.prototype = human;
    Worker.prototype = human;
    //
    let John = new Student( 'John' );
    let Drew = new Worker( 'Drew' );
    //
    console.log('---------------------------');
    console.log( John );
    console.log( John.talk() );
    console.log('---------------------------');
    console.log( Drew );
    console.log( Drew.talk() );
    console.log('---------------------------');
}, false);
