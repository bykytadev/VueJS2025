// Dữ liệu mẫu
let products = [
  { name: "iPhone 16 Pro Max 256GB", price: 10000000, quantity: 10 },
  { name: "iPhone 16 Pro Max 512GB", price: 10000000, quantity: 7 },
  { name: "iPhone 15 Pro Max 1TB", price: 10000000, quantity: 5 },
];

// Giỏ hàng
let cart = [];

// Hàm định dạng giá tiền
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' đ';
}

// Hiển thị danh sách sản phẩm
function displayProducts(products) {
  let tableContent = "";
  products.forEach((product, index) => {
    tableContent += `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${formatPrice(product.price)}</td>
        <td>${product.quantity}</td>
        <td><button class="action-btn edit-btn" onclick="editProduct(${index})"><i class="fas fa-edit"></i></button></td>
        <td><button class="action-btn delete-btn" onclick="deleteProduct(${index})"><i class="fas fa-trash-alt"></i></button></td>
        <td><button class="action-btn buy-btn" onclick="addToCart(${index})"><i class="fas fa-cart-plus"></i></button></td>
      </tr>
    `;
  });
  document.getElementById("productTable").innerHTML = tableContent;
}

// Hiển thị giỏ hàng
function displayCart() {
  let tableContent = "";
  cart.forEach((item, index) => {
    const totalPrice = item.price * item.quantity;
    tableContent += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${formatPrice(totalPrice)}</td>
        <td><button class="action-btn increase-btn" onclick="increaseQuantity(${index})"><i class="fas fa-plus-circle"></i></button></td>
        <td><button class="action-btn decrease-btn" onclick="decreaseQuantity(${index})"><i class="fas fa-minus-circle"></i></button></td>
        <td><button class="action-btn delete-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i></button></td>
      </tr>
    `;
  });
  document.getElementById("cartTable").innerHTML = tableContent;
}

// Hàm kiểm tra dữ liệu nhập vào
function validateProductInput(name, price, quantity) {
  if (!name || isNaN(price) || isNaN(quantity)) {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
    return false;
  }
  if (quantity < 0 || !Number.isInteger(Number(quantity))) {
    alert("Quantity phải là số nguyên không âm!");
    return false;
  }
  return true;
}

function addProduct() {
  let name = document.getElementById("name").value.trim();
  let price = parseFloat(document.getElementById("price").value);
  let quantity = document.getElementById("quantity").value;

  if (!validateProductInput(name, price, quantity)) return;

  products.push({ name, price, quantity: Number(quantity) });
  displayProducts(products);
  clearForm();
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
  let name = document.getElementById("name").value.trim();
  let price = parseFloat(document.getElementById("price").value);
  let quantity = document.getElementById("quantity").value;

  if (!validateProductInput(name, price, quantity)) return;

  products[index] = { name, price, quantity: Number(quantity) };
  displayProducts(products);
  clearForm();
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

// Chức năng giỏ hàng
function addToCart(productIndex) {
  const product = products[productIndex];

  // Kiểm tra nếu sản phẩm không còn số lượng
  if (product.quantity <= 0) {
    alert("Sản phẩm đã hết hàng!");
    return;
  }

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const existingItemIndex = cart.findIndex(
    (item) => item.name === product.name
  );

  if (existingItemIndex !== -1) {
    // Sản phẩm đã có trong giỏ hàng, tăng số lượng
    if (product.quantity > 0) {
      cart[existingItemIndex].quantity += 1;
      product.quantity -= 1;
    }
  } else {
    // Thêm sản phẩm mới vào giỏ hàng
    cart.push({
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    product.quantity -= 1;
  }

  displayProducts(products);
  displayCart();
}

function increaseQuantity(cartIndex) {
  const cartItem = cart[cartIndex];

  // Tìm sản phẩm tương ứng trong danh sách sản phẩm
  const productIndex = products.findIndex((p) => p.name === cartItem.name);

  if (productIndex !== -1 && products[productIndex].quantity > 0) {
    cart[cartIndex].quantity += 1;
    products[productIndex].quantity -= 1;

    displayProducts(products);
    displayCart();
  } else {
    alert("Sản phẩm đã hết hàng!");
  }
}

function decreaseQuantity(cartIndex) {
  const cartItem = cart[cartIndex];

  if (cartItem.quantity > 1) {
    // Tìm sản phẩm tương ứng trong danh sách sản phẩm
    const productIndex = products.findIndex((p) => p.name === cartItem.name);

    cart[cartIndex].quantity -= 1;
    products[productIndex].quantity += 1;
  } else {
    removeFromCart(cartIndex);
  }

  displayProducts(products);
  displayCart();
}

function removeFromCart(cartIndex) {
  const cartItem = cart[cartIndex];
  const productIndex = products.findIndex((p) => p.name === cartItem.name);

  // Trả lại số lượng cho sản phẩm
  if (productIndex !== -1) {
    products[productIndex].quantity += cartItem.quantity;
  }

  // Xóa item khỏi giỏ hàng
  cart.splice(cartIndex, 1);

  displayProducts(products);
  displayCart();
}

// Hiển thị danh sách sản phẩm khi tải trang
displayProducts(products);
displayCart();
