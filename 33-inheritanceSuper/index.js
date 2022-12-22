/**
 * inheritance
 * for child classes
 */

/**Recoding
 * Create Animal class
 * Gather all variables and methods which are in common
 */ 

class Animal{

    alive = true;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    
    // alive = true;
    name = "rabbit";

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }


    // eat(){
        // console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
        // console.log(`This ${this.name} is sleeping`);
    // }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    
    // alive = true;
    name = "fish";

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    // eat(){
        // console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
        // console.log(`This ${this.name} is sleeping`);
    // }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    
    // alive = true;
    name = "hawk";

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    // eat(){
        // console.log(`This ${this.name} is eating`);
    // }
    // sleep(){
        // console.log(`This ${this.name} is sleeping`);
    // }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);


console.log(rabbit.alive);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.runSpeed);
hawk.eat();
hawk.sleep();
hawk.fly();