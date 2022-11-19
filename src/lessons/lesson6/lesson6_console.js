console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

class Student {

    students = [
        {firstName: 'One', secondName: 'One', groupNumber: 1, marks: [3, 4, 2, 5, 5, 4, 3]},
        {firstName: 'Two', secondName: 'Two', groupNumber: 1, marks: [2, 2, 3, 3, 2, 3, 3]},
        {firstName: 'Three', secondName: 'Three', groupNumber: 1, marks: [3, 3, 2, 3, 3, 3, 3]},
        {firstName: 'Four', secondName: 'Four', groupNumber: 1, marks: [3, 2, 2, 3, 2, 2, 3]},
        {firstName: 'Five', secondName: 'Five', groupNumber: 1, marks: [5, 4, 5, 5, 5, 5, 4]},
        {firstName: 'Six', secondName: 'Six', groupNumber: 1, marks: [5, 4, 3, 2, 5, 3, 4]},
        {firstName: 'Seven', secondName: 'Seven', groupNumber: 1, marks: [5, 3, 5, 5, 3, 3, 4]},
        {firstName: 'Eight', secondName: 'Eight', groupNumber: 1, marks: [4, 4, 5, 2, 4, 5, 4]},
        {firstName: 'Nine', secondName: 'Nine', groupNumber: 1, marks: [2, 4, 3, 5, 3, 5, 3]},
        {firstName: 'Ten', secondName: 'Ten', groupNumber: 1, marks: [5, 4, 3, 5, 2, 3, 2]},
    ]

    constructor(firstName, secondName, groupNumber, marks) {
        // this.firstName = firstName;
        // this.secondName = secondName;
        // this.groupNumber = groupNumber;
        // this.marks = marks;
    }

    // фильтр по оценкам 4 и 5
    getBestStudents() {
        console.log(this.students.filter(st => st.marks.every(m => m === 4 || m === 5)));
    }

    // создает массив с суммой оценок
    // getStudentsMarkSum() {
    //     console.log( this.students.map(st => st.marks.reduce((acc, el) => acc + el)) );
    // }
    // создает новый массив и в него добавляет свойство "сумма" (если свойство назвать ак оригинал, то перезатрёт его)
    getStudentsMarkSum() {
        const MarkSumList = this.students.map(st => ({...st, marksSum: st.marks.reduce((acc, el) => acc + el) }) );
        console.log(MarkSumList);
    }

    // создает массив со средним баллом
    // getStudentsAverageMark() {
    //     console.log( this.students.map(st => st.marks.reduce((acc, el) => acc + el) / st.marks.length) );
    // }
    // создает новый массив и в него добавляет свойство "средний балл"
    getStudentsAverageMark() {
        const averageMarkList = this.students.map(st => ({...st, markAverage: (st.marks.reduce((acc, el) => acc + el) / st.marks.length).toFixed(2) }) )
        //console.log(averageMarkList);

        const sortedListWithAverageMark = averageMarkList.sort((a,b) => b.markAverage.localeCompare(a.markAverage))
        console.log(sortedListWithAverageMark);
    }
}

console.log('---Task 01---');
const betterStudents = new Student();
betterStudents.getBestStudents();
// betterStudents.getStudentsMarkSum();
betterStudents.getStudentsAverageMark();

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class TaskTwo {
    name = 'task two';
    age = 2;

    constructor(name, age) {
    }
}

console.log('---Task 02---');
const newTaskTwo = new TaskTwo();
console.log(newTaskTwo);

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class Clock {

    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    showTime() {
        console.log(`${this.hour}:${this.minute}:${this.second}`);
    }
    showRealTime() {
        console.log(new Date);
    }
}

console.log('---Task 03---');
const time = new Clock(13,17,10);
time.showTime();
time.showRealTime();

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Buyer {

    clients = [
        {firstName: 'Novak', secondName: 'Djokovic', address: 'Moscow', creditCardNumber: '2131231414145145'},
        {firstName: 'Daniil', secondName: 'Medvedev', address: 'Saint-Petersburg', creditCardNumber: '0956948543783486'},
        {firstName: 'Andrei', secondName: 'Rublev', address: 'Ekaterinburg', creditCardNumber: '0576843109658416'},
        {firstName: 'Rafael', secondName: 'Nadal', address: 'Samara', creditCardNumber: '1179834765109643'},
        {firstName: 'Roger', secondName: 'Fedderer', address: 'Minsk', creditCardNumber: '3069584716558403'}
    ]

    constructor(firstName, secondName, address, creditCardNumber) {
        // this.firstName = firstName;
        // this.secondName = secondName;
        // this.address = address;
        // this.creditCardNumber = creditCardNumber;
    }

    getClientsSortedByFirstName() {
        const sortedListByFirstName = this.clients.sort((a,b) => a.firstName.localeCompare(b.firstName));
        console.log(sortedListByFirstName);
    }
    getClientsSortedByCreditCardNumber() {
        const sortedListByFirstName = this.clients.sort((a,b) => a.creditCardNumber.localeCompare(b.creditCardNumber));
        console.log(sortedListByFirstName);
    }
}

console.log('---Task 04---');
const clientsList = new Buyer();
clientsList.getClientsSortedByFirstName();
clientsList.getClientsSortedByCreditCardNumber();

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {

    numberOfCilinders = 4;

    constructor(model, /*numberOfCilinders,*/ power) {
        this.model = model;
        // this.numberOfCilinders = numberOfCilinders;
        this.power = power;
    }

    showCarProperties() {
        console.log(this);
    }
}

console.log('---Task 05---');
const porsche = new Car('911', 487);
porsche.showCarProperties();

class Truck extends Car {
    constructor(model, /*numberOfCilinders,*/ power, loadCapacity) {
        super(model, /*numberOfCilinders,*/ power);
        this.loadCapacity = loadCapacity;
    }
}

const truck = new Truck('MAN', 430, 1000);
truck.showCarProperties();