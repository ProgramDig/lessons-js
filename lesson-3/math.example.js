// Приклади роботи з об'єктом Math

// З переліку аргументів (10, 12, 34) обирає найменший і повертає його (саме тому ми можемо присвоїти його змінній)
const minValue = Math.min(10, 12, 34); // 10

// З переліку аршументів (10, 12, 34) обирає найбільший і повертає його (саме тому ми можемо присвоїти його змінній)
const maxValue = Math.max(10, 12, 34); // 34

// Округлення числа до найбільшого цілого
const mathRound1 = Math.round(3.5); // 4
const mathRound2 = Math.round(3.4); // 3

// Округлення числа вниз
const roundDown = Math.floor(3.9); // 3

// Округлення числа вниз
const roundUp = Math.ceil(3.1); // 4

// Повертає PI
const valPi = Math.PI // 3.14...
// Отримання випадкового числа від 0 до 1
const randomNum = Math.random(); // 0.3123123, 0.534534, ...

// Функція (ES6 Lambda function) отримання випадкового числа в діапазоні
const getRandomNumber = (minValue, maxValue) => {
    // Math.random повертає число у вигляді 7.34535354, огорнути у Math.round щоб округлило до 7
    return Math.round(Math.random() * (maxValue - minValue) + minValue); // Поверне число в діапазоні
}

// Варіанти оптимізації
const getRandomNumberOptimal = (minValue, maxValue) => Math.round(Math.random() * (maxValue - minValue) + minValue);

// Функція (Function declaration) повертає найбільше число в масиві
function maxValueInArray(array){
    return Math.max(array) // повертає найбільше значення масиву array
}