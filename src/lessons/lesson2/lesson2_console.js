console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(x) {
    return function(y) {
        return x+y;
    }
}
console.log('Task 01:', sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let i = 1;
    return function() {
        return i++;
    }
}

const counter = makeCounter();
const counter2 = makeCounter();

console.log('Task 02:', counter(), counter(), counter2(), counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и
// это число было стартовым значением счетчика и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounterThirdTask(startValue) {
    this.increment = function () {
        return ++startValue;
    }
    this.decrement = function () {
        return --startValue;
    }
    this.reset = function () {
        return startValue = 0;
    }
    this.setToValue = function () {
        return startValue;
    }
}

const counterIncrease = new makeCounterThirdTask(5);
const counterDecrease = new makeCounterThirdTask(5);
const counterResetValue = new makeCounterThirdTask();
const counterSetToValue = new makeCounterThirdTask(10);

console.log('Task 03-increment:', counterIncrease.increment(), counterIncrease.increment())
console.log('Task 03-decrement:', counterDecrease.decrement(), counterDecrease.decrement())
console.log('Task 03-reset:', counterResetValue.reset())
console.log('Task 03-reset:', counterSetToValue.setToValue())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и чтобы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// метод решения с помощью цикла
function sumTo(num) {
    let sum = 0;
    for (let i=1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log('Task 05-1: ' ,sumTo(4))

// метод решения с помощью рекурсии
function sumToRecurse(number) {
    if (number === 1) {
        return 1
    } else {
        return number + sumToRecurse(number-1)
    }
}
console.log('Task 05-2: ' ,sumToRecurse(4))

// метод решения с помощью формулы
function sumToormula(n) {
    return n * (n + 1) / 2;
}
console.log('Task 05-3: ' ,sumToormula(4))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину