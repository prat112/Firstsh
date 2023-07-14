var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello';

console.log(itemList.lastChild);

var newItem = document.createElement("div"); // Create a new <div> element
newItem.textContent = "New Child Element"; // Set the text content of the new element
itemList.appendChild(newItem);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 45';

console.log(itemList.firstChild);

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);

var newDiv=document.createElement('div');
newDiv.className='HOW';
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDivText);




var headerTitle = document.getElementById("header-title");
headerTitle.insertAdjacentText("beforebegin", "Hello ");


var firstItem = document.querySelector("#items li:first-child");
firstItem.insertAdjacentText("beforebegin", "Hello ");
