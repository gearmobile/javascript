window.addEventListener('DOMContentLoaded', function () {

    var list = document.querySelector('.easing');


    // Power0 - Power4 - интенсивность анимации
    // по другому можно сказать - это общая скорость анимации
    // Power0 - анимация отключена
    // Power2 - анимация происходит быстрее, чем Power1
    // Power3 - анимация происходит быстрее, чем Power2
    // Power4 - анимация происходит быстрее, чем Power3; это максимальная скорость анимации

    TweenLite.from( list.children[0], 2, { x: -200, ease: Power0.easeNone } ); // стандартная анимация
    TweenLite.from( list.children[1], 2, { x: 200, delay: 2, ease: Power1.easeIn } ); // анимационный эффект easeIn - анимация начинается с маленькой скоростью и заканивается на быстрой скорости
    TweenLite.from( list.children[2], 2, { x: -300, delay: 4, ease: Power1.easeOut } ); // анимационный эффект easeOut - анимация начинается медленно и заканчивается быстро
    TweenLite.from( list.children[3], 2, { x: 300, delay: 6, ease: Power2.easeOut } );

    // easeIn, easeOut - стандартные easing-функции библиотеки TweenLite
    // имеется дополнительная библиотека EasePack, в которой представлен расширенный набор easing-функций, обладающий более богатым потенциалом
    // чтобы использовать дополнительный набор easing-функций, необходимо подключить библиотеку EasePack
    // https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/easing/EasePack.min.js

    TweenLite.from( list.children[4], 2, { x: -400, delay: 8, ease: Back.easeOut } );
    TweenLite.from( list.children[5], 2, { x: 400, delay: 10, ease: Bounce.easeOut } );
    TweenLite.from( list.children[6], 2, { x: -450, delay: 12, ease: Circ.easeOut } );
    TweenLite.from( list.children[7], 2, { x: 450, delay: 14, ease: Elastic.easeOut } );

    // SlowMo, Stepped, Rough
    // эти три метода самые навороченные и для них возможна дополнительная ручная настройка в специальном редакторе конфигураций GreenSock
    // после установки необходимых параметров нужно просто скопировать полученный результат
    // все значения для параметров конфигурации предустановленные - достаточно только выбрать из выпадающего списка

    // Stepped - имеет только один параметр конфигурации - количество шагов (steps)
    // ShowMo - два параметра - контрольные точки, с помощью которых можно устанавливать крутизну графа движения
    // Rough - наибольшее количество параметров конфигурации, в частности - количество контрольных точек

    TweenLite.from( list.children[8], 2, { x: -550, delay: 16, ease: SlowMo.ease.config( 0.5, 0.4, false ) } );
    TweenLite.from( list.children[9], 2, { x: 550, delay: 18, ease: SteppedEase.config( 6 ) } );
    TweenLite.from( list.children[10], 2, { x: -600, delay: 20,  ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 10, taper: 'none', randomize: true, clamp: true }) } );


}, false);