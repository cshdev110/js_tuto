/**
 * map(): Creates a new array onece it executes a callback for each
 * element in the array.
 */

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}