// цикли for | while

// масив числел
const numbersArray = [1, 3, 5, 6, 3, 2, 19, 34, 13]

// масив об'єктів (user)
// для прикладу вказав поле pass(пароль) у вікритому вигляді, так робити не можна, паролі тільки в зашифрованому вигляді
const users = [
    {login: "alex01", pass: "we123rf213as"},
    {login: "dmytro01", pass: "w12rf213as"},
    {login: "vania21", pass: "we2ras2ds"},
    {login: "leonid03", pass: "wasd1rf213as"},
    {login: "sania1", pass: "we1r1f213as"},
    {login: "vito1", pass: "w4erf213as"},
    {login: "admin", pass: "w4erf213a43s"},
]

// Стрілочна функація (ES6) яка приймає масив і виводить його елемнети на html сторінку
// В цьому випадку функція не може працювати з полями об'єкта і може виводити просто елемети
const documentPrintFor = (array) => {
    for (let i = 0; i < numbersArray.length; i++) {
        document.write(array[i] + " ")
    }
}

// Аналогіна реалізація через while
const documentPrintWhile = (array) => {
    let index = 0;
    while (index < array.length) {
        document.write(array[index] + " ")
        index++
    }
}

// Аналогіна реалізація через do while
const documentPrintDoWhile = (array) => {
    let index = 0;
    do {
        document.write(array[index] + " ")
        index++
    } while (index < array.length)
}

// Стрілочна функція яка приймає масив і виводить його елементи на html сторінку в зворотньому порядку
const documentReversePrint = (array) => {
    for (let i = array.length; i !== 0; i--) {
        document.write(array[i] + " ")
    }
}

// Фунція (Function Declaration) яка повертає користувачів і вміє працювати з об'єктом user
function getUsers(usersArray) {
    for (let user of usersArray) {
        // Перевірка на адміна
        if (user.login === "admin") {
            continue // за допомогою continue пропускаємо ітерацію
        }
        console.log(user.login, user.pass)
    }
}

// Реалізація з ключовим словом break, функція що шукає адміна
function searchAdminBreak(usersArray) {
    for (let user of usersArray) {
        // Перевірка на адміна
        if (user.login === "admin") {
            console.log(user.login, user.pass)
            break // за допомогою break закінчуємо роботу цикла
        }
    }
}

// Функція яка ложить додаток за допомогою нескінченного цикла
/*
    Краще його не запускати!
*/
function endlessCycle() {
    // зовнішній нескінченний цикл
    for (; ;) {
        // перший внутрішній нескінченний цикл
        while (true) {
            // другий внутрішній нескінченний цикл
            do {
            } while (true)
        }
    }
}

// Приклад реалізації вкладених циклів, реалізація таблиці множеня
function printMatrix() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            output += " " + i * j
            if (i * j < 10) {
                output += " ";
            }
        }
        console.log(output)
        output = '';
    }
}
