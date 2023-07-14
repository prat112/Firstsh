//var secondItem = document.querySelector(".list-group-item:nth-child(2)");
//secondItem.style.backgroundColor = "green";

//var items = document.getElementById("items");
//var thirdItem = items.getElementsByTagName("li")[2];
//thirdItem.style.display = "none";


var secondItem = document.querySelectorAll(".list-group-item:nth-child(2)");
secondItem[0].style.color='green';


var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}