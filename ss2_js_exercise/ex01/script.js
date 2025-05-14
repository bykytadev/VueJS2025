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
        resultElement.textContent = "Vui lòng không được để trống";
        return;
    }

    // Tìm từ trong mảng từ điển
    const index = englishWords.indexOf(wordToTranslate.toLowerCase());

    if (index !== -1) {
        // Nếu tìm thấy từ, hiển thị nghĩa tiếng Việt tương ứng
        resultElement.textContent = vietnameseWords[index];
    } else {
        // Nếu không tìm thấy từ, hiển thị thông báo
        resultElement.textContent = "Không tìm thấy";
    }
}

// Gắn event click cho nút
document.getElementById("translateButton").addEventListener("click", translates);