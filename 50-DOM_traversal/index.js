
let element = document.body;
let child = element.firstElementChild;
console.log(child);
child.style.backgroundColor = "green";

let element2 = document.querySelector("#vegetables");
let parent = element2.parentElement;
let next_sibling = element2.nextElementSibling;
let prev_sibling = element2.previousElementSibling;
console.log(parent);
console.log(next_sibling);
console.log(prev_sibling);
parent.style.backgroundColor = "lightgreen";
next_sibling.style.backgroundColor = "red";
prev_sibling.style.backgroundColor = "yellow";

let element3 = document.querySelector("#fruit");
let child_ele3_last = element3.lastElementChild;
let child_ele3_1 = element3.children[1];
let childs_ele3 = Array.from(element3.children);
childs_ele3.forEach(child => {
    child.style.fontSize = "2em";
    child.style.fontFamily = "Arial"
});
console.log(child_ele3_last);
console.log(child_ele3_1);
child_ele3_last.style.backgroundColor = "Chocolate";
child_ele3_1.style.backgroundColor = "Bisque";