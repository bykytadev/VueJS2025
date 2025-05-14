// Mảng lưu danh sách nhiệm vụ
let tasks = [
    "Học Java",
    "Học JavaScript",
    "Học HTML",
    "Học CSS",
    "Học VueJS",
];
let editingIndex = -1; // Biến lưu chỉ số của nhiệm vụ đang được chỉnh sửa (-1 nếu không có)

// Hiển thị tasks ngay khi trang được tải
window.onload = function() {
    displayTasks();
};

function addTask() {
    const inputElement = document.getElementById("taskInput");
    const errorElement = document.getElementById("errorText");
    const input = inputElement.value.trim();

    if (input === "") {
        errorElement.textContent = "Ô input không được để trống";
        return;
    }

    // Xóa thông báo lỗi nếu có
    errorElement.textContent = "";

    if (editingIndex !== -1) {
        // Nếu đang trong chế độ chỉnh sửa
        tasks[editingIndex] = input;
        editingIndex = -1;
        document.getElementById("header").innerHTML = "Thêm nhiệm vụ";
        document.getElementById("addButton").innerHTML = "Thêm";
    } else {
        tasks.push(input); // Thêm nhiệm vụ mới vào mảng
    }

    inputElement.value = "";
    displayTasks();
}

function displayTasks() {
    const table = document.getElementById("taskTable");
    let tableContent = `
        <tr>
            <th>STT</th>
            <th>Nhiệm vụ</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    `;
    tasks.forEach((task, index) => {
        tableContent += `
            <tr>
                <td>${index + 1}</td>
                <td></td> <!-- Sử dụng innerText để hiển thị nhiệm vụ -->
                <td><button onclick="editTask(${index})">Edit</button></td>
                <td><button onclick="deleteTask(${index})">Delete</button></td>
            </tr>
        `;
    });
    table.innerHTML = tableContent;

    // Gán nội dung nhiệm vụ
    tasks.forEach((task, index) => {
        const row = table.rows[index + 1]; // Bỏ qua hàng tiêu đề
        row.cells[1].innerText = task; // Gán nội dung vào cột "Nhiệm vụ"
    });
}

function editTask(index) {
    const inputElement = document.getElementById("taskInput");
    inputElement.value = tasks[index];
    editingIndex = index;
    document.getElementById("header").innerHTML = "Chỉnh sửa nhiệm vụ";
    document.getElementById("addButton").innerHTML = "Update";
}

function deleteTask(index) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        tasks.splice(index, 1); // Xóa nhiệm vụ khỏi mảng
        displayTasks(); // Hiển thị danh sách nhiệm vụ cập nhật
    }
}