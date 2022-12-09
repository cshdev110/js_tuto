// 2D arrays - Grosery shopping list

let fruits =        ["apple", "oranges", "bananas"];
let vegetables =    ["carrots", "onions", "potatos"];
let meats =         ["eggs", "chicken", "fish"];

let grocerylist = [fruits, vegetables, meats];
/* loop will iter three times
for (const list of grocerylist) {
    console.log(list);
}
*/
grocerylist[2][2] = "steak";
for (const list of grocerylist) {
    for (const food of list) {
        console.log(food);
    }
}