/**
 * static keyword
 * belongs to the class
 */

class Car{

    static numCars1 = 0;
    numCars2 = 0;

    constructor(model){
        this.model = model;
        Car.numCars1++;
        this.numCars2++;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BWM");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo");

console.log(car1.numCars2);
console.log(car2.numCars2);
console.log(car3.numCars2);

console.log(Car.numCars1);
Car.startRace(); // No need creation of objects