/**
 * adding/changing HTML elements
 * 
 * Two ways to add text to an element:
 * .innerHMTL (vulnerable to XSS attacks)
 * .textContent (more secure)
 */

const test_ = document.createElement("p");
test_.id = 'test_';
test_.innerHTML = navigator.appName;
document.body.append(test_);

const nameTag = document.createElement("h1");
nameTag.id = 'tag1';
nameTag.innerHTML = "code";
document.body.append(nameTag);

/**innerHMTL */
const nameTag2 = document.createElement("h2");
//Here, it is where the XSS can work
//// nameTag2.innerHTML = window.prompt("Enter your name");
document.body.append(nameTag2);

/**textContext */
const nameTag3 = document.createElement("h3");
//Here, it is where the XSS can work
//// nameTag3.textContent = window.prompt("Enter your hobby");
document.body.append(nameTag3);


/** Cross scripting attack will be able to execute into innerHTML
* Examples of to insert into windows.prompt() using innerHTML
* However, using .textContent, it won't work.
* Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
*/
// <a href='#' onclick='document.getElementById("test_").innerHTML = "code change2"'>click</a>
// <img src='x' onerror='document.getElementById("test_").innerHTML = "code change2"'></img>


const myList = document.querySelector("#fruit");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
listItem1.textContent = "mango";
listItem2.textContent = "strawberry";
listItem3.textContent = "mandarin";
myList.append(listItem1); //at the beginning of the list
myList.prepend(listItem2); //at last of the list
myList.insertBefore(listItem3 ,myList.getElementsByTagName("li")[2]) // Between specific elements
