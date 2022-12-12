/**
 * rest operator (...)
 * Pack arguments into an array
 */

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b));

function sum(a, b){
    return a + b;
}

console.log(sum(a, b, c, d, e));

function sum(...argus){
    let total = 0;
    argus.forEach((item) => {total += item;});
    return total;
}

console.log(sum(a, b, c, d, e, a, b, c, d, b, d));

function sum(x, ...argus){
    let total = 0;
    argus.forEach((item) => {total += item;});
    return total;
}