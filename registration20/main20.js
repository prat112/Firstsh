let form = document.querySelector("form");
    form.addEventListener("submit", myfunc);

    function myfunc(e) {
      e.preventDefault();
      let name = e.target.name.value;
      let email = e.target.email.value;
      let number = e.target.number.value;
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

      axios.post(
        "https://crudcrud.com/api/e4df651009db485881c2d248bb23feee/UserData", user)
        .then((res) => {
          alert(`Congrats! ${user.name}. Your appointemnt has been booked.`);
          window.location.reload()
        })
        .catch((error) => {
          console.log("error:", error);
          alert("Action Failed");
        })

      ul.append(li);
    }

    function addData(data) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let number = document.getElementById("number").value;
      let ul = document.getElementById("users");
      let li = document.createElement("li");
      let del = document.createElement("button");
      del.onclick = () => {
        deleteUser(data._id);
      }
      del.innerText = "Delete";
      let edit = document.createElement("button");
      edit.onclick = () => {
        editUser(data._id, data.name, data.email, data.number,);
        ul.removeChild(li);
      };
      edit.innerText = "Edit";
      li.textContent = `Name :- ${data.name}, Email :- ${data.email}, PhNumber-${data.number}`;
      li.append(del, edit);
      ul.append(li);
    }

    window.addEventListener("DOMContentLoaded", () => {
      axios.get("https://crudcrud.com/api/e4df651009db485881c2d248bb23feee/UserData")
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            addData(response.data[i]);
          }
        })
        .catch((error) => console.log(error));
    })

    function deleteUser(id) {
      console.log(id);

      let res = axios.delete(`https://crudcrud.com/api/ee4df651009db485881c2d248bb23feee/UserData/${id}`)
        .then(() => {
          confirm("Are you sure you want to delete appointment?");
          window.location.reload();
        }).catch((error) => {
          console.log("Error", error);
        })
    }

    function editUser(id, username, useremail, usernumber, ul, li) {
      document.getElementById("name").value = username;
      document.getElementById("email").value = useremail;
      document.getElementById("number").value = usernumber;

      axios.delete(`https://crudcrud.com/api/e4df651009db485881c2d248bb23feee/UserData/${id}`)
        .then(() => {
          confirm("Do you want to update your details?");
        }).catch((error) => {
          console.log("Error", error);
        })
      document.getElementById("name").value = username;
      document.getElementById("email").value = useremail;
      document.getElementById("number").value = usernumber;
    }
