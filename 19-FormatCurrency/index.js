// Format Currency

let myNum = 123456.789;
myNum = myNum.toLocaleString("en-US"); // US English
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("hi-IN"); // Hindi
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("de-DE"); // standard German
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US English
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US English
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); // indi
console.log(myNum);

myNum = 123456.789;
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // German
console.log(myNum);

myNum = 0.9;
myNum = myNum.toLocaleString(undefined, {style: "percent"});
console.log(myNum);

myNum = 100;
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(myNum);