
let element = document.getElementById("myTitle");

element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
 console.log(fruits);
 console.log(fruits[0]);
 console.log(fruits[1]);
 console.log(fruits[2]);

 fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
 });


 let vegetables = document.getElementsByTagName("li");
 vegetables[1].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "lightgreen";

// using querySelector with a group selects the first element.
// To select all element from a group querySelectorAll is for
let element_ex = document.querySelector("#myTitle");
element_ex.style.backgroundColor = "wheat";

// querySelectorAll still retrieves an array
let element_all = document.querySelectorAll("li");
element_all.forEach(element => {
    element.style.backgroundColor = "tan"
})