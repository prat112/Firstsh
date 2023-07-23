// maintrack.js

// Function to add a product to the localStorage and display it on the page
function addProduct(event) {
    event.preventDefault();
    const item = event.target.Item.value;
    const amount = parseInt(event.target.amount.value);

    const Prod = {
        item,
        amount,
    };

    let product_serialized = JSON.stringify(Prod);
    localStorage.setItem(Prod.item, product_serialized);

    dispProduct(Prod);
    updateTotalAmount();
}

// Function to calculate the total amount from the localStorage
function calculateTotalAmount() {
    let total = 0;
    const products = Object.values(localStorage);
    for (let i = 0; i < products.length; i++) {
        const product = JSON.parse(products[i]);
        total += parseInt(product.amount);
    }
    return total;
}

// Function to update the total amount displayed on the page
function updateTotalAmount() {
    const totalAmountElement = document.getElementById("totalAmount");
    const totalAmount = calculateTotalAmount();
    totalAmountElement.textContent = totalAmount;
}

// Function to display a product on the page
function dispProduct(Prod) {
    const parent = document.getElementById('itemList');
    const child = document.createElement('li');
    child.textContent = Prod.item + ' pricing  ' + Prod.amount + '/- Rs  ';

    const dltbtn = document.createElement('input');
    dltbtn.type = 'button';
    dltbtn.value = 'delete';
    dltbtn.onclick = () => {
        localStorage.removeItem(Prod.item);
        parent.removeChild(child);
        updateTotalAmount();
    };

    const editbtn = document.createElement('input');
    editbtn.type = 'button';
    editbtn.value = 'edit';

    editbtn.onclick = () => {
        document.getElementById('Item').value = Prod.item;
        document.getElementById('amount').value = Prod.amount;
        localStorage.removeItem(Prod.item);
        parent.removeChild(child);
        document.getElementById('AddProd').value = 'Update';
        updateTotalAmount();
    };

    child.appendChild(editbtn);
    child.appendChild(dltbtn);
    parent.appendChild(child);
    resetForm();
}

// Function to display all products stored in localStorage on page load
function showAllProducts() {
    const parent = document.getElementById('itemList');
    parent.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const Prod = JSON.parse(localStorage.getItem(key));
        if (Prod !== null) {
            dispProduct(Prod);
        }
    }
    updateTotalAmount();
}

// Event listener to show all products on page load
window.addEventListener('DOMContentLoaded', () => {
    showAllProducts();
});

// Function to reset the form after adding/editing a product
function resetForm() {
    document.getElementById('Item').value = "";
    document.getElementById('amount').value = "";
}

// Event listener to add a product on form submission
document.getElementById('productForm').addEventListener('submit', addProduct);
