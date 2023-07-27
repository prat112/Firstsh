let form = document.querySelector("form");
    form.addEventListener("submit", myfunc);

    function myfunc(e) {
      e.preventDefault();
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let number = document.getElementById("number").value;
      let user = {
        name,
        email,
        number
      }
      let ul = document.getElementById("users");
      let li = document.createElement("li");
      let del = document.createElement("button");
      del.onclick = () => {
        deleteUser(e._id);
      }
      del.className = "delBtn";
      let edit = document.createElement("button");
      edit.className = "editBtn";
      del.innerText = "Delete";
      edit.innerText = "Edit";
      li.innerHTML = `Name :- ${user.name}, Email :- ${user.email}, PhNumber-${user.number}`;
      li.append(del, edit);
      ul.append(li);

      axios.post(
        "https://crudcrud.com/api/c6ae30544ac8403d9168a8a36b9f9c9c/UserData", user)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log("error:", error);
          alert("Action Failed");
        })

      name = "";
      email = "";
      number = "";
    }

    function addData(data) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let number = document.getElementById("number").value;
      let ul = document.getElementById("users");
      let li = document.createElement("li");
      let del = document.createElement("button");
      del.onclick=()=>{
      deleteUser(data._id);
    }
      let edit = document.createElement("button");
      del.innerText = "Delete";
      edit.innerText = "Edit";
      li.textContent = `Name :- ${data.name}, Email :- ${data.email}, PhNumber-${data.number}`;
      li.append(del, edit);
      ul.append(li);
    }

    window.addEventListener("DOMContentLoaded", () => {
      axios.get("https://crudcrud.com/api/c6ae30544ac8403d9168a8a36b9f9c9c/UserData")
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            addData(response.data[i]);
          }
        })
        .catch((error) => console.log(error));
    })

    // let del=document.getElementsByClassName("delBtn");
    // del.onclick=(el)=>{
    //   deleteUser(el._id);
    // }
    function deleteUser(obj) {
      console.log(obj);

      let res = axios.delete(`https://crudcrud.com/api/c6ae30544ac8403d9168a8a36b9f9c9c/UserData/${obj}`)
        .then(() => {
          confirm("Are you sure you want to delete appointment?");
          window.location.reload();
        }).catch((error) => {
          console.log("Error", error);
        })
    }
