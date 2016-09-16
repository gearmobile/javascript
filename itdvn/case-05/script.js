window.addEventListener( 'DOMContentLoaded', function () {
    // инкапсуляция - это сокрытие реализации и данных объекта
    let MyFunc = function () {
        //
        // private method
        let privateMethod = function () {
            console.log( 'I\'m private method' );
        };
        //
        // public method
        this.publicMethod = function () {
            console.log( 'I\'m public method' );
            privateMethod(); // invoke private method
        };
        //
    };
    //
    let one = new MyFunc();
    one.publicMethod();
}, false);

