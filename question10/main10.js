const form = document.getElementById('my-form');


form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const name = nameInput.value;
  const email = emailInput.value;

  
  const userDetails = {
    name: name,
    email: email
  };

  
  if (typeof(Storage) !== 'undefined') {
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    nameInput.value = '';
    emailInput.value = '';

    
    const message = document.querySelector('.msg');
    message.textContent = 'User details stored successfully!';
  } else {

    alert('Local storage is not supported by your browser.');
  }
});