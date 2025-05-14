function displayProducts(products) {
    let tableContent = "";
    products.forEach((product, index) => {
        tableContent += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>
                    <button onclick="editProduct(${index})">Sửa</button>
                    <button onclick="deleteProduct(${index})">Xóa</button>
                </td>
            </tr>
        `;
    });
    document.getElementById("productTable").innerHTML = tableContent;
}

function addProduct() {
    let name = document.getElementById("name").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (name && !isNaN(price) && !isNaN(quantity)) {
        products.push({ name, price, quantity });
        displayProducts(products);
        clearForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    }
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        products.splice(index, 1);
        displayProducts(products);
    }
}

function editProduct(index) {
    let product = products[index];
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("quantity").value = product.quantity;

    // Đổi nội dung nút thành "Sửa sản phẩm"
    let saveButton = document.getElementById("saveButton");
    saveButton.innerText = "Sửa sản phẩm";

    saveButton.onclick = function () {
        saveProduct(index);
    };
}

function saveProduct(index) {
    let name = document.getElementById("name").value;
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (name && !isNaN(price) && !isNaN(quantity)) {
        products[index] = { name, price, quantity };
        displayProducts(products);
        clearForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    }
}

// Hàm xóa dữ liệu trong form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

    // Đổi nội dung nút trở lại "Thêm sản phẩm"
    let saveButton = document.getElementById("saveButton");
    saveButton.innerText = "Thêm sản phẩm";

    saveButton.onclick = addProduct;
}

// Dữ liệu mẫu
let products = [
    { name: "IPhone 16 Pro Max 128GB", price: 1000, quantity: 10 },
    { name: "IPhone 16 Pro Max 256GB", price: 1200, quantity: 5 },
    { name: "IPhone 16 Pro Max 512GB", price: 1500, quantity: 8 },
];

// Hiển thị danh sách sản phẩm khi tải trang
displayProducts(products);