console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const promise11 = new Promise((res, rej) => {
//     console.log('Promise is created');
// })
// console.log('Task 01: promise pending... ', promise11);
//
//
// function getPromise() {
//     const promise12 = new Promise((res, rej) => {
//         console.log('Promise is created');
//     })
//     console.log(promise12);
//     return promise12;
// }
// getPromise().then(data => console.log(data));


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// const promise21 = new Promise((res, rej) => {
//     res('Promise Data');
// })
// console.log('Task 02: promise resolved ', promise21);
//
//
// const promise22 = Promise.resolve('Promise Data');
// console.log('Task 02: promise resolved ', promise22);
//
//
// function getPromise23() {
//     const promise21 = new Promise((res, rej) => {
//         res('Promise Data');
//     })
//     return promise21;
// }
// getPromise23().then(data => console.log(data));


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// const promise31 = new Promise((res, rej) => {
//     rej('Promise Error');
// })
// console.log('Task 03: promise rejected ', promise31);
//
//
// const promise32 = Promise.reject('Promise Error');
// console.log('Task 03: promise rejected ', promise32);


// function getPromise33() {
//     const promise33 = new Promise((res, rej) => {
//         rej('Promise Error');
//     })
//     return promise33;
// }
// getPromise33().then(data => console.log(data)).catch(err => console.log(err));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// console.log('Task 04')
// function getPromise41() {
//     const promise41 = new Promise((res) => {
//         setTimeout(() => {
//             res('Promise Data');
//         }, 3000);
//     })
//     return promise41;
// }
// getPromise41().then(data => console.log(data))


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// const handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: function() {
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError: function() {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     }
// }

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// function getMyName() {
//     const namePromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res('My name is')
//         }, 2000)
//     })
//     return namePromise;
// }
//
// function onSuccess(successParam) {
//     const result = `${successParam} Alexander`;
//     return result;
// }
//
// function print(printParam) {
//     console.log(printParam);
// }
//
// getMyName().then(name => onSuccess(name)).then(result => print(result));


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

/*const namePromise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res({name: 'Anna'})
    }, 2000)
})
const namePromise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res({age: 16})
    }, 3000)
})
const namePromise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res({city: 'unknown'})
    }, 4000)
})

const allPromises = Promise.all([namePromise1, namePromise2, namePromise3])*/

/*allPromises.then(result => {

    console.log(result)
    // let finalRes = [];
    // let resArr;
    // for (let i = 0; i < result.length; i++) {
    //     finalRes.push(Object.keys(result[i]));
    // }
    // resArr = finalRes.join(',');
    // console.log(resArr);
})*/

// const getObject = () => {
//     namePromise1
//         .then(data => console.log(data))
//     namePromise2
//         .then(data => console.log(data))
//     namePromise3
//         .then(data => console.log(data))
//
// }
// getObject();

// const newObj = {
//     {name: 'Anna'},
//     {age: 16},
//     {city: 'unknown'}
// }
// const keys = Object.keys(newObj)
// console.log(keys)