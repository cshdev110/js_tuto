/**
 * Module
 * File of reusable code, in which,sections of
 * pre-written code can be imported
 * General utility for values and functions
 * Code more reusable and maintanable
 */

/**
 * First of all, add an extra property in the html 'script' tag
 * 'type="module"'
 */

import {PI, getCircumference, getArea} from "./math_util.js";

console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);