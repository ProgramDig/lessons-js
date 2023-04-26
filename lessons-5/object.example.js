// оголошуємо коснтанти
const MIN_PRICE = 0
const MAX_PRICE = 100000

// оголошуємо масив машин(об'єктів)
const garage = [
    {name: "Mazda RX 7", price: 4500, year: 2002, color: "red"},
    {name: "VAZ 101", price: 5000, year: 2010, color: "blue"},
    {name: "Volvo", price: 4700, year: 2012, color: "red"},
    {name: "WV Golf 4", price: 6500, year: 2022, color: "yellow"},
    {name: "Mazda R 3", price: 2500, year: 1999, color: "white"},
    {name: "Audi q4", price: 4600, year: 2007, color: "red"},
]

// Отримання масиву в діапазоні певної ціни
function priceRange(cars, minPrice = MIN_PRICE, maxPrice = MAX_PRICE) {
    const newCars = []
    for (let car of cars) {
        if (car.price >= minPrice && car.price <= maxPrice) {
            newCars.push(car)
        }
    }
    return newCars
}

console.log("old", garage)
console.log("new", priceRange(garage, 5000, 6000))

// оголошення об'єкту користувача
const user = {
    "id": 10,
    name: "Алекс",
    age: 30,
    car: {
        color: "red",
        brand: "BMW",
        price: 4000
    },
    "is login": false,
    "phone list": [
        "932402934032",
        "394023940349",
        "429034930494"
    ],
    lastName: "Шевченко",
    email: "alex@gmail.com",
    "key": "sfd",
    "const": "const"
}

delete user.email // виданення поля
user.thirtName = "Олегович" // додавання нового поля до користувача

