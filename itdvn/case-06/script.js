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
        this.school = 'CBS school';
    }
    //
    function Worker( name ) {
        this.name = name;
        this.speciality = 'software developer';
    }
    //
    let human = new Human(); // объект, который будет служить ссылкой на объект Human, который будет служит прототипом
    Student.prototype = human;
    Worker.prototype = human;
    //
    let Alex = new Student( 'Alex' );
    let Andrew = new Worker( 'Andrew' );
    //
    console.log('-----------------------------');
    console.log( Alex );
    console.log( Alex.talk() );
    console.log('-----------------------------');
    console.log( Andrew );
    console.log( Andrew.talk() );
    console.log('-----------------------------');
}, false);
