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

/*--------------------------------------------------------*/

export const Lesson5 = () => {

    // Task 01

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

    // Task 02

    /*class Counter02 {
        constructor(public value: number) {
            this.value = value;
        }
            increment() {
                return this.value = this.value + 1;
            }
            decrement() {
                return this.value = this.value - 1;
            }
            reset() {
                return this.value = 0;
            }
            setCurrentCount(value: number) {
                return this.value = value;
            }
            getCurrentCount() {
                return this.value;
            }
    }

    const counter = new Counter02(5);

    console.log('6', counter.increment())
    console.log('7', counter.increment())
    console.log('8', counter.increment())
    console.log('7', counter.decrement())
    console.log('0', counter.reset())
    console.log('3', counter.setCurrentCount(3))
    console.log('getCurrent(3)', counter.getCurrentCount())*/

    /*--------------------------------------------------------*/

    // Task 03

    class Counter03 {
        constructor(public value: number) {
            this.value = value;
            return this;
        }
        increment() {
            this.value = this.value + 1;
            return this;
        }
        decrement() {
            this.value = this.value - 1;
            return this;
        }
        reset() {
            this.value = 0;
            return this;
        }
        setCurrentCount(value: number) {
            this.value = value;
            return this;
        }
        getCurrentCount() {
            return this.value;
        }
    }

    const counter = new Counter03(5);
    console.log(counter.setCurrentCount(10).increment().increment()
        .increment().decrement().getCurrentCount());

    /*--------------------------------------------------------*/

    // Task 04

    /*class MyFirstConstructorFunc {
        constructor(public name: string, public age: number) {
            this.name = name;
            this.age = age;
        }

        greeting() {
            return `My name is ${this.name}, i'm ${this.age} years old`;
        }
        myObject() {
            return {name: this.name, age: this.age};
        }
    }

    const newMan = new MyFirstConstructorFunc('Eugene', 32);
    console.log(newMan.greeting());
    console.log(newMan.myObject());*/

    /*--------------------------------------------------------*/

    // Task 05

    /*let One = {
        name: 'One'
    };
    let Two = {
        name: 'Two',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };

    Two.sayHello.call(One)*/

    /*--------------------------------------------------------*/

    // Task 06

    /*type HelperObjType = {
        name?: string
        age?: number
        changeName: (name: string) => string
        setAge: (age: number) => number
        greeting: () => void
    }

    const user = {
        name: 'Ivan',
        age: 30
    }

    const helperObj: HelperObjType = {
        changeName: function(name: string) {
            this.name = name;
            return this.name;
        },
        setAge: function(age: number) {
            this.age = age;
            return this.age;
        },
        greeting: function() {
            console.log(`My name is ${this.name}, im ${this.age} years old`);
        }
    }

    console.log('startObject ', user);
    helperObj.changeName.call(user, 'Viktor');
    helperObj.setAge.call(user, 35);
    console.log('changedObject ',user);
    helperObj.greeting.call(user);*/

    /*--------------------------------------------------------*/

    return (
        <div style={{textAlign: 'center',
            padding: '10px',
            border: '1px solid black',
            marginBottom: '10px'}}
        >
            Lesson5
        </div>
    );
}