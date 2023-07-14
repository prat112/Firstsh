var items = document.getElementsByClassName("list-group-item");
var newItem = document.createElement("li");
newItem.textContent = "Item 5";
newItem.classList.add("list-group-item");
items[0].parentNode.appendChild(newItem);


var items = document.getElementsByTagName("ul")[0];
var newItem = document.createElement("li");
newItem.textContent = "New Item";
newItem.classList.add("list-group-item");
items.appendChild(newItem);