document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  var userDetails1 = {
    name: name,
    email: email
  };

  var serializedUserDetails1 = JSON.stringify(userDetails1);
  localStorage.setItem('userDetails1', serializedUserDetails1);

  var userDetails2 = {
    name: name,
    email: email
  };

  var serializedUserDetails2 = JSON.stringify(userDetails2);
  localStorage.setItem('userDetails2', serializedUserDetails2);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});

// Retrieve and display user details from local storage
var storedUserDetails1 = localStorage.getItem('userDetails1');
if (storedUserDetails1) {
  var userDetails1 = JSON.parse(storedUserDetails1);
  document.getElementById('name').value = userDetails1.name;
  document.getElementById('email').value = userDetails1.email;
}

var storedUserDetails2 = localStorage.getItem('userDetails2');
if (storedUserDetails2) {
  var userDetails2 = JSON.parse(storedUserDetails2);
  document.getElementById('name').value = userDetails2.name;
  document.getElementById('email').value = userDetails2.email;
}
