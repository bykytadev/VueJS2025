// Khởi tạo mảng từ điển
const englishWords = ["apple", "banana", "cat", "dog"];
const vietnameseWords = ["táo", "chuối", "mèo", "chó"];

function translates() {
    const wordInput = document.getElementById("wordInput");
    const resultElement = document.getElementById("result");
    // Lấy giá trị từ ô input
    // Sử dụng trim() để loại bỏ khoảng trắng ở đầu và cuối chuỗi
    const wordToTranslate = wordInput.value.trim();

    // Kiểm tra ô input không được trống
    if (!wordToTranslate) {
        resultElement.innerHTML = "<span style='color: #e74c3c;'>Vui lòng không được để trống</span>";
        return;
    }

    // Tìm từ trong mảng từ điển
    const index = englishWords.indexOf(wordToTranslate.toLowerCase());

    if (index !== -1) {
        // Nếu tìm thấy từ, hiển thị nghĩa tiếng Việt tương ứng
        resultElement.innerHTML = `<span style='color: #4a6fa5;'>${wordToTranslate}</span>: <strong>${vietnameseWords[index]}</strong>`;
    } else {
        // Nếu không tìm thấy từ, hiển thị thông báo
        resultElement.innerHTML = `<span style='color: #e74c3c;'>Không tìm thấy từ "${wordToTranslate}"</span>`;
    }

    // Focus lại vào input để tiếp tục nhập từ mới
    wordInput.focus();
}

// Gắn event click cho nút
document.getElementById("translateButton").addEventListener("click", translates);

// Thêm event Enter key để tra từ
document.getElementById("wordInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        translates();
    }
});