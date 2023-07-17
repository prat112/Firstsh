function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var t_d = document.getElementById('t&d').value;
  
    let obj = {
      Name: name,
      Mail: email,
      Number: number,
      Time: t_d
    };
  
    // Retrieve existing data from local storage
    let existingData = localStorage.getItem(email);
  
    if (existingData) {
  // If data already exists, parse it from JSON and add the new entry
      let parsedData = JSON.parse(existingData);
      parsedData.push(obj);
      localStorage.setItem(email, JSON.stringify(parsedData));
    } else {
      // If no data exists, create a new array with the entry
      let newData = [obj];
      localStorage.setItem(email, JSON.stringify(newData));
    }
  }