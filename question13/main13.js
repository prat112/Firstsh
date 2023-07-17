var bookedUsers = JSON.parse(localStorage.getItem("bookedUsers")) || [];

function displayBookedUsers() {
  var userList = document.getElementById("userList");
  userList.innerHTML = "";

  bookedUsers.forEach(function(user, index) {
    var listItem = document.createElement("li");
    listItem.textContent = user.username;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      bookedUsers.splice(index, 1);
      localStorage.setItem("bookedUsers", JSON.stringify(bookedUsers));
      displayBookedUsers();
    });

    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
  });
}

function addUser(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;

  var user = { username: username, email: email };
  bookedUsers.push(user);

  localStorage.setItem("bookedUsers", JSON.stringify(bookedUsers));

  displayBookedUsers();

  // Clear form inputs
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
}

displayBookedUsers();

var form = document.getElementById("bookingForm");
form.addEventListener("submit", addUser);
