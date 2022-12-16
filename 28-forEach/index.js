/**
 * forEach
 */


let student = ["spongebob", "patrick", "squidward"];
student.forEach(first_upperletter);
student.forEach(print);

function first_upperletter(element, index, array){
    // element[0] is the first letter in the word
    // substring(1) removes the first letter in the word
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(student[0]);

function print(element){
    console.log(element);
}