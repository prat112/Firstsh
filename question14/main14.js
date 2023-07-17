var bookedUsers = JSON.parse(localStorage.getItem("bookedUsers")) || [];

function displayBookedUsers() {
  var userList = document.getElementById("userList");
  userList.innerHTML = bookedUsers.map(function(user) {
    return "<li>" + user.username + " - " + user.email + " <button onclick='editUser(\"" + user.username + "\")'>Edit</button></li>";
  }).join("");
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

function editUser(username) {
  var newEmail = prompt("Enter the corrected email address:");

  if (newEmail) {
    var user = bookedUsers.find(function(user) {
      return user.username === username;
    });

    if (user) {
      user.email = newEmail;
      localStorage.setItem("bookedUsers", JSON.stringify(bookedUsers));
      displayBookedUsers();
    }
  }
}

displayBookedUsers();

var form = document.getElementById("bookingForm");
form.addEventListener("submit", addUser);
