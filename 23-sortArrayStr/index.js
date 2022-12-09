let fruits = ["banana", "apple", "orange", "mango", "straberry"];
display(fruits)

console.log("---------------")
fruits = fruits.sort();
display(fruits)

console.log("---------------")
fruits = fruits.sort().reverse();
display(fruits)

function display(fruits){
    for(let fruit of fruits){
        console.log(fruit);
    }
}