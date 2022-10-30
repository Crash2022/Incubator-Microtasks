console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01 +++done+++
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

/*let someObj = {
    name: 'Eugene',
    age: 32
}

// обычный метод
// function greeting(name, age) {
//     return `My name is ${name}. I am ${age}`;
// }
// console.log(greeting('Alex', 35));

// другой метод
function greeting() {
    return `My name is ${this.name}. I am ${this.age}`;
}
const greetingResult = greeting.bind(someObj);
console.log(greetingResult());*/

// Task 02 +++done+++
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// reset current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

/*function Counter02(value) {

    this.value = value;

    this.increment = function() {
        return this.value = this.value + 1;
    }
    this.decrement = function() {
        return this.value = this.value - 1;
    }
    this.reset = function() {
        return this.value = 0;
    }
    this.setCurrentCount = function(value) {
        return this.value = value;
    }
    this.getCurrentCount = function() {
        return this.value;
    }
}

const counter = new Counter02(5)

console.log('6', counter.increment())
console.log('7', counter.increment())
console.log('8', counter.increment())
console.log('7', counter.decrement())
console.log('0', counter.reset())
console.log('3', counter.setCurrentCount(3))
console.log('getCurrent(3)', counter.getCurrentCount())*/


// Task 03 +++done+++
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

/*function Counter03(value) {

    this.value = value;

    this.increment = function() {
        this.value = this.value + 1;
        return this;
    }
    this.decrement = function() {
        this.value = this.value - 1;
        return this;
    }
    this.reset = function() {
        this.value = 0;
        return this;
    }
    this.setCurrentCount = function(value) {
        this.value = value;
        return this;
    }
    this.getCurrentCount = function() {
        return this.value;
    }
}

let counter = new Counter03(5)
console.log(counter.setCurrentCount(10).increment().increment()
.increment().decrement().getCurrentCount());*/


// Task 04 +++done+++
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и
// возвращает объект у которого будут эти свойства и метод greeting из Task 01

/*function MyFirstConstructorFunc(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = function() {
        return `My name is ${this.name}, i'm ${this.age} years old`;
    }
    this.myObject = function() {
        return {name: this.name, age: this.age};
    }
}

const newMan = new MyFirstConstructorFunc('Eugene', 32);
console.log(newMan.greeting());
console.log(newMan.myObject());*/


// Task 05 +++done+++
// Есть 2 объекта One и Two. С помощью bind и метода sayHello
// заставьте поздороваться объект One

/*let One = {
    name: 'One'
};
let Two = {
    name: 'Two',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
Two.sayHello.call(One);*/


// Task 06 +++done+++
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

/*const user = {
    name: 'Ivan',
    age: 30
}

const helperObj = {
    changeName: function(name) {
        return this.name = name;
    },
    setAge: function(age) {
        return this.age = age;
    },
    greeting: function() {
        console.log(`My name is ${this.name}, i'm ${this.age} years old`);
    }
}

console.log('startObject ', user);
helperObj.changeName.call(user, 'Viktor'); // работает, но почему-то подчёркивает
helperObj.setAge.call(user, 35); // работает, но почему-то подчёркивает
console.log('changedObject ',user);
helperObj.greeting.call(user);*/

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber, которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которая также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя.

//function sumTwoNumbers(a:number,b:number):number {return a + b};

/*function sumTwoNumbers(a,b) {
    return a+b;
}
//мой метод
//const bindNumber = sumTwoNumbers.bind(null, 3, 20);

//метод из задачи
function bindNumber(fn, n) {
    return fn.bind(null, n)
}
console.log(bindNumber(sumTwoNumbers, 3)(2));*/

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call

// Task Bind 02

const One = {
    name: 'one',
    hi: function() {
        helperObj.greeting.call(Two)
    }
}
const Two = {
    name: 'two',
    age: 20
}

const helperObj = {
    changeName: function(name) {
        return this.name = name;
    },
    setAge: function(age) {
        return this.age = age;
    },
    greeting: function() {
        console.log(`My name is ${this.name}, i'm ${this.age} years old`);
    }
}

function oneHelperObjFunc(obj,fn) {
   return function otherFunc(arg) {
       fn.call(obj, arg)
   }
}
oneHelperObjFunc(One, helperObj.changeName)('Alexia');
oneHelperObjFunc(Two, helperObj.setAge)(35);
console.log(One)
console.log(Two)
One.hi()