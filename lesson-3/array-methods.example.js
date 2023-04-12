// Методи роботи з масивами
// оголошення пустого масиву
let arr = []

// push(): додає елемент в кінець масиву
arr = [1, 2, 3] // зарписуємо в масив числа
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop(): видаляє останній елемент масиву і повертає його
arr = [1, 2, 3]; // перезаписуємо числа
const lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]

// shift(): видаляє перший елемент масиву і повертає його

const firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3]

// unshift(): додає елемент в початок масиву
arr = [1, 2, 3]; // перезаписуємо числа
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

//slice(): повертає новий масив, який містить підмасив від заданого індексу до заданого індексу (не включно)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const slicedArray = arr.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// splice(): додає або видаляє елементи з масиву та повертає видалені елементи
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const removedElements = arr.splice(1, 2);
console.log(removedElements); // [2, 3]
console.log(arr); // [1, 4, 5]

// concat(): злиття масивів в один
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const concatenatedArray = arr1.concat(arr2, arr3);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

// join(): повертає рядок, який містить всі елементи масиву, розділені заданим роздільником
arr = [1, 2, 3]; // перезаписуємо числа
const joinedString = arr.join(', ');
console.log(joinedString); // "1, 2, 3"

// reverse(): змінює порядок елементів масиву на протилежний
arr = [1, 2, 3]; // перезаписуємо числа
arr.reverse();
console.log(arr); // [3, 2, 1]

// filter(): створює новий масив, який містить елементи, що відповідають заданому умові (функції зворотного виклику)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const filteredArray = arr.filter((element) => {
    return element > 2;
});
console.log(filteredArray); // [3, 4, 5]

// map(): створює новий масив, який містить результати виклику заданої функції для кожного елементу масиву
arr = [1, 2, 3]; // перезаписуємо числа
const mappedArray = arr.map((element) => {
    return element * 2;
});
console.log(mappedArray); // [2, 4, 6]

// reduce(): застосовує задану функцію до всіх елементів масиву і повертає єдине значення
// Функція має два параметри: аккумулятор і поточний елемент масиву
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum); // 15

// forEach(): викликає задану функцію для кожного елементу масиву
arr = [1, 2, 3]; // перезаписуємо числа
arr.forEach((element) => {
    console.log(element);
});
// Виведе в консоль:
// 1
// 2
// 3

// indexOf(): повертає індекс першого елемента масиву, що відповідає заданому значенню, або -1, якщо елемент не знайдено
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const index = arr.indexOf(3);
console.log(index); // 2

// lastIndexOf(): повертає індекс останнього елемента масиву, що відповідає заданому значенню, або -1, якщо елемент не знайдено
arr = [1, 2, 3, 3, 4, 5]; // перезаписуємо числа
const lastIndex = arr.lastIndexOf(3);
console.log(lastIndex); // 3

// find(): повертає перший елемент масиву, що відповідає заданій умові (функції зворотного виклику)
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const foundElement = arr.find((element) => {
    return element > 3;
});
console.log(foundElement); // 4

// findIndex(): повертає індекс першого елемента масиву, що відповідає заданій умові (функції зворотного виклику), або -1, якщо елемент не знайдено
arr = [1, 2, 3, 4, 5]; // перезаписуємо числа
const firstIndex = arr.findIndex((element) => {
    return element > 3;
});
console.log(firstIndex); // 3

// Приклад встроєного метода filter і своєю реалізацією цього метода через for
// Реалізація через for
function filterArray(array, callback) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}
const array1 = [1, 2, 3, 4, 5];

const myFilteredArray1 = filterArray(array1, (element) => {
    return element > 3;
});

console.log(myFilteredArray1); // [4, 5]

// Реалізація через метод filter
const array2 = [1, 2, 3, 4, 5];

const myFilteredArray2 = array2.filter((element) => {
    return element > 3;
});

console.log(myFilteredArray2); // [4, 5]