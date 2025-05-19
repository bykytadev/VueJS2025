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
    document.getElementById("taskInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
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
    inputElement.focus(); // Focus vào input sau khi thêm/sửa
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

    if (tasks.length === 0) {
        tableContent += `
            <tr>
                <td colspan="4" class="empty-list">Chưa có nhiệm vụ nào</td>
            </tr>
        `;
    } else {
        tasks.forEach((task, index) => {
            tableContent += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${task}</td>
                    <td><button class="action-btn edit-btn" onclick="editTask(${index})">Edit</button></td>
                    <td><button class="action-btn delete-btn" onclick="deleteTask(${index})">Delete</button></td>
                </tr>
            `;
        });
    }

    table.innerHTML = tableContent;
}

function editTask(index) {
    const inputElement = document.getElementById("taskInput");
    inputElement.value = tasks[index];
    editingIndex = index;
    document.getElementById("header").innerHTML = "Chỉnh sửa nhiệm vụ";
    document.getElementById("addButton").innerHTML = "Update";
    inputElement.focus(); // Focus vào input để người dùng chỉnh sửa ngay
}

function deleteTask(index) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        tasks.splice(index, 1); // Xóa nhiệm vụ khỏi mảng
        displayTasks(); // Hiển thị danh sách nhiệm vụ cập nhật

        // Nếu đang chỉnh sửa nhiệm vụ bị xóa, reset về trạng thái thêm mới
        if (editingIndex === index) {
            editingIndex = -1;
            document.getElementById("header").innerHTML = "Thêm nhiệm vụ";
            document.getElementById("addButton").innerHTML = "Thêm";
            document.getElementById("taskInput").value = "";
        } else if (editingIndex > index) {
            // Điều chỉnh editingIndex nếu nhiệm vụ bị xóa đứng trước nhiệm vụ đang chỉnh sửa
            editingIndex--;
        }
    }
}