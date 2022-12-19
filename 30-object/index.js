/**
 * object plus this keyword
 * Properties and methods
 */

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    dirve: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    dirve: function(){
        console.log(`You drive the ${this.model}`);
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.dirve();
car.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.dirve();
car2.brake();

console.log("\nkeyword this");
console.log(this.window.name)