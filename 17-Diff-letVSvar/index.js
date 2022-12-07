// Different between let and var

// let = variable is limited to block scope {}. It doesn't affect the browser properties.
// var = variable is limited to a function(){}. it can exits outside the block scope {}.
// It can change variables properties so can mess up with the browser properties.

for(var e = 1; e < 4; e++){
    console.log(e);
}
console.log("e outsite:", e);


for(let i = 1; i < 4; i++){
    console.log(i);
}
console.log("i outside:", i);