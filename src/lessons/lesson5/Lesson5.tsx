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


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

/*type someObjType = {
    name: string;
    age: number;
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32
}

// function greeting(name: string, age: number) {
//     return `My name is ${name}. I am ${age}`;
// }
// greeting('Alex', 35);

const greeting = function(this: someObjType) {
    return `My name is ${this.name}. I am ${this.age}`;
}
const greetingResult = greeting.bind(someObj);
console.log(greetingResult());*/

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// reset current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

/*type CounterType = {
    value: number
    increment: () => number
    decrement: () => number
    reset: () => number
    setCounter: (value: number) => typeof value
    //getCounter: () => void
}

const Counter = function(this: CounterType) {
    this.increment = function() {
        return this.value + 1;
    }
    this.decrement = function() {
        return this.value - 1;
    }
    this.reset = function() {
        return this.value = 0;
    }
    this.setCounter = function(value: number) {
        return value;
    }
    // this.getCounter = function() {
    //     return value;
    // }
}

const counterIncrement = new Counter(5);
const counterDecrement = new Counter(5);
const counterReset = new Counter();
const counterSet = new Counter();
//const counterGet = new Counter();
console.log(counterIncrement.increment())
console.log(counterDecrement.decrement())
console.log(counterReset.reset())
console.log(counterSet.setCounter(3))
//console.log(counterGet.getCounter())*/


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
// export default () => {};

/*--------------------------------------------------------*/

export const Lesson5 = () => {

    // Task 02

    /*type someObjType = {
        name: string;
        age: number;
    }

    let someObj:someObjType = {
        name: 'Eugene',
        age: 32
    }

    const greeting = function(this: someObjType) {
        return `My name is ${this.name}. I am ${this.age}`;
    }
    const greetingResult = greeting.bind(someObj);
    console.log(greetingResult());*/

    /*--------------------------------------------------------*/

    /*class Counter {
        constructor(public value: number) {
            this.value = value;
        }
            increment() {
                return this.value + 1;
            }
            decrement() {
                return this.value - 1;
            }
            reset() {
                return this.value = 0;
            }
            setCounter(value: number) {
                return value;
            }
            // getCounter = function() {
            //     return value;
            // }
    }

    const counterIncrement = new Counter(5);
    const counterDecrement = new Counter(5);
    const counterReset = new Counter(0);
    const counterSet = new Counter(3);
    //const counterGet = new Counter();
    console.log(counterIncrement.increment())
    console.log(counterDecrement.decrement())
    console.log(counterReset.reset())
    console.log(counterSet.setCounter(3))
    //console.log(counterGet.getCounter())*/

    /*--------------------------------------------------------*/

    // Task 04

    class MyFirstConstructorFunc {
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }

        greeting() {
            return {name: this.name, age: this.age}
        }
    }

    const newMan = new MyFirstConstructorFunc('Eugene', 32);
    console.log(newMan.greeting());

    /*--------------------------------------------------------*/

    return (
        <div style={{textAlign: 'center'}}>Lesson5</div>
    );
}