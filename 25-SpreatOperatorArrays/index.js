/* spread operator (...)
    Spread a string or array into their individual caracters
    unpacks the elements.
*/

let numbers = [1, 2, 3, 22, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);

let stringName = "Dan Dev Code";
console.log(stringName);
console.log(...stringName);

/**
 * How it spreads the array in each value it is possible to use such
 * function like Math.max()
 */
console.log(Math.max(...numbers));


let class1 = ["Spongebob", "Pathick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];

class1.push(...class2);

console.log(...class1);