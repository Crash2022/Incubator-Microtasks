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
    constructor(firstName, secondName, groupNumber, marks) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.groupNumber = groupNumber;
        this.marks = marks;
    }
    getBestStudents() {
        console.log(this.filter(m => m === 4 || m === 5));
    }
}

const students = [
    {firstName: Ivanov, secondName: Ivan, groupNumber: 1, marks: [3, 4, 2, 5, 5, 4, 3]},
    {firstName: Petrov, secondName: Dima, groupNumber: 1, marks: [3, 4, 2, 5, 5, 4, 3]},
    {firstName: Sidorov, secondName: Vasya, groupNumber: 1, marks: [3, 5, 5, 5, 5, 4, 3]},
    {firstName: Fedorov, secondName: Andrei, groupNumber: 2, marks: [3, 2, 2, 2, 5, 4, 3]},
    {firstName: Djokovic, secondName: Novak, groupNumber: 2, marks: [3, 3, 2, 3, 3, 4, 3]},
    {firstName: Fedderer, secondName: Roger, groupNumber: 2, marks: [3, 4, 1, 5, 2, 5, 3]},
    {firstName: Nadal, secondName: Rafael, groupNumber: 3, marks: [2, 4, 2, 2, 2, 4, 5]},
    {firstName: Rublev, secondName: Andrei, groupNumber: 3, marks: [3, 3, 3, 3, 4, 4, 3]},
    {firstName: Medvedev, secondName: Daniil, groupNumber: 3, marks: [4, 4, 4, 5, 5, 4, 4]},
    {firstName: Khachanov, secondName: Karen, groupNumber: 3, marks: [5, 4, 5, 5, 5, 5, 5]},
]


const betterStudents = new Student(students);
betterStudents.getBestStudents();

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};