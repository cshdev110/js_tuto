/**
 * method get & set
 * binds a object property to a function
 * Having in mind that if a property starts with underscore _
 * it means the property must be treated as privated, it can be
 * accessed though. Eg. _gas or _power in this case. 
 */

class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }

    set gas(value){
        if (value > 50 || value < 0){
            console.log('Bad value.')
        }
        else {
            this._gas = value;
        }
    }
}

let car = new Car(400);

car.gas = 1;

console.log(car.power)

console.log(car.gas)