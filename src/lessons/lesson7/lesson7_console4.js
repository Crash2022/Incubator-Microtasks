import {Animal} from "./lesson7_console.js";

console.log('Lesson 7-4');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

class Cat extends Animal {
    name = 'Cat';

    constructor() { // сюда можно передать доп. свойства для этого класса
        super(); // ---> this // наследование от базового конструктора
        // this.name = name // значения для данного класса
    }
}

const cat = new Cat();
cat.eat();

// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
// export default () => {};

// bonus
// class Samurai {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         console.log(this.name);
//     }
// }
//
// let shogun = new Samurai('Crash');
// console.log('shogun proto ', shogun.__proto__);