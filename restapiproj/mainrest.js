let form = document.getElementById("form");
form.addEventListener("submit", sub);

function sub(e) {
    e.preventDefault();
    let price = e.target.price.value;
    let product = e.target.product.value;
    let category = e.target.dropdown.value;
    let ul = document.getElementById("pro");
    let stock = {
        price,
        product,
        category,
    };
    let li = document.createElement("li");
    li.innerHTML = `${stock.price}-${stock.product}`;
    let del = document.createElement("button");
    del.onclick = () => {
        deleteProduct(e._id);
    };
    del.innerText = "Delete Product";
    del.className = "del";
    li.append(del);

    let categoryList;
    switch (category) {
        case 'Electronics':
            categoryList = document.getElementById('electronics');
            break;
        case 'Food':
            categoryList = document.getElementById('food');
            break;
        case 'Skincare':
            categoryList = document.getElementById('skincare');
            break;
        default:
            return; 
    }
    categoryList.appendChild(li);

    let amount = Number(document.getElementById("amt").textContent);
    document.getElementById("amt").innerHTML = `${amount + Number(stock.price)}`;

    if (price === "" || product === "") {
        alert("Fill all fields.");
        window.location.reload();
    } else {
        axios.post("https://crudcrud.com/api/459693bbfe274939a71177763694df0f/Products", stock)
            .then((res) => {
                console.log(res.data);
                alert(`${stock.product} has been added.`);
                total.innerHTML = `Total Value Worth of Products: Rs${amount + Number(stock.price)}`;
                window.location.reload();
            }).catch((err) => {
                console.log("Error:", err);
                alert("Failed to add product.");
            });
    }
}

function showData(data) {
    let ul;
    switch (data.category) {
        case 'Electronics':
            ul = document.getElementById('electronics');
            break;
        case 'Food':
            ul = document.getElementById('food');
            break;
        case 'Skincare':
            ul = document.getElementById('skincare');
            break;
        default:
            return; 
    }

    let li = document.createElement('li');
    li.innerHTML = `${data.price}-${data.product}`;
    let del = document.createElement('button');
    del.onclick = () => {
        deleteProduct(data._id);
    };
    del.innerText = 'Delete Product';
    del.className = 'del';
    li.append(del);
    ul.appendChild(li);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/459693bbfe274939a71177763694df0f/Products")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showData(response.data[i]);
                console.log(response.data[i]);
            }
        }).catch((err) => {
            console.log("Error:", err);
        });
});

function deleteProduct(id) {
    console.log(id);
    axios.delete(`https://crudcrud.com/api/459693bbfe274939a71177763694df0f/Products/${id}`)
        .then(() => {
            confirm(`Are you sure you want to delete item?`);
            window.location.reload();
        }).catch((err) => console.log(err));
}