/**
 * Passing an Object as an argument
 */

class Car{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive ths ${this.model}`)
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[0].color);
// console.log(cars[0].year);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

console.log('\n')
startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive()
    }
}